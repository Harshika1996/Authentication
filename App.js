import 'react-native-gesture-handler';
import React from 'react';
import { Text, View,useColorScheme } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import { ContextProvider } from './Context/ContextProvider';

//Screens

import Signin from './src/Screen/Signin';
import Signout from './src/Screen/Signout';

const Stack = createStackNavigator();



const App= () => {
 
  
  return (
   <ContextProvider>
    <NavigationContainer >
       
      <Stack.Navigator 
      initialRouteName="Signin"
      screenOptions={{
       headerShown: false,
       headerShadowVisible:false
      }}>
       
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="Signout" component={Signout} />
     
      
    </Stack.Navigator>
    
  
    </NavigationContainer>
    </ContextProvider>
  );
};


export default App;
