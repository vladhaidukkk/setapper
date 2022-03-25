import useEventListener from 'hooks/useEventListener';
import { useEffect, useState } from 'react';

const useDropdown = (id) => {
  const [isOpened, setOpened] = useState(false);
  const { addListener, removeListener } = useEventListener(window, 'click', ({ target }) => {
    const parent = target.closest(`#${id}`);
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
