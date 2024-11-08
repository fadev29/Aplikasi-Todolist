import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
const Florr = () => {
  return (
    <View
      style={{
        backgroundColor: '#21252b',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 10,
        paddingBottom: 10,
        elevation: 9,
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
      }}>
      <View style={{marginRight: 10, padding: 5}}>
        <Icon name="user" size={30} color="#ffff" />
        <Text style={{color: '#ffff', textAlign: 'center'}}>user</Text>
      </View>
      <View style={{flexDirection: 'column', marginLeft: 90}}>
        <Icon name="house" size={30} color="#ffff" />
        <Text style={{color: '#ffff', textAlign: 'center'}}>home</Text>
      </View>
      <View style={{marginLeft: 100, padding: 5}}>
        <Icon name="envelope" size={30} color="#ffff" />
        <Text style={{color: '#ffff', textAlign: 'center'}}>mail</Text>
      </View>
    </View>
  );
};

export default Florr;
