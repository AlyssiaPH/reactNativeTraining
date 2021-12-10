import React from 'react';
import {useState, useEffect, useMemo, useCallback} from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TodoElement from './TodoElement';
import {useDispatch, useSelector} from 'react-redux';

const TodoList = props => {
  const [searchText, setSearchText] = useState('');
  const [userInput, setUserInout] = useState('');
  const [todoList, setTodoList] = useState([]);

  const saveToDoList = async value => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('@todoList', jsonValue);
    } catch (e) {
      // saving error
    }
  };

  const getTodoList = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@todoList');
      return jsonValue != null ? JSON.parse(jsonValue) : [];
    } catch (e) {
      return [];
    }
  };

  const todoListFiltered = useMemo(() => {
    return todoList.filter(word => word.includes(searchText));
  }, [todoList, searchText]);

  const addElement = useCallback(async () => {
    let newList = Array.from(todoList);
    newList.push(userInput);
    setTodoList(newList);
    await saveToDoList(newList);
    setUserInout('');
  }, [todoList, userInput]);

  const {navigation} = props;

  useEffect(() => {
    const run = async () => {
      const loadList = await getTodoList();
      setTodoList(loadList);
    };
    run();
  }, []);

  return (
    <SafeAreaView style={styles.background}>
      <TextInput
        placeholder={'Rechercher'}
        value={searchText}
        onChangeText={setSearchText}
        style={[styles.input, styles.searchBar]}
      />

      <FlatList
        style={styles.list}
        data={todoListFiltered}
        renderItem={({item, index}) => {
          return (
            <TodoElement
              setTodoList={setTodoList}
              todo={item}
              index={index}
              todoList={todoList}
              navigation={navigation}
            />
          );
        }}
      />

      <View style={styles.submitDiv}>
        <TextInput
          value={userInput}
          onChangeText={setUserInout}
          style={[styles.input, styles.submitText]}
          placeholder={'Nouvel élément'}
        />
        <TouchableOpacity onPress={addElement}>
          <Text style={styles.submitButton}>Ajouter</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#F6F6F6',
    flex: 1,
  },
  input: {
    fontSize: 20,
    backgroundColor: '#E6E6E6',
    margin: 3,
    padding: 3,
    width: 300,
    borderRadius: 50,
  },
  searchBar: {
    width: 380,
  },
  list: {
    flex: 10,
  },
  listItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemText: {
    fontSize: 20,
  },
  submitDiv: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  submitText: {
    flex: 6,
  },
  submitButton: {
    flex: 2,
    backgroundColor: '#454545',
    fontSize: 20,
    color: '#F6F6F6',
    borderRadius: 50,
  },
});

export default TodoList;
