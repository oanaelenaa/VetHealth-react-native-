import React,{Component} from 'react';
import {StyleSheet,View,TextInput,TouchableOpacity,Text,KeyboardAvoidingView,StatusBar} from 'react-native';
import {Actions} from 'react-native-router-flux';
import firebase from "firebase";

export default class LoginForm extends Component{

    constructor(props){
        super(props)
        this.state={
            email:"",
            password:"",
            error:"",loading: false,showErrorMessage:false,
            adminEmail:'alexa@yahoo.com',
            adminPassword:'123pas'

        }
        this.onLoginPressed=this.onLoginPressed.bind(this)
    }
    async onLoginPressed(){
        //var usersRef = firebase.database().ref().child('/Users');
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(function () {
                alert("Welcome " + firebase.auth().currentUser.email + "!");
                if (firebase.auth().currentUser.email === 'alexa@yahoo.com') {
                    Actions.homescreendoctor();
                }else {
                    Actions.home();
                }
            }).catch(function (error) {
            alert(error.code);
            alert(error.message);
        });
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
        backgroundColor:'#F86FA3',
        paddingVertical:15
    },
    buttonText:{
        textAlign:'center',
        color:'#57AEA3',
        fontWeight:"bold"
        //	fontWeight:1200
    }
});