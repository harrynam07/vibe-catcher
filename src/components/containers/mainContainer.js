import React from 'react';
import Button from '../button.js';
import TrackDisplay from './trackDisplay';
import FavoriteList from '../favoriteList';

const MainContainer = ( { link, display, title, artist, album, art, handleClick, fetchSong }) => {
  return (
    <div>
      <div id='main'>
        <Button
          handleClick={handleClick}
          fetchSong={fetchSong}
        />
        <TrackDisplay
          title={title}
          artist={artist}
          album ={album}
          art={art}
          display={display}
          link={link}
        />
        <FavoriteList/>
      </div>
    </div>
  );
};

export default MainContainer; 