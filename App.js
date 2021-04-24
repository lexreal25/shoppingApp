import 'react-native-gesture-handler'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import  ShoppingHome  from './components/ShoppingHome';
import  Cart from './components/Cart'
import Payment from './components/PaymentSuccess'


const Stack = createStackNavigator()



export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={ShoppingHome}
          screenOptions={{headerShown: false}}
        >
          <Stack.Screen name='ShopArea' component={ShoppingHome}/>
          <Stack.Screen name='Cart' component={Cart} />
          <Stack.Screen name='Payment' component={Payment} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}