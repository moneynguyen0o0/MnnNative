import { compose, createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';
import { rootPersistConfig } from '../config/persist';

const sagaMiddleware = createSagaMiddleware();
const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export default (initialState) => {
  const middleware = [sagaMiddleware];
  const enhancers = compose(applyMiddleware(...middleware));

  const store = createStore(persistedReducer, initialState, enhancers);
  const persistor = persistStore(store);

  store.runSaga = sagaMiddleware.run;

  return { store, persistor };
};
