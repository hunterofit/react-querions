import React from 'react';

function SkipButton(props) {
  return (
      <div className="wpb_wrapper">
        <p><a style={{color: '#ffffff', cursor: 'pointer'}} onClick={props.clickHandler}>SKIP</a></p>
      </div>
  );
}

export default SkipButton;