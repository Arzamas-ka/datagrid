import { combineReducers } from 'redux';
import people from './peopleReducer';
import sort from './sortReducer';

const rootReducer = combineReducers({
  people,
  sort
});

export default rootReducer;
