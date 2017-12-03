import React,{PropTypes,Component} from 'react';
import {View,TouchableOpacity, TouchableHighlight,Text, ListView, StyleSheet,RefreshControl} from 'react-native';
import {Actions} from 'react-native-router-flux';
import email from 'react-native-email'

export var rows=[{id:0,name:'row 1'}, {id:1,name:'row 2'},{id:2,name:'row 3'},{id:3,name:'row 4'},{id:4,name:'row 5'}]
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

export default class HomeScreen extends Component{
	constructor(props) {
    super(props);
    this.onLogOutPressed=this.onLogOutPressed.bind(this)
    this.onSendMailPressed=this.onSendMailPressed.bind(this)
    if(this.props.checkChange)
    {
      this.state={
      itemValueChanges:false,
      dataSource:ds.cloneWithRows(this.props.newItemsList)
    };
  }else{
    this.state={
      itemValueChanges:false,
      dataSource:ds.cloneWithRows(rows),
    };
  }
    this.sendMailTo=this.props.currentEmail;

	}
	
	async onLogOutPressed(){
		Actions.login();

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
      	<ListView style={styles.listContainer}
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}/>
        <TouchableOpacity onPress={() => this.onSendMailPressed()} style={styles.buttonSendMail}>
          <Text style={styles.sendMailText}>Send mail</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.onLogOutPressed()} style={styles.buttonContainer}>
			 		<Text style={styles.buttonText}>Log out</Text>
		    </TouchableOpacity>

        </View>
    );
  }
  renderRow(rowData){
  	return(
  		<TouchableHighlight onPress={()=>Actions.editItemScreen({valueToEdit:rowData,itemsList:rows})}  underlayColor = '#ddd'>
  		<View style={styles.cell}>
  			<Text>{rowData.name}</Text>
  		</View>
  		</TouchableHighlight>

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
    