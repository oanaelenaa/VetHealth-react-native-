import React,{Component} from 'react';
import {StyleSheet,View,TextInput,TouchableOpacity,Text,KeyboardAvoidingView,StatusBar} from 'react-native';
import {Actions} from 'react-native-router-flux';
import firebase from "firebase";

export default class NewsFeedScreen extends Component{
    //var usersRef = firebase.database().ref().child('/Animals');

    constructor(props)
    {
        super(props)
        this.state={
        }
        this.onSavePressed=this.onSavePressed.bind(this)
        this.onNewAnimalPressed=this.onNewAnimalPressed.bind(this)



    }
    async onSavePressed(){
    }
    async onNewAnimalPressed(){

    }
    render(){
        return (
            <View style={styles.container}>
                <TextInput style={styles.input} value={this.state.itemValue} onChangeText={(itemValue) => this.setState({itemValue})}/>

                <TouchableOpacity onPress={() => this.onSavePressed()} style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Save</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.onNewAnimalPressed()} style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Add another pet to PetBook!</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FEFEFE'
    },
    input:{
        height:40,
        marginBottom:20,
        color:'#000000',
        paddingHorizontal:10
    },
    titleContainer:{
        marginTop:50,
        fontWeight:'800',
        color:'#01DF74',
        textAlign:'center'
    },
    buttonContainer:{
        backgroundColor:'#FA5882',
        paddingVertical:15
    },
    buttonText:{
        textAlign:'center',
        color:'#57AEA3'
        //	fontWeight:1200
    }

});