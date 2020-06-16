import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bulma/css/bulma.css'


const Card = ({title, content, image}) => (
    <div className="col box mb-3 mr-3 p-3 has-text-centered">
        <h3 className="title is-3">{title}</h3>
        <figure>
            <img className="mb-4" src={image} alt={title}></img>
        </figure>
        <p className="has-text-left">{content}</p>
    </div>
)

export default Card