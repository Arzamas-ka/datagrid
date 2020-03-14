import React from 'react';
import shortid from 'shortid';
import headerTable from '../HeaderTable/HeaderTable';
import getObjData from '../helpers/dataObject';
import faker from 'faker';
import pencilImg from '../../images/pencil.svg';
import deleteImg from '../../images/delete.svg';

const arrData = faker => {
  let arr = [];
  let counter = 1100;
  while (counter > 0) {
    counter--;
    arr.push(getObjData(faker));
  }
  return arr;
};
const arrDataTable = arrData(faker);

const MainTable = () => {
  return (
    <>
      <div className='main'>
        <div className='main-wrapper container'>
          <table className='table'>
            <caption>Personal data</caption>
            <thead>
              <tr>{headerTable()}</tr>
            </thead>



            <tbody>
              {arrDataTable.map((cell, ind) => {
                return (
                  <tr className='row' key={shortid.generate()}>
                    <th className='scope'>{ind}</th>
                    <td>
                      <img src={cell.avatar} alt='avatar' />
                    </td>
                    <td>{cell.firstName}</td>
                    <td>{cell.lastName}</td>
                    <td className='tel'>
                      <a href={`tel:${cell.tel}`}>{cell.tel} </a>
                    </td>
                    <td className='job'>{cell.job}</td>
                    <td>{cell.jobType}</td>
                    <td>
                      <a href={`${cell.linkedInProfile}`}>
                        {cell.linkedInProfile}
                      </a>
                    </td>
                    <td>{cell.married ? 'Yes' : 'No'}</td>
                    <td className='actions'>
                      <img className='pencil' src={pencilImg} alt='pencil' />
                      <img className='delete' src={deleteImg} alt='delete' />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default MainTable;
