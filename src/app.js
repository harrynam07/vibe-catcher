import React, { Component } from 'react';
import ReactDom from 'react-dom';
import styles from '../styles.scss';

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
  constructor() {
    super();
    this.state = {
      title: '',
      artist: '',
      link: '',
      album: '',
      art: '',
      display: false
    };

    this.handlClick = this.handleClick.bind(this);
    this.fetchSong = this.fetchSong.bind(this);
    this.playTrack = this.playTrack.bind(this);
  }

  handleClick() {
    window.location.href = 'http://localhost:8080/api';
    
  }

  playTrack(url) {
    new Audio(url).play();
  }
  
  fetchSong() {
    fetch('http://localhost:8080/api/track')
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);

        this.setState({
          title: data.title,
          artist: data.artist,
          link: data.link,
          album: data.album.name,
          art: data.album.images[0].url,
          display: true
        });

        console.log(this.state);
      })
      // .then(() => {this.playTrack(this.state.link);})
      .catch(err => console.log('error grabbing track', err));
    // .
  }


  render() {
    return (
      <div>
        <h1 id='title'>Vibe Catcher</h1>
        <MainContainer
          title={this.state.title}
          artist={this.state.artist}
          album={this.state.album}
          art={this.state.art}
          link={this.state.link}
          display={this.state.display}
          handleClick={this.handleClick}
          fetchSong={this.fetchSong}
        />
      </div>
    );
  }
}


ReactDom.render(<App />, document.getElementById('root'));