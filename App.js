import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, Dimensions} from 'react-native';

import Header from './components/Header';
import PricesInput from './components/PricesInput';
import TimeInput from './components/TimeInput';

export default class App extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>

          <Header style={styles.header}
            title='BIJAYA HOUSE'/>

          <View style={styles.body}>
            <PricesInput style= {styles.price}/>
            <TimeInput style={styles.time}/>
          </View>

            </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('screen').height-24,
    alignItems: 'center',
  },
  header: {
    flex: 0.3,
    width: '100%',
    backgroundColor: '#ff8638',
  },
  body: {
    flex: 0.7,
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#ffaa55'
  },
  price: {
    flex: 0.55,
    width: '100%'
  },
  time: {
    flex: 0.45,
    width: '100%'
  }
});
