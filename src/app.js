import React, { Component } from 'react';
import ReactDom from 'react-dom';

import MainContainer from './components/containers/mainContainer';
// import Button from './components/button.js';
//store client ID and client secret for Spotify API calls
const CLIENT_ID = 'c1f1711630d54c4cac579bea402f2253';
const CLIENT_SECRET = '11683595db924c368d35a322ab415a25';

//spotify request scopes
const scopes = 'user-library-modify streaming user-top-read user-library-read user-read-currently-playing user-follow-read playlist-modify-public user-read-email user-modify-playback-state user-read-recently-played user-read-playback-position user-read-playback-state user-read-private playlist-read-private playlist-modify-private';
// 'user-library-modify playlist-modify-private playlist-read-priavate user-read-private user-read-playback-position user-read-recently-played user-modify-playback-state user-follow-modify playlist-modify-public user-follow-read user-read-currently-playing user-library-read streaming user-top-read';
//redirect uri
const redirect_uri = 'http://localhost:8080';

//spotify endpoints:
const authorize = 'https://accounts.spotify.com/authorize';
const token = 'https://accounts.spotify.com/api/token';

const generateAuthUrl = (url) => {
  url += '?client_id=' + CLIENT_ID;
  url += '&response_type=code';
  url += '&redirect_uri=' + redirect_uri;
  url += '&show_dialogue=true';
  url += '&scope=' + scopes;
  return url;
};

class App extends Component {
  constructor(props) {
    super(props);
    this.handlClick = this.handleClick.bind(this);
    
  }

  handleClick() {
    window.location.href = 'http://localhost:8080/api';
    // window.onload = console.log(window.location.href);
    // fetch(generateAuthUrl(authorize), {
    //   mode: 'no-cors'
    // })
    //   .then(() => console.log(''))
    //   .catch( err => console.log('request error:', err)); 
  }

  render() {
    return (
      <div>
        <h1>Vibe Catcher</h1>
        <MainContainer
          handleClick={this.handleClick}
        />
      </div>
    );
  }
}


ReactDom.render(<App />, document.getElementById('root'));