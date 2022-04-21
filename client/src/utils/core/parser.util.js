import React from 'react';

const strToJsx = (str, delimiter, elem) => {
  const splitRegex = new RegExp(`(${delimiter})`, 'gi');
  const insertRegex = new RegExp(delimiter, 'i');

  const parts = str.split(splitRegex);
  return parts.map((part, index) => {
    if (insertRegex.test(part)) {
      // eslint-disable-next-line react/no-array-index-key
      return React.cloneElement(elem, { key: index }, part);
    }
    return part;
  });
};

const parserUtil = {
  strToJsx,
};

export default parserUtil;
