import React from 'react';
import shortid from 'shortid';
import { getHeaderTable } from '../helpers/dataObject';
import arrowDownImg from '../../images/arrow-down.svg';
import arrowTopImg from '../../images/arrow-top.svg';

const headerTable = () => {
  return getHeaderTable.map(header => {
    return <th key={shortid.generate()}>{header.title}
    <img className='arrow-down' src={arrowDownImg} alt='arrow-down' />
    <img className='arrow-top' src={arrowTopImg} alt='arrow-top' />
    </th>;
  });
};

export default headerTable;
