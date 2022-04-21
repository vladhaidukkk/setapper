import React from 'react';
import { HeartIcon as HeartIconOutlined } from '@heroicons/react/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/solid';
import PropTypes from 'prop-types';

function LikeBtn({ liked, onLike, onDislike }) {
  return (
    <button type="button" onClick={liked ? onDislike : onLike} className="group relative h-3.5 w-3.5">
      <HeartIconOutlined
        className={`absolute inset-0 h-3.5 w-3.5 transition-all group-hover:opacity-0 ${
          liked ? 'opacity-0' : 'opacity-100'
        }`}
      />
      <HeartIconSolid
        className={`absolute inset-0 h-3.5 w-3.5 text-rose-500 transition-all group-hover:visible group-hover:opacity-100 ${
          liked ? 'opacity-100' : 'invisible opacity-0'
        }`}
      />
    </button>
  );
}

LikeBtn.propTypes = {
  liked: PropTypes.bool.isRequired,
  onLike: PropTypes.func.isRequired,
  onDislike: PropTypes.func.isRequired,
};

export default LikeBtn;
