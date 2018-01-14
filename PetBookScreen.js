import React,{Component} from 'react';
import {StyleSheet,View,FlatList,TouchableOpacity,Text,KeyboardAvoidingView,RefreshControl,StatusBar} from 'react-native';
import {Actions} from 'react-native-router-flux';
import firebase from "firebase";
import Animal from './models/Animal';

export default class PetBookScreen extends Component{

        constructor(props)
        {
            super(props)
            this.animals_list = [];
            this.state={
                refreshing: false,
            };
            this.onRefresh = this.onRefresh.bind(this);
            this.onSavePressed=this.onSavePressed.bind(this)
            this.onNewAnimalPressed=this.onNewAnimalPressed.bind(this)
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

        async onSavePressed(){
        }
        async onNewAnimalPressed(){
            Actions.addnewpet();
        }

    componentWillMount() {
        this.onRefresh();
    }
    render(){
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
                                      onLongPress={() => {
                                          firebase.database().ref("/Animals").child(item.id).remove();
                                          alert("The pet"+item.name+" was removed from your Pet Book!");

                                          this.onRefresh();
                                      }}
                                  >
                                      <Text style={{flex: 1, fontSize: 16}}>
                                          {item.name}
                                      </Text>
                                  </TouchableOpacity>
                              )
                          }
                          }
                />


                <TouchableOpacity onPress={() => this.onNewAnimalPressed()} style={styles.buttonAddPet}>
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
    buttonAddPet:{
        backgroundColor:'#01DF74',
        paddingVertical:15
    },
    buttonContainer:{
        backgroundColor:'#FA5882',
        paddingVertical:15
    },
    buttonText:{
        textAlign:'center',
        color:'#57AEA3'
        //	fontWeight:1200
    },
    buttonText:{
        textAlign:'center',
        color:'#FA5882'
        //	fontWeight:1200
    }

});