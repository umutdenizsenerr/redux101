import {combineReducers} from 'redux';
import frozenReducer from './frozenReducer';
import produceReducer from './produceReducer';
import meatReducer from './meatReducer';
const rootreducer = combineReducers({
    frozen : frozenReducer,
    produce: produceReducer,
    meat: meatReducer,
})

export default rootreducer;