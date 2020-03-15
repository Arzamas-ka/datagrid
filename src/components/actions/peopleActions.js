export const DELETE_PERSON = 'DELETE_PERSON';
export const UPDATE_PERSON = 'UPDATE_PERSON';

export const deletePerson = id => ({
  type: DELETE_PERSON,
  payload: id
});

export const updatePerson = person => ({
  type: UPDATE_PERSON,
  payload: person
});
