import { StyleSheet, Text, View, TouchableOpacity, TextInput, Touchable } from 'react-native'
import {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logInUser } from '../redux/AuthenticationSlice'
import useToasts from '../utils/notifications'

const Login = () => {

  const dispatch = useDispatch();
  const user = useSelector(state => state.user)
  const {warningToast, successToast} = useToasts()

  // console.log("THE CURRENT STATE IS::", user)

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function handleSubmit(){
    if(!email || !password){
      warningToast("Inputs are empty")
    }else{
      dispatch(logInUser({email, password}))
    }
  }

  return (
    <View style={styles.container}>
        <Text style={styles.heading}>Login to the app</Text>
          <Text style={styles.textInputLabel}>Email</Text>
          <TextInput 
            style={styles.textInputBox}
            onChangeText={setEmail}
          />
          <Text style={styles.textInputLabel}>Password</Text>
          <TextInput 
            style={styles.textInputBox}
            onChangeText={setPassword}
          />
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Log In</Text>
          </TouchableOpacity>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent:"center",
    alignItems:"center",
    padding: 20
  },
  heading:{
    fontWeight:"bold",
    fontSize: 25,
    marginBottom:10
  },
  textInputLabel:{
    alignSelf:"flex-start",
    marginBottom: 10,
    fontSize: 20
  },
  textInputBox:{
    borderWidth: 3,
    borderColor:"#808080",
    width: "100%",
    padding: 4,
    borderRadius: 5,
    marginBottom: 20
  },
  button:{
    backgroundColor: "#3e68f1",
    paddingVertical: 10,
    width: "100%",
    alignItems:"center",
    borderRadius: 5,

  },
  buttonText:{
    color:"white",
    fontSize: 20,
  }
})