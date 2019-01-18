import React from 'react';
import './style.css';

class FaqButton extends React.PureComponent {
    onClick = () => {
      const win = window.open('/faq', '_blank');
      win.focus();
    }

    onMouseOver = () => {
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return;
      }
      // Show tooltip
      document.getElementById('wcpfq-faq-tooltip').style.display = "block";
    };

    onMouseLeave = () => {
      document.getElementById('wcpfq-faq-tooltip').style.display = "none";
    };

    render() {
      return (
        <div className="wpb_wrapper"
          onMouseOver={this.onMouseOver}
          onMouseLeave={this.onMouseLeave}>
          <a
            className="wcpfq-faqbtn nectar-button medium regular extra-color-3 has-icon regular-button"
            onClick={this.onClick}
            style={{marginTop: '20px', visibility: 'visible', cursor: 'pointer'}}>
            <span>FAQS</span>
            <i className="fa fa-angle-right"></i>
          </a>
          <div className="wcpfq-faq-tooltip" id="wcpfq-faq-tooltip">
            <h5>FREQUENTLY ASKED QUESTIONS</h5>
            <span>- WHY WERE TRANSFERS AND DEMOTIONS INCLUDED IN THE DATA?</span> <br/>
            <span>- IS MY PERSONAL INFORMATION SAVED SOMEWHERE?</span> <br/>
            <span>- WHAT’S THE DIFFERENCE BETWEEN USING 15 YEARS OF EMPLOYEE ADVENTURES VERSUS 30?</span> <br/>
            <span>- WHAT DOES THE POPULARITY PERCENTAGE MEAN?</span> <br/>
            <span>- WHY ARE THE CAREER MOVEMENTS IN THE CAREER PATHFINDER LIMITED TO THE TOP 20?</span> <br/>
          </div>
        </div>
      );
    }
}

export default FaqButton;