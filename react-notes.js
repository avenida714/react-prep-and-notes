// let's go notes

//npx create-react-app my-app --template @appacademy/react-v17 --use-npm

// cd my-app && npm install --save react-router-dom@^5.1.2


//npm start


//./src/index.js
import {BrowserRouter} from 'react-router-dom';



//./src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';


const Root = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};