import { combineReducers } from 'redux';
import termReducer from './term_reducer';

const rootReducer = combineReducers({
  term: termReducer
});

export default rootReducer;