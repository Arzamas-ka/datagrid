import faker from 'faker';
import getObjData from '../helpers/dataObject';
import { DELETE_PERSON, UPDATE_PERSON } from '../actions/peopleActions';

const arrData = faker => {
  let arr = [];
  let counter = 10;
  // let counter = 1100;
  while (counter > 0) {
    counter--;
    arr.push(getObjData(faker));
  }
  return arr;
};
const initialState = arrData(faker);

const peopleReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_PERSON:
      return state.filter(person => person.id !== action.payload);
    case UPDATE_PERSON:
      const newPersons = [...state];
      const indexUpdatedPerson = newPersons.findIndex(
        person => person.id === action.payload.prevId
      );
      newPersons[indexUpdatedPerson] = action.payload;
      return newPersons;
    default:
      return state;
  }
};

export default peopleReducer;
