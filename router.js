import React,{Component} from 'react';
import Login from './Login';
import HomeScreen from './HomeScreen';
import {Router,Stack,Scene} from 'react-native-router-flux';
import RegisterUserScreen from './RegisterUserScreen';
import PetBookScreen from "./PetBookScreen";
import NewsFeedScreen from "./NewsFeedScreen";
import AddNewPetScreen from "./AddNewPetScreen";
import HomeScreenDoctor from "./HomeScreenDoctor";
import NotificationsScreen from "./components/NotificationsScreen";
import AddDiagnosis from './AddDiagnosis';
import EditPetScreen from "./EditPetScreen";
export default class Routes extends Component{
    render(){
        return(
            <Router>
                <Stack key="root">
                    <Scene key="login" component={Login} title="Login"  />
                    <Scene key="home" component={HomeScreen} title="Items"/>
                    <Scene key="EditPetScreen" path={"/EditPetScreen/:id"} component={EditPetScreen} title="Edit Pet"/>
                    <Scene key="registerUserScreen" component={RegisterUserScreen} title="Register user"/>
                    <Scene key="petbook" component={PetBookScreen} title="Pet Book" initial={true} />
                    <Scene key="newsfeed" component={NewsFeedScreen} title="News Feed"/>
                    <Scene key="addnewpet" component={AddNewPetScreen} title="Add New Pet"/>
                    <Scene key="adddiagnosis" component={AddDiagnosis} title="Add diagnosis"/>
                    <Scene key="homescreendoctor" component={HomeScreenDoctor} title="Home"/>
                </Stack>
            </Router>
        );
    }
}


