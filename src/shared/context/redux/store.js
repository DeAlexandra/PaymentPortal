import { createStore } from 'redux';
import drawerReducer from './drawerReducer';

const store = createStore(drawerReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;

