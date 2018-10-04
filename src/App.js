import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { StyleProvider, Root } from 'native-base';

import configureStore from './store';
import rootSaga from './store/sagas';
import Navigator from './navigator';
import getTheme from './theme/components';
import { Loading } from './components';

const { store, persistor } = configureStore();

// Run saga watchers
store.runSaga(rootSaga);

const App = () => (
  <Provider store={ store }>
    <PersistGate persistor={ persistor } loading={ <Loading /> }>
      <StyleProvider style={ getTheme() }>
        <Root>
          <Navigator />
        </Root>
      </StyleProvider>
    </PersistGate>
  </Provider>
);

export default App;
