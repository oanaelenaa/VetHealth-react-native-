import {Permissions, Notifications} from 'expo';
import * as firebase from 'firebase';

export default (async function registerForPushNotificationsAsync() {
    // Android remote notification permissions are granted during the app
    let {status} = await Permissions.askAsync(Permissions.NOTIFICATIONS);

    // Stop here if the user did not grant permissions
    if (status !== 'granted') {
        return;
    }
    // Get the token that uniquely identifies this device
    let token = await Notifications.getExpoPushTokenAsync();
    console.log(token);


    userID = firebase.auth().currentUser.uid;

    firebase.database().ref('/Users/' + userID).update({token: token});


    // // POST the token to our backend so we can use it to send pushes from there
    // return fetch(PUSH_ENDPOINT, {
    //   method: 'POST',
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     token: {
    //       value: token,
    //     },
    //   }),
    // });
});