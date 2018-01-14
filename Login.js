import React,{Component} from 'react';
import {StyleSheet,View,Image,Text,TouchableOpacity,AppRegistry,TouchableHighlight} from 'react-native';
import LoginForm from  './LoginForm';
import {Actions} from 'react-native-router-flux';
import firebase from "firebase";

export default class Login extends Component{
    constructor(props)
    {
        super(props)
    }
    onRegisterPress(){
        Actions.registerUserScreen();
    }

    render(){
        return (
            <View style={styles.container}>
                <Image style={styles.iconContainer} source={require("./cats-dogs.jpg")}/>
                <Text style={styles.titleContainer}>Welcome to VetHealth!</Text>
                <View style={styles.formContainer}>
                    <LoginForm></LoginForm>
                </View>
                <TouchableHighlight>
                    <Text style={styles.registerContainer}>Log in with Facebook</Text>
                </TouchableHighlight>
                <TouchableOpacity
                    onPress={() => this.onRegisterPress()}>
                    <Text style={styles.registerContainer}>Create an account</Text>
            </TouchableOpacity>
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

AppRegistry.registerComponent('login',()=>Login);