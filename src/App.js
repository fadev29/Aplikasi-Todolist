import React from 'react';
import {View, Text} from 'react-native';
import Heder from './components/Heder';
import Florr from './components/Florr';
import Icon from 'react-native-vector-icons/FontAwesome6';
import TodoList from './screens/TodoList';
const App = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#ffff'}}>
      <Heder />
      <TodoList />
      <Florr />
    </View>
  );
};

export default App;
