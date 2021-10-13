import React from 'react';
import Button from '../button.js';
import TrackDisplay from './trackDisplay';
import FavoriteList from '../favoriteList';

const MainContainer = ( { handleClick }) => {
  return (
    <div>
      <Button
        handleClick={handleClick}
      />
      <TrackDisplay/>
      <FavoriteList/>
    </div>
  );
};

export default MainContainer; 