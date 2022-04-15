import React from 'react';
import { useRoutes } from 'react-router-dom';
import { AccountUploader, DataUploader, ErrorHandler, ModalProvider, PresetsUploader, ThemeProvider } from './hoc';
import routes from './routes';

function App() {
  return (
    <ThemeProvider>
      <ErrorHandler>
        <AccountUploader>
          <DataUploader>
            <PresetsUploader>
              <ModalProvider>{useRoutes(routes)}</ModalProvider>
            </PresetsUploader>
          </DataUploader>
        </AccountUploader>
      </ErrorHandler>
    </ThemeProvider>
  );
}

export default App;
