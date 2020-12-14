import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import DmNav from './components/DmNav'
import Home from './components/Home'

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
