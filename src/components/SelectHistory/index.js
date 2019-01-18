import React from 'react';
import PropTypes from 'prop-types';
import config from '../../config';
import './style.css';

class SelectHistory extends React.Component {
    handleClick = (val) => {
      if (this.props.is_15 === false && val === 1) {
        return;
      }
      this.props.result(val);
    };

    render() {
      const imageDir = `${config.publicPath}/assets/images/`;

      let path30 = `${imageDir}suitcase-30years-on.png`;
      let path15 = `${imageDir}suitcase-15years-off.png`;

      let cls30 = 'wpcpfq-15-enabled';
      let cls15 = 'wpcpfq-15-enabled';

      if (this.props.selected) {
        path30 = `${imageDir}suitcase-30years-off.png`;
        path15 = `${imageDir}suitcase-15years-on.png`;
      } else {
        path30 = `${imageDir}suitcase-30years-on.png`;
        path15 = `${imageDir}suitcase-15years-off.png`;
      }

      if (this.props.is_15 === false) {
        path30 = `${imageDir}suitcase-30years-on.png`;
        path15 = `${imageDir}suitcase-15years-na.png`;
        cls30 = 'wpcpfq-15-enabled';
        cls15 = 'wpcpfq-15-disabled';
      }

      const years = this.props.selected ? 15 : 30;

      return (
        <div className="wpcpfq-select-box">
          {!this.props.is_15 &&
            <div className="wpcpfq-confirm30">
              <span> {this.props.txt} </span>
            </div>
          }
          <ul className="wpcpfq-suitecases">
            <li>
              <img src={path30} onClick={() => { this.handleClick(0); }}
                className={cls30} alt="Career Path Finder 30 years history" />
            </li>
            <li>
              <img src={path15} onClick={() => { this.handleClick(1); }}
                className={cls15} alt="Career Path Finder 15 years history" />
            </li>
          </ul>

          <div style={{marginTop: '10px'}}>
            <h2>
              <span style={{color: '#000000'}}>
                <em><strong> {years} years </strong></em>
              </span>of employee adventures
            </h2>
          </div>
        </div>
      );
    }
}

SelectHistory.propTypes = {
  result: PropTypes.func,
  selected: PropTypes.number,
};


export default SelectHistory;