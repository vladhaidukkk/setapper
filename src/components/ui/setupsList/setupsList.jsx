import React from 'react';
import PropTypes from 'prop-types';
import Setup from 'components/ui/setupsList/setup/setup';

function SetupsList({ list, matchString }) {
  return (
    <div className="flex grow flex-col overflow-y-auto">
      <div className="mb-2.5 h-px w-full bg-stone-300 dark:bg-stone-700" />
      {list ? (
        <ul className="flex grow flex-col space-y-2 overflow-y-auto">
          {list.map((item) => (
            <Setup key={item.id} {...item} matchString={matchString} />
          ))}
        </ul>
      ) : (
        <div>empty</div>
      )}
    </div>
  );
}

SetupsList.defaultProps = {
  list: undefined,
};

SetupsList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
  matchString: PropTypes.string.isRequired,
};

export default SetupsList;
