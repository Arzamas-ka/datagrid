import React from 'react';
import { connect } from 'react-redux';
import shortid from 'shortid';
import {
  deletePerson,
  updatePerson
} from '../../components/actions/peopleActions';
import TableRow from './TableRow';

const sortByNumber = (people, sort) => {
  // debugger;
  if (sort.type === 'ASC') {
    return people.sort(
      (left, right) => left[sort.fieldName] - right[sort.fieldName]
    );
  } else {
    return people.sort(
      (left, right) => right[sort.fieldName] - left[sort.fieldName]
    );
  }
};

const sortByString = (people, sort) => {
  if (sort.type === 'ASC') {
    return people.sort((left, right) =>
      left[sort.fieldName].localeCompare(right[sort.fieldName])
    );
  } else {
    return people
      .sort((left, right) =>
        left[sort.fieldName].localeCompare(right[sort.fieldName])
      )
      .reverse();
  }
};

const sortBoolean = (people, sort) => {
  const truthy = people.filter(person => person.married);
  const falsy = people.filter(person => !person.married);

  return sort.type === 'ASC' ? [...truthy, ...falsy] : [...falsy, ...truthy];
};

const sortPeople = (people, sort) => {
  if (!sort.fieldName || !sort.type) {
    return people;
  }

  if (sort.fieldName === 'id' || sort.fieldName === 'experience') {
    return sortByNumber(people, sort);
  }

  if (sort.fieldName === 'name' || sort.fieldName === 'job') {
    return sortByString(people, sort);
  }

  if (sort.fieldName === 'job type') {
    return sortByString(people, { ...sort, fieldName: 'jobType' });
  }

  if (sort.fieldName === 'married') {
    return sortBoolean(people, sort);
  }
};

const TableBody = ({ people, sort, deletePerson, updatePerson }) => {
  const sortedPeople = sortPeople(people, sort);

  return (
    <tbody>
      {sortedPeople.map(cell => (
        <TableRow
          cell={cell}
          key={shortid.generate()}
          deletePerson={deletePerson}
          updatePerson={updatePerson}
        />
      ))}
    </tbody>
  );
};

const mapStateToProps = ({ people, sort }) => ({ people, sort });
const mapDispatchToProps = dispatch => {
  return {
    deletePerson: personId => dispatch(deletePerson(personId)),
    updatePerson: person => dispatch(updatePerson(person))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableBody);
