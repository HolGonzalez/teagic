import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from '../pages/Home'
import Brain from '../pages/Brain'
import Quiz from '../pages/Quiz'
import Left from '../pages/Left'
import NotFound from '../pages/NotFound.js'


function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/brain" component={Brain}/>
                <Route exact path="/start-quiz" component={Quiz}/>
                <Route exact path="/left" component={Left}/>
                <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
    )
}

export default App