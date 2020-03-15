import React from 'react';
import { connect } from 'react-redux';
import shortid from 'shortid';
import pencilImg from '../../images/pencil.svg';
import deleteImg from '../../images/delete.svg';

const TableBody = ({ people }) => {
  return (
    <tbody>
      {people.map(cell => {
        return (
          <tr className='row' key={shortid.generate()}>
            <th className='scope'>
              {cell.id.toLocaleString(navigator.language)}
            </th>
            <td>
              {
                // <img src={cell.avatar} alt='avatar' />
              }
            </td>
            <td>{cell.name}</td>
            <td className='tel'>
              <a href={`tel:${cell.tel}`}>{cell.tel} </a>
            </td>
            <td className='job'>
              <span>{cell.job}</span>
            </td>
            <td>{cell.jobType}</td>
            <td>{cell.experience.toLocaleString(navigator.language)}</td>
            <td>
              <a href={`${cell.linkedInProfile}`}>{cell.linkedInProfile}</a>
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
  );
};

const mapStateToProps = ({ people }) => ({ people });

export default connect(mapStateToProps, null)(TableBody);
