import { FlatList, StyleSheet, Text, View, Image,  TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import { colors, recipieList } from '../../Constant'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { FontAwesome } from '@expo/vector-icons';
import RecipieDetail from '../../screens/RecipieDetailScreen';
import { useNavigation } from '@react-navigation/native';


const RecipiesCardView = () => {
  const navigation = useNavigation();
  return (
    <View style={{
    
    }}>
      <FlatList 
      
      numColumns={2} 
      columnWrapperStyle={{
        justifyContent:"space-between"
      }}
     
      showsVerticalScrollIndicator={false}

       data={recipieList} renderItem={({item})=><Pressable
       onPress={()=>navigation.navigate("RecipieDetail")}
       style={{
       
        backgroundColor:colors.COLOR_LIGHT,
        shadowColor:"#000",
        shadowOffset:{width:0,height:4},
        shadowOpacity:0.1,
       shadowRadius:7,
       borderRadius:16,
       marginVertical:16,
      //  marginHorizontal:2,
       alignItems:'center',
       paddingHorizontal:3,
       paddingVertical:16,
   
       
      }}>

        <Image style={{
          height:150,
          width:150,
          resizeMode:'contain',

        }} source={item.image} 
    />
        <Text>{item.name}</Text>
        <View style={{
          flexDirection:'row',
          marginTop:8
}}><Text style={{marginRight:4}}>{item.time}|</Text>
        <Text>{item.rating}</Text>
        <FontAwesome style={{marginLeft:4}} name='star' size={16} color={colors.COLOR_PRIMARY} /></View>
        




      </Pressable>}> </FlatList>
      
    </View>
  )
}

export default RecipiesCardView

const styles = StyleSheet.create({})

