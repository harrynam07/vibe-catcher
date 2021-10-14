import React from 'react';

const Button = ( { handleClick, fetchSong }) => {
  return (
    
    <div>
      <form>
        <div>
          <input type='button' value='Connect to Spotify' onClick={handleClick}></input>
        </div>
        <div>
          <input type='button' value='Catch a Vibration' onClick={fetchSong}></input>
        </div>
      </form>
    </div>

  )
  ;
};

export default Button;