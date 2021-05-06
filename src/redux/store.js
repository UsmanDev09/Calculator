import {createStore} from 'redux';
import reducer from './reducers/reducer';

const store = createStore(reducer,{previousValue:"",currentValue:"",operator:"",result:0,index:0}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

console.log("storeInitial",store.getState());
export default store;
