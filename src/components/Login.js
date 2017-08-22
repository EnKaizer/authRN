/**
 * Created by caiqu on 19/08/2017.
 */
import React, {Component} from 'react';
import {Input,Button, Card, CardSection} from './common';

class Login extends Component {

    state = {email: ''};

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
                </CardSection>

                <CardSection>
                    <Button>
                        Log in
                    </Button>
                </CardSection>
            </Card>
        )
    }
}

export {Login};
