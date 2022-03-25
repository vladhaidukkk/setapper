import React from 'react';
import { useDropdown } from 'hooks';
import FilterToggler from 'components/common/filter/filterToggler/filterToggler';
import FilterList from 'components/common/filter/filterList/filterList';
import PropTypes from 'prop-types';

function Filter({ id, value, onChange, iterTitle, iterOptions, orderTitle, orderOptions }) {
  const { isOpened, toggle } = useDropdown(id);

  const handleIterChange = (newIter) => {
    onChange(newIter, value.order);
  };

  const handleOrderChange = (newOrder) => {
    onChange(value.iter, newOrder);
  };

  return (
    <div id={id} className="group relative h-full w-10">
      <FilterToggler onToggle={toggle} />
      <div
        className={`absolute top-12 right-0 w-32 space-y-2 rounded-lg bg-red-100 bg-gradient-to-r
      from-sky-400 to-sky-500 px-3 py-2 drop-shadow-md ${isOpened ? 'block' : 'hidden'}`}
      >
        {iterOptions && (
          <FilterList onChange={handleIterChange} title={iterTitle} options={iterOptions} value={value.iter} />
        )}
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
  id: PropTypes.string.isRequired,
  value: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  iterTitle: PropTypes.string,
  iterOptions: PropTypes.arrayOf(PropTypes.object),
  orderTitle: PropTypes.string,
  orderOptions: PropTypes.arrayOf(PropTypes.object),
};

export default Filter;
