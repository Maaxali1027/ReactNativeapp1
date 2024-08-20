import { View, Text, Image } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View 
    style={{
      flex:1,
      marginTop:100,
      alignItems:'center',
      }}>
      <Image
        style={{
          width: '100%',  // Set the width of the image (in pixels or percentage)
          height: 300,  // Set the height of the image (in pixels or percentage)
        }}
        source={require('../assets/images/food1-removebg-preview (1).png')}
          // Ensures the image covers the container while maintaining aspect ratio
          resizeMode='contain'/>

         <Text style={{
          padding:20,
          fontSize:22,
          fontWeight:'bold',
          color:'#f96163',
}}>40K+ Premium</Text>


         <Text  style={{
          fontSize:42,
          fontWeight:'bold',
          color:'#3c444c',
          marginTop:44,
          marginBottom:40
}}>Cooking Ideas!</Text>

<TouchableOpacity 
onPress={()=>navigation.navigate("Recipie")}
style={{
paddingVertical:15,
backgroundColor:'#f96163',
borderRadius:18,
width:'80%',
alignItems:'center'

}}>
  <Text style={{
    fontSize:18,
    color:'#fff',
    fontWeight:700
  }}>Let's Go</Text>
</TouchableOpacity>

    </View>

  
    
  );
}
