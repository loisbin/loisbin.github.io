import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Project.css';
import Preview from './Preview.js'
import arrow from './misc/arrow.png';
import back from './misc/back.png';

import header from './square/header.png';
import checkoutCover from './square/checkout-cover.png';
import posCover from './square/Device Mockup.png';
import smsCover from './square/sms-cover.png';
import cartOld from './square/cart-old.png';
import cartNew from './square/cart-new.png';
import cartOldMobile from './square/cart-old-mobile.png';
import cartNewMobile from './square/cart-new-mobile.png';
import checkoutOld from './square/checkout-old.png';
import checkoutNew from './square/checkout-new.png';
import checkoutOldMobile from './square/checkout-old-mobile.png';
import checkoutNewMobile from './square/checkout-new-mobile.png';

class Square extends Component {

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

    //absolute to fixed links
    const links = document.getElementsByClassName('links')[0];
    if (position > window.innerHeight*.65) {
      this.setState({'position': 'fixed'});
      this.setState({'top': '0'});
    } else if (position < window.innerHeight*.65) {
      this.setState({'position': 'absolute'});
      this.setState({'top': '65%'});
    } else if (position > 100) {
      this.setState({'visibility': 'visible'});
    } else if (position === 0) {
      this.setState({'visibility': 'hidden'});
    }

    //FADE IN
    const fades = document.getElementsByClassName('fade');
    for (let i = 0; i < fades.length; i++) {
      if (fades[i].offsetTop < position && fades[i].style.opacity === '') {
        fades[i].style.opacity = 1;
        fades[i].animate(
          {opacity: [0, 1], marginTop: ['4%', 0]},
          {duration: 600, fill: 'forwards', easing: 'ease-in-out'}
        )
      }
    }

  };

  componentDidMount() {
    document.title = "Square | Lois Bin";

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
            <div><Link className='link-proj' to='/'><p>Home</p></Link></div>
            <div><Link className='link-proj' to='/snackpass'><p>Next project</p></Link></div>
          </div>
          <Link to='/'><img className='mobile-back' src={back}/></Link>

          <div id='arrow-wrapper' onClick={this.handleClick} style={{'visibility': visibility}}>
          </div>

          <div className='overview-img' id='overview-square'></div>

          <div className='proj-body-text'>
            <p className='overview-title'>Square</p>
            <div className='wrapper'>
              <div className='overview-info'>
                <p className='gray' id='no-margin'>Type</p>
                <p id='no-margin'>UI/UX, Desktop, Mobile</p>
              </div>
              <div className='overview-info'>
                <p className='gray' id='no-margin'>Date</p>
                <p id='no-margin'>June - August 2020</p>
              </div>
            </div>
            <br/><br/>

            <p className='header'>
              Economic empowerment through sleek, efficient design interfaces.
            </p>
            <p className='overview-text'>
              During my summer with Square's Marketing Web team, I
              created and redesigned pages on Square's website to market, educate, and assist business owners.
            </p>
            <br/><br/>

            <div className='img-wrapper-full fade'><img className='img' src={checkoutCover} alt=''/></div>
            <br/>
            <p className='header'>
              Shop Checkout Redesign
            </p>
            <div className='wrapper space-between'>
              <div className='proj-subtitle'>
                <p>Overview</p>
              </div>
              <div className='text-wrapper '>
                <p className='text'>
                  My main project was a redesign of Square's Shop cart and checkout flows, in order to address
                  long-standing buildup of features on a years-old checkout experience and to reduce the user-dropoff
                  rates within checkout pages.
                </p>
              </div>
            </div>
            <div className='wrapper space-between'>
              <div className='proj-subtitle'>
                <p>Current cart</p>
              </div>
              <div className='text-wrapper '>
                <p className='text'>
                  Issues with the current cart experience largely stems from the layout and hierarchy of the
                  information within the page. A cart with a large number of items will push info regarding price
                  and the button to checkout or sign in <span className='highlight'>below the fold</span>,
                  resulting in unnecessary scrolling. The
                  <span className='highlight'> current layout does not mirror the checkout pages</span>,
                  requiring users to become accustomed to 2 layouts.
                </p>
              </div>
            </div>
            <br/>
            <div className='img-2-wrapper img-wrapper-100-plus fade'>
              <div className='img-wrapper-70'><img className='img' src={cartOld} alt=''/></div>
              <div className='img-wrapper-25'><img className='img' src={cartOldMobile} alt=''/></div>
            </div>
            <br/><br/>
            <div className='wrapper space-between'>
              <div className='proj-subtitle'>
                <p>Re-designed cart</p>
              </div>
              <div className='text-wrapper '>
                <p className='text'>
                The cart redesign created a <span className='highlight'>more uniform experience</span> from cart to checkout,
                with the price card to the left of the items, and shortened the real estate of the page. The button was moved above
                the fold for <span className='highlight'>easy accessibility</span> for the user and prevent un-needed scrolling.
                </p>
              </div>
            </div>
            <br/>
            <div className='img-2-wrapper img-wrapper-100-plus fade'>
              <div className='img-wrapper-70'><img className='img' src={cartNew} alt=''/></div>
              <div className='img-wrapper-25'><img className='img' src={cartNewMobile} alt=''/></div>
            </div>
            <br/><br/>
            <div className='wrapper space-between'>
              <div className='proj-subtitle'>
                <p>Current checkout</p>
              </div>
              <div className='text-wrapper '>
                <p className='text'>
                From an SEO perspective, the main goal of the redesign of the checkout pages is to
                <span className='highlight'> reduce the rate of dropoff</span> from within the experience. UX difficulties of the
                experience are seen in the user's inability to overview the number of steps
                of the checkout process.
                </p>
              </div>
            </div>
            <br/>
            <div className='img-2-wrapper img-wrapper-100-plus fade'>
              <div className='img-wrapper-70'><img className='img' src={checkoutOld} alt=''/></div>
              <div className='img-wrapper-25'><img className='img' src={checkoutOldMobile} alt=''/></div>
            </div>
            <br/><br/>
            <div className='wrapper space-between'>
              <div className='proj-subtitle'>
                <p>Re-designed checkout</p>
              </div>
              <div className='text-wrapper '>
                <p className='text'>
                I designed and iterated between two checkout experiences, funnelling them
                down through <span className='highlight'>usability tests</span> to the use of the progress bar,
                at the top of the checkout page shown below, as a means for users to view which step of the process they're at.
                Tests showed an overall preference for this design of the checkout on both desktop and mobile.
                The new cart and checkout pages are set to ship <span className='highlight'>Q4 2020</span>.
                </p>
              </div>
            </div>
            <br/>
            <div className='img-2-wrapper img-wrapper-100-plus fade'>
              <div className='img-wrapper-70'><img className='img' src={checkoutNew} alt=''/></div>
              <div className='img-wrapper-25'><img className='img' src={checkoutNewMobile} alt=''/></div>
            </div>
            <br/><br/><br/><br/>

            <div className='img-wrapper-full fade'><img className='img' src={posCover} alt=''/></div>
            <br/>
            <p className='header'>
              Pick My POS — Intern Hack Week
            </p>
            <p className='text'>
              During a week-long hack week for interns, I designed the interface and interaction of my team's web questionnaire that
              recommends Square sellers, prospective or new, a POS device based on their business and needs. Our
              project won 1st place, allowing us the opportunity to present to the Square leads.
            </p>
            <br/><br/><br/><br/>

            <div className='img-wrapper-full fade'><img className='img' src={smsCover} alt=''/></div>
            <br/>
            <p className='header'>
              SMS Marketing Page
            </p>
            <p className='text'>
              With the addition of the much-requested text message marketing onto the existing Marketing campaigns
              that Square sellers can opt into, a new web page for Square Marketing needed to be launched. In
              collaboration with a content strategist, copy writer, designer, and PMMs, I designed the page working in
              multiple iterations. It is set to release Q4 2020.
            </p>
            <br/><br/><br/>

          </div>

        </div>
      </div>
    );
  }
}

export default withRouter(Square);
