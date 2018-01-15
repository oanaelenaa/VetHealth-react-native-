import React,{Component} from 'react';
import {StyleSheet,View,TextInput,TouchableOpacity,Text,KeyboardAvoidingView,StatusBar} from 'react-native';
import {Actions} from 'react-native-router-flux';
import firebase from "firebase";
import DatePicker from 'react-native-datepicker'

export default class EditPetScreen extends Component{

    constructor(props)
    {
        super(props)
        this.state={
            name:this.props.item.name,
            breed:this.props.item.breed,
            sex:this.props.item.sex,
            dateofbirth:this.props.item.dateofbirth,
            id:this.props.item.id
        }
        this.onSavePressed=this.onSavePressed.bind(this)


    }
    async onSavePressed(){
        firebase.database().ref("/Animals").child(this.state.id).update({
            id: this.state.id,
            name: this.state.name,
            breed: this.state.breed,
            sex: this.state.sex,
            dateofbirth: this.state.dateofbirth }
        );
        alert("Succesfully updated!");
        Actions.petbook();


    }
    render(){
        return (
            <View style={styles.container}>
            <TextInput style={styles.input}  type="text" placeholder="name"  value={this.state.name} onChangeText={(name) => this.setState({name})}/>

            <TextInput style={styles.input}  type="text" placeholder="breed"  value={this.state.breed} onChangeText={(breed) =>  this.setState({breed})}/>
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
        onDateChange={(datetime) =>  this.state.dateofbirth=datetime}
        />
        <TextInput style={styles.input}  type="text" placeholder="sex"  value={this.state.sex} onChangeText={(sex) => this.state.item.sex=sex}/>
        <TouchableOpacity onPress={() => this.onSavePressed()} style={styles.buttonContainer}>
    <Text style={styles.buttonText}>Update</Text>

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
        color:'#57AEA3',
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