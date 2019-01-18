import React from 'react';
import PropTypes from 'prop-types';

class GoButton extends React.PureComponent {
    handleClick = (event) => {
      this.props.result('survey-finished');
    };
    render() {
      return (
        <a onClick={this.handleClick}
          className="wpcpfq-go-btn nectar-button medium regular extra-color-3 has-icon  regular-button"
          style={{padding: '25px 42px', visibility: 'visible', cursor: 'pointer'}}>
          <span style={{fontFamily: 'Open Sans', fontSize: '18px'}}>Go!</span>
          <i className="fa fa-angle-right"></i>
        </a>
      );
    }
}

GoButton.propTypes = {
  result: PropTypes.func,
};

export default GoButton;