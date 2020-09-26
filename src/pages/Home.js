import React, { Fragment } from 'react'
import {Link} from 'react-router-dom'

var home = {
    "title" : "MatLogic",
    "subtitle" : "Software neurodidáctico lógica matemática",
    "buttonLeft":"Conocer cerebro",
    "buttonRight":"Comenzar"
}

const Home = () => (
    <Fragment>
        <div className="container p-2 mx-auto">
            <div className="row row-cols-1 m-3 has-text-centered">
                <h1 className="title is-1 mb-0">{home.title}</h1>
                <p className="font-italic mb-4">{home.subtitle}</p>
                <img src={require('../img/brain.svg')} alt="Brain"></img>
            </div>
            <div className="mt-4 has-text-centered">
                <Link className="mr-5 btn button is-info " to="/brain">{home.buttonLeft}</Link>
                <Link className="ml-5 btn button is-primary" to="brain-test">{home.buttonRight}</Link>
            </div>
        </div>
        
    </Fragment>
)

export default Home;