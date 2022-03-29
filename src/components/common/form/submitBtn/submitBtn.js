import React from 'react';
import PropTypes from 'prop-types';

function SubmitBtn({ children }) {
  return <button type="submit">{children}</button>;
}

SubmitBtn.defaultProps = {
  children: <>Submit</>,
};

SubmitBtn.propTypes = {
  children: PropTypes.node,
};

export default SubmitBtn;
