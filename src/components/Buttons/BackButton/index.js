import React from 'react';

function BackButton(props) {
  return (
    <a
      onClick={props.clickHandler}
      className="wpcpfq-back-btn nectar-button medium see-through-2  has-icon"
      style={{visibility: 'visible', color: 'rgb(255, 255, 255)', borderColor: 'rgba(255, 255, 255, 0.75)', backgroundColor: 'transparent', cursor: 'pointer'}}
      data-color-override="false"
      data-hover-color-override="#333333"
      data-hover-text-color-override="#ffffff">
      <span>Back</span>
      <i className="fa fa-angle-left"></i>
    </a>
  );
}

export default BackButton;