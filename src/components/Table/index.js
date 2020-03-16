import React from 'react';
import { connect } from 'react-redux';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

const Table = () => {

  return (
    <>
      <div className='main'>
        <div className='main-wrapper container'>
          <label htmlFor='virtualized'>Use virtual rows (react-window)</label>
          <input
            type='checkbox'
            id='virtualized'
          />
          <table className='table'>
            <caption>Personal data</caption>
            <TableHeader />
            <TableBody />
          </table>
        </div>
      </div>
    </>
  );
};

export default connect()(Table);
