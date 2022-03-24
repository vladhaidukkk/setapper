import React from 'react';
import { AccountUploader, ErrorHandler, ThemeProvider } from 'hoc';
import routes from 'routes';
import { useRoutes } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider>
      <ErrorHandler>
        <AccountUploader>{useRoutes(routes)}</AccountUploader>
      </ErrorHandler>
    </ThemeProvider>
  );
}

export default App;
