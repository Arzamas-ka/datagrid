import { SORT_BY } from '../actions/sortActions';

const getInitialState = () => {
  let sortSettings;

  if (localStorage.getItem('sort')) {
    sortSettings = JSON.parse(localStorage.getItem('sort'));
  } else {
    sortSettings = {
      fieldName: '',
      type: ''
    };
  }

  return sortSettings;
};

const initialState = getInitialState();

const sortReducer = (state = initialState, action) => {
  switch (action.type) {
    case SORT_BY:
      let type = '';
      let newState;

      if (state.fieldName === action.payload) {
        type = state.type === 'ASC' ? 'DESC' : 'ASC';
        newState = { ...state, type };
      } else {
        newState = { ...state, fieldName: action.payload, type: 'ASC' };
      }

      localStorage.setItem('sort', JSON.stringify(newState));
      return newState;

    default:
      return state;
  }
};

export default sortReducer;
