import { combineReducers } from 'redux';
import termReducer from './term_reducer';
import oliverState from './state2';

const rootReducer = combineReducers({
  term: termReducer,
  term2: oliverState
});

export default rootReducer;