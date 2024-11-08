import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
const Heder = () => {
  return (
    <View
      style={{
        width: '100%',
        height: '50',
        backgroundColor: '#21252b',
        flexDirection: 'row',
        elevation: 9,
      }}>
      <StatusBar backgroundColor={'#21252b'} barStyle={'default'} />
      <Text></Text>
      <View
        style={{justifyContent: 'center', alignItems: 'center', padding: 5}}>
        <Icon name="bars" size={30} color="#ffff" />
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text
          style={{
            color: '#ffff',
            textAlign: 'left',
            fontSize: 25,
            fontWeight: 'bold',
          }}>
          TodoList
        </Text>
      </View>
    </View>
  );
};

export default Heder;
