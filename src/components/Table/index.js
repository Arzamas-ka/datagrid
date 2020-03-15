import React from 'react';
import { connect } from 'react-redux';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

const Table = () => {
  return (
    <>
      <div className='main'>
        <div className='main-wrapper container'>
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
