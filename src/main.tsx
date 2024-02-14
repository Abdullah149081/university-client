import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Toaster } from 'sonner';
import './index.css';
import { persisTor, store } from './redux/store';
import router from './routes/routes';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persisTor}>
        <RouterProvider router={router} />
      </PersistGate>
      <Toaster />
    </Provider>
  </React.StrictMode>
);
