/**
 * Created by caiqu on 19/08/2017.
 */
import React, {Component} from 'react';
import {View} from 'react-native';
import firebase from 'firebase';

import {Header} from './components/common';
import {Login} from './components/Login';

class App extends Component {
    componentWillMount = () => {

        firebase.initializeApp({
            apiKey: "AIzaSyAUtSVFOLFTcKPzuRmJpn9BPoVxH-T7Gso",
            authDomain: "authrn-6cc5c.firebaseapp.com",
            databaseURL: "https://authrn-6cc5c.firebaseio.com",
            projectId: "authrn-6cc5c",
            storageBucket: "authrn-6cc5c.appspot.com",
            messagingSenderId: "664199247376"
        });

    };

    render = () => {
        return (
            <View>
                <Header headerText="Authentication"></Header>
                <Login/>
            </View>
        );
    }
}

export default App;