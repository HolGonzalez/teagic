import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from '../pages/Home'
import Brain from '../pages/Brain'
import BrainTest from '../pages/BrainTest'
import Left from '../pages/Left'
import Right from '../pages/Right'
import NotFound from '../pages/NotFound'
import Evaluation from '../pages/Evaluation'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bulma/css/bulma.css'


function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/brain" component={Brain}/>
                <Route exact path="/brain-test" component={BrainTest}/>
                <Route exact path="/left" component={Left}/>
                <Route exact path="/right" component={Right}/>
                <Route exact path="/evaluation" component={Evaluation}/>
                <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
    )
}

export default App