import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Button = (props) => {
    const {text, pressAction, width, small} = props 
  return (
    <TouchableOpacity onPress={pressAction} style={[small ? styles.buttonContainerSmall :styles.buttonContainer, {width}]} >
      <Text style={small ? styles.buttonTextSmall : styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    buttonContainer:{
        paddingHorizontal: 20,
        paddingVertical: 12,
        backgroundColor:"#1340d4ff",
        borderRadius: 5,
    },
    buttonContainerSmall:{
        paddingHorizontal: 10,
        paddingVertical: 7,
        backgroundColor:"#1340d4ff",
        borderRadius: 5,
    },
    buttonText:{
        fontWeight:"bold",
        fontSize:15,
        color:"white"
    },
    buttonTextSmall:{
        fontWeight:"bold",
        fontSize:12,
        color:"white"
    }
})