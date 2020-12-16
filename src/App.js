import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import DmNav from './components/DmNav'
import Home from './components/Home'

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

    const home = () =>{ return <div className="wrapper"><Home/></div> }

    return (
        <div>
            <Header/>
            <DmNav/>
            <Switch>
            <Route exact path="/" component={home} />
            </Switch>
        </div>
    )
}

export default App
