import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { motion, useTransform } from 'framer-motion';
import anime from 'animejs/lib/anime.es.js';
import './Home.css';
import _ from 'lodash';
import Preview from './Preview.js';

import arrow from './misc/arrow.png';
import background from './misc/background.png';
import enrollmentGif from './enrollment/untitled.gif';
import snackpassPic from './snackpass/snackpass-cover.png';
import chairish from './chairish/chairish-cover.png';
import square from './square/cover.png';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      opacity: 0,
      navOpacity: 1,
    };

    this.handleScroll = this.handleScroll.bind(this);
  };

  handleScroll = () => {

    let position = document.getElementById('body2').scrollTop;
    const fadeIn = {opacity: ['0', '1']};
    const fadeOut = {opacity: ['1', '0']};
    const animationOpts = {duration: 200, fill: 'forwards', easing: 'ease-out'};
    const animationOpts2 = {duration: 300, delay: 600, fill: 'forwards', easing: 'ease-in-out'};
    const animationOpts3 = {duration: 600, fill: 'forwards', easing: 'cubic-bezier(.22,.53,.58,.83)'};

    //FADE IN
    const fades = document.getElementsByClassName('fade');
    for (let i = 0; i < fades.length; i++) {
      if (fades[i].offsetTop < position + window.innerHeight - 300 && fades[i].style.opacity === '') {
        fades[i].animate(
          {opacity: [0, 1]},
          {duration: 800, fill: 'forwards', easing: 'ease-in-out'}
        )
        fades[i].style.cssText = 'opacity: 1';
      }
    }

    //Parallax scroll or smth
    const intro = document.getElementsByClassName('intro')[0];
    const projInfo = document.getElementsByClassName('proj-info-wrapper');
    const projImg = document.getElementsByClassName('proj-img');

    intro.style.transform = 'translateY(' + (-position/3) + 'px)';
    for (let i = 0; i < projInfo.length; i++) {
      if (position + window.innerHeight > projImg[i].offsetTop+200) {
        projInfo[i].style.transform = 'translateY(' + (-position/(3+i)+projImg[0].scrollHeight+(100*(-2+i))) + 'px)';
      }
    }

    //Nav links not visible when at contact section
    const body = document.getElementById('body2');
    if (position + window.innerHeight > body.scrollHeight - window.innerHeight/2) {
      this.setState({'navOpacity': 0})
    } else {
      this.setState({'navOpacity': 1})
    }


    /*
    //INTRO TEXT
    if (position < window.innerHeight) {
      const text = document.getElementsByClassName('intro')[0];
      //text.style.transform = 'rotateX('+position/5+'deg)';
      text.style.transform = 'matrix(1,' + (position/500) + ',' + (position/100) + ',' + (1+(position/500)) + ', 0,' + (-position) + ')';
    }
    */

  };

  componentDidMount() {
    document.title = 'Lois Bin';

    anime({
      targets: '.intro-line-1',
      translateX: [-300,0],
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 2000
    })

    anime({
      targets: '.intro-line-2',
      translateX: [-400,0],
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 2400
    })

    anime({
      targets: '.about-link',
      translateX: [200,0],
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 2000
    })

    anime({
      targets: '.nav',
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 4000
    })

  };

  render() {
    let opacity = this.state.opacity;
    let navOpacity = this.state.navOpacity;

    return (

      <div id='body' onScroll={this.handleScroll}>
      {/* BODY */}

        <div id='body2'>
        {/* BODY WITH PADDING */}

          <img id='welcome' className='background' src={background} />
          <div className='nav'>
            <div className='nav-main'>
              <HashLink to='/#welcome' className='nav-link'>Welcome</HashLink>
              <HashLink to='#proj-landscape' className='nav-link'>Work</HashLink>
              <HashLink to='#contact' className='nav-link'>Links</HashLink>
            </div>
            <div className='nav-contact' style={{'opacity': navOpacity}}>
              <span className='nav-email'>lois.bin@gmail.com</span>
              <a className='nav-link' href='http://linkedin.com/in/loisbin' target='_blank'>LinkedIn</a>
            </div>
          </div>
          <span className='copyright'>c. Lois Bin</span>
          <div className='intro'>
            <div className='intro-wrapper'>
              <h1 className='intro-line-1'>Hello, I'm <span className='blue-text'>Lois</span>.</h1>
              <h2 className='intro-line-2'>Designer focused on creating human-centered experiences. Based in California.</h2>
            </div>
            <a className='about-link blue-text'>More about me / Coming soon</a>
          </div>

          <div id='proj-landscape'>
          {/* PROJECTS SECTION */}
            <Link to='/square'>
            <div className='proj-wrapper'>
              <div className='proj-img fade' id='square'></div>
              <div className='proj-info-wrapper'>
                <div className='proj-info'>
                  <h1 className='proj-title'>Square</h1>
                  <p className='proj-sub'>On the Marketing Web team</p>
                </div>
                <div className='proj-type'>
                  <p className='margin-1'>UI/UX</p>
                  <p className='margin-1'>Web</p>
                  <p className='margin-1'>Mobile</p>
                </div>
              </div>
            </div>
            </Link>
            <Link to='/chairish'>
            <div className='proj-wrapper'>
              <div className='proj-img fade' id='chairish'></div>
              <div className='proj-info-wrapper'>
                <div className='proj-info'>
                  <h1 className='proj-title'>Chairish</h1>
                  <p className='proj-sub'>E-commerce for vintage buffs</p>
                </div>
                <div className='proj-type'>
                  <p className='margin-1'>UI/UX</p>
                  <p className='margin-1'>Web</p>
                  <p className='margin-1'>Mobile</p>
                </div>
              </div>
            </div>
            </Link>
            <Link to='/snackpass'>
            <div className='proj-wrapper'>
              <div className='proj-img fade' id='snackpass'></div>
              <div className='proj-info-wrapper'>
                <div className='proj-info'>
                  <h1 className='proj-title'>Snackpass</h1>
                  <p className='proj-sub'>Snag a meal deal on campus</p>
                </div>
                <div className='proj-type'>
                  <p className='margin-1'>UI/UX</p>
                  <p className='margin-1'>Mobile</p>
                </div>
              </div>
            </div>
            </Link>
            <Link to='/enrollment'>
            <div className='proj-wrapper'>
              <div className='proj-img fade' id='enrollment'></div>
              <div className='proj-info-wrapper'>
                <div className='proj-info'>
                  <h1 className='proj-title'>Course Enrollment</h1>
                  <p className='proj-sub'>Effortlessly navigate classes</p>
                </div>
                <div className='proj-type'>
                  <p className='margin-1'>UI/UX, Web</p>
                </div>
              </div>
            </div>
            </Link>
          </div>

          {/*
            <div id='proj-portrait' className='fade'>
              <Preview image={chairish} title='Chairish' type='Web, Mobile' link='chairish' num='1'/>
              <Preview image={snackpassPic} title='Snackpass' type='Mobile' link='snackpass' num='2'/>
              <Preview image={enrollmentGif} title='Course Enrollment' type='Web, Desktop' link='enrollment' num='3'/>
              <Preview image={health} title='Health Tracker' type='Desktop, Mobile' link='health' num='4'/>
            </div>
          */}

          <div id='contact' className='fade'>
          {/* CONTACT */}
            <h1>Let's <span className='blue-text'>create</span> something great <span className='blue-text'>together</span>.</h1>
            <h2 className='contact-text'>My email is lois.bin@gmail.com</h2>
            <h2 className='contact-text'>
              My LinkedIn is <a className='blue-text' href='http://linkedin.com/in/loisbin' target='_blank'>here</a>.
            </h2>

          </div>

        </div>
      </div>
    );
  }
}

export default withRouter(Home);
