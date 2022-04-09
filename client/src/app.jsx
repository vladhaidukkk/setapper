import React from 'react';
import { AccountUploader, ErrorHandler, ModalProvider, PresetsUploader, SetupsUploader, ThemeProvider } from 'hoc';
import routes from 'routes';
import { useRoutes } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider>
      <ErrorHandler>
        <AccountUploader>
          <SetupsUploader>
            <PresetsUploader>
              <ModalProvider>{useRoutes(routes)}</ModalProvider>
            </PresetsUploader>
          </SetupsUploader>
        </AccountUploader>
      </ErrorHandler>
    </ThemeProvider>
  );
}

export default App;
