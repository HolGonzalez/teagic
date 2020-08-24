import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from '../pages/Home'
import Brain from '../pages/Brain'
import Quiz from '../pages/Quiz'
import Left from '../pages/Left'
import Right from '../pages/Right'
import NotFound from '../pages/NotFound.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bulma/css/bulma.css'


function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/brain" component={Brain}/>
                <Route exact path="/start-quiz" component={Quiz}/>
                <Route exact path="/left" component={Left}/>
                <Route exact path="/right" component={Right}/>
                <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
    )
}

export default App