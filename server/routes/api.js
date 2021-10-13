const express = require('express');
const router = express.Router();

//store client ID and client secret for Spotify API calls
const CLIENT_ID = 'c1f1711630d54c4cac579bea402f2253';
const CLIENT_SECRET = '11683595db924c368d35a322ab415a25';

//spotify endpoints:
const authorize = 'https://accounts.spotify.com/authorize';

//get request for initial authorization 
router.get('/', (req, res) => {
  return res.redirect(authorize);
});

module.exports = router;