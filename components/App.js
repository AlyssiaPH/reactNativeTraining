import * as React from 'react';
import {Provider} from 'react-redux';
import {store} from '../redux/store.js';

import {NavigationContainer} from '@react-navigation/native';

import AppNavigator from './AppNavigator';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
