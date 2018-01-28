import React,{Component} from 'react';
import Modal from 'react-native-simple-modal';

import {View,TouchableOpacity, TouchableHighlight,Text, ListView, StyleSheet,RefreshControl,FlatList,TextInput} from 'react-native';
import {Actions} from 'react-native-router-flux';
import email from 'react-native-email'
import firebase from 'firebase';

export default class AddDiagnosis extends Component{
    constructor(props) {
        super(props);
        this.animals_list = [];
        this.state={
            refreshing: false,
            open: false,
            diagnosis:"",
            selectedA_id:""
        };
        this.onRefresh = this.onRefresh.bind(this);
        this.onSendMailPressed=this.onSendMailPressed.bind(this);
        // this.sendMailTo=this.props.currentEmail;
    }
    openModal() {
        this.setState({open:true});
    }
    onRefresh() {
        this.setState({refreshing: true});
        this.animals_list = [];

        firebase.database().ref().child("/Animals").on('value', (childSnapshot) => {
            childSnapshot.forEach((doc) => {
                var pet = {
                    name:doc.toJSON().name,
                    id:doc.toJSON().id,
                    breed:doc.toJSON().breed,
                    sex:doc.toJSON().sex,
                    dateofbirth:doc.toJSON().dateofbirth}
                this.animals_list.push(pet);
            });
        });

       this.setState({refreshing: false});
    }
    componentWillMount() {
        this.onRefresh();
    }
    closeModal() {
        this.setState({open:false});
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


    saveChanges(){
        let id = firebase.database().ref().child('/Diagnosis').push().key;
        firebase.database().ref('/Diagnosis').child(id).update({
            id: id,
            description: this.state.diagnosis,
            A_UID:this.state.selectedA_id

        });
        this.closeModal();

    }
    render() {
        return (
                <View style={styles.container}>
                    <FlatList containerStyle={{marginBottom: 20}}
                              data={this.animals_list}
                              extraData={this.state}
                              refreshControl={<RefreshControl
                                  refreshing={this.state.refreshing}
                                  onRefresh={this.onRefresh}
                              />}
                              keyExtractor={(item, index) => index}
                              renderItem={({item}) => {
                                  return (
                                      <TouchableOpacity
                                          style={{
                                              height: 80,
                                              borderRadius: 4,
                                              borderWidth: 1,
                                              borderColor: '#d6d7da',
                                          }}
                                          onPress={() => {
                                             this.openModal();
                                             this.state.selectedA_id=item.id;
                                          }
                                          }
                                      >
                                          <Text style={{flex: 1, fontSize: 16}}>
                                              {item.name}
                                          </Text>

                                      </TouchableOpacity>

                                  )
                              }
                              }

                    />
                    <Modal
                        offset={this.state.offset}
                        open={this.state.open}
                        modalDidOpen={() => console.log('modal did open')}
                        modalDidClose={() => this.setState({open: false})}
                        style={{alignItems: 'center'}}>
                        <View>
                            <Text style={{fontSize: 20, marginBottom: 10}}>Add a diagnosis</Text>
                            <TextInput style={styles.input} value={this.state.diagnosis} onChangeText={(diagnosis) => this.setState({diagnosis})} placeholder="diagnosis"></TextInput>
                            <TouchableOpacity
                                style={{margin: 5}}
                                onPress={() => this.saveChanges()}>
                                <Text>Save</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{margin: 5}}
                                onPress={() => this.setState({open: false})}>
                                <Text>Close modal</Text>
                            </TouchableOpacity>
                        </View>
                    </Modal>

                <TouchableOpacity onPress={() => this.onSendMailPressed()} style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>send diagnosis mail</Text>
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
