import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCommentsList } from '../../../store/comments/comments.selectors';
import { createComment, loadSetupComments } from '../../../store/comments/comments.actions';
import Comments, { CommentsForm } from '../../common/comments';

function SetupComments() {
  const { setupId } = useParams();
  const dispatch = useDispatch();
  const comments = useSelector(getCommentsList());

  useEffect(() => {
    if (setupId) {
      dispatch(loadSetupComments(setupId));
    }
  }, [setupId]);

  const handleCommentSubmit = (data) => {
    dispatch(createComment({ ...data, setupId }));
  };

  return (
    <Comments title="Setup comments" list={comments}>
      <CommentsForm onSubmit={handleCommentSubmit} />
    </Comments>
  );
}

export default SetupComments;
