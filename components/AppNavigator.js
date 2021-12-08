import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {mdiFormatListBulletedSquare} from '@mdi/js';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
import TodoList from './TodoList';
import TodoDetails from './TodoDetails';
import Form from './Form';
import ColorsFlex from './ColorsFlex';

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={'TodoList'}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={'TodoList'} component={TodoList} />
      <Stack.Screen name={'TodoDetails'} component={TodoDetails} />
    </Stack.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <Tab.Navigator initialRouteName={'Todo'}>
      <Tab.Screen
        name={'Todo'}
        component={StackNavigator}
        options={{
          tabBarLabel: 'To Do List',
          tabBarIcon: ({focused, color}) => (
            <MaterialCommunityIcons
              focused={focused}
              name={'format-list-bulleted-square'}
              size={30}
              style={{color: color}}
            />
          ),
          tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          },
        }}
      />
      <Tab.Screen
        name={'Form'}
        component={Form}
        options={{
          tabBarLabel: 'Form',
          tabBarIcon: ({focused, color}) => (
            <MaterialCommunityIcons
              name={'form-select'}
              size={30}
              focused={focused}
              style={{color: color}}
            />
          ),
          tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          },
        }}
      />
      <Tab.Screen
        name={'ColorsFlex'}
        component={ColorsFlex}
        options={{
          tabBarLabel: 'Flex Box',
          tabBarIcon: ({focused, color}) => (
            <MaterialCommunityIcons
              name={'apps-box'}
              size={30}
              focused={focused}
              style={{color: color}}
            />
          ),
          tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
