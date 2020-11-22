import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { motion } from 'framer-motion';
import anime from 'animejs/lib/anime.es.js';
import './About.css';
import back from './misc/back.png';
import me from './about/pic.png';
import lois from './about/lois.png';
import bin from './about/bin.png';

class About extends Component {

  constructor(props) {
    super(props);
    this.state = {
      opacity: 0,
    };

    this.handleScroll = this.handleScroll.bind(this);
  };

  handleScroll() {
    let position = document.getElementById('body2').scrollTop;
    const lois = document.getElementById('lois');
    const bin = document.getElementById('bin');
    const text = document.getElementsByClassName('about-text')[0];
    const me = document.getElementsByClassName('about-img')[0];

    //lois.style.transform = 'translateY(' + (-position/3) + 'px)';
    //bin.style.transform = 'translateY(' + (-position/4) + 'px)';
    me.style.transform = 'translateY(' + (-position/4) + 'px)';
    text.style.transform = 'translateY(' + (-position/4) + 'px)';
  };

  componentDidMount() {
    document.title = "About | Lois Bin";

    anime({
      targets: '.about-images',
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 2000,
      delay: 400,
    })

    anime({
      targets: '#bin',
      translateY: [200, 0],
      easing: "easeOutExpo",
      duration: 2000,
      delay: 400,
    })

    anime({
      targets: '#lois',
      translateY: [-200, 0],
      easing: "easeOutExpo",
      duration: 2000,
      delay: 400,
    })

    anime({
      targets: '.about-text',
      translateX: [200, 0],
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 2000,
      delay: 400,
    })

  };

  render() {
    let opacity = this.state.opacity;

    return (

      <div id='body'>
      {/* BODY */}
        <div id='body2' onScroll={this.handleScroll}>
        {/* BODY WITH PADDING */}

          <div className='nav'>
            <div className='nav-main'>
              <Link to='/' className='nav-link'>Home</Link>
            </div>
            <div className='nav-contact'>
              <span className='nav-email'>lois.bin@gmail.com</span>
              <a className='nav-link' href='http://linkedin.com/in/loisbin' target='_blank'>LinkedIn</a>
            </div>
          </div>
          <span className='copyright'>c. Lois Bin</span>

          <div className='about-images'>
            <img className='about-img' src={me} />
            <img className='about-img about-overlay' id='lois' src={lois} />
            <img className='about-img about-overlay' id='bin' src={bin} />
          </div>
          <p className='about-text'>
            California-native and UC Berkeley Class of 2020, earning my B.A. in Cognitive Science.<br/>
            Previous design experience includes <Link className='blue-text' to='/square' target='_blank'>Square</Link>
            , <Link className='blue-text' to='/chairish' target='_blank'>Chairish</Link>, and Bandwidth.<br/>
            When I’m not moving pixels, I’m probably still moving pixels for leisure and digging into anything
            book, <Link className='blue-text' to='/photos' target='_blank'>photography</Link>, music, or film-related.
          </p>

        </div>
      </div>
    );
  }
}

export default withRouter(About);
