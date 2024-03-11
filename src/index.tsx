import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { offers } from './mocks/cards/cards-mocks';
import { AuthorizationStatus } from './consts/consts';

const authorizationStatus = AuthorizationStatus.Auth;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      offers={offers}
      authorizationStatus = {authorizationStatus}
    />
  </React.StrictMode>
);
