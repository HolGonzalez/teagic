import React, { Fragment } from 'react'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bulma/css/bulma.css'
import brain from '../img/brain.svg'
var home = {
    "title" : "Software neurodidáctico lógica matemática",
    "buttonLeft":"Conocer cerebro",
    "buttonRight":"Comenzar"
}

const Home = () => (
    <Fragment>
        <div className="container p-2 mx-auto">
            <div className="row row-cols-1 m-3 has-text-centered">
                <h1 className="title is-1">{home.title}</h1>
                <img src={brain}></img>
            </div>
            <div className="mt-4 has-text-centered">
                <Link className="mr-5 btn button is-info " to="/brain">{home.buttonLeft}</Link>
                <Link className="ml-5 btn button is-primary" to="start-quiz">{home.buttonRight}</Link>
            </div>
        </div>
        
    </Fragment>
)

export default Home;