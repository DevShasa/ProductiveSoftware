import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import TabNavigation from './TabNavigation'
import Login from '../screens/Login'
import { useSelector } from 'react-redux'

const MainStack = createNativeStackNavigator()

const Mainnavigation = () => {

  const {userEmail=""} = useSelector(state => state.user)

  return (
    <NavigationContainer>
      <MainStack.Navigator>

          { userEmail ? (
              <MainStack.Screen 
              name = "Homepage"
              component = {TabNavigation}
              options={{ headerShown:false }}
            /> 
            )
            :(
              <MainStack.Screen 
                name = "Login"
                component = {Login}
                options={{ headerShown:false }}
              />
            )
          }



      </MainStack.Navigator>
    </NavigationContainer>
  )
}

export default Mainnavigation

const styles = StyleSheet.create({})