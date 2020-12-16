import React from 'react'
// import Layout from './components/Layout';
import Header from './components/Header'
import DmNav from './components/DmNav'
import Home from './components/Home'

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <div>
            <Header/>
            <DmNav/>
            <Home/>
        </div>
    )
}

export default App
