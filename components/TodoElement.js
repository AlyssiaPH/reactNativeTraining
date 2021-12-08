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

import TodoDetails from './TodoDetails';

const TodoElement = props => {
  const {navigation} = props;

  const deleteElement = index => {
    let newList = Array.from(props.todoList);
    newList.splice(index, 1);
    props.setTodoList(newList);
  };

  const goDetails = useCallback(
    infos => {
      navigation.navigate('TodoDetails', {infos: infos});
    },
    [navigation],
  );

  return (
    <TouchableOpacity
      style={styles.listItem}
      onPress={() => goDetails(props.todo)}>
      <Text style={styles.itemText}>{props.todo}</Text>
      <TouchableOpacity onPress={deleteElement.bind(this, props.index)}>
        <Text style={styles.button}>Supprimer</Text>
      </TouchableOpacity>
    </TouchableOpacity>
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
  button: {
    backgroundColor: '#FF5555',
    height: 45,
    fontSize: 20,
    color: '#F6F6F6',
  },
  submitDiv: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default TodoElement;
