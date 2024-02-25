import {View, SafeAreaView} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useStyles} from '../styles';
import {Route} from '@navigators/options';
import Home from '@screens/Home';
import AddTodo from '@screens/AddTodo';
import FloatingButton from '@component/FloatingButton';
import {getFocusedRouteNameFromRoute, useRoute} from '@react-navigation/native';
import Header from '@component/Header';
import {useTheme} from '@rneui/themed';
const Stack = createStackNavigator();

export default function AppStack() {
  const styles = useStyles();
  const route = useRoute();
  const routeName = getFocusedRouteNameFromRoute(route);

  const {theme} = useTheme();
  const screensOptions = {
    headerShown: false,
    cardStyle: {
      backgroundColor: theme.colors.grey3,
    },
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Header routeName={routeName} />
        <Stack.Navigator screenOptions={screensOptions}>
          <Stack.Screen name={Route.Home} component={Home} />
          <Stack.Screen name={Route.AddTodo} component={AddTodo} />
        </Stack.Navigator>
        <FloatingButton routeName={routeName} />
      </View>
    </SafeAreaView>
  );
}
