import React from 'react';
import { AppRouter } from 'components/routing';
import localStorageService from 'services/localStorage.service';

function App() {
  const accountId = localStorageService.getAccountId();
  const ls = localStorageService.getJwtAccessToken();

  console.log(accountId, ls);

  return <AppRouter />;
}

export default App;
