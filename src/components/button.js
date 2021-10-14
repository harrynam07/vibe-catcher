import React from 'react';

const Button = ( { handleClick, fetchSong }) => {
  return (
    
    <div>
      <form>
        <div>
          <input id='btn' type='button' value='Connect to Spotify' onClick={handleClick}></input>
        </div>
        <br></br>
        <div>
          <input id='btn' type='button' value='Catch a Vibration' onClick={fetchSong}></input>
        </div>
      </form>
    </div>

  )
  ;
};

export default Button;