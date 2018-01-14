import React,{Component} from 'react';
import Routes from './router';
import * as firebase from 'firebase';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: "AIzaSyAKvA8N-J1sFDf9NZm97Gq6ImTKINiOF4Y",
            authDomain: "vethealth-react-native.firebaseapp.com",
            databaseURL: "https://vethealth-react-native.firebaseio.com",
            projectId: "vethealth-react-native",
            storageBucket: "vethealth-react-native.appspot.com",
            messagingSenderId: "944778103153",
            persistence:true,
        };
        firebase.initializeApp(config);
        firebase.auth().signOut();

    }
    render() {
        return (
            <Routes></Routes>

        );
    }
}
export default App;
