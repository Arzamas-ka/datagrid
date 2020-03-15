import { SORT_BY } from '../actions/sortActions';

const initialState = {
  fieldName: '',
  type: ''
};

const sortReducer = (state = initialState, action) => {
  switch(action.type) {
    case SORT_BY: 
      let type = '';
      if (state.fieldName === action.payload) {
        type = state.type === 'ASC' ? 'DESC' : 'ASC';
        return { ...state, type };
      } else { 
        return { ...state, fieldName: action.payload, type: 'ASC' };
      }
    default:
      return state;
  }
};

export default sortReducer;
