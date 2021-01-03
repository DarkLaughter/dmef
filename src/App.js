import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import DmNav from './components/DmNav'
import Home from './components/Home'
import PageDefault from './components/PageDefault'
import SearchPage from './components/SearchPage';
import SearchGroup from './components/SearchGroup';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

    const home = () => { return <div className="wrapper"><Home/></div> }
    const pageDefault = () => {return <div className="wrapper"><PageDefault/></div>}
    const searchPage = () => {return <div className="wrapper" ><SearchPage/></div> }

    return (
        <div>
            <Header/>
            <DmNav/>
            <Switch>
            <Route exact path="/" component={home} />
            <Route exact path="/default" component={pageDefault}/>
            <Route exact path="/search" component={searchPage} />
            <Route exact path="/Group" component={SearchGroup} />
            </Switch>
        </div>
    )
}

export default App
