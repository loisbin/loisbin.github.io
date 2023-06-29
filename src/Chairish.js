import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Project.css';
import back from './misc/back.png';

import chairish from './chairish/chairish-cover.png';
import previous from './chairish/previous.png';
import redesign from './chairish/redesign.png';
import iterations from './chairish/iterations.png';
import hover from './chairish/hover.png';
import mobileCart from './chairish/mobile-cart.png';
import mobileNullCart from './chairish/mobile-cart-empty.png';
import personas from './chairish/personas.png';

class Chairish extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
      if (fades[i].offsetTop < position && fades[i].style.opacity === '') {
        fades[i].style.cssText = 'opacity: 1';
        fades[i].animate(
          {opacity: [0, 1], marginTop: ['4%', 0]},
          {duration: 600, fill: 'forwards', easing: 'ease-in-out'}
        )
      }
    }

  };

  componentDidMount() {
    document.title = "Chairish | Lois Bin";

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
            <div className='link-proj'><Link to='/enrollment'><p>Next project</p></Link></div>
          </div>
          <Link to='/'><img className='mobile-back' src={back}/></Link>

          <div id='arrow-wrapper' onClick={this.handleClick} style={{'visibility': visibility}}>
          </div>

          <div className='overview-img' id='overview-chairish'></div>

          <div className='proj-body-text'>
            <p className='overview-title'>Chairish</p>
            <div className='wrapper space-between'>
              <div className='overview-info'>
                <p className='gray' id='no-margin'>Type</p>
                <p id='no-margin'>UI/UX, Web, Mobile</p>
              </div>
              <div className='overview-info'>
                <p className='gray' id='no-margin'>Date</p>
                <p id='no-margin'>Sept - Dec 2019</p>
              </div>
            </div>
            <br/><br/>

            <p className='header'>
              How can we increase user interaction and efficient user flow through design initiatives?
            </p>
            <p className='overview-text'>
              As a Product Design Intern at Chairish, I collaborated with designers,
              PMs, developers, and other teams to create and ship various projects, including
              conversion, internal improvements, and design-team material.
            </p>
            <br/>

            <p className='proj-name'>Order Management</p>
            <div className='wrapper space-between'>
              <div className='proj-subtitle'>
                <p>Overview</p>
              </div>
              <div className='text-wrapper space-between'>
                <p className='text'>
                  The order pages are used by admin users in the Chairish team,
                  in order to view and make corrections to customer
                  orders and by customers in order to review previous purchases.<br/>
                  My task was to <span className='highlight'>discover current difficulties in the ordering system and design
                  a UI</span> that would ameliorate these pain points.
                </p>
              </div>
            </div>
            <br/>
            <div className='wrapper space-between'>
              <div className='proj-subtitle'>
                <p>The problem</p>
              </div>
              <div className='text-wrapper space-between'>
                <p className='text'>
                  Internal teams have difficulties with the order management flow, from viewing order info to editing them,
                  therefore <span className='highlight'>lengthening order processing and onboarding times</span>.<br/>
                  Through meetings with the customer service and shipping teams, both of
                  which rely heavily on these order pages, I was able to <span className='highlight'>gain insight on the
                  biggest pain points with the current UI.</span>
                </p>
              </div>
            </div>
            <div className='img-wrapper-100 fade'><img className='img' src={previous} alt='Previous pages'/></div>
            <br/>
            <div className='wrapper space-between'>
              <div className='proj-subtitle'>
                <p>Use cases</p>
              </div>
              <div className='text-wrapper space-between'>
                <p className='text'>
                  Additional to usability issues, I gained insight on the use cases that were most common to these teams
                  in their daily use of these pages.
                <ul>
                  <li>
                    Addressing a customer service question or issue
                  </li>
                  <li>
                    Changing shipping/billing info
                  </li>
                  <li>
                    Returning or cancelling an order
                  </li>
                </ul>
                  With these use cases in mind, I was able to better <span className='highlight'>understand how users
                  are navigating these pages</span>, furthering design decisions on possible layouts that would
                  be most useful and easiest for our teams.
                </p>
              </div>
            </div>
            <br/>
            <div className='wrapper space-between'>
              <div className='proj-subtitle'>
                <p>Goals</p>
              </div>
              <div className='text-wrapper space-between'>
                <p className='text'>
                  After gathering info on the difficulties of the order pages, I was able to <span className='highlight'>define
                  the goals and changes that needed to be accomplished</span> in order for the UI to be usable and efficient.
                <ul>
                  <li>
                    Organize and sort admin order info into digestable sections
                  </li>
                  <li>
                    Bring shipping/billing info to the top for visibility
                  </li>
                  <li>
                    Homogenize the table layouts
                  </li>
                  <li>
                    Place edit buttons for relevance and with space
                  </li>
                </ul>
                </p>
              </div>
            </div>
            <br/>
            <div className='wrapper space-between'>
              <div className='proj-subtitle'>
                <p>Iterations</p>
              </div>
              <div className='text-wrapper space-between'>
                <p className='text'>
                  I went through <span className='highlight'>multiple iterations</span> for possible layouts,
                  in order to work towards the most suitable UI for the end users.
                </p>
              </div>
            </div>
            <div className='img-wrapper-100 fade'><img className='img' src={iterations} alt='Iterations'/></div>
            <br/>
            <div className='wrapper space-between'>
              <div className='proj-subtitle'>
                <p>Finals</p>
              </div>
              <div className='text-wrapper space-between'>
                <p className='text'>
                  Upon review with designers and end users of the order pages, the final iteration was reached,
                  based on what <span className='highlight'> best addressed the usability issues and eased the use cases </span>
                  for these pages.
                </p>
              </div>
            </div>
            <div className='img-wrapper-100 fade'><img className='img' src={redesign} alt='Redesigned pages'/></div>
            <br/><br/>

            <p className='proj-name'>Hover Modals</p>
            <div className='wrapper space-between'>
              <div className='proj-subtitle'>
                <p>Overview</p>
              </div>
              <div className='text-wrapper space-between'>
                <p className='text'>
                  Chairish’s nav bar needed more <span className='highlight'>delightful empty states and hover
                  states</span> that could also inform users about the various icons.
                </p>
              </div>
            </div>
            <br/>
            <div className='wrapper space-between'>
              <div className='proj-subtitle'>
                <p>For desktop</p>
              </div>
              <div className='text-wrapper space-between'>
                <p className='text'>
                  New desktop modals are <span className='highlight'>uniform </span> across all of the nav's links
                  and incorporate more <span className='highlight'>visual hierarchy</span> using new component
                  library fonts and sizing.
                </p>
              </div>
            </div>
            <div className='img-wrapper-100 fade'><img className='img' src={hover} alt='Hover modals'/></div>
            <br/>
            <div className='wrapper space-between'>
              <div className='proj-subtitle'>
                <p>For mobile</p>
              </div>
              <div className='text-wrapper space-between'>
                <p className='text'>
                  On the mobile site, the modals will be <span className='highlight'>full-screen</span> for easier
                  interaction with and visibility of the contents, with an exit button to return to the original screen.
                </p>
              </div>
            </div>
            <br/>
            <div className='images fade'>
              <div className='img-wrapper-40'><img className='img' src={mobileNullCart} alt='Cart modal'/></div>
              <div className='img-wrapper-40'><img className='img' src={mobileCart} alt='Cart modal'/></div>
            </div>
            <br/><br/>

            <p className='proj-name'>User Personas</p>
            <div className='wrapper space-between'>
              <div className='proj-subtitle'>
                <p>Overview</p>
              </div>
              <div className='text-wrapper space-between'>
                <p className='text'>
                  With user personas, design decisions could hold a stronger case, backed with
                  <span className='highlight'> demographic and user-based </span> information on how consumers
                  use Chairish.
                </p>
              </div>
            </div>
            <br/>
            <div className='wrapper space-between'>
              <div className='proj-subtitle'>
                <p>Objective</p>
              </div>
              <div className='text-wrapper space-between'>
                <p className='text'>
                  Create user personas for Buyers, Buyers in the Trade Program, Sellers, and Designers.
                </p>
              </div>
            </div>
            <br/>
            <div className='img-wrapper-100 fade'><img className='img' src={personas} alt='Personas'/></div>
            <br/><br/>
          </div>

        </div>
      </div>
    );
  }
}

export default withRouter(Chairish);
