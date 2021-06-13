import {applyMiddleware, compose, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './modules';
import sagas from './sagas';

const persistConfig = {
  key: 'root',
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export default function configureStore(initialState = {}) {
  const sagaMiddleware = createSagaMiddleware();
  const reduxStore = createStore(
    persistedReducer,
    compose(
      applyMiddleware(sagaMiddleware),
      typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : (f) => f
    )
  );
  let persistor = persistStore(reduxStore);

  sagaMiddleware.run(sagas);
  return {reduxStore, persistor};
}
