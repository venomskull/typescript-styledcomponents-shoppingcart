import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import App from './App';

const client = new QueryClient();

ReactDOM.render(
  // <React.StrictMode> //strict mode is not fixed yet with typescript. hence removing
  <QueryClientProvider client={client}>
    <App />
  </QueryClientProvider>,
  // </React.StrictMode>,
  document.getElementById('root')
);

