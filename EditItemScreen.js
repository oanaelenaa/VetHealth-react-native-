import React,{Component} from 'react';
import {StyleSheet,View,TextInput,TouchableOpacity,Text,KeyboardAvoidingView,StatusBar} from 'react-native';
import AppNavigator from './App';
import {Actions} from 'react-native-router-flux';

export default class EditItemScreen extends Component{
	
	constructor(props)
	{
		super(props)
		this.state={
			itemValue:this.props.valueToEdit.name,
			itemId:this.props.valueToEdit.id,
			listItems:this.props.itemsList
		}
		this.onSavePressed=this.onSavePressed.bind(this)


	}
	async onSavePressed(){
		var newArray2=this.state.listItems.slice();
    	newArray2[this.state.itemId]={
    		id:this.state.itemId,
    		name:this.state.itemValue
    	};
    	console.log(newArray2);
		Actions.home({newItemsList:newArray2,checkChange:true});

	}
	render(){
		return (
			<View style={styles.container}>
			<TextInput style={styles.input} value={this.state.itemValue} onChangeText={(itemValue) => this.setState({itemValue})}/>
			 
			<TouchableOpacity onPress={() => this.onSavePressed()} style={styles.buttonContainer}>
			 		<Text style={styles.buttonText}>Save</Text>
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