import React, { Component } from 'react';
import { StyleSheet, Alert, Text, View, TextInput, ToastAndroid } from 'react-native';
import { TextField } from 'react-native-material-textfield';
import Button from './Button';

import {baseURL} from './config';

export default class PriceInput extends Component {

    state = {
        fGold: '',
        tGold: '',
        silver: ''
    }

    async uploadPrices(tGold, fGold, silver) {

        if (fGold == '' || tGold == '' || silver == '') {
            ToastAndroid.show('Please fill all prices', ToastAndroid.SHORT);
            return;
        }

        const priceURL = baseURL +
            '?price_tGold=' + tGold +
            '&price_fGold=' + fGold +
            '&price_silver=' + silver;

        ToastAndroid.show(priceURL, ToastAndroid.SHORT); 
        await fetch(
            priceURL, {
                method: 'GET'
            }
        ).then(response => response.text())
            .then(responseData => { ToastAndroid.show(responseData, ToastAndroid.show) })
            .catch((error) => {

                Alert.alert(
                    'Network Error',
                    'Please make sure you are connected to hotspot of the LED board',
                    [
                        { text: 'Ok' }
                    ]
                )
            });
    }

    render() {
        return (
            <View style={this.props.style}>
                <View style={styles.container}>

                    <Text style={styles.title}>Prices</Text>

                    <TextInput style={styles.inputField}
                        placeholder='Fine Gold'
                        value={this.state.fGold}
                        keyboardType='number-pad'
                        maxLength={5}
                        onChangeText={text => this.setState({ fGold: text })} />

                    <TextInput style={styles.inputField}
                        placeholder='Tejabi Gold'
                        value={this.state.tGold}
                        keyboardType='number-pad'
                        maxLength={5}
                        onChangeText={text => this.setState({ tGold: text })} />

                    <TextInput style={styles.inputField}
                        placeholder='Silver'
                        value={this.state.silver}
                        keyboardType='number-pad'
                        maxLength={5}
                        onChangeText={text => this.setState({ silver: text })} />

                    <Button style={styles.button}
                        title='UPLOAD'
                        onPress={() => this.uploadPrices(this.state.fGold, this.state.tGold, this.state.silver)} />

                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: '#b22222',
        fontWeight: 'bold'
    },
    inputField: {
        margin: 2,
        width: '90%',
        backgroundColor: '#F5FCFF',
        textAlign: 'center',
        fontSize: 15
    },
    button: {
        width: '90%'
    }
});
