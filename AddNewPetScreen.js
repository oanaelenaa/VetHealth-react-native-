import React,{Component} from 'react';
import {StyleSheet,View,TextInput,TouchableOpacity,Text,KeyboardAvoidingView,StatusBar} from 'react-native';
import {Actions} from 'react-native-router-flux';
import firebase from "firebase";
import DatePicker from 'react-native-datepicker'


import Animal from './models/Animal';

export default class AddNewPetScreen extends Component{
    //usersRef = firebase.database().ref().child('/Animals');

    constructor(props)
    {
        super(props)
        this.animals_list = [];
        this.state={
            name:"",
            breed:"",
            sex:"",
            dateofbirth:"",
            refreshing: false,
        };
        this.onSubmitPressed=this.onSubmitPressed.bind(this)
    }


    async onSubmitPressed(){
            let id = firebase.database().ref().child('/Animals').push().key;
            firebase.database().ref('/Animals').child(id).update({
                id: id,
                name: this.state.name,
                breed: this.state.breed,
                sex: this.state.sex,
                dateofbirth: this.state.dateofbirth
            });
        alert(this.state.name+" was added to your PetBook!");
        Actions.petbook();

    }


    componentWillMount() {
      //  this.onRefresh();
    }

    render(){
        return (
            <View style={styles.container}>
                <TextInput style={styles.input} placeholder="name"  value={this.state.name} onChangeText={(name) => this.setState({name})}/>

                <TextInput style={styles.input} placeholder="breed"  value={this.state.breed} onChangeText={(breed) => this.setState({breed})}/>
                <Text style={styles.instructions}>date of birth: {this.state.dateofbirth}</Text>
                <DatePicker
                    style={{width: 200}}
                    date={this.state.dateofbirth}
                    mode="datetime"
                    format="YYYY-MM-DD"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                        dateIcon: {
                            position: 'absolute',
                            left: 0,
                            top: 4,
                            marginLeft: 0
                        },
                        dateInput: {
                            marginLeft: 36
                        }
                    }}
                    minuteInterval={10}
                    onDateChange={(datetime) => {this.setState({dateofbirth: datetime});}}
                />
                <TextInput style={styles.input} placeholder="sex" secureTextEntry value={this.state.sex} onChangeText={(sex) => this.setState({sex})}/>
                <TouchableOpacity onPress={() => this.onSubmitPressed()} style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Add pet</Text>

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