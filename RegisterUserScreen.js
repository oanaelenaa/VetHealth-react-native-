import React,{Component} from 'react';
import {StyleSheet,View,TextInput,TouchableOpacity,Text,KeyboardAvoidingView,StatusBar} from 'react-native';
import firebase from 'firebase'

export default class RegisterUserScreen extends Component {

    constructor(props) {
        super(props);
        this.state={
            name:"",
            email:"",
            password:"",
            address:"",
            dateOfBirth: '2016-05-05 20:00'
        }
        this.onSubmitPressed=this.onSubmitPressed.bind(this);

    }

    onSubmitPressed() {
        const user = new User(this.state.name, this.state.email, this.state.password, this.state.address);
        console.log(user.name);
        try {
            var usersRef = firebase.database().ref().child('/Users');
            //    var firebaseRef = firebase.database().ref()
            usersRef.push({
                Name: this.state.name,
                Email: this.state.email,
                Password: this.state.password,
                Address: this.state.address
            }).then(result => {
                console.log("ok");
            })
                .catch(error => {
                    console.log(error, "promise");
                })
        }catch(error)
        {
            console.log(error,"firease");
        }


    }





    render(){
        return (
            <View>
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <StatusBar barStyle="light-content"/>
                <TextInput style={styles.input} placeholder="name" keyboardTyppe="email-address" value={this.state.name} onChangeText={(name) => this.setState({name})}/>

                <TextInput style={styles.input} placeholder="email"  value={this.state.email} onChangeText={(email) => this.setState({email})}/>
                <TextInput style={styles.input} placeholder="address"  value={this.state.address} onChangeText={(address) => this.setState({address})}/>
                <TextInput style={styles.input} placeholder="Choose a password" secureTextEntry value={this.state.password} onChangeText={(password) => this.setState({password})}/>
                <TouchableOpacity onPress={() => this.onSubmitPressed()} style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>REGISTER</Text>

                </TouchableOpacity>
            </KeyboardAvoidingView>
            </View>
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