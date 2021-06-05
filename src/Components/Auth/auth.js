import React, { useEffect } from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {Login} from '../Auth/login';
import {registeration} from '../Auth/registeration';
export let Auth =()=>{
    return(
        <Switch>
            <Route exact path='/auth/login' component={Login}/>
            <Route exact path='/auth/register' component={registeration}/>
            <Redirect from ="**" to="/auth/login"/>
        </Switch>
    )
}