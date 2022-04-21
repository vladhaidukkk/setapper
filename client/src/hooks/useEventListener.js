import { useCallback, useRef } from 'react';

const useEventListener = (target, event, callback) => {
  const isListening = useRef(false);
  const action = useCallback(callback, []);

  const addListener = () => {
    if (!isListening.current) {
      target.addEventListener(event, action);
      isListening.current = true;
    }
  };

  const removeListener = () => {
    if (isListening.current) {
      target.removeEventListener(event, action);
      isListening.current = false;
    }
  };

  return { addListener, removeListener };
};

export default useEventListener;
