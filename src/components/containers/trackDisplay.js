import React from 'react';
import TrackCard from '../trackCard';

const TrackDisplay = (props) => {

  return (
    <div>
      <TrackCard
        title={props.title}
        artist={props.artist}
        album={props.album}
        art={props.art}
        display={props.display}
        link={props.link}
      />
    </div>
  );
};

export default TrackDisplay;