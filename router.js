import React,{Component} from 'react';
import { StyleSheet, Text, View ,AppRegistry,Image} from 'react-native';
import Login from './Login';
import HomeScreen from './HomeScreen';
import {Router,Stack,Scene} from 'react-native-router-flux';
import EditItemScreen from './EditItemScreen'

export default class Routes extends Component{
  render(){
  	return(
  		<Router>
  			<Stack key="root">
  			<Scene key="login" component={Login} title="Login" initial={true} />
  			<Scene key="home" component={HomeScreen} title="Items"/>
  			 <Scene key="editItemScreen" path={"/editItemScreen/:id"} component={EditItemScreen} title="Edit Item"/>
  			</Stack>
  		</Router>
  		);
  }
}


