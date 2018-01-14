import React,{Component} from 'react';
import Login from './Login';
import HomeScreen from './HomeScreen';
import {Router,Stack,Scene} from 'react-native-router-flux';
import EditItemScreen from './EditItemScreen'
import RegisterUserScreen from './RegisterUserScreen';
import PetBookScreen from "./PetBookScreen";
import NewsFeedScreen from "./NewsFeedScreen";
import AddNewPetScreen from "./AddNewPetScreen";

export default class Routes extends Component{
    render(){
        return(
            <Router>
                <Stack key="root">
                    <Scene key="login" component={Login} title="Login" />
                    <Scene key="home" component={HomeScreen} title="Items"/>
                    <Scene key="editItemScreen" path={"/editItemScreen/:id"} component={EditItemScreen} title="Edit Item"/>
                    <Scene key="registerUserScreen" component={RegisterUserScreen} title="Register user"/>
                    <Scene key="petbook" component={PetBookScreen} title="Pet Book"  initial={true}/>
                    <Scene key="newsfeed" component={NewsFeedScreen} title="News Feed"/>
                    <Scene key="addnewpet" component={AddNewPetScreen} title="Add New Pet"/>
                    <Scene key="adddiagnosis" component={AddNewPetScreen} title="Add diagnosis"/>
                </Stack>
            </Router>
        );
    }
}


