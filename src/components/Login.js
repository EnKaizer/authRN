/**
 * Created by caiqu on 19/08/2017.
 */
import React, {Component} from 'react';
import {Input,Button, Card, CardSection} from './common';

class Login extends Component {

    state = {text: ''};

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        onChangeText={onChangeText}
                        style={{height: 30, width: 100}}
                        value={text}/>
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
