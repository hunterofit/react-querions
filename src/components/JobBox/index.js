import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import './style.css';

class JobBox extends React.Component {
    handleChange = (selectedOption) => {
      if (selectedOption) {
        this.props.result(selectedOption);
      } else {
        this.props.result({});
      }
    };
    render() {
      const {jobs, selected } = this.props;
      let options = jobs.map(job => ({value: job.Item1, label: job.Item1Name, is_15: job.is_15}));
      options = options.filter(item => {
        return item.label !== ''
      })
      options.sort(function(a, b) {
        return a.label.localeCompare(b.label);
      });

      return (<div>
        <Select
          name="form-field-name"
          value={selected}
          onChange={this.handleChange}
          options={options}
          placeholder="Enter a classification name or title code"
        />
        <div className="wpcpfq-jobbox-desc">
          <span>
            Need help identifying a job to explore? Click <a href="https://www.governmentjobs.com/careers/LACOUNTY/classspecs" target="_blank" rel="noopener noreferrer" >here</a> to visit the County’s Job Description website
          </span>
        </div>
      </div>

      );
    }
}

JobBox.propTypes = {
  jobs: PropTypes.array,
  selected: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]),
  result: PropTypes.func,
};

export default JobBox;