import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Photos.css';
import arrow from './misc/arrow.png';
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

  };

  componentDidMount() {
    document.title = "Photos | Lois Bin";

    /*

    const imgs = document.getElementsByClassName('photo-img');
    const fade = {opacity: ['0', '1']};
    const animationOpts = {duration: 800, easing: 'ease-in-out', fill: 'forwards'};

    for (let i = 0; i < imgs.length; i++) {
      imgs[i].animate(fade, animationOpts);
    }

    */

  };

  render() {
    let opacity = this.state.opacity;

    return (
      <div id='body'>
        <div id='body-photos' onScroll={this.handleScroll}>

          <Link to='/'><p className='back'>Back</p></Link>

          <motion.div id='photos'
            animate={{opacity: [0, 1]}}
            transition={{duration: 1}}
          >
            <div className='col'>
              <img className='photo-img' src={oceanside}/>
              <img className='photo-img' src={cars}/>
              <img className='photo-img' src={friends}/>
              <img className='photo-img' src={car}/>
              <img className='photo-img' src={flora}/>
              <img className='photo-img' src={bags}/>
            </div>

            <div className='col'>
              <img className='photo-img' src={palomar}/>
              <img className='photo-img' src={carlsbad}/>
              <img className='photo-img' src={beach}/>
              <img className='photo-img' src={venice}/>
              <img className='photo-img' src={bookstore}/>
              <img className='photo-img' src={seoul}/>
              <img className='photo-img' src={field}/>
            </div>
          </motion.div>

        </div>
      </div>
    );
  }
}

export default withRouter(Photos);
