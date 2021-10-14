const express = require('express');
const path = require('path');
const app = express();
const SpotifyWebApi = require('spotify-web-api-node');
const PORT = 3000; 
// const cookieParser = require('cookie-parser');

//require router for spotify api
const apiRouter = require('./routes/api');

// cookie parser
// app.use(cookieParser);

//handle parsing request body
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//store client ID and client secret for Spotify API calls
const CLIENT_ID = 'c1f1711630d54c4cac579bea402f2253';
const CLIENT_SECRET = '11683595db924c368d35a322ab415a25';

//spotify request scopes
const scopes = 'user-library-modify streaming user-top-read user-library-read user-read-currently-playing user-follow-read playlist-modify-public user-read-email user-modify-playback-state user-read-recently-played user-read-playback-position user-read-playback-state user-read-private playlist-read-private playlist-modify-private';
// 'user-library-modify playlist-modify-private playlist-read-priavate user-read-private user-read-playback-position user-read-recently-played user-modify-playback-state user-follow-modify playlist-modify-public user-follow-read user-read-currently-playing user-library-read streaming user-top-read';
//redirect uri
const redirect_uri = 'http://localhost:8080/api/callback';

//spotify endpoints:
const authorize = 'https://accounts.spotify.com/authorize';

let access;
let refresh;

const generateAuthUrl = (url) => {
  url += '?client_id=' + CLIENT_ID;
  url += '&response_type=code';
  url += '&redirect_uri=' + redirect_uri;
  url += '&show_dialogue=true';
  url += '&scope=' + scopes;
  return url;
};

var spotifyApi = new SpotifyWebApi({
  clientId: CLIENT_ID,
  clientSecret: CLIENT_SECRET,
  redirectUri: redirect_uri,
});

// app.use(express.static(path.resolve(__dirname, '../public')));

//testing server
app.get('/', (req, res) => {
  console.log('AHHHHHHHH');
});

// //test get request to /api
app.get('/api', (req, res) => {
  // console.log(res);
  //res.req.headers.referer
  console.log('auth request received');
  // console.log(window.location.search);
  res.redirect(generateAuthUrl(authorize));
    
});

//Catch a vibe button 
app.get('/api/track', (req, res) => {
  // console.log(access);
  spotifyApi.getMyCurrentPlayingTrack(access)
    .then( (data) => {
      console.log('data received', data);

      // res.locals.title = data.body.item.name;
      // res.locals.artist = data.body.item.artists;
      // res.locals.link = data.body.item.href;
      // res.locals.album = data.body.item.album;
      // console.log('sending data', typeof res.locals);

      
      const trackInfo = {
        title: data.body.item.name,
        artist: data.body.item.artists[0].name,
        link: data.body.item.href,
        album: data.body.item.album
      };
      console.log(data.body.item.artists[0]);
      // console.log(trackInfo);
      res.locals.trackInfo = trackInfo;
      // return res.status(205).json(res.locals.trackInfo);
    })
    .then( () => res.status(200).json(res.locals.trackInfo))
    .catch( (err) => {
      console.log('error grabbing track info', err);
    });
});


app.get('/api/callback', (req, res) => {
  const error = req.query.error;
  const code = req.query.code;
  const state = req.query.state;
  console.log(code);

  if (error) {
    console.log('Callback Error', error);
    res.send(`Callback Error: ${error}`);
    return;
  }
  
  spotifyApi.authorizationCodeGrant(code)
    .then(data => {
      const access_token = data.body['access_token'];
      const refresh_token = data.body['refresh_token'];
      const expires_in = data.body['expires_in'];


      spotifyApi.setAccessToken(access_token);
      spotifyApi.setRefreshToken(refresh_token);

      access = access_token;
      refresh = refresh_token;

      // //store tokens on cookies
      // res.cookie('access_token', access_token);
      // res.cookie('refresh_token', refresh_token);

      console.log('access_token:', access_token);
      console.log('refresh_token', refresh_token);

      console.log(
        `Succesfully retrieved access token. Expires in ${expires_in} seconds`
      );
    })
    .then(res.redirect(301, 'http://localhost:8080'))
    .catch(error => {
      console.error('Error getting Tokens', error);
      res.send(`Error getting Tokens: ${error}`);
    });
});


//server listening on port 3000
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;