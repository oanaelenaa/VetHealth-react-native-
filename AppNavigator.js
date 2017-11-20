import Login from './Login'
import HomeScreen from './HomeScreen'
import React, {Component} from 'react';
import { View, BackAndroid, StatusBar,} from 'react-native';
import App from './App';
  NavigationActions,
  addNavigationHelpers,
  StackNavigator,
} from 'react-navigation';

const LoginScreen = ()=>(
	<Login></Login>
);
const HomeScreen= ()=>(
	<HomeScreen></HomeScreen>
);

const AppNavigator=StackNavigator({
Login:{
	screen:LoginScreen,
},
Home:{
	screen:HomeScreen,
},
});
export default AppNavigator;