import React,{PropTypes,Component} from 'react';
import {View,TouchableOpacity, TouchableHighlight,Text, ListView, StyleSheet,RefreshControl} from 'react-native';
import {Actions} from 'react-native-router-flux';
import email from 'react-native-email'
import firebase from 'firebase';

export default class HomeScreenDoctor extends Component{
    constructor(props) {
        super(props);
        this.onSendMailPressed=this.onSendMailPressed.bind(this);
       // this.sendMailTo=this.props.currentEmail;
    }


    onSendMailPressed(){
        //var to="oana@example.com";
        email(this.sendMailTo, {
            // Optional additional arguments
            cc: ['bazzy@moo.com', 'doooo@daaa.com'], // string or array of email addresses
            bcc: 'mee@mee.com', // string or array of email addresses
            subject: 'Show how to use',
            body: 'Some body right here'
        }).catch(console.error)
    }


    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={() =>Actions.adddiagnosis()}
                    style={styles.buttonSendMail}>
                    <Text style={styles.sendMailText}>
                        Add diagnosis
                    </Text>
                </TouchableOpacity>
               
                <TouchableOpacity
                    onPress={() => {
                        firebase.auth().signOut().then(function () {
                            Actions.login();
                        }).catch(function (error) {
                            alert(error.code);
                            alert(error.message);
                        });
                    }
                    }
                    style={styles.buttonSendMail}>
                    <Text style={styles.sendMailText}>
                        Log Out
                    </Text>
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
    cell:{
        alignItems: 'center',
        paddingTop: 12,
        paddingBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
    },
    buttonContainer:{
        backgroundColor:'#F86FA3',
        paddingVertical:15
    },
    buttonSendMail:{
        alignItems: 'center',
        paddingBottom: 30,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',

    },
    sendMailText:{
        textAlign:'center',
        color:'#F86FA3',
        fontSize: 30

    },
    buttonText:{
        textAlign:'center',
        color:'#57AEA3'
    }
});
