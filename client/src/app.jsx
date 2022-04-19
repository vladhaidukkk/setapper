import React from 'react';
import { useRoutes } from 'react-router-dom';
import {
  AccountUploader,
  AccountDataUploader,
  ErrorHandler,
  ModalProvider,
  PresetsUploader,
  ThemeProvider,
} from './hoc';
import routes from './routes';
import DataUploader from './hoc/dataUploader/dataUploader';

function App() {
  return (
    <ThemeProvider>
      <ErrorHandler>
        <AccountUploader>
          <AccountDataUploader>
            <PresetsUploader>
              <DataUploader>
                <ModalProvider>{useRoutes(routes)}</ModalProvider>
              </DataUploader>
            </PresetsUploader>
          </AccountDataUploader>
        </AccountUploader>
      </ErrorHandler>
    </ThemeProvider>
  );
}

export default App;
