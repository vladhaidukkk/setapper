import React from 'react';
import { AppRouter } from 'components/routing';
import localStorageService from 'services/localStorage.service';
import { ErrorHandler, ThemeProvider } from 'hoc';

function App() {
  const accountId = localStorageService.getAccountId();
  const ls = localStorageService.getJwtAccessToken();

  console.log(accountId, ls);

  return (
    <ThemeProvider>
      <ErrorHandler>
        <AppRouter />
      </ErrorHandler>
    </ThemeProvider>
  );
}

export default App;
