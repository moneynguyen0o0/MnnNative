import storage from 'redux-persist/lib/storage';

const rootPersistConfig = {
  key: 'root',
  storage: storage,
  blacklist: ['session'],
  debug: true
};

const authPersistConfig = {
  key: 'session',
  storage: storage,
  blacklist: ['error']
};

export {
  rootPersistConfig,
  authPersistConfig
};
