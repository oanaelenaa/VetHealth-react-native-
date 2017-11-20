import React,{Component} from 'react';
import {StyleSheet,View,Image,Text} from 'react-native';
import LoginForm from  './LoginForm';
import AppNavigator from './App';
export default class Login extends Component{
	
	constructor(props)
	{
		super(props)
	}
	render(){
		return (
			<View style={styles.container}>
			<Text style={styles.titleContainer}>Welcome to VetHealth!</Text>
			 	<View style={styles.formContainer}>
			 	<LoginForm></LoginForm>
			 	</View>
			</View>
		);
	}
}
const styles=StyleSheet.create({
	container:{
		flex:1,
		backgroundColor:'#CEF6CE'
	//	align:'center'
	},
	formContainer:{
		marginTop:100
	},
	titleContainer:{
		marginTop:50,
		fontWeight:'800',
		color:'#01DF74',
		textAlign:'center',

	}
});