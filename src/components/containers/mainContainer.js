import React from 'react';
import Button from '../button.js';
import TrackDisplay from './trackDisplay';
import FavoriteList from '../favoriteList';

const MainContainer = ( { handleClick, fetchSong }) => {
  return (
    <div>
      <Button
        handleClick={handleClick}
        fetchSong={fetchSong}
      />
      <TrackDisplay/>
      <FavoriteList/>
    </div>
  );
};

export default MainContainer; 