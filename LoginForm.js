import React,{Component} from 'react';
import {StyleSheet,View,TextInput,TouchableOpacity,Text,KeyboardAvoidingView,StatusBar} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class LoginForm extends Component{

	constructor(props){
		super(props)
		this.state={
			email:"",
			password:"",
			error:""
		}
		this.onLoginPressed=this.onLoginPressed.bind(this)
	}

	async onLoginPressed(){
		 try{
		 	let email=this.state.email;
		 	let password=this.state.password;
		 	if(email=='test@email.com' && password=='1234')
		 	{
		 		Actions.home("currentEmail",email);
		 	}
		 }catch(error)
		 {
		 	this.setState({error:error});
		 }
	}

	render(){
		//const { navigate } = this.props.navigation;
		return (   
			<KeyboardAvoidingView behavior="padding" style={styles.container}>
			 	<StatusBar barStyle="light-content"/>
			 	<TextInput style={styles.input} placeholder="username" keyboardTyppe="email-address" value={this.state.email} onChangeText={(email) => this.setState({email})}/>

			 	<TextInput style={styles.input} placeholder="password" secureTextEntry value={this.state.password} onChangeText={(password) => this.setState({password})}/>

			 	<TouchableOpacity onPress={() => this.onLoginPressed()} style={styles.buttonContainer}>
			 		<Text style={styles.buttonText}>LOGIN</Text>

			 	</TouchableOpacity>
			 </KeyboardAvoidingView>
		);
	}
}
const styles=StyleSheet.create({
	container:{
		padding:20
	},
	input:{
		height:40,
		marginBottom:20,
		color:'#000000',
		paddingHorizontal:10
	},
	buttonContainer:{
		backgroundColor:'#FA5882',
		paddingVertical:15
	},
	buttonText:{
		textAlign:'center',
		color:'#01DF74'
	//	fontWeight:1200 
	}
});