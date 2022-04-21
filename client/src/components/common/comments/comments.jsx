import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import CommentsList from './commentsList/commentsList';
import { getCommentsLoadingStatus } from '../../../store/comments/comments.selectors';
import { SpinLoader } from '../loaders';

function Comments({ title, list, children }) {
  const isLoading = useSelector(getCommentsLoadingStatus());

  return (
    <div className="space-y-2.5">
      <h4 className="text-md font-medium text-stone-900 dark:text-stone-100">{title}</h4>
      {children}
      {!isLoading ? (
        <CommentsList list={list} />
      ) : (
        <div className="flex w-max items-center rounded-md border border-stone-300 bg-stone-50 p-1.5 pr-2.5 text-sm text-stone-700 shadow-sm dark:border-stone-700 dark:bg-stone-900 dark:text-stone-300">
          <SpinLoader className="mr-1.5 h-4.5 w-4.5" />
          <div>Loading comments...</div>
        </div>
      )}
    </div>
  );
}

Comments.defaultProps = {
  title: 'Comments',
  list: null,
};

Comments.propTypes = {
  title: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.object),
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};

export default Comments;
