import React from 'react';
import PropTypes from 'prop-types';
import { BanIcon } from '@heroicons/react/solid';
import { orderBy } from 'lodash';
import Comment from '../comment/comment';

function CommentsList({ list }) {
  const orderedList = list ? orderBy(list, 'createdAt', 'desc') : list;

  return orderedList && orderedList?.length !== 0 ? (
    <ul className="space-y-2.5">
      {orderedList.map((item) => {
        return <Comment key={item._id} comment={item} />;
      })}
    </ul>
  ) : (
    <div className="flex w-max items-center rounded-md border border-stone-300 bg-stone-50 p-1.5 pr-2.5 text-sm text-stone-700 shadow-sm dark:border-stone-700 dark:bg-stone-900 dark:text-stone-300">
      <BanIcon className="mr-1.5 h-4.5 w-4.5" />
      <div>No comments was left</div>
    </div>
  );
}

CommentsList.defaultProps = {
  list: undefined,
};

CommentsList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
};

export default CommentsList;
