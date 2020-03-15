import React, { Component, Fragment } from 'react';
import pencilImg from '../../images/pencil.svg';
import deleteImg from '../../images/delete.svg';

class TableRow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isShowEditPerson: false,
      id: props.cell.id,
      avatar: props.cell.avatar,
      name: props.cell.name,
      tel: props.cell.tel,
      job: props.cell.job,
      jobType: props.cell.jobType,
      experience: props.cell.experience,
      linkedInProfile: props.cell.linkedInProfile,
      married: props.cell.married
    };
  }

  handleEdit = () =>
    this.setState(({ isShowEditPerson }) => ({
      isShowEditPerson: !isShowEditPerson
    }));

  handleSave = () => {
    const {
      updatePerson,
      cell: { id }
    } = this.props;

    const { isShowEditPerson, ...restState } = this.state;

    const updatedPerson = {
      ...restState,
      prevId: id,
      id: Number(restState.id),
      experience: Number(restState.experience),
      married: this.state.married === 'true' ? true : false
    };
    updatePerson(updatedPerson);

    this.setState({ isShowEditPerson: !isShowEditPerson });
  };

  handleFieldsChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { cell, deletePerson } = this.props;
    const { isShowEditPerson } = this.state;

    return (
      <Fragment>
        <tr className='row'>
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
            <img
              className='pencil'
              onClick={this.handleEdit}
              src={pencilImg}
              alt='pencil'
            />
            <img
              className='delete'
              onClick={() => deletePerson(cell.id)}
              src={deleteImg}
              alt='delete'
            />
          </td>
        </tr>
        {isShowEditPerson && (
          <tr className='row row--editable'>
            <th className='scope'>
              <input
                name='id'
                type='number'
                value={this.state.id}
                onChange={this.handleFieldsChange}
              />
            </th>
            <td>
              {
                <input
                  name='avatar'
                  type='text'
                  value={this.state.avatar}
                  onChange={this.handleFieldsChange}
                />
              }
            </td>
            <td>
              <input
                name='name'
                type='text'
                value={this.state.name}
                onChange={this.handleFieldsChange}
              />
            </td>
            <td className='tel'>
              <input
                name='tel'
                type='text'
                value={this.state.tel}
                onChange={this.handleFieldsChange}
              />
            </td>
            <td className='job'>
              <input
                name='job'
                type='text'
                value={this.state.job}
                onChange={this.handleFieldsChange}
              />
            </td>
            <td>
              <input
                name='jobType'
                type='text'
                value={this.state.jobType}
                onChange={this.handleFieldsChange}
              />
            </td>
            <td>
              <input
                name='experience'
                type='number'
                value={this.state.experience}
                onChange={this.handleFieldsChange}
              />
            </td>
            <td>
              <input
                name='linkedInProfile'
                type='text'
                value={this.state.linkedInProfile}
                onChange={this.handleFieldsChange}
              />
            </td>
            <td>
              <select
                name='married'
                value={this.state.married}
                onChange={this.handleFieldsChange}
              >
                <option value='true'>Yes</option>
                <option value='false'>No</option>
              </select>
            </td>
            <td className='actions actions--edit'>
              <button
                onClick={this.handleSave}
                className='actions__button  actions__button--save'
              >
                Save
              </button>
              <button
                onClick={this.handleEdit}
                className='actions__button  actions__button--cancel'
              >
                Cancel
              </button>
            </td>
          </tr>
        )}
      </Fragment>
    );
  }
}

export default TableRow;
