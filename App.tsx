import * as React from 'react';
import HomeScreen from './app/screens/HomeScreen';
import {Provider, useDispatch, useSelector} from 'react-redux';
import {persistor, store} from './app/store';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <HomeScreen />
      </PersistGate>
    </Provider>
  );
};

export default App;

store.subscribe(() => {
  console.log('Store Change: ', store.getState());
});
