import React, { useEffect } from 'react';
import './App.css';
import {Redirect, Route, Switch,BrowserRouter} from "react-router-dom";
import {Auth} from './Components/Auth/auth'
import {Panel} from './Components/Panel/panel'



function App() {
  return (
      <React.Fragment>
        <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => (
              <Redirect to="/panel/"/>
          )}/>
          <Route  path='/auth/' component={Auth}/>
          <Route  path='/panel' component={Panel}/>
          <Route path="**" render={() => (
              <Redirect to="/panel"/>
          )}/>
        </Switch>
        </BrowserRouter>
      </React.Fragment>
  );
}

export default App;
