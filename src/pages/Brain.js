import React from 'react';
import Card from '../components/Card'

var contents = {
    logico : 'Una persona cuyo procesamiento sea mayoritariamente cortical izquierdo tendrá un estilo de personalidad frío, calculador y  poco emocional. Se les conoce como personas "expertas" y son aquellos individuos que destacan en las pruebas de lógica y matemática.',
    organizador : 'La parte límbica izquierda de nuestro sistema cerebral es la encargada de analizar con cautela nuestro entorno, por lo que si esta zona predomina en nuestro procesamiento cerebral, tendremos un modo de pensamiento controlado, detallado y bien organizado.',
    emocional : 'Aquellas personas cuyo cuadrante predominante sea el límbico derecho, tendrán un modo de pensamiento emocional, expresivo y sensible. Son individuos altamente sensible, que disfrutan creando y manteniendo lazos interpersonales con los demás.',
    creativo : 'La manera de pensar de una persona con el cuadrante cortical derecho predominante es intuitiva, integradora y muy imaginativa. Son personas creativas, innovadoras y con un mundo interior muy rico.'
}

const Brain = () => (
    <div className="container mx-auto p-2">
        <div className="row m-3 row-cols-1 row-cols-md-2 row-cols-xl-3 justify-content-md-center">
            <Card 
                title="Cuadrante lógico" 
                image={require('../img/cuadrante-logico.svg')}
                content={contents.logico}></Card>
            <Card 
                title="Cuadrante creativo" 
                image={require('../img/cuadrante-creativo.svg')}
                content={contents.creativo}
            ></Card>
            <Card 
                title="Cuadrante organizador" 
                image={require('../img/cuadrante-organizador.svg')}
                content={contents.organizador}
            ></Card>
            <Card 
                title="Cuadrante emocional" 
                image={require('../img/cuadrante-emocional.svg')}
                content={contents.emocional}
            ></Card>
        </div>
    </div>
)

export default Brain