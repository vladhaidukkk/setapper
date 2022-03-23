import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'store/auth/auth.actions';
import { Link } from 'react-router-dom';
import { themeConstants } from 'utils/constants';
import { useTheme } from 'hooks';
import { getLoggedInStatus } from 'store/auth/auth.selectors';

function Home() {
  const dispatch = useDispatch();
  const { theme, changeTheme } = useTheme();
  const isLoggedIn = useSelector(getLoggedInStatus());

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
      <header className="bg-zinc-300 p-2.5 dark:bg-zinc-900">
        <div className="container mx-auto flex items-center justify-between">
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
        </div>
      </header>
      <main>
        <section className="bg-gradient-to-br from-cyan-500 to-blue-500 py-20">
          <div className="container mx-auto flex">
            <div className="basis-3/5 space-y-2">
              <h1 className="text-7xl">Welcome to Setapper :)</h1>
              <h2 className="text-4xl">A tool that will speed up the setup of your project at times</h2>
              {!isLoggedIn && (
                <p>
                  You aren’t registered yet. It’s not late, just{' '}
                  <Link className="text-violet-600 underline" to="/auth/registration">
                    Sign Up
                  </Link>
                </p>
              )}
            </div>
            <div className="flex basis-2/5 justify-center">
              <h1>some animation</h1>
            </div>
          </div>
        </section>
        <section className="bg-zinc-200 pt-16 pb-28 dark:bg-zinc-700">
          <div className="container mx-auto">
            <h1 className="mb-10 text-center text-4xl">Builder options</h1>
            <div>
              <ul className="grid grid-cols-2 justify-items-center gap-y-3">
                <li className="rounded bg-gradient-to-br from-violet-300 to-violet-500 px-2 py-1 text-zinc-900">
                  Webpack
                </li>
                <li className="rounded bg-gradient-to-br from-violet-300 to-violet-500 px-2 py-1 text-zinc-900">
                  Rollup
                </li>
                <li className="rounded bg-gradient-to-br from-violet-300 to-violet-500 px-2 py-1 text-zinc-900">
                  Gulp
                </li>
                <li className="rounded bg-gradient-to-br from-violet-300 to-violet-500 px-2 py-1 text-zinc-900">
                  Eslint
                </li>
                <li className="rounded bg-gradient-to-br from-violet-300 to-violet-500 px-2 py-1 text-zinc-900">
                  Prettier
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
