import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './About';
import App from './App';
import Login from './Login';
import "../styles/style.scss";

const Main = () => { return (
   <main>
      <Switch>
         <Route exact path="/" component={Login} />
         <Route exact path="/app" component={App} />
         <Route exact path="/about" component={About} />
      </Switch>
   </main>   
)}

export default Main;
