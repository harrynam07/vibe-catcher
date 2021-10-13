import React from 'react';
import Button from '../button.js';
import TrackDisplay from './trackDisplay';
import FavoriteList from '../favoriteList';

const MainContainer = () => {
  return (
    <div>
      <Button/>
      <TrackDisplay/>
      <FavoriteList/>
    </div>
  );
};

export default MainContainer; 