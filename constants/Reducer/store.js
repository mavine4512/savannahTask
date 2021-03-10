import {createStore} from 'redux';
import itemsReducer from './savannahApp';

const store = createStore(itemsReducer);

export default store;
