import React from 'react';
import { AppRouter } from 'components/routing';
import localStorageService from 'services/localStorage.service';
import ErrorHandler from 'hoc';

function App() {
  const accountId = localStorageService.getAccountId();
  const ls = localStorageService.getJwtAccessToken();

  console.log(accountId, ls);

  return (
    <ErrorHandler>
      <AppRouter />
    </ErrorHandler>
  );
}

export default App;
