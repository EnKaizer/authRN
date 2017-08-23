/**
 * Created by caiqu on 19/08/2017.
 */
import React, {Component} from 'react';
import {Input,Button, Card, CardSection, Spinner} from './common';
import firebase from 'firebase';
import {Text} from 'react-native';

class Login extends Component {

    state = {email: '', password: '', error: ''};
    onButtonPress = () => {
        const {email, password} = this.state;

        this.setState({error: ''});

        firebase.auth().signInWithEmailAndPassword(email, password).catch(() => {
            firebase.auth().createUserWithEmailAndPassword(email, password).catch(() => {
                this.setState({error: 'Authentication Failed.'});
            })
        })
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
                <Spinner/>
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
                    <Button onPress={this.onButtonPress}>
                        Log in
                    </Button>
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