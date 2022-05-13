import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  DetailScreen,
  LandingScreen,
  ListingScreen,
  LoginScreen,
  SignUpScreen,
} from '../screens';
import {screenString} from '../helpers/strings';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          tabBarHideOnKeyboard: true,
          orientation: 'portrait',
        }}
        initialRouteName={screenString.loginScreen}>
        <Stack.Screen name={screenString.landing} component={LandingScreen} />
        <Stack.Screen name={screenString.loginScreen} component={LoginScreen} />
        <Stack.Screen
          name={screenString.signUpScreen}
          component={SignUpScreen}
        />
        <Stack.Screen
          name={screenString.listingScreen}
          component={ListingScreen}
        />
        <Stack.Screen
          name={screenString.detailScreen}
          component={DetailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
