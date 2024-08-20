import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../assets/components/Header'
import SearchFilter from '../assets/components/SearchFilter'
import CategoriesFilter from '../assets/components/Categoriestabs'
import RecipiesCardView from "../assets/components/RecipiesCardView"
import { useNavigation } from '@react-navigation/native'
const RecipieScreen = () => {
  return (
    <SafeAreaView style={{
      flex:1,
      marginHorizontal:16
    }}>
      <Header headerText={"Hii, Maaz"} headerIcon={"bell-o"}/>
      <SearchFilter icon="search" placeholder={"enter your fav recipie"}/>
   
    <View style={{marginTop:15}}>
      <Text style={{
        fontSize:22,
        fontWeight:"bold"
      }}>Categories</Text>
       <CategoriesFilter/>
      
      </View>   
   
      <View style={{marginTop:15 , flex:1}}>
      <Text style={{
        fontSize:22,
        fontWeight:"bold"
      }}>Popular Recipies</Text>
     <RecipiesCardView/>
       
      
      </View> 
   
   
   
   
   
    </SafeAreaView>
 )
}

export default RecipieScreen

const styles = StyleSheet.create({})