import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from '../pages/Login'
import T_board from '../pages/T_board';
import '../css/Main.css'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login}/>
                <Route exact path="/t-board" component={T_board}/>
            </Switch>
        </BrowserRouter>
    );
}