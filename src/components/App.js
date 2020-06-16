import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from '../pages/Home'
import Brain from '../pages/Brain'
import NotFound from '../pages/NotFound.js'


function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/brain" component={Brain}/>
                <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
    )
}

export default App