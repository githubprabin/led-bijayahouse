import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class App extends Component {

    render() {
        return (
            <TouchableOpacity style={[styles.container, this.props.style]}
            activeOpacity={0.6}
            onPress={this.props.onPress}>
                <Text style={styles.title}>{this.props.title}</Text>

            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#019bd0',
        elevation: 1
    },
    title: {
        color: '#fff',
        fontWeight: 'bold'
    }
});
