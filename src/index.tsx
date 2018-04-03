import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/Main';
import "./styles/style.scss";

ReactDOM.render(
   <BrowserRouter>
      <Main/>
   </BrowserRouter>
   , 
   document.getElementById('root')
);