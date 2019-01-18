import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function Indicator(props) {
  const {total, current} = props;

  return (
    <ul className="wpcpfq-indicator1">
      { Array.from(new Array(total),(val,index) => index + 1).map(step => {
        const cls = step === current ? 'current circle' : 'circle';
        return <li key={step}><div className={cls}/></li>;
      })}
    </ul>
  );
}

Indicator.propTypes = {
  total: PropTypes.number,
  current: PropTypes.number,
};

export default Indicator;