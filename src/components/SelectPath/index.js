import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import config from '../../config';

class SelectPath extends React.Component {
    handleClick = (val) => {
      this.props.result(val);
    };

    render() {
      const imageDir = `${config.publicPath}/assets/images/`;
      let departureSrc = 'departure.png';
      let destinationSrc = 'destination.png';

      let from_to_str = 'from';
      if (this.props.selected) { // selected destination
        departureSrc = 'departure.png';
        destinationSrc = 'destination-active.png';
        from_to_str = 'to';
      } else {
        departureSrc = 'departure-active.png';
        destinationSrc = 'destination.png';
        from_to_str = 'from';
      }

      return (
        <div className="wpcpfq-select-box">
          <ul>
            <li>
              <img src={imageDir + departureSrc} onClick={() => { this.props.result(0); }} alt="Departure" />
            </li>
            <li>
              <img src={imageDir + destinationSrc} onClick={() => { this.props.result(1); }} alt="Destination" />
            </li>
          </ul>

          <div style={{marginTop: '10px'}}>
            <h2>I want to see paths
              <span style={{color: '#000000'}}>
                <em><strong> {from_to_str} </strong></em>
              </span>this job
            </h2>
          </div>
        </div>
      );
    }
}


SelectPath.propTypes = {
  selected: PropTypes.number,
  result: PropTypes.func,
};

export default SelectPath;