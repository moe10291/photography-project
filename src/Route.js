import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'
import Landing from './components/Landing'
import About from './components/About';

const route=(
    <Switch>
        <Route path='/' component={Landing} exact/>
        <Route path='/about' component={About}/>
    </Switch>
)

export default route;