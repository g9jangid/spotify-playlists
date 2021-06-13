import React from 'react';
import {Provider as ReduxProvider} from 'react-redux';
import configureStore from './redux/configureStore';
import Routes from './routes/Routes';
import {ToastContainer} from 'react-toastify';

const {reduxStore} = configureStore();

const App = () => (
  <ReduxProvider store={reduxStore}>
    <Routes />
    <ToastContainer />
  </ReduxProvider>
);

export default App;
