import React, {Component, Fragment} from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bulma/css/bulma.css'
import TableBinDec from '../components/TableBinDec'
import Card from '../components/Card'

class Left extends Component {
    constructor(props) {
        super(props)

        this.state = {
            value : 0
        }
    }
}