import PropTypes from 'prop-types';
import React from 'react';
import CommentList from '../CommentList';
import { CommentType } from '../CommentType/CommentType';

export default function User({ user, comments }) {
  const { address, email, name } = user;
  const { street, suite, city, zipcode, geo } = address;
  const { lat, lng } = geo;

  return (
    <>
      <h3>
        {name}
      </h3>
      <a href={`malito:${email}`}>
        {email}
      </a>
      <address>
        {`City: ${city}`}
        <br />
        {`Street ${street}`}
        <br />
        {`Suite: ${suite}`}
        <br />
        {`Zipcode: ${zipcode}`}
        <br />
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${lat},${lng}`}
        >
          Geo
        </a>
      </address>
      <CommentList comments={comments} />
    </>
  );
}

User.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    address: PropTypes.shape({
      city: PropTypes.string.isRequired,
      street: PropTypes.string.isRequired,
      suite: PropTypes.string.isRequired,
      zipcode: PropTypes.string.isRequired,
      geo: PropTypes.shape({
        lat: PropTypes.string.isRequired,
        lng: PropTypes.string.isRequired,
      }),
    }).isRequired,
  }),
  comments: PropTypes.arrayOf(
    PropTypes.shape(CommentType),
  ).isRequired,
};

User.defaultProps = {
  user: null,
};
