import React from 'react';
import shortid from 'shortid';
import { getHeaderTable } from '../helpers/dataObject';

const headerTable = () => {
  return getHeaderTable.map(header => {
    return <th key={shortid.generate()}>{header}</th>;
  });
};

export default headerTable;
