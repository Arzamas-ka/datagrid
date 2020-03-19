import React from 'react';
import { connect } from 'react-redux';
import shortid from 'shortid';
import { sortBy } from '../../components/actions/sortActions';
import { getHeaderTable as headerCells } from '../helpers/dataObject';
import arrowDown from '../../images/arrow-down.svg';
import arrowTop from '../../images/arrow-top.svg';
import arrowDownActive from '../../images/arrow-down-active.svg';
import arrowTopActive from '../../images/arrow-top-active.svg';

const sortableFields = [
  'id',
  'name',
  'job',
  'job type',
  'experience',
  'married'
];

const getArrow = (cell, sort) => {
  const arrowDownImg =
    sort.fieldName === cell.title && sort.type === 'ASC'
      ? arrowDownActive
      : arrowDown;
  const arrowTopImg =
    sort.fieldName === cell.title && sort.type === 'DESC'
      ? arrowTopActive
      : arrowTop;

  return { arrowDownImg, arrowTopImg };
};

const TableHeader = ({ sort, sortBy }) => {
  return (
    <thead>
      <tr>
        {headerCells.map(cell => {
          const { arrowDownImg, arrowTopImg } = getArrow(cell, sort);

          return sortableFields.includes(cell.title) ? (
            <th
              key={shortid.generate()}
              className='sortable'
              onClick={() => sortBy(cell.title)}
            >
              {cell.title.toLocaleUpperCase()}
              <img className='arrow-down' src={arrowDownImg} alt='arrow-down' />
              <img className='arrow-top' src={arrowTopImg} alt='arrow-top' />
            </th>
          ) : (
            <th key={shortid.generate()}>{cell.title.toLocaleUpperCase()}</th>
          );
        })}
      </tr>
    </thead>
  );
};

const mapStateToProps = ({ sort }) => {
  return { sort };
};
const mapDispatchToProps = dispatch => {
  return {
    sortBy: fieldName => dispatch(sortBy(fieldName))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableHeader);
