import { StyleSheet, Text, View, Image, SafeAreaView, Pressable, ScrollView } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

const RecipieDetail = () => {
  const navigation = useNavigation(); const route = useRoute();

  const defaultItem = { name: "Spaghetti Bolognese", description: "A classic Italian pasta dish with rich meat sauce.", time: "45 mins", difficulty: "Medium", rating: "4.5/5", ingredients: ["Spaghetti", "Minced Meat", "Tomato Sauce", "Onions", "Garlic", "Olive Oil"] };

  const item = route.params?.item || defaultItem;

  return (
    <View style={{backgroundColor:"#6f4e37",flex:1}}>
       
      <SafeAreaView style={{flexDirection:'row', marginTop:20 , padding:20}}>
        <Pressable style={{flex:1 }} onPress={() => navigation.goBack()}>
          <FontAwesome name={"arrow-circle-left"} size={28} color="white"/>
        </Pressable><FontAwesome name={"heart-o"} size={28} color="white" />
      </SafeAreaView>

      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{
          backgroundColor:"#fff", 
          flex:1, 
          marginTop:140,
          borderTopLeftRadius:56,
          borderTopRightRadius:56,
          alignItems:'center',
          paddingHorizontal:16,
          paddingTop: 60,
        }}>
          <View style={{height:300, width:300, position:'absolute', top:-120, }}>
            <Image 
              style={{ width:"100%", height:"100%", resizeMode:'contain' }} 
              source={require('../assets/images/food1-removebg-preview (1).png')}
            />
          </View>

          <Text style={styles.title}>{item.name}</Text>

          <Text style={styles.description}>{item.description}</Text>

          <View style={styles.infoContainer}>
            <FontAwesome name="clock-o" size={24} color="orange" />
            <Text style={styles.infoText}>{item.time}</Text>
          </View>

          <View style={styles.infoContainer}>
            <FontAwesome name="thermometer-half" size={24} color="blue" />
            <Text style={styles.infoText}>{item.difficulty}</Text>
          </View>

          <View style={styles.infoContainer}>
            <FontAwesome name="star-o" size={24} color="pink" />
            <Text style={styles.infoText}>{item.rating}</Text>
          </View>

          <View style={styles.ingredientsContainer}>
            <Text style={styles.ingredientsTitle}>Ingredients</Text>
            {item.ingredients.map((ingredient, index) => (
              <View key={index} style={styles.ingredientItem}>
                <View style={styles.bulletPoint}></View>
                <Text style={styles.ingredientText}>{ingredient}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default RecipieDetail

const styles = StyleSheet.create({
  title: {
    marginTop: 160,
    fontSize: 24, 
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16, 
    marginVertical: 16,
    textAlign: 'center', 
    paddingHorizontal: 10, 
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  infoText: {
    fontSize: 18, 
    marginLeft: 10,
    fontWeight: '400',
  },
  ingredientsContainer: {
    alignSelf: 'flex-start',
    marginVertical: 22,
    paddingHorizontal: 16, 
  },
  ingredientsTitle: {
    fontSize: 20, 
    fontWeight: '600',
    marginBottom: 10,
  },
  ingredientItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  bulletPoint: {
    backgroundColor: "red",
    height: 10,
    width: 10,
    borderRadius: 5,
    marginRight: 8,
  },
  ingredientText: {
    fontSize: 16, 
  },
});
