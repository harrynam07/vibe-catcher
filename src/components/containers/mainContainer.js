import React from 'react';
import Button from '../button.js';
import TrackDisplay from './trackDisplay';
import FavoriteList from '../favoriteList';

const MainContainer = ( { handleClick, fetchSong }) => {
  return (
    <div>
      <div id='main'>
        <Button
          handleClick={handleClick}
          fetchSong={fetchSong}
        />
        <TrackDisplay/>
        <FavoriteList/>
      </div>
    </div>
  );
};

export default MainContainer; 