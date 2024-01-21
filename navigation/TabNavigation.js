import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Homepage from '../screens/Homepage'
import Userprofile from '../screens/Userprofile'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'


const Tab = createBottomTabNavigator()
const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({route})=>({
        tabBarIcon:({color, focused, size})=>{
          let iconName;
          if(route.name === "Home Screen"){
              iconName = focused ? "home" : "home-outline"
          }else if(route.name === "User Profile"){
            iconName = focused ? "person" : "person-outline"
          }

          return <Ionicons name={iconName} size={size} color={color}/>
        },
        tabBarActiveTintColor:"#0000FF",
        tabBarInactiveTintColor:"#0000FF",
        tabBarStyle:{
          paddingBottom: 10,
          paddingTop: 10,
          height: 70 
        },
      })}
    >
        <Tab.Screen name="Home Screen" component={Homepage}/>
        <Tab.Screen name="User Profile" component={Userprofile}/>
    </Tab.Navigator>
  )
}

export default TabNavigation

const styles = StyleSheet.create({})