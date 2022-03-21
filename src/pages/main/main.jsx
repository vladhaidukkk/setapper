import React from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from 'store/auth/auth.actions';

function Main() {
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Main page (welcome)</h1>
      <button className="bg-blue-200 rounded py-1 px-2 m-2" type="button" onClick={() => dispatch(logOut())}>
        log out
      </button>
    </div>
  );
}

export default Main;
