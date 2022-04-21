import { useRef } from 'react';
import { nanoid } from 'nanoid';

const useRandomId = (prefix = '') => {
  const idRef = useRef(`${prefix}${nanoid()}`);
  return idRef.current;
};

export default useRandomId;
