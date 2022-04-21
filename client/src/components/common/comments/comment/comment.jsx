import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { XIcon, CalendarIcon } from '@heroicons/react/solid';
import { useDispatch, useSelector } from 'react-redux';
import UserInfo from '../../userInfo';
import { getAccountId } from '../../../../store/auth/auth.selectors';
import { useModal } from '../../../../hooks';
import { removeComment } from '../../../../store/comments/comments.actions';
import CommentDeletionPopup from '../../../ui/commentDeletionPopup';
import { getCommentLike } from '../../../../store/likes/likes.selectors';
import { createLike, removeLike } from '../../../../store/likes/likes.actions';
import LikeBtn from '../likeBtn/likeBtn';

function Comment({ comment }) {
  const dispatch = useDispatch();
  const accountId = useSelector(getAccountId());
  const like = useSelector(getCommentLike(comment._id));
  const { open, close } = useModal();

  const handleConfirmDeletion = () => {
    close();
    dispatch(removeComment(comment._id));
  };

  const handleDelete = () => {
    open(<CommentDeletionPopup onConfirm={handleConfirmDeletion} onCancel={close} />);
  };

  const handleLike = () => {
    dispatch(createLike({ commentId: comment._id }));
  };

  const handleDislike = () => {
    dispatch(removeLike(like._id, comment._id));
  };

  return (
    <li className="w-11/12 space-y-2.5 rounded-md border border-stone-300 bg-stone-50 p-2.5 dark:border-stone-700 dark:bg-stone-900">
      <div className="flex items-start justify-between space-x-2.5">
        <UserInfo userId={comment.ownerId} />
        {accountId === comment.ownerId && (
          <button
            type="button"
            className="text-stone-600 outline-none transition-colors duration-200 hover:text-rose-600 focus:text-rose-600 dark:text-stone-400 dark:hover:text-rose-500 dark:focus:text-rose-500"
            onClick={handleDelete}
          >
            <XIcon className="h-4 w-4" />
          </button>
        )}
      </div>
      <p className="text-black dark:text-white">{comment.message}</p>
      <div className="flex items-center space-x-2.5">
        <div className="text flex items-center space-x-1.5 rounded-md border border-stone-300 bg-white px-2.5 py-1 text-xs text-stone-700 shadow-sm dark:border-stone-700 dark:bg-stone-800 dark:text-stone-300">
          <LikeBtn liked={!!like} onLike={handleLike} onDislike={handleDislike} />
          <span>{comment.likesAmount}</span>
        </div>
        <div className="text flex items-center space-x-1.5 rounded-md border border-stone-300 bg-white px-2.5 py-1 text-xs text-stone-700 shadow-sm dark:border-stone-700 dark:bg-stone-800 dark:text-stone-300">
          <CalendarIcon className="h-3.5 w-3.5" />
          <span>{moment(comment.createdAt).startOf('minute').fromNow()}</span>
        </div>
      </div>
    </li>
  );
}

Comment.propTypes = {
  comment: PropTypes.object.isRequired,
};

export default React.memo(Comment);
