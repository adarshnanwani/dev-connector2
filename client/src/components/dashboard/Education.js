import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';

const Education = ({ education }) => {
  const educations =
    education &&
    education.map(({ _id, school, degree, from, to }) => (
      <tr key={_id}>
        <td>{school}</td>
        <td>{degree}</td>
        <td>
          <Moment format='YYYY/MM/DD'>{from}</Moment> -{' '}
          {to === null ? 'Now' : <Moment format='YYYY/MM/DD'>{to}</Moment>}
        </td>
        <td>
          <button className='btn btn-danger'>Delete</button>
        </td>
      </tr>
    ));
  return (
    <>
      <h2 className='my-2'>Experience Credentials</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>School</th>
            <th className='hide-sm'>Degree</th>
            <th className='hide-sm'>Years</th>
            <th />
          </tr>
        </thead>
        <tbody>{educations}</tbody>
      </table>
    </>
  );
};

Education.propTypes = {
  education: PropTypes.array.isRequired,
};

export default connect()(Education);
