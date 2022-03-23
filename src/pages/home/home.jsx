import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from 'store/auth/auth.actions';
import { Link } from 'react-router-dom';
import { themeConstants } from 'utils/constants';
import { useTheme } from 'hooks';

function Home() {
  const dispatch = useDispatch();
  const { theme, changeTheme } = useTheme();

  const [isOpened, setOpened] = useState(false);

  const toggleOpened = () => {
    setOpened((prev) => !prev);
  };

  const handleThemeChange = ({ target }) => {
    changeTheme(target.value);
  };

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <div>
      <header className="flex items-center justify-between bg-zinc-300 p-2.5 dark:bg-zinc-900">
        <div>Logo</div>
        <nav className="flex items-center space-x-2.5">
          <select
            className="rounded bg-zinc-400 px-1.5 py-1 dark:bg-zinc-700"
            onChange={handleThemeChange}
            value={theme}
          >
            <option value={themeConstants.LIGHT}>{themeConstants.LIGHT}</option>
            <option value={themeConstants.DARK}>{themeConstants.DARK}</option>
            <option value={themeConstants.SYSTEM}>{themeConstants.SYSTEM}</option>
          </select>
          <div>
            <Link to="/">Home</Link>
            <Link to="/presets">Presets</Link>
            <Link to="/builder">Builder</Link>
          </div>
          <div className="relative">
            <button type="button" onClick={toggleOpened}>
              <div className="flex h-8 w-8 items-center justify-center rounded bg-zinc-400 dark:bg-zinc-700">ava</div>
            </button>
            <div
              className={`${
                isOpened ? 'block' : 'hidden'
              } absolute top-full right-0 rounded bg-zinc-300 p-2.5 dark:bg-zinc-900`}
            >
              <ul>
                <li>
                  <Link to="/settings">Account</Link>
                </li>
                <li>
                  <Link to="/settings">Settings</Link>
                </li>
                <li>
                  <button type="button" onClick={handleLogOut}>
                    Log out
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <h1>Main page (welcome)</h1>
      <button className="m-2 rounded bg-blue-200 py-1 px-2" type="button" onClick={() => dispatch(logOut())}>
        log out
      </button>
    </div>
  );
}

export default Home;
