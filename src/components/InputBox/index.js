import React from 'react';
import PropTypes from 'prop-types';

class InputBox extends React.Component {
  onChange = (event) => {
    this.props.result(event.target.value);
  };

  render() {
    return (
      <div>
        <input type="text"
          className="form-control wpcpfq-name-input"
          maxLength={20}
          onChange={this.onChange.bind(this)}
          value={this.props.val} />
        <div className="wpcpfq-name-desc">
          <span>This will be used to personalize your experience only. Your information will not be saved.</span>
        </div>
      </div>
    );
  }
}

InputBox.propTypes = {
  val: PropTypes.string,
  result: PropTypes.func,
};

export default InputBox;