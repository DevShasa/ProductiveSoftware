import { StyleSheet, Text, View, Image, ImageBackground, ScrollView, FlatList } from 'react-native'
import {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchHomepageData } from '../redux/HomepageSlice'
import Button from '../components/Button'
import FlatlistCard from '../components/FlatlistCard'

const Homepage = () => {

  const dispatch = useDispatch()
  const {data} = useSelector(state => state.homepageData)
  const user = useSelector(state => state.user)

  const {bannerImage,midBanner, paris, rio} = data
  // console.log("BANNER IMAGE --->", user)

  useEffect(()=>{
    dispatch(fetchHomepageData())
  },[])

  return (
    <ScrollView>
      {/* <Image style={styles.image} src='https://loremflickr.com/640/480/nature?random=1'/>
      <Image style={styles.image} src='https://loremflickr.com/640/480/nature?random=2'/> */}
      <View style={styles.container}>
          <ImageBackground source={{uri: bannerImage}} style={styles.headerBanner} imageStyle={{ borderRadius: 20}}>
              <View style={styles.bannerContainer}>
                <Text style={styles.bannerHeader}>Welcome {user?.userEmail}</Text>
                <Button text="View Services" pressAction={()=>{}} width={140}/>
              </View>
          </ImageBackground>
          <View style={styles.flatlistContainer}>
            <Text style={styles.flatlistHeading}>Paris</Text>
            <FlatList 
              data={paris}
              horizontal
              showsHorizontalScrollIndicator={false}
              key={item => item.id}
              renderItem={({item})=>(
                <FlatlistCard 
                  imageLink={item}
                  Button={<Button text="View" pressAction={()=>{}} width={50} small/>}
                />)} 
            />
          </View>
          <ImageBackground source={{uri: midBanner}} style={styles.headerBanner} imageStyle={{ borderRadius: 20}}>
              <View style={styles.bannerContainer}>
                <Text style={styles.bannerHeader}>Welcome {user?.userEmail}</Text>

              </View>
          </ImageBackground>
          <View style={styles.flatlistContainer}>
            <Text style={styles.flatlistHeading}>Rio</Text>
            <FlatList 
              data={rio}
              horizontal
              showsHorizontalScrollIndicator={false}
              key={item => item.id}
              renderItem={({item})=>(
              <FlatlistCard 
                imageLink={item}
                Button={<Button text="View" pressAction={()=>{}} width={50} small/>}
              />)}
            />
          </View>
      </View>
    </ScrollView>
  )
}

export default Homepage

const styles = StyleSheet.create({
  // image:{
  //   height: 100,
  //   width: 100
  // }
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
    marginBottom: 90
  },
  flatlistContainer:{
    marginVertical: 20
  },
  flatlistHeading:{
    fontWeight:"bold",
    fontSize:15
  }
})