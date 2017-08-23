/**
 * Created by caiqu on 19/08/2017.
 */
import React, {Component} from 'react';
import {Input,Button, Card, CardSection, Spinner} from './common';
import firebase from 'firebase';
import {Text} from 'react-native';

class Login extends Component {

    state = {email: '', password: '', error: '', loading: false};
    onButtonPress = () => {
        const {email, password, loading} = this.state;

        this.setState({error: '', loading: true});

        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(this.onLoginSuccess())
        .catch(() => {
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(() => this.onLoginSuccess())
            .catch(this.onLoginFail())
        })
    };

    renderButton(){
        return this.state.loading ? 
        <Spinner size="small"/> : 
        (<Button onPress={this.onButtonPress}>
                        Log in
         </Button>)
    };

    onLoginSuccess = () => {
        this.setState({this.state})
    };

    onLoginFail = () => {
        this.setState({error: 'Authentication Failed', loading: false})
    };

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        placeholder="example@gmail.com"
                        label="Email"
                        value={this.state.email}
                        onChangeText={email => this.setState({email})}/>
                </CardSection>
                <CardSection>
                    <Input
                        secureTextEntry
                        placeholder="password"
                        label="Password"
                        value={this.state.password}
                        onChangeText={password => this.setState({password})}/>
                </CardSection>
                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        )
    }
}

export {Login};


const styles = {
  errorTextStyle:{
      fontSize: 20,
      alignSelf: 'center',
      color: 'red'
  }
};