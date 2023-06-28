import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { motion, useTransform } from 'framer-motion';
import anime from 'animejs/lib/anime.es.js';
import './Home.css';
import _ from 'lodash';
import Preview from './Preview.js';
import arrow from './misc/arrow-down-short.svg';
import background from './misc/background.png';
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
    const bodyHeight = document.getElementById('body2').scrollHeight;
    // const fadeIn = {opacity: ['0', '1']};
    // const fadeOut = {opacity: ['1', '0']};
    // const animationOpts = {duration: 200, fill: 'forwards', easing: 'ease-out'};
    // const animationOpts2 = {duration: 300, delay: 600, fill: 'forwards', easing: 'ease-in-out'};
    // const animationOpts3 = {duration: 600, fill: 'forwards', easing: 'cubic-bezier(.22,.53,.58,.83)'};

    // FADE IN
    const fades = document.getElementsByClassName('fade');
    for (let i = 0; i < fades.length-1; i++) {
      if (fades[i].offsetTop < position-200 && fades[i].style.opacity === '') {
        fades[i].animate(
          {opacity: [0, 1]},
          {duration: 800, fill: 'forwards', easing: 'ease-in-out'}
        )
        fades[i].style.opacity = 1;
      } else if (position + window.innerHeight >= bodyHeight && fades[fades.length-1].style.opacity === '') {
        fades[fades.length-1].animate(
          {opacity: [0, 1]},
          {duration: 800, fill: 'forwards', easing: 'ease-in-out'}
        )
        fades[fades.length-1].style.opacity = 1;
      }
    }

    // Parallax scroll or smth
    // const intro = document.getElementsByClassName('intro')[0];
    // const projInfo = document.getElementsByClassName('proj-info-wrapper');
    // const projImg = document.getElementsByClassName('proj-img');

    // intro.style.transform = 'translateY(' + (-position/3) + 'px)';
    
    // for (let i = 0; i < projInfo.length; i++) {
    //   if (position + window.innerHeight > projImg[i].offsetTop+200) {
    //     projInfo[i].style.transform = 'translateY(' + (-position/(3+i)+projImg[0].scrollHeight+(100*(-2+i))) + 'px)';
    //   }
    // }

    // Nav links not visible when at contact section
    const body = document.getElementById('body2');
    if (position + window.innerHeight > body.scrollHeight - window.innerHeight/2) {
      this.setState({'navOpacity': 0})
    } else {
      this.setState({'navOpacity': 1})
    }

    /*
    // INTRO TEXT
    if (position < window.innerHeight) {
      const text = document.getElementsByClassName('intro')[0];
      //text.style.transform = 'rotateX('+position/5+'deg)';
      text.style.transform = 'matrix(1,' + (position/500) + ',' + (position/100) + ',' + (1+(position/500)) + ', 0,' + (-position) + ')';
    }
    */

  };

  componentDidMount() {

    // anime({
    //   targets: '.intro-line-1',
    //   translateX: [-400,0],
    //   opacity: [0, 1],
    //   easing: "easeOutExpo",
    //   duration: 1600,
    //   delay: 400,
    // })

    // anime({
    //   targets: '.intro-line-2',
    //   translateX: [-600,0],
    //   opacity: [0, 1],
    //   easing: "easeOutExpo",
    //   duration: 1700,
    //   delay: 450,
    // })

    // anime({
    //   targets: '.intro-line-3',
    //   translateX: [-800,0],
    //   opacity: [0, 1],
    //   easing: "easeOutExpo",
    //   duration: 1800,
    //   delay: 500,
    // })

    // anime({
    //   targets: '.about-link',
    //   translateX: [200,0],
    //   opacity: [0, 1],
    //   easing: "easeOutExpo",
    //   duration: 1800,
    //   delay: 400,
    // })

    anime({
      targets: '.nav',
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 4000
    })

  };

  render() {
    document.title = 'Lois Bin';
    let opacity = this.state.opacity;
    let navOpacity = this.state.navOpacity;

    return (

      <div id='body' onScroll={this.handleScroll}>
      {/* body */}

        <div id='body2'>
        {/* body with padding */}

          <div className='nav'>
            {/* nav bar */}
            <img src="" />
            <div className='nav-contact' style={{'opacity': navOpacity}}>
              <a className='nav-email' href="#" onClick={() => {navigator.clipboard.writeText("lois.bin@gmail.com")}}>lois.bin@gmail.com</a>
              <a className='nav-link' href='http://linkedin.com/in/loisbin' target='_blank'>LinkedIn</a>
            </div>
          </div>
          {/*<span className='copyright'>c. Lois Bin — 2022</span>*/}



          <div className='grid-container'>
            <h1 className='grid-item-1'>Product designer @ Square.</h1>
            <h1 className='grid-item-2'><i>Based in California.</i></h1>

            <hr class='rounded' className='grid-item-full'/>

            <h4 className='grid-item-1'>UI/UX</h4>

            <h1 className='grid-item-1'>Resquared Reports</h1>
            <h1 className='grid-item-2'><i>2021 – Revamped data viz to show users valuable insights.</i></h1>
            <div className='grid-item-full proj-img'></div>

            <div className='grid-item-full margin-v'></div>

            <h1 className='grid-item-1'>Square Shop Checkout</h1>
            <h1 className='grid-item-2'><i>2020 – Redesigned the marketing site's checkout experience.</i></h1>
            <div className='grid-item-full proj-img'></div>

          </div>



          <div className='intro'>
            {/* intro */}
              {/* <div className='intro-wrapper'>
                <h1 className='intro-line-1'>Hello, I'm <Link className='about-link' to='/about'>Lois</Link>.</h1>
                <h1 className='intro-line-2'>Designer of human-centered experiences.</h1>
              </div>
              <h1 className='intro-line-3'>Currently designing and coding a universal API for IoT at <a>Seam</a>.</h1>
          </div>
          <hr/>
          <div style={{ display: "flex"}}>
            <p style={{marginRight: 4}}>See below for projects</p> <img src={arrow}/> */}
          </div>

          <div id='proj-landscape'>
          {/* projects */}
            {/* <div className='proj-wrapper'>
            <Link className='proj-title' to='/square' >Square</Link>
              <p className='proj-sub'>2020 — Redesigned the Square's Shop Checkout experience to reduce drop-off rates and more!</p>
              <Link className='proj-img-link' to='/square'><div className='proj-img fade' id='square'></div></Link>
            </div>

            <div className='proj-wrapper'>
            <Link className='proj-title' to='/chairish' >Chairish</Link>
              <p className='proj-sub'>2019 — Internal tooling for Customer Success teams and creating user stories.</p>
              <Link className='proj-img-link' to='/chairish' ><div className='proj-img fade' id='chairish'></div></Link>
            </div>
          </div>
          <hr style={{marginTop: "20%"}}/>
          <div style={{ display: "flex"}}>
            <p style={{marginRight: 4}}>See below for contact info</p> <img src={arrow}/> */}
          </div>

          <div id='contact'>
          {/* contact */}
            <h1 className='contact-text'>Feel free to shoot me an email at <a href="#" onClick={() => {navigator.clipboard.writeText("lois.bin@gmail.com")}} >lois.bin@gmail.com</a>.</h1>
            <h1 className='contact-text'>
              My LinkedIn is <a href='http://linkedin.com/in/loisbin' target='_blank'>here</a>.
            </h1>
          </div>

        </div>
      </div>
    );
  }
}

export default withRouter(Home);
