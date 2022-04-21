import React from 'react';
import PropTypes from 'prop-types';
import { useDropdown, useRandomId } from '../../../hooks';
import FilterToggler from './filterToggler/filterToggler';
import FilterList from './filterList/filterList';

function Filter({ value, onChange, iterTitle, iterOptions, orderTitle, orderOptions }) {
  const id = useRandomId('filter-');
  const { isOpened, toggle } = useDropdown(id);

  const handleIterChange = (newIter) => {
    onChange(newIter, value.order);
  };

  const handleOrderChange = (newOrder) => {
    onChange(value.iter, newOrder);
  };

  return (
    <div id={id} className="group relative flex h-full w-10 items-center justify-center">
      <FilterToggler onToggle={toggle} />
      <div
        className={`absolute top-full right-0 z-20 min-w-[11rem] translate-y-2.5 rounded-md border border-stone-300 bg-white p-2
        shadow-md dark:border-stone-700 dark:bg-stone-800 ${isOpened ? 'block' : 'hidden'}`}
      >
        {iterOptions && (
          <FilterList onChange={handleIterChange} title={iterTitle} options={iterOptions} value={value.iter} />
        )}
        {iterOptions && orderOptions && <div className="my-1 h-px w-full bg-stone-300 dark:bg-stone-700" />}
        {orderOptions && (
          <FilterList onChange={handleOrderChange} title={orderTitle} options={orderOptions} value={value.order} />
        )}
      </div>
    </div>
  );
}

Filter.defaultProps = {
  iterTitle: 'Sort by:',
  iterOptions: undefined,
  orderTitle: 'Order:',
  orderOptions: undefined,
};

Filter.propTypes = {
  value: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  iterTitle: PropTypes.string,
  iterOptions: PropTypes.arrayOf(PropTypes.object),
  orderTitle: PropTypes.string,
  orderOptions: PropTypes.arrayOf(PropTypes.object),
};

export default Filter;
