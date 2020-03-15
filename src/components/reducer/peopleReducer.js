import faker from 'faker';
import getObjData from '../helpers/dataObject';

const arrData = faker => {
  let arr = [];
  let counter = 1100;
  while (counter > 0) {
    counter--;
    arr.push(getObjData(faker));
  }
  return arr;
};
const initialState = arrData(faker);



const peopleReducer = (state = initialState, action) => {
  return state;
};

export default peopleReducer;