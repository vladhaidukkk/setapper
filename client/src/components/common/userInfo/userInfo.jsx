import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import AdjustedImg from '../adjustedImg';
import { getUserById } from '../../../store/users/users.selectors';
import { PulsingLoader } from '../loaders';

function UserInfo({ userId }) {
  const user = useSelector(getUserById(userId));

  return user ? (
    <div className="flex items-center space-x-2.5">
      <div className="h-8 w-8 overflow-hidden rounded-md border border-stone-300 shadow-sm dark:border-stone-700">
        {user ? <AdjustedImg alt="Owner avatar" img={user.avatarLink} /> : <PulsingLoader />}
      </div>
      <div className="flex flex-col">
        <span className="text-sm font-medium text-black dark:text-white">{user.username}</span>
        <span className="text-xs text-stone-800 dark:text-stone-200">{user.email}</span>
      </div>
    </div>
  ) : null;
}

UserInfo.propTypes = {
  userId: PropTypes.string.isRequired,
};

export default UserInfo;
