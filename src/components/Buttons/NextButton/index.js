import React from 'react';

function NextButton(props) {
  const cls = props.positionClass + " wpcpfq-next-btn nectar-button medium regular extra-color-3 has-icon regular-button " +
              (props.isEnabled ? "wpcpfq-enabled" : "wpcpfq-disabled");

  return (
    <a onClick={props.clickHandler} className={cls} style={{visibility: 'visible'}}>
      <span>Next</span>
      <i className="fa fa-angle-right"></i>
    </a>
  );
}

export default NextButton;