import React, { Component } from 'react';
import { rendering, oliver } from '../actions/index';
import {  connect } from 'react-redux';

import './App.css';

class App extends Component {
  
  onClicking() {
    this.props.rendering();
  }

  toGreetChanged(event) {

    //aqui se ejecuta la funcion Oliver, por lo que se da el argumento especifico:
    this.props.oliver(event.target.value);
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Dante BoilerPlate</h2>
          
        </div>
        
        <div className="App-body">
          <input type="text" onChange={this.toGreetChanged.bind(this)} />
          <button onClick={this.onClicking.bind(this)}>Holaa</button>
          <p>{this.props.term2}</p>
        </div>
      </div>
    );
  }
}


function mapStateToProps(state) {
  //notar que este state que se esta generando se debe inyectar como PROPS:
  return {
    term: state.term,
    term2: state.term2
  };
}

export default connect(mapStateToProps, {rendering, oliver})(App);

