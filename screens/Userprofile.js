import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { useSelector } from 'react-redux'

const Userprofile = () => {
  const user = useSelector(state => state.user)

  return (
    <View style={styles.container}>
            <ImageBackground source={{uri: "https://loremflickr.com/640/480/abstract"}} style={styles.headerBanner} imageStyle={{ borderRadius: 20}}>
              <View style={styles.bannerContainer}>
                <Ionicons name={"person-circle-sharp"} size={50} color={"white"}/>
                <Text style={styles.bannerHeader}>Profile for {user?.userEmail}</Text>
                <Text style={styles.bannerHeader}>Lorem ipsum</Text>
              </View>
          </ImageBackground>
    </View>
  )
}

export default Userprofile

const styles = StyleSheet.create({
  container:{
    padding: 20,
  },
  headerBanner:{
    width: "100%",
    height: 200,
    borderRadius: 20,
  },
  bannerContainer:{
    height: "100%",
    backgroundColor:"#ffffff50",
    padding: 20
  },
  bannerHeader:{
    fontWeight:"bold",
    fontSize: 25,
    color:"white",
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 20,
  },
})