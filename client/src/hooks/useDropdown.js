import { useEffect, useState } from 'react';
import useEventListener from './useEventListener';

const useDropdown = (parentId) => {
  const [isOpened, setOpened] = useState(false);
  const { addListener, removeListener } = useEventListener(window, 'click', ({ target }) => {
    const parent = target.closest(`#${parentId}`);
    if (!parent) setOpened(() => false);
  });

  useEffect(() => {
    if (isOpened) addListener();
    else removeListener();

    return removeListener;
  }, [isOpened]);

  const toggle = () => {
    setOpened((prev) => !prev);
  };

  return { isOpened, toggle };
};

export default useDropdown;
