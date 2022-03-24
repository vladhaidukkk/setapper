import React from 'react';
import { AccountUploader, ErrorHandler, SetupsUploader, ThemeProvider } from 'hoc';
import routes from 'routes';
import { useRoutes } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider>
      <ErrorHandler>
        <AccountUploader>
          <SetupsUploader>{useRoutes(routes)}</SetupsUploader>
        </AccountUploader>
      </ErrorHandler>
    </ThemeProvider>
  );
}

export default App;
