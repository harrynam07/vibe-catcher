import React from 'react';

const Button = ( { handleClick }) => {
  return (
    
    <div>
      <form>
        <div>
          <input type='button' value='Connect to Spotify' onClick={handleClick}></input>
        </div>
        <div>
          <input type='button' value='Catch a Vibration'></input>
        </div>
      </form>
    </div>

  )
  ;
};

export default Button;