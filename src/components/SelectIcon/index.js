import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import config from '../../config';

class SelectIcon extends React.PureComponent {
  handleClick = (event) => {
    const dataId = event.currentTarget.dataset.id;
    this.props.result(dataId);
  };

  render() {
    const { icons } = config;
    return (
      <div>
        <ul className="wpcpfq-icon-box">
          {icons.map(icon => {
            const active = (icon.name === this.props.selected ? 'wpcpfq-image-selected' : '');
            return <li className="wpcpfq-choose-icon-li"
              data-id={icon.name}
              key={icon.name}
              onClick={this.handleClick}>
              <img src={`${config.publicPath}${icon.url}`} className={`wpcpfq-img-icon ${active}`} alt="Career Path Finder Icons" />
            </li>;
          })}
        </ul>
      </div>
    );
  }
}

SelectIcon.propTypes = {
  result: PropTypes.func,
  selected: PropTypes.string,
};

export default SelectIcon;