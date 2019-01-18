import React from 'react';
import './style.css';

function JobPath(props) {
  return (
    <div>
      <h2 className="wpcpfq-job-path">
        {props.job_path}
      </h2>
    </div>
  );
}

export default JobPath;