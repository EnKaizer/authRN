/**
 * Created by caiqu on 19/08/2017.
 */
import React, {Component} from 'react';
import {View} from 'react-native';
import firebase from 'firebase';

import {Header, Button, Spinner} from './components/common';
import {Login} from './components/Login';

class App extends Component {

    state = {loggedIn: null}

    componentWillMount = () => {

        firebase.initializeApp({
            apiKey: "AIzaSyAUtSVFOLFTcKPzuRmJpn9BPoVxH-T7Gso",
            authDomain: "authrn-6cc5c.firebaseapp.com",
            databaseURL: "https://authrn-6cc5c.firebaseio.com",
            projectId: "authrn-6cc5c",
            storageBucket: "authrn-6cc5c.appspot.com",
            messagingSenderId: "664199247376"
        });

        firebase.auth().onAuthStateChanged((user) => {
            if(user){
                this.setState({loggedIn: true})
            }else{
                this.setState({loggedIn: false})
            }
        });

    };


    renderContent = () =>{
        switch(this.state.loggedIn){
            case true:
                return <Spinner size="small"/>
            case false:
                return <Button onPress={this.onButtonPress}>Log in</Button>
            default:
               return <Spinner size="large"/>
        }
    };

    render = () => {
        return (
            <View>
                <Header headerText="Authentication"></Header>
                {this.renderContent()}
            </View>
        );
    }
}

export default App;