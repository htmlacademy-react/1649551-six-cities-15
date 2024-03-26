import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { offers } from './mocks/cards/cards-mocks';
import { AuthorizationStatus } from './consts/consts';
import { Provider } from 'react-redux';
import { store } from './store';

const authorizationStatus = AuthorizationStatus.Auth;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        offers={offers}
        authorizationStatus = {authorizationStatus}
      />
    </Provider>
  </React.StrictMode>
);
