import React from 'react';
import { AppRouter } from 'components/routing';
import { AccountUploader, ErrorHandler, ThemeProvider } from 'hoc';

function App() {
  return (
    <ThemeProvider>
      <ErrorHandler>
        <AccountUploader>
          <AppRouter />
        </AccountUploader>
      </ErrorHandler>
    </ThemeProvider>
  );
}

export default App;
