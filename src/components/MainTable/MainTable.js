import React from 'react';
import headerTable from '../HeaderTable/HeaderTable';
// import getObjData from '../helpers/dataObject';
// import faker from 'faker';

const MainTable = () => {
  return (
    <>
      <div className='main'>
        <div className='main-wrapper container'>
          <table className='table'>
            <caption>Title of table</caption>
            <thead>
              <tr>{headerTable()}</tr>
            </thead>
            {}
          </table>
        </div>
      </div>
    </>
  );
};

export default MainTable;
