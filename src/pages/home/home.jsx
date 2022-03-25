import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'store/auth/auth.actions';
import { Link } from 'react-router-dom';
import { themeConstants } from 'utils/constants';
import { useEventListener, useTheme } from 'hooks';
import { getLoggedInStatus } from 'store/auth/auth.selectors';

function Home() {
  const dispatch = useDispatch();
  const { theme, changeTheme } = useTheme();
  const isLoggedIn = useSelector(getLoggedInStatus());

  const [isOpened, setOpened] = useState(false);
  // todo: use dropdown
  const { addListener, removeListener } = useEventListener(window, 'click', ({ target }) => {
    const sortIsParent = target.closest(`#id`);
    if (!sortIsParent) setOpened(() => false);
  });

  useEffect(() => {
    if (isOpened) addListener();
    else removeListener();

    return removeListener;
  }, [isOpened]);

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
      <header className="bg-gray-300 p-2.5 dark:bg-gray-900">
        <div className="container mx-auto flex items-center justify-between">
          <div>Logo</div>
          <nav className="flex items-center space-x-3">
            <select
              className="rounded bg-gray-400 px-1.5 py-1 dark:bg-gray-700"
              onChange={handleThemeChange}
              value={theme}
            >
              <option value={themeConstants.LIGHT}>{themeConstants.LIGHT}</option>
              <option value={themeConstants.DARK}>{themeConstants.DARK}</option>
              <option value={themeConstants.SYSTEM}>{themeConstants.SYSTEM}</option>
            </select>
            <div className="space-x-3">
              <Link to="/">Home</Link>
              <Link to="/presets">Presets</Link>
              <Link to="/builder">Builder</Link>
              <Link to="/auth/login">Login</Link>
              <Link to="/auth/registration">Signup</Link>
            </div>
            <div className="relative" id="id">
              <button type="button" onClick={toggleOpened}>
                <div className="flex h-8 w-8 items-center justify-center rounded bg-zinc-400 dark:bg-gray-700">VH</div>
              </button>
              <div
                className={`${
                  isOpened ? 'block' : 'hidden'
                } absolute top-full right-0 rounded bg-zinc-300 p-3 dark:bg-gray-900`}
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
        <section className="bg-gray-700 py-32">
          <div className="container mx-auto flex">
            <div className="basis-3/5 space-y-3">
              <h1 className="text-7xl">Welcome to Setapper :)</h1>
              <h2 className="text-4xl">A tool that will speed up the setup of your project at times</h2>
              {!isLoggedIn ? (
                <p>
                  You aren’t registered yet. It’s not late, just{' '}
                  <Link className="text-violet-600 underline" to="/auth/registration">
                    Sign Up
                  </Link>
                </p>
              ) : (
                <div className="space-y-3 pt-2">
                  <div className="flex space-x-4">
                    <Link to="/presets" className="rounded bg-sky-400 px-3 py-1.5 shadow">
                      Presets
                    </Link>
                    <Link to="/builder" className="rounded bg-sky-400 px-3 py-1.5 shadow">
                      Builder
                    </Link>
                  </div>
                  <p className="text-md">Don&apos;t waste your time any more!</p>
                </div>
              )}
            </div>
            <div className="flex basis-2/5 justify-center">
              <h1>some animation</h1>
            </div>
          </div>
        </section>
        <section className="bg-gray-800 pt-16 pb-28 dark:bg-gray-800">
          <div className="container mx-auto">
            <h1 className="mb-10 text-center text-4xl">Builder options</h1>
            <div>
              <ul className="grid grid-cols-2 justify-items-center gap-y-3">
                <li className="rounded bg-gradient-to-br from-sky-400 to-sky-500 px-3 py-1.5 text-lg text-zinc-50 text-zinc-900">
                  Webpack
                </li>
                <li className="rounded bg-gradient-to-br from-sky-400 to-sky-500 px-3 py-1.5 text-lg text-zinc-50 text-zinc-900">
                  Rollup
                </li>
                <li className="rounded bg-gradient-to-br from-sky-400 to-sky-500 px-3 py-1.5 text-lg text-zinc-50 text-zinc-900">
                  Gulp
                </li>
                <li className="rounded bg-gradient-to-br from-sky-400 to-sky-500 px-3 py-1.5 text-lg text-zinc-50 text-zinc-900">
                  Eslint
                </li>
                <li className="rounded bg-gradient-to-br from-sky-400 to-sky-500 px-3 py-1.5 text-lg text-zinc-50 text-zinc-900">
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
