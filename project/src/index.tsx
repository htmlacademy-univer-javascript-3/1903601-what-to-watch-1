import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const title = 'Titanic';
const date = '1999';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App date={date} title={title}/>
  </React.StrictMode>,
);
