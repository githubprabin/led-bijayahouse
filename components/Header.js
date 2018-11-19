import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends Component {

    render() {
        return (
            <View style={this.props.style}>
                <View style={styles.container}>
                    <Text style={styles.text}>{this.props.title}</Text>
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
        backgroundColor: '#F5FCFF',
    },
    text :{
        fontSize: 60,
        color: '#b22222',
        fontWeight: 'bold',
        textAlign: 'center'
    }
});
