import React from 'react';
import PropTypes from 'prop-types';

class SelectBox extends React.Component {
    handleClick = (val) => {
      if (this.props.is_15 === false && val === 1) {
        return;
      }
      this.props.result(val);
    };

    render() {
      let active_30 = '';
      let active_15 = '';
      if (this.props.selected) {
        active_30 = '';
        active_15 = 'wpcpfq-active-box';
      } else {
        active_30 = 'wpcpfq-active-box';
        active_15 = '';
      }

      if (this.props.is_15 === false) {
        active_15 = active_15 + ' wpcpfq-15-disabled';
      }

      return (
        <div className="wpcpfq-select-box">
          <ul>
            <li>
              <a className={active_30} onClick={() => this.handleClick(0)}
                style={{paddingTop: '25px'}}>
                {this.props.firstItem}
              </a>
            </li>
            <li>
              <a className={active_15} onClick={() => this.handleClick(1)}
                style={{paddingTop: '25px'}}>
                {this.props.secondItem}
              </a>
            </li>
          </ul>
        </div>
      );
    }
}

SelectBox.propTypes = {
  result: PropTypes.func,
  selected: PropTypes.number,
};


export default SelectBox;