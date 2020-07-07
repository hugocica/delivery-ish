import { createStore, compose } from 'redux';
import appReducer from './modules/rootReducer';

const store = createStore(appReducer);

export default store;
