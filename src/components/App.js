import React, { Component } from 'react';
import { rendering } from '../actions/index';
import {  connect } from 'react-redux';

import './App.css';

class App extends Component {
  
  onClicking() {
    this.props.rendering();
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Dante BoilerPlate</h2>
          
        </div>
        
        <div className="App-body">
          <button onClick={this.onClicking.bind(this)}>Holaa</button>
          <p>{this.props.term}</p>
        </div>
      </div>
    );
  }
}


function mapStateToProps(state) {
  //notar que este state que se esta generando se debe inyectar como PROPS:
  return {term: state.term}
}

export default connect(mapStateToProps, {rendering})(App);

