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
			<Image style={styles.iconContainer} source={require("./cats-dogs.jpg")}/>
			<Text style={styles.titleContainer}>Welcome to VetHealth!</Text>
			 	<View style={styles.formContainer}>
			 	<LoginForm></LoginForm>
			 	</View>
			 	<Text style={styles.registerContainer}>Register to create an account</Text>
			</View>
		);
	}
}

const styles=StyleSheet.create({
	container:{
		flex:1,
		backgroundColor:'#FEFEFE',
		//justifyContent: 'center',
    	//alignItems: 'center'
	//	align:'center'
	},
	formContainer:{
		marginTop:60
	},
	titleContainer:{
		marginTop:50,
		fontWeight:'900',
		color:'#57AEA3',
		textAlign:'center',
	},
	registerContainer:{
		fontWeight:'200',
		marginTop:20,
		color:'#57AEA3',
		textAlign:'center',
	},
	iconContainer:{
		width: 100, 
		height: 100,
		//flex:1,
		marginTop:50,
		justifyContent:'center',
		marginLeft: 120,
		//justifyContent: 'center'
		//align:'center'
	}
});