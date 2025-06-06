// store.js
import { configureStore } from '@reduxjs/toolkit';
// import rootReducer from './reducers';
import counterReducer from './Store/CounterSlice';

const store = configureStore({
  reducer: counterReducer,
});

export default store;