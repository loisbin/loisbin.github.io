import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Project.css';
import Preview from './Preview.js'
import arrow from './misc/arrow.png';
import back from './misc/back.png';

import preview from './health/health-cover.png';
import waterTracker from './health/overview.png';
import gif from './health/logging.gif';
import graph from './health/graph.png';

class Health extends Component {

  constructor(props) {
    super(props);
    this.state = {
      display: 'none',
      visibility: 'hidden',
      position: 'absolute',
      top: '90%',
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  };

  handleClick() {
    document.getElementById('body-proj').scrollTo({top: 0, behavior: 'smooth'});
  };

  handleLoad = () => {

  };

  handleScroll() {
    let position = document.getElementById('body-proj').scrollTop;
    const links = document.getElementsByClassName('links')[0];

    if (position > window.innerHeight*.9) {
      this.setState({'position': 'fixed'});
      this.setState({'top': '0'});
    } else if (position < window.innerHeight*.9) {
      this.setState({'position': 'absolute'});
      this.setState({'top': '90%'});
    } else if (position > 100) {
      this.setState({'visibility': 'visible'});
    } else if (position === 0) {
      this.setState({'visibility': 'hidden'});
    }

    //FADE IN
    const fades = document.getElementsByClassName('fade');
    for (let i = 0; i < fades.length; i++) {
      if (fades[i].offsetTop < position + window.innerHeight - 250 && fades[i].style.opacity === '') {
        fades[i].style.cssText = 'opacity: 1';
        fades[i].animate(
          {opacity: [0, 1], marginTop: ['4%', 0]},
          {duration: 600, fill: 'forwards', easing: 'ease-in-out'}
        )
      }
    }

  };

  componentDidMount() {
    document.title = "Health Tracker App | Lois Bin";

    document.getElementsByClassName('overview-img')[0].animate(
      {opacity: [0,1]},
      {duration: 800, fill: 'forwards', easing: 'ease-in-out'}
    )
    document.getElementsByClassName('overview-title')[0].animate(
      {opacity: [0,1]},
      {duration: 800, fill: 'forwards', easing: 'ease-in-out'}
    )

  };

  render() {
    let visibility = this.state.visibility;
    let display = this.state.display;
    let position = this.state.position;
    let top = this.state.top;

    return (
      <div id='body'>

        <div id='body-proj' onScroll={this.handleScroll}>

          <div className='links' style={{'position': position, 'top': top}}>
            <div className='link-proj'><Link to='/'><p>Home</p></Link></div>
            <div className='link-proj'><Link to='/chairish'><p>Next project</p></Link></div>
          </div>
          <Link to='/'><img className='mobile-back' src={back}/></Link>

          <div id='arrow-wrapper' onClick={this.handleClick} style={{'visibility': visibility}}>
          </div>

          <div className='overview-img' id='overview-health'></div>
          <br/>
          <p className='overview-title'>Health Tracker App</p>
          <div className='wrapper'>
            <div className='overview-info'>
              <p className='gray' id='no-margin'>Type</p>
              <p id='no-margin'>Desktop, Mobile</p>
            </div>
            <div className='overview-info'>
              <p className='gray' id='no-margin'>Date</p>
              <p id='no-margin'>July 2019</p>
            </div>
          </div>
          <br/><br/>

          <p className='header'>
            What information and functions are imperative for users using health trackers, and how will it be displayed?
          </p>
          <p className='overview-text'>
            A screen for water-intake tracking and a health-related graph to be viewed in mobile and desktop.
          </p>
          <br/><br/>

          <div className='images fade'>
            <div className='img-wrapper-100'><img className='img' src={waterTracker} alt='Water tracker overview'/></div>
          </div>
          <br/><br/>
          <div className='images fade'>
            <div className='img-wrapper-40'><img className='img' src={gif} alt='Water tracker gif'/></div>
          </div>
          <br/><br/>

          <div className='images fade'>
            <div className='img-wrapper-100-plus'><img className='img' src={graph} alt='Graph in mobile and desktop'/></div>
          </div>
          <br/><br/><br/><br/>

        </div>
      </div>
    );
  }
}

export default withRouter(Health);
