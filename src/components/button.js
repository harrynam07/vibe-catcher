import React from 'react';

const Button = ( { handleClick }) => {
  return (
    
    <div>
      <form>
        <input type='button' value='Catch a Vibration' onClick={handleClick}></input>
      </form>
    </div>

  )
  ;
};

export default Button;