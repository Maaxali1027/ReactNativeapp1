import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import { View, Text } from 'react-native'
import React from 'react'
import HomeScreen from './screens/HomeScreen';
import RecipieScreen from './screens/RecipieScreen';
import RecipieDetail from './screens/RecipieDetailScreen';

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown:false
      }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Recipie" component={RecipieScreen} />
        <Stack.Screen name="RecipieDetail" component={RecipieDetail} />
      </Stack.Navigator>
    </NavigationContainer> 
  )
}