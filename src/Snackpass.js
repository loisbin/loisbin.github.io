import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Project.css';
import Preview from './Preview.js'
import arrow from './misc/arrow.png';
import back from './misc/back.png';

import overview from './snackpass/overview.png';
import original from './snackpass/original.png';
import competitive from './snackpass/competitive-analysis.png'
import goals from './snackpass/goals.png'
import lofi from './snackpass/lofi.png';
import color from './snackpass/color-guide.png'
import hifi from './snackpass/hifi.png'
import snackpassPic from './snackpass/snackpass-cover.png';

class Snackpass extends Component {

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
    //let iframe = document.getElementsByClassName('iframe-wrapper')[0].offsetTop;
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

    /*
    if (position + window.innerHeight > iframe) {
      this.setState({'display': 'block'});
    }
    */

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
    document.title = "Snackpass Redesign | Lois Bin";

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

          <div id='arrow-wrapper' onClick={this.handleClick} style={{'visibility': visibility}}></div>

          <div className='overview-img' id='overview-snackpass'></div>

          <div className='proj-body-text'>
            <p className='overview-title'>Snackpass Redesign</p>
            <div className='wrapper space-between'>
              <div className='overview-info'>
                <p className='gray' id='no-margin'>Type</p>
                <p id='no-margin'>UI/UX, Mobile</p>
              </div>
              <div className='overview-info'>
                <p className='gray' id='no-margin'>Date</p>
                <p id='no-margin'>Jan 2019</p>
              </div>
            </div>
            <br/><br/>

            <p className='header'>
              How can I increase in-app efficiency and user-to-user interactions?
            </p>
            <p className='overview-text'>
              A mobile redesign of a restaurant ordering and discount app, posed as a design challenge,
              targeting student campuses.
            </p>
            <br/>

            <div className='img-wrapper-100 fade'>
              <img className='img' src={overview} alt='Overview'/>
            </div>
            <br/>

            <div className='wrapper space-between'>
              <div className='proj-subtitle'>
                <p>Defining the problem</p>
              </div>
              <div className='text-wrapper '>
                <p className='text'>
                  On review of the mobile app&#39;s features and UI, a few of its <span className='highlight'>usability issues</span> came down to these
                  points:
                  <ul>
                    <li>
                      <span className='highlight'>No filter options</span><br/>
                      For the amount of restaurants that are available on the app, there is no feature for users to filter what
                      types of food they want to choose from, causing users to spend time scrolling instead.
                    </li>
                    <li>
                      <span className='highlight'>User profile section lacks content</span><br/>
                      The profile section of the app lacks personalization and potential use of in-app friend interaction/emphasis.
                    </li>
                  </ul>
                </p>
              </div>
            </div>
            <br/>
            <div className='images fade'>
              <div className='img-wrapper-100-plus'><img className='img' src={original} alt='Original interface'/></div>
            </div>
            <br/>
            <p className='text'>
              Through the <span className='highlight'>competitive analysis</span> of similar food-ordering apps,
              like UberEats, and other meal discount apps, such as another campus-targeted mobile app called Hooked,
              the <span className='highlight'>key features that differentiates Snackpass</span> from others are:
              <ul>
                <li>Ability to order in-app and use available discounts to a user&#39;s order</li>
                <li>No delivery fee and an alternative emphasis on no in-line wait for food</li>
                <li>Reward points for restaurants</li>
              </ul>
            </p>
            <br/>
            <div className='images fade'>
              <div className='img-wrapper-100'><img className='img' src={competitive} alt='Competitive analysis'/></div>
            </div>
            <br/>
            <p className='text'>
              With these findings and key points in mind, the <span className='highlight'>goal</span> for this project was listed as such:
            </p>
            <br/>
            <div className='images fade'>
              <div className='img-wrapper-100'><img className='img' src={goals} alt='Goals'/></div>
            </div>
            <br/>

            <div className='wrapper space-between'>
              <div className='proj-subtitle'>
                <p>Ideation and wireframing</p>
              </div>
              <div className='text-wrapper '>
                <p className='text'>
                  During the initial process of ideation, a redesign of the <span className='highlight'>information architecture</span> was done to improve the
                  searching UX. Thus, the main navigation removed the friends feed that showed the ordering feed on your campus
                  and replaced it with a map feature that could help navigate restaurants nearby.
                  <br/><br/>
                  New navigation architecture:
                  <ul>
                    <li>Restaurant search</li>
                    <li>Map</li>
                    <li>User profile</li>
                  </ul>
                  <br/>
                </p>
              </div>
            </div>
            <p className='text'>
              On the <span className='highlight'>search tab</span>, the goal was to
              <ul>
                <li>Redesign and align the Featured Restaurant carousel</li>
                <li>Add filter functionality by food type, distance, discounts, and restaurant business times</li>
                <li>Move the search button to the top of the page for ease of accessibility</li>
              </ul>
            </p>
            <br/>
            <div className='images fade'>
              <div className='img-wrapper-100-plus'><img className='img' src={lofi} alt='Low fidelity'/></div>
            </div>
            <br/>
            <p className='text'>
              For the <span className='highlight'>restaurant menu/detail pages</span>, the following key points led the design ideation:
              <ul>
                <li>Retaining but creating a more visual display of rewards at the top</li>
                <li>Adding an info button near the top for details like opening/closing times, location, accessibility, etc.</li>
                <li>Re-iterating the carousel format from the search feed for featured menu items</li>
              </ul>
              The <span className='highlight'>profile page</span> had the most features added, as the original page only displayed rewards and did not serve
              so much as a social profile. The goal with the profile page was to:
              <ul>
                <li>Personalize user info with a bio and profile picture</li>
                <li>Display rewards in a more easy-to-visualize way</li>
                <li>Section for friends to emphasize the friending feature the app has</li>
              </ul>
            </p>
            <br/>
            <p className='text'>
              The current <span className='highlight'>color palette</span> of the app featured a variety of bright colors
               mixed with the colors the emojis already give. I opted for a more consistent and streamlined palette to
               work with for the final hi-fi prototype.
            </p>
            <br/>
            <div className='images fade'>
              <div className='img-wrapper-100'><img className='img' src={color} alt='Color guide'/></div>
            </div>
            <br/>

            <div className='wrapper space-between'>
              <div className='proj-subtitle'>
                <p>Hi-fi prototyping and iterations</p>
              </div>
              <div className='text-wrapper '>
                <p className='text'>
                  With wireframes for each redesigned page, I was able to mockup an intial round of hi-fidelity prototypes.
                   Afterwards, I went through and made stylistic iterations with the finalized color palette.
                </p>
              </div>
            </div>
            <br/>
            <div className='images fade'>
              <div className='img-wrapper-100-plus'><img className='img' src={hifi} alt='High fidelity'/></div>
            </div>
            <br/>
            {/*
            <p className='text'>Click around!</p>
            <div className='images'>
              <div className='iframe-wrapper'>
                <iframe style={{'display':display}} src="https://xd.adobe.com/embed/192da914-cd67-416c-48b6-068ebb815ceb-6f1c/" frameborder="0" allowfullscreen></iframe>
              </div>
            </div>
            <br/>
            <a className='prototype-link' target="_blank" href='https://xd.adobe.com/embed/192da914-cd67-416c-48b6-068ebb815ceb-6f1c/'>
              Link to prototype ⟶
            </a>
            */}
            <br/><br/><br/><br/>
          </div>

        </div>
      </div>
    );
  }
}

export default withRouter(Snackpass);
