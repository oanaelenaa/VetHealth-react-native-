import React,{PropTypes,Component} from 'react';
import {View,TouchableOpacity, TouchableHighlight,Text, ListView, StyleSheet} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class HomeScreen extends Component{
	constructor(props) {
    super(props);
    this.onLogOutPressed=this.onLogOutPressed.bind(this)
    this.setInfo = this.setInfo.bind(this);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})


    //this.onRowPresses=this.onRowPresses.bind(this)

    this.state={
    	itemValueChanges:false,
    	dataSource:ds.cloneWithRows([{id:0,name:'row 1'}, {id:1,name:'row 2'},{id:2,name:'row 3'},{id:3,name:'row 4'},{id:4,name:'row 5'}] )

    };

    if(this.props.checkChange)
    {
    	var idd=this.props.itemupdatedId;
    	var newVal=this.props.newitemvalue;
    	console.log(idd,newVal);
    	let newArray=this.state.dataSource._dataBlob.s1.slice();
    	newArray[idd]={
    		id:idd,
    		name:newVal
    	};
    	this.state.itemValueChanges=false;
    	console.log(newArray);
    	this.setInfo(newArray);
    	ds=newArray;
    }
	}

	setInfo = (newArray) => {
		this.setState({
			dataSource:this.state.dataSource.cloneWithRows(newArray),

		});
  	}

	async onLogOutPressed(){
		Actions.login();

	}
	
	render() {
    return (
    	<View style={styles.container}>
      	<ListView style={styles.listContainer}
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}/>
        <TouchableOpacity onPress={() => this.onLogOutPressed()} style={styles.buttonContainer}>
			 		<Text style={styles.buttonText}>Log out</Text>
		</TouchableOpacity>

        </View>
    );
  }
  renderRow(rowData){
  	return(
  		<TouchableHighlight onPress={()=>Actions.editItemScreen({valueToEdit:rowData})}  underlayColor = '#ddd'>
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
		backgroundColor:'#CEF6CE'
	},
	cell:{
    alignItems: 'center',
    paddingTop: 12,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
	},
	buttonContainer:{
		backgroundColor:'#FA5882',
		paddingVertical:15
	},
	buttonText:{
		textAlign:'center',
		color:'#01DF74'
	}
});
    