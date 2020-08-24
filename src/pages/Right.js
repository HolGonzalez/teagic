import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import DecToBin from "../components/DecToBin";

class Right extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
    };
  }

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <h1 className="title is-1 mb-3">Hemisferio Derecho</h1>
          </div>
          <div className="col-11 col-md-10 col-lg-8">
            <DecToBin />
          </div>
          <div className="col-12 m-4 has-text-centered">
            <Link className="btn button is-info" to="/left">
              Cambiar de hemisferio
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Right;
