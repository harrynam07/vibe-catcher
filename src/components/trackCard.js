import React from 'react';

const TrackCard = ({ link, display, title, album, artist, art }) => {
  if (display) {
    return(
      <div>
        <ul id='trackinfo'>
          <h2>Vibing to: </h2>
          <li>Title: {title}</li>
          <li>Artist: {artist}</li>
          <li>Album: {album}</li>
          <audio src={link}></audio>
          <img src={art} width={500}></img>
          
        </ul>
      </div>
    );
  } else {
    return(
      <div>
      </div>
    );
  }
        
  
};

export default TrackCard; 