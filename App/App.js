import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screens/HomeScreen';
import ProductDetailScreen from './Screens/ProductDetailScreen';
import CartScreen from './Screens/CartScreen';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => (
      <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
        <Stack.Screen name='Cart' component={CartScreen}/>
      </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
        <Drawer.Screen name="ProductDetail" component={ProductDetailScreen} options={{ headerShown: false }}/>
        <Drawer.Screen name="Cart" component={CartScreen} options={{ headerShown: false }}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}