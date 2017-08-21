/**
 * Created by caiqu on 20/08/2017.
 */
import React, {Component} from 'react';
import {TextInput, Text, View} from 'react-native';

const Input = ({label, onChangeText, text}) => {
    return(
        <View>
            <Text>
                {label}
            </Text>
            <TextInput
                onChangeText={onChangeText}
                style={{height: 30, width: 100}}
                value={text}/>
        </View>
    )
};

export {Input}