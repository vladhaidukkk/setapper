import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Comments, { CommentsForm } from '../../common/comments';
import { createComment, loadPresetComments } from '../../../store/comments/comments.actions';
import { getCommentsList } from '../../../store/comments/comments.selectors';
import { PrivateElement } from '../../../hoc';

function PresetComments() {
  const { presetId } = useParams();
  const dispatch = useDispatch();
  const comments = useSelector(getCommentsList());

  useEffect(() => {
    if (presetId) {
      dispatch(loadPresetComments(presetId));
    }
  }, [presetId]);

  const handleCommentSubmit = (data) => {
    dispatch(createComment({ ...data, presetId }));
  };

  return (
    <Comments title="Preset comments" list={comments}>
      <PrivateElement>
        <CommentsForm onSubmit={handleCommentSubmit} />
      </PrivateElement>
    </Comments>
  );
}

export default PresetComments;
