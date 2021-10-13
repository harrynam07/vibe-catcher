import React, { Component } from 'react';
import ReactDom from 'react-dom';

import MainContainer from './components/containers/mainContainer';
// import Button from './components/button.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.handlClick = this.handleClick.bind(this);
    
  }

  handleClick() {
    fetch('http://localhost:8080/api')
      .then(console.log('request sent'))
      .catch( err => console.log('request error:', err)); 
  }

  render() {
    return (
      <div>
        <h1>Vibe Check</h1>
        <MainContainer
          handleClick={this.handleClick}
        />
      </div>
    );
  }
}


ReactDom.render(<App />, document.getElementById('root'));