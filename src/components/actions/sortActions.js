export const SORT_BY = 'SORT_BY';

export const sortBy = fieldName => {
  return {
    type: SORT_BY,
    payload: fieldName
  };
};


// ascending descending