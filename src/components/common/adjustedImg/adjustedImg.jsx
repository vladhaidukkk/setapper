import React from 'react';
import PropTypes from 'prop-types';

function AdjustedImg({ img, alt }) {
  return <img src={img} alt={alt} className="h-full w-full object-cover object-center" />;
}

AdjustedImg.propTypes = {
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default AdjustedImg;
