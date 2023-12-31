import React from 'react';
import { createRoot } from 'react-dom/client';
import { configureApi } from 'react-reqq';
import { Provider } from 'react-redux';
import App from './App';
import './index.scss';

const container = document.getElementById('root');
const root = createRoot(container);

export const store = configureApi({
  endpoint: process.env.REACT_APP_END_POINT,
});

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
