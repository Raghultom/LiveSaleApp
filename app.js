import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import CartScreen from './src/screens/CartScreen';
import ContactScreen from './src/screens/ContactScreen';
import LoginScreen from './src/screens/LoginScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Cart"
          component={CartScreen}
          options={{
            title: 'Second page cart',
            headerTitleStyle: { textTransform: 'none' },
          }}
        />
         <Stack.Screen
          name="Contact"
          component={ContactScreen}
          options={{
            title: 'Third page Contact',
            headerTitleStyle: { textTransform: 'none' },
          }}
        />
         <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            title: 'Forth page Login',
            headerTitleStyle: { textTransform: 'none' },
          }}
        />
      </Stack.Navigator>

    </NavigationContainer>
  );
};

export default App;
