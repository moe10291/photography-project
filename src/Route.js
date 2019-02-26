import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Landing from './components/Landing'
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

const route=(
    <Switch>
        <Route path='/' component={Landing} exact/>
        <Route path='/about' component={About}/>
        <Route path='/portfolio' component={Portfolio}/>
        <Route path='/contact' component={Contact}/>
    </Switch>
)

export default route;