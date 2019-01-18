import React from 'react';
import PropTypes from 'prop-types';

function Video(props) {
  return (
    <div>
      <iframe type="text/html"
        width="100%"
        height="385"
        title="Career Path Finder Introduction"
        src={props.src}
        frameBorder="0">
      </iframe>
    </div>
  );
}

Video.propTypes = {
  src: PropTypes.string,
};


export default Video;