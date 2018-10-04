import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

import { authPersistConfig } from 'config/persist';
import sessionReducer from './session';
import * as userReducer from './user';

const reducers = {
  session: persistReducer(authPersistConfig, sessionReducer),
  ...userReducer
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
