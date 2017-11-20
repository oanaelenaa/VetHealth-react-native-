import React,{Component} from 'react';
import { StyleSheet, Text, View ,AppRegistry,Image} from 'react-native';
import Routes from './router';
import Login from './Login';

const App =()=>{
    return (
      <Routes></Routes>
      
    );
}
export default App;


/*
const LoginScreen = ()=>(
  <Login></Login>
);
const Home= ()=>(
  <HomeScreen></HomeScreen>
);

const AppNavigator=StackNavigator({
Login:{
  screen:LoginScreen,
},
Home:{
  screen:HomeScreen,
},
});
export default AppNavigator;
/*const App = StackNavigator({
  HomeScreen: { screen: HomeScreen },
  LoginScreen: { screen: Login},
});*/
/*
export default class App extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
    //  <Splash/>
    <Login></Login>
      );
  }
}*/
/*
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/

