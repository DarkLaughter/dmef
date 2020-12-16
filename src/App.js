import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import DmNav from './components/DmNav'
import Home from './components/Home'

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <div>
            <Header/>
            <DmNav/>
            <Switch>
            <div className="layout">
            <Route exact path="/" component={Home} />
            </div>
            </Switch>
        </div>
    )
}

export default App
