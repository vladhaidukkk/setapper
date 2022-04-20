import React from 'react';
import { useRoutes } from 'react-router-dom';
import { AccountUploader, AccountDataUploader, ErrorHandler, ModalProvider, ThemeProvider, DataUploader } from './hoc';
import routes from './routes';

function App() {
  return (
    <ThemeProvider>
      <ErrorHandler>
        <AccountUploader>
          <AccountDataUploader>
            <DataUploader>
              <ModalProvider>{useRoutes(routes)}</ModalProvider>
            </DataUploader>
          </AccountDataUploader>
        </AccountUploader>
      </ErrorHandler>
    </ThemeProvider>
  );
}

export default App;
