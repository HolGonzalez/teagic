import React, { Component, lazy, Suspense } from 'react';
import {BrowserRouter, Route, Router, Switch} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bulma/css/bulma.css'
import '../css/styles.css';
import '../css/404.css';

const Home = lazy(() => import('../pages/Home'))
const Brain = lazy(() => import('../pages/Brain'))
const BrainTest = lazy(() => import('../pages/BrainTest'))
const Left = lazy(() => import('../pages/Left'))
const Right = lazy(() => import('../pages/Right'))
const NotFound = lazy(() => import('../pages/NotFound'))
const Evaluation = lazy(() => import('../pages/Evaluation'))

function App() {
    return (
        <BrowserRouter>
            <Suspense fallback={<div>...</div>}>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route exact path="/brain">
                        <Brain/>
                    </Route>
                    <Route exact path="/brain-test">
                        <BrainTest/>
                    </Route>
                    <Route exact path="/left">
                        <Left/>
                    </Route>
                    <Route exact path="/right">
                        <Right/>
                    </Route>
                    <Route exact path="/evaluation">
                        <Evaluation/>
                    </Route>
                    <Route>
                        <NotFound/>
                    </Route>
                </Switch>
            </Suspense>
        </BrowserRouter>
    )
}

export default App