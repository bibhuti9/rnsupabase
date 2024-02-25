import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from '@utils/navigation';
import AppStack from './Stack/AppStack';
import {createStackNavigator} from '@react-navigation/stack';
import {useTheme} from '@rneui/themed';
import {fetchAllTodos} from '../config/todoApi';

const Stack = createStackNavigator();

export default function NavigationContainers() {
  const {theme} = useTheme();
  fetchAllTodos();
  const screensOptions = {
    headerShown: false,
    cardStyle: {
      backgroundColor: theme.colors.grey3,
    },
  };
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={screensOptions}>
        <Stack.Screen name="appStack" component={AppStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
