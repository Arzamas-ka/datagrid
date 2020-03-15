import React from 'react';
import { connect } from 'react-redux';
import shortid from 'shortid';
import {
  deletePerson,
  updatePerson
} from '../../components/actions/peopleActions';
import TableRow from './TableRow';

const TableBody = ({ people, deletePerson, updatePerson }) => {
  return (
    <tbody>
      {people.map(cell => (
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

const mapStateToProps = ({ people }) => ({ people });
const mapDispatchToProps = dispatch => {
  return {
    deletePerson: personId => dispatch(deletePerson(personId)),
    updatePerson: person => dispatch(updatePerson(person))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableBody);
