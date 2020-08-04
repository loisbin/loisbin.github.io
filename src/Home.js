import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Home.css';
import _ from 'lodash';
import Preview from './Preview.js'

import arrow from './misc/arrow.png';
import enrollmentGif from './enrollment/untitled.gif';
import snackpassPic from './snackpass/snackpass-cover.png';
import health from './health/health-cover.png';
import chairish from './chairish/chairish-cover.png';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      opacity: 0,
      visibility: 'hidden',
      marginLeft: '0',

      opacity1: 0,
      opacity2: 0,
      opacity3: 0,
      opacity4: 0,

    };

    this.handleScroll = this.handleScroll.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleClickExit = this.handleClickExit.bind(this);
    this.handleClickMenu = this.handleClickMenu.bind(this);
  };

  handleScroll = () => {

    let position = document.getElementById('body2').scrollTop;
    const toWhite = {backgroundColor: ['#F8F7F8', 'white']};
    const toGray = {backgroundColor: ['white', '#F8F7F8']};
    const toLeft = {marginLeft: ['0', '-90%']};
    const toMid = {marginLeft: ['-90%', '0']};
    const fadeIn = {opacity: ['0', '1']};
    const fadeOut = {opacity: ['1', '0']};
    const animationOpts = {duration: 200, fill: 'forwards', easing: 'ease-out'};
    const animationOpts2 = {duration: 300, delay: 600, fill: 'forwards', easing: 'ease-in-out'};
    const animationOpts3 = {duration: 600, fill: 'forwards', easing: 'cubic-bezier(.22,.53,.58,.83)'};

    //UP ARROW
    if (position > 100) {
      this.setState({'visibility': 'visible'});
    } else if (position === 0) {
      this.setState({'visibility': 'hidden'});
    }

    //FADE IN
    const fades = document.getElementsByClassName('fade');
    for (let i = 0; i < fades.length - 1; i++) {
      if (fades[i].offsetTop < position + window.innerHeight - 150 && fades[i].style.opacity === '') {
        fades[i].animate(
          {opacity: [0, 1]},
          {duration: 800, fill: 'forwards', easing: 'ease-in-out'}
        )
        fades[i].style.cssText = 'opacity: 1';
      } else if (position + window.innerHeight - 200 > document.getElementById('body2').scrollHeight - window.innerHeight && fades[fades.length-1].style.opacity === '') {
        fades[fades.length-1].animate(
          {opacity: [0, 1]},
          {duration: 800, fill: 'forwards', easing: 'ease-in-out'}
        )
        fades[fades.length-1].style.cssText = 'opacity: 1';
      }
    }

    //INTRO TEXT
    if (position < window.innerHeight) {
      const text = document.getElementById('landing-text');
      //text.style.transform = 'rotateX('+position/5+'deg)';
      text.style.transform = 'matrix(1,' + (position/500) + ',' + (position/100) + ',' + (1+(position/500)) + ', 0,' + (-position) + ')';
    }

  };

  handleClick() {
    document.getElementById('body2').scrollTo({top: 0, behavior: 'smooth'});
  };

  handleClickExit() {
    const menu = document.getElementById('mobile-menu');
    menu.animate(
      {left: ['0', '100%']},
      {duration: 400, fill: 'forwards', easing: 'ease-in-out'}
    );
  };

  handleClickMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.animate(
      {left: ['100%', '0']},
      {duration: 400, fill: 'forwards', easing: 'ease-in-out'}
    );
  };

  componentDidMount() {
    document.title = 'Lois Bin';

    const text = document.getElementsByClassName('landing');
    const fade = {opacity: ['0', '1']};
    const transformMatrix = {transform: ['matrix(1,0,-0.6,0.4,0,0)', 'matrix(1,0,0,1,0,0)']};
    const transformRotate = {transform: ['rotateX(90deg)', 'rotateX(0deg)']};

    text[0].animate(
      transformRotate,
      {duration: 1000, easing: 'cubic-bezier(.22,.53,.58,.83)', fill: 'forwards'}
    );
    text[0].animate(
      fade,
      {duration: 1000, easing: 'cubic-bezier(.22,.53,.58,.83)', fill: 'forwards'}
    );

  };

  render() {
    let opacity = this.state.opacity;
    let visibility = this.state.visibility;
    let left = this.state.left;
    let opacity1 = this.state.opacity1;
    let opacity2 = this.state.opacity2;
    let opacity3 = this.state.opacity3;
    let opacity4 = this.state.opacity4;
    let marginLeft = this.state.marginLeft;

    return (

      <div id='body' onScroll={this.handleScroll}>
      {/* BODY */}

        <div id='mobile-menu'>
        {/* MOBILE MENU */}
          <div id='menu-exit'><p style={{'margin': 0}} onClick={this.handleClickExit}>x</p></div>
          <Link to='/about'>
            <div className='mobile-link'><p>About</p></div>
          </Link>
          <a href='#projects' onClick={this.handleClickExit}>
            <div className='mobile-link'><p>Projects</p></div>
          </a>
          <a href='#contact' onClick={this.handleClickExit}>
            <div className='mobile-link'><p>Contact</p></div>
          </a>
        </div>

        <div id='body2'>
        {/* BODY WITH PADDING */}

          <div className='load-page'>
          {/* LOAD PAGE */}
          </div>

          <div id='arrow-wrapper' onClick={this.handleClick} style={{'visibility': visibility}}>
            <img style={{'width': '100%'}} src={arrow} alt='arrow'/>
          </div>

          <div id='landing-bg'>
            <div id='landing-text'>
              <p className='landing'>
                I'm <span className='blue-text'>Lois</span>, a designer based in Berkeley, California.
                Currently creating experiences at <a href='www.squareup.com' target='_blank'><span className='blue-text'>Square</span></a> on the
                Marketing Web team.
              </p>
            </div>
          </div>

          <div className='fade' id='proj-landscape'>
          {/* PROJECTS SECTION */}
            <div className='proj-wrapper' id='right-hover'>
              <Link to='/chairish'><div className='proj-img' id='chairish'></div></Link>
              <Link to='/chairish'><div className='proj-info'>
                <p className='proj-title'>Chairish</p>
                <p className='proj-type'>Web, Mobile</p>
              </div></Link>
            </div>
            <div className='proj-wrapper right-align' id='right-hover'>
              <Link to='/snackpass'><div className='proj-img' id='snackpass'></div></Link>
              <Link to='/snackpass'><div className='proj-info'>
                <p className='proj-title'>Snackpass</p>
                <p className='proj-type'>Mobile</p>
              </div></Link>
            </div>
            <div className='proj-wrapper' id='left-hover'>
              <Link to='/enrollment'><div className='proj-img' id='enrollment'></div></Link>
              <Link to='/enrollment'><div className='proj-info'>
                <p className='proj-title'>Course Enrollment</p>
                <p className='proj-type'>Web, Desktop</p>
              </div></Link>
            </div>
            <div className='proj-wrapper right-align' id='right-hover'>
              <Link to='/health'><div className='proj-img' id='health'></div></Link>
              <Link to='/health'><div className='proj-info'>
                <p className='proj-title'>Health Tracker</p>
                <p className='proj-type'>Desktop, Mobile</p>
              </div></Link>
            </div>
          </div>

          {/*
          <div className='fade' id='proj'>
            <div id='col-img'>
              <Link to='/chairish'><div className='proj-img' id='chairish'></div></Link>
              <Link to='/snackpass'><div className='proj-img' id='snackpass'></div></Link>
              <Link to='/enrollment'><div className='proj-img' id='enrollment'></div></Link>
              <Link to='/health'><div className='proj-img' id='health'></div></Link>
            </div>
            <div id='col-info'>
              <Link to='/chairish'><div className='proj-info'>
                <p className='proj-title'>Chairish</p>
                <p className='proj-type'>Web, Mobile</p>
              </div></Link>
              <Link to='/snackpass'><div className='proj-info'>
                <p className='proj-title'>Snackpass</p>
                <p className='proj-type'>Mobile</p>
              </div></Link>
              <Link to='/enrollment'><div className='proj-info'>
                <p className='proj-title'>Course Enrollment</p>
                <p className='proj-type'>Web, Desktop</p>
              </div></Link>
              <Link to='/health'><div className='proj-info'>
                <p className='proj-title'>Health Tracker</p>
                <p className='proj-type'>Desktop, Mobile</p>
              </div></Link>
            </div>
          </div>
          */}

          <div id='proj-portrait' className='fade'>
            <Preview image={chairish} title='Chairish' type='Web, Mobile' link='chairish' num='1'/>
            <Preview image={snackpassPic} title='Snackpass' type='Mobile' link='snackpass' num='2'/>
            <Preview image={enrollmentGif} title='Course Enrollment' type='Web, Desktop' link='enrollment' num='3'/>
            <Preview image={health} title='Health Tracker' type='Desktop, Mobile' link='health' num='4'/>
          </div>

          <div id='contact'>
          {/* BIO */}

            <div id='bio-bg'>
              <div className='fade bio-table'>
                <div className='bio-sub'>
                  <p id='no-margin'>Background</p>
                </div>
                <div className='bio-info'>
                  <p id='no-margin'>
                    <span className='bio-info-sub'>Graduated 2020</span>
                    <br/>University of California, Berkeley<br/>B.A. Cognitive Science
                  </p>
                </div>
              </div>

              <div className='fade bio-table'>
                <div className='bio-sub'>
                  <p id='no-margin'>Contact</p>
                </div>
                <div className='bio-info'>
                  <p id='no-margin'>lois.bin@gmail.com</p>
                  <p id='no-margin'>Click <a target='_blank' href='https://www.linkedin.com/in/lois-bin-27708514a/'>
                      <span id='here'>here</span>
                    </a> for LinkedIn.
                  </p>
                </div>
              </div>

              <div className='fade bio-table'>
                <div className='bio-sub'>
                  <p id='no-margin'>Miscellaneous</p>
                </div>
                <div className='bio-info'>
                  <p id='no-margin'>Click <Link to='/photos' id='here'>here</Link> for photography.</p>
                  <p id='no-margin'>Click <a href='https://www.goodreads.com/user/show/56966951-lois' target='_blank' id='here'>here</a> for books.</p>
                </div>
              </div>

              <div className='bio-table'>
                <p id='copyright'>c. Lois Bin</p>
              </div>

            </div>

          </div>

        </div>
      </div>
    );
  }
}

export default withRouter(Home);
