import React from 'react'



const NotFound = () => (
    <div id="main">
    	<div className="fof">
        	<h1>Pagina no encontrada</h1>
            <figure className="image is-128x128 mx-auto">
                <img src={require('../img/404.svg')} alt="Hemisferio derecho"></img>
            </figure>
    	</div>
    </div>
)

export default NotFound