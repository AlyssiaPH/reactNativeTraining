import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import AppNavigator from './AppNavigator';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useCallback} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const TodoDetails = ({route, navigation}) => {
  const {infos} = route.params;

  const goBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <SafeAreaView style={styles.background}>
      <TouchableOpacity onPress={goBack}>
        <MaterialCommunityIcons name={'arrow-left'} size={30} />
      </TouchableOpacity>
      <Text style={styles.itemText}>À faire :</Text>
      <Text style={styles.itemText}>{infos}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#F6F6F6',
    flex: 1,
  },
  itemText: {
    fontSize: 20,
  },
});

export default TodoDetails;
