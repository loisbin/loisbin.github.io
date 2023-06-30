import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Photos.css';
import back from './misc/back.png';

import carlsbad from './photos/carlsbad.jpg';
import friends from './photos/friends.png';
import beach from './photos/beach.png';
import cars from './photos/la-cars.png';
import centralPark from './photos/central-park.png';
import meadow from './photos/sheep-meadow.png';
import venice from './photos/venice.png';
import seoul from './photos/seoul.png';
import green from './photos/green.png';
import kasaFlyer from './photos/kasa-flyer.png';
import filmLA from './photos/la-film.png'
import filmSub from './photos/sf-film.png';
import bags from './photos/bags.png';
import pottery from './photos/pottery.png';
import field from './photos/field.png';
import bookstore from './photos/bookstore.jpg';
import car from './photos/car.png';
import flora from './photos/flora.jpg';
import palomar from './photos/palomar.png';
import oceanside from './photos/oceanside.png';

class Photos extends Component {

  constructor(props) {
    super(props);
    this.state = {
      opacity: 0,
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  };

  handleClick() {
  };

  handleLoad = () => {

  };

  handleScroll() {

    let position = document.getElementById('body2').scrollTop;
    const fades = document.getElementsByClassName('fade');
    for (let i = 0; i < fades.length; i++) {
      if (fades[i].offsetTop < position + window.innerHeight-300 && fades[i].style.opacity === '') {
        fades[i].animate(
          {opacity: [0, 1]},
          {duration: 800, fill: 'forwards', easing: 'ease-in-out'}
        )
        fades[i].style.opacity = 1;
      }
    }


  };

  componentDidMount() {
    document.title = "Photos | Lois Bin";
  };

  render() {
    let opacity = this.state.opacity;

    return (
      <div id='body'>
        <div id='body2' onScroll={this.handleScroll}>

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

          <motion.div id='photos'
            animate={{opacity: [0, 1]}}
            transition={{duration: 1}}
          >
            <div className='col'>
              <img className='photo-img' src={oceanside}/>
              <img className='photo-img fade' src={cars}/>
              <img className='photo-img fade' src={friends}/>
              <img className='photo-img fade' src={car}/>
              <img className='photo-img fade' src={flora}/>
              <img className='photo-img fade' src={bags}/>
            </div>

            <div className='col'>
              <img className='photo-img' src={palomar}/>
              <img className='photo-img fade' src={carlsbad}/>
              <img className='photo-img fade' src={beach}/>
              <img className='photo-img fade' src={venice}/>
              <img className='photo-img fade' src={bookstore}/>
              <img className='photo-img fade' src={seoul}/>
              <img className='photo-img fade' src={field}/>
            </div>
          </motion.div>

        </div>
      </div>
    );
  }
}

export default withRouter(Photos);
