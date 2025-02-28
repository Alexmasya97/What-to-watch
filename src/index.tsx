import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';


const NAME = 'The Grand Budapest Hotel';
const GENRE = 'Drama';
const YEAR = 2014;


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App name={NAME} genre={GENRE} year = {YEAR} />
  </React.StrictMode>,
);
