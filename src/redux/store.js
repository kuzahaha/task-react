import { createStore } from 'redux';
import playlist from './reducers/sbmtReducer'

const store = createStore(playlist);

store.subscribe(()=>{
    console.log('change',store.getState())
})

alert(store.getState())