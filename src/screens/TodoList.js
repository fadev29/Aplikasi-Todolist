import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInputBase,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
  ScrollView,
} from 'react-native';
import {Item} from 'react-native-paper/lib/typescript/components/Drawer/Drawer';
import Icon from 'react-native-vector-icons/FontAwesome6';

const TodoScreen = () => {
  // init local state
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [editedTodo, setEditedTodo] = useState(null);
  // Handle Add Todo
  const handleAddTodo = () => {
    // sturtcure of singgle todo item
    // {
    //     id:
    //     title:
    // }
    if (todo === '') {
      return; // early return
    }
    setTodoList([...todoList, {id: Date.now().toString(), title: todo}]);
    setTodo('');
  };
  // hendle Delete
  const handleDeleteTodo = id => {
    const updatedtadaTodoList = todoList.filter(todo => todo.id !== id);
    setTodoList(updatedtadaTodoList);
  };
  // handle edit Todo
  const handleEditTodo = todo => {
    setEditedTodo(todo);
    setTodo(todo.title);
  };
  // Handle Update
  const handleUpdateTodo = () => {
    const updatedTodo = todoList.map(item => {
      if (item.id === editedTodo.id) {
        return {...item, title: todo};
      }
      return item;
    });
    setTodoList(updatedTodo);
    setEditedTodo(null);
    setTodo('');
  };
  // rende todo

  const renderTodos = ({item, index}) => {
    return (
      <View
        style={{
          backgroundColor: '#1e90ff',
          borderRadius: 6,
          paddingHorizontal: 6,
          paddingVertical: 20,
          marginBottom: 6,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.8,
          elevation: 3,
          shadowRadius: 5,
        }}>
        <Text
          style={{color: '#ffff', fontSize: 20, fontWeight: '800', flex: 1}}>
          {item.title}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '18%',
            paddingRight: 10,
          }}>
          <Icon
            name="pencil"
            size={20}
            color="#ffffff"
            onPress={() => handleEditTodo(item)}
          />
          <Icon
            name="trash-can"
            size={20}
            color="#ffffff"
            onPress={() => handleDeleteTodo(item.id)}
          />
        </View>
      </View>
    );
  };

  return (
    <ScrollView>
      <View style={{marginHorizontal: 16, marginTop: 15}}>
        <TextInput
          style={{
            borderWidth: 2,
            borderColor: '#000000',
            borderRadius: 6,
            paddingVertical: 8,
            paddingHorizontal: 16,
            color: '#000000',
          }}
          placeholder="Add a task"
          placeholderTextColor={'#7c7c7c'}
          value={todo}
          onChangeText={userText => setTodo(userText)}
        />

        {editedTodo ? (
          <TouchableOpacity
            style={{
              backgroundColor: '#000000',
              borderRadius: 6,
              paddingVertical: 12,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 15,
              paddingVertical: 8,
              marginVertical: 34,
            }}
            onPress={() => handleUpdateTodo()}>
            <Text
              style={{
                color: '#ffff',
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 18,
              }}>
              Save
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={{
              backgroundColor: '#000000',
              borderRadius: 6,
              paddingVertical: 12,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 15,
              paddingVertical: 8,
              marginVertical: 34,
            }}
            onPress={() => handleAddTodo()}>
            <Text
              style={{
                color: '#ffff',
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 18,
              }}>
              Add
            </Text>
          </TouchableOpacity>
        )}
        {/*Render tode list*/}
        <FlatList data={todoList} renderItem={renderTodos} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({});
export default TodoScreen;
