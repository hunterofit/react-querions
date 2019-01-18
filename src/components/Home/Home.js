import React from 'react';
// import { ScaleLoader } from 'react-spinners';
import './style.css';
import Video from '../Video';
import InputBox from '../InputBox';
import SelectIcon from '../SelectIcon';
import SelectHistory from '../SelectHistory';
import GoButton from '../Buttons/GoButton';
import JobBox from '../JobBox';
import config from '../../config';
import Indicator from '../Indicator';
import SelectPath from '../SelectPath';
import NextButton from '../Buttons/NextButton';
import BackButton from '../Buttons/BackButton';
import SkipButton from '../Buttons/SkipButton';
import JobPath from '../JobPath';

// import Confirm30 from "../Confirm30/index";


export class Home extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      currentPage: 1, // TODO: set 0 - show video card.
      data: {name: '',
        icon: '',
        dir: 0,
        dataset: 0,
        titleid: false,
        titlename: false,
        is_15: true,
      },
      cardSize: config.card_size,
      canForward: true,
      jobs: [],
    };
  }

  componentDidMount() {
    this.setState({loading: true});
    fetch(config.job_data_url)
      .then(response => response.json())
      .then(json => {
        this.setState({jobs: json, loading: false});
      });
  }

  removeDuplicates(myArr, prop) {
    return myArr.filter((obj, pos, arr) => {
      return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos;
    });
  }

  getContent() {
    const { data, currentPage } = this.state;
    const text = config.text;

    switch (currentPage) {
    case 0:
      return {title: text.tutorial, body: <Video src={config.video_url} />};
    case 1:
      return { title: text.job_title,
        body: <JobBox jobs={this.state.jobs}
          selected={data.titleid}
          result={this.getResult.bind(this)} /> };
    case 2:
      if (data.is_15) {
        return {title: text.unpack,
          body: <SelectHistory selected={data.dataset} is_15={data.is_15}
            result={this.getResult.bind(this)} txt={text.confirm_30} />};
      } else {
        return {title: '',
          body: <SelectHistory selected={data.dataset} is_15={data.is_15}
            result={this.getResult.bind(this)} txt={text.confirm_30} />};
      }

    case 3: {
      return {title: text.job_path,
        body: <SelectPath selected={data.dir} result={this.getResult.bind(this)} />};
    }
    case 4:
      return {title: text.name,
        body: <InputBox result={this.getResult.bind(this)} val={data.name} />};
    case 5:
      return {title: text.icon,
        body: <SelectIcon result={this.getResult.bind(this)} selected={data.icon} />};
    case 6:
      return {title: text.go,
        body: <GoButton result={this.getResult.bind(this)}/>};
    default:
      break;
    }
  }

  checkForward() {
    const {currentPage, data} = this.state;
    return !(currentPage === 1 && (data.titleid === false || data.titleid === '' || data.titleid === undefined));
  }

  skip = () => {
    const currentPage = this.state.currentPage + 1;
    this.setState({currentPage: currentPage});
  };

  forward = () => {
    if (!this.checkForward()) return;
    const currentPage = this.state.currentPage + 1;
    this.setState({currentPage});
  };

  backward = () => {
    const currentPage = this.state.currentPage - 1;
    this.setState({currentPage});
  };

  getResult(result) {
    const datasets = ['30', '15'];
    const dirs = ['departure', 'destination'];
    const { data, currentPage } = this.state;

    switch (currentPage) {
    case 1:
      if (result !== {}) {
        data.titleid = result.value;
        data.titlename = result.label;
        data.is_15 = result.is_15;
      } else {
        data.titleid = '';
        data.titlename = '';
        data.is_15 = true;
      }
      break;
    case 2:
      data.dataset = result;
      break;
    case 3:
      data.dir = result;
      break;
    case 4:
      data.name = result;
      break;
    case 5:
      data.icon = result;
      break;
    case 6:
    {
      let url = config.career_browser_app_url;
      for (const k in data) {
        if (k === 'titlename') continue;
        if (k === 'is_15') continue;

        if (data.hasOwnProperty(k)) {
          if (k === 'dir') {
            url = `${url}&dir=${dirs[data[k]]}`;
          } else if (k === 'dataset') {
            url = `${url}&dataset=${datasets[data[k]]}`;
          } else if (k === 'name') {
            url = `${url}?name=${data[k]}`;
          } else {
            url = `${url}&${k}=${data[k]}`;
          }
        }
      }
      window.location.href = url;
      return;
    }
    default:
      break;
    }

    this.setState({data});
    this.forceUpdate();
  }

  render() {
    const {currentPage, cardSize, data} = this.state;
    const content = this.getContent();

    const skips = [0, 5];

    return (
      <div className="wpcpfq-main">
        <div className="col-md-3 wpcpq-btn-wrapper">
          {currentPage > 1 &&
            <BackButton clickHandler={this.backward} />
          }
          {currentPage < cardSize &&
            <NextButton clickHandler={this.forward}
              isEnabled={this.checkForward()}
              positionClass="wpcpfq-next-btn-top"/>
          }
        </div>

        <div className="col-md-6 wpcpfq-content">
          {currentPage !== 1 &&
            <JobPath job_path={data.titlename} />
          }
          <h2 className="wpcpfq-title">{content.title}</h2>

          {content.body}

          <div className="col-md-12">
            <Indicator total={cardSize} current={currentPage}/>
          </div>
        </div>

        <div className="col-md-3 wpcpq-btn-wrapper">
          <div>
            {currentPage < cardSize &&
              <NextButton clickHandler={this.forward}
                isEnabled={this.checkForward()}
                positionClass="wpcpfq-next-btn-bottom" />
            }
            { skips.includes(currentPage) &&
              <SkipButton clickHandler={this.skip} />
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
