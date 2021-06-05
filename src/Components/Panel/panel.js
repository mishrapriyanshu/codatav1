import {Redirect, Route, Switch,BrowserRouter} from "react-router-dom";
import Dashboard from '../Dashboard/Dashboard';

import React from "react";

export let Panel = () =>{
    return(
        <Switch>
            <Route exact path='/panel/dashboard' component={Dashboard}/>
            <Redirect from ="**" to="/panel/dashboard"/>
        </Switch>
    )
};