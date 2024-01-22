import { StyleSheet, Image, View } from 'react-native'
import React from 'react'

const FlatlistCard = ({imageLink, Button}) => {
  return (
    <View style={styles.container}>
        <Image source={{uri:imageLink}} style={styles.image}/>
        {Button}
    </View>
  )
}

export default FlatlistCard

const styles = StyleSheet.create({
    container:{
        height: 150,
        width: 150,
        marginRight: 5,
        borderRadius: 5,
        backgroundColor:"#ffffff00"
    }, 
    image:{
        height: 100,
        width: 150,
        objectFit:"cover",
        borderRadius: 5,
        marginBottom: 5
    }
})