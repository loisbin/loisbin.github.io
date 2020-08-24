import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Project.css';
import Preview from './Preview.js'
import arrow from './misc/arrow.png';
import back from './misc/back.png';

import overview from './enrollment/overview.png';
import preview from './enrollment/untitled.gif';
import previewVid from './enrollment/untitled.mp4';
import painPoints from './enrollment/pain-points.png';
import useCases from './enrollment/use-cases.png';
import current1 from './enrollment/current-1.png';
import current2 from './enrollment/current-2.png';
import userFlow from './enrollment/user-flow.png';
import wireframe from './enrollment/wireframe.png';
import styleGuide from './enrollment/style-guide.png';
import prototype1 from './enrollment/prototype-1.png';
import prototype2 from './enrollment/prototype-2.png';
import prototype3 from './enrollment/prototype-3.png';
import search1 from './enrollment/search.png';
import search2 from './enrollment/search-1.png';
import classDetails from './enrollment/details.png';
import cart from './enrollment/cart.png';

class Enrollment extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visibility: 'hidden',
      display: 'none',
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
    document.title = "Class Enrollment Redesign | Lois Bin";

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
            <div className='link-proj'><Link to='/health'><p>Next project</p></Link></div>
          </div>
          <Link to='/'><img className='mobile-back' src={back}/></Link>

          <div id='arrow-wrapper' onClick={this.handleClick} style={{'visibility': visibility}}>
          </div>

          <div className='overview-img'>
            <video src={previewVid} width='100%' height='100%' autoPlay loop></video>
          </div>
          <br/>
          <p className='overview-title'>Course Enrollment Redesign</p>
          <div className='wrapper'>
            <div className='overview-info'>
              <p className='gray' id='no-margin'>Type</p>
              <p id='no-margin'>Web, Desktop</p>
            </div>
            <div className='overview-info'>
              <p className='gray' id='no-margin'>Date</p>
              <p id='no-margin'>June 2019</p>
            </div>
          </div>
          <br/><br/>

          <p className='header'>
            What are the major pain points, and what design approaches can ameliorate them?
          </p>
          <p className='overview-text'>
            A redesign of CalCentral, a university course enrollment system aimed to improve efficiency and ease-of-use.
          </p>
          <br/>

          <div className='img-wrapper-100-plus fade'>
            <img className='img' src={overview} alt='Overview'/>
          </div>
          <br/>

          {/* Defining the problem */}
          <div className='wrapper'>
            <div className='proj-subtitle'>
              <p>Defining the problem</p>
            </div>
            <div className='text-wrapper space-between'>
              <p className='text'>
                Patterns of <span className='highlight'>usability issues</span> can be seen through browsing the site&#39;s
                architecture such as:
                <ul>
                  <li>
                    <span className='highlight'>Overlap of pages in the information architecture</span><br/>
                    On the homepage of CalCentral are links to crucial pages, such as browsing and enrolling in courses. However,
                    there are multiple ways to access these pages from each other, it becomes unclear the best path a user
                    should take to access the pages they need.
                  </li>
                  <li>
                    <span className='highlight'>Lack of class information</span><br/>
                    UC Berkeley students are forced to reference other pages of Berkeley&#39;s website outside of their registration
                    portal to get class information such as phases, specifics on availability, etc.
                  </li>
                  <li>
                    <span className='highlight'>Condensed UI</span><br/>
                    The UI of the system appears crammed and busy to the eye, making an already hectic process more visually so.
                  </li>
                </ul>
              </p>
            </div>
          </div>
          <br/>

          {/* Pain points */}
          <p className='proj-subtitle'>Pain points</p>
          <div className='images fade'>
            <div className='img-wrapper-100-plus'><img className='img' src={painPoints} alt='Current user pain points'/></div>
          </div>
          <br/>

          {/* Use cases */}
          <div className='wrapper'>
            <div className='proj-subtitle'>
              <p>Use cases</p>
            </div>
            <div className='text-wrapper space-between'>
              <p className='text'>
                When considering what types of <span className='highlight'>use cases</span> are applicable to using CalCentral, there are 3 main ones:
                <ul>
                  <li>
                    Student wants to browse classes for an upcoming semester and add potential classes to their cart. They may
                    or may not enroll in these classes.
                  </li>
                  <li>
                    Student wants to enroll in classes saved in their cart.
                  </li>
                  <li>
                    Student wants to modify classes they are already enrolled in.
                  </li>
                </ul>
              </p>
            </div>
          </div>
          <br/>
          <div className='images fade'>
            <div className='img-wrapper-100-plus'><img className='img' src={useCases} alt='Use cases'/></div>
          </div>
          <br/>

          {/* Goals */}
          <div className='wrapper'>
            <div className='proj-subtitle'>
              <p>Goals</p>
            </div>
            <div className='text-wrapper space-between'>
              <p className='text'>
                Thus, the goals of this project were to:
                <ul>
                  <li>
                    Create an easily navigable user flow for the class enrollment experience.
                  </li>
                  <li>
                    Add information to the system to limit the amount of external resources needed to enroll in classes.
                  </li>
                  <li>
                    Make the system easy-to-read and inviting.
                  </li>
                </ul>
              </p>
            </div>
          </div>
          <br/>

          {/* Ideation and wireframing */}
          <div className='wrapper'>
            <div className='proj-subtitle'>
              <p>Ideation and wireframing</p>
            </div>
            <div className='text-wrapper space-between'>
              <p className='text'>
                Initially, I began with brainstorming a <span className='highlight'>user flow</span>, in order to understand the information architecture
                for the enrollment system that will streamline the overlap in pages in the current site.
                <ul>
                  <li>
                    Having a split screen for search criteria and search results allows users to quickly modify their
                    search filters, rather than navigating to the previous page.
                  </li>
                  <li>
                    The course detail modal allows users to view more relevant information about a class without having
                    to navigate to an external resource.
                  </li>
                  <li>
                    The shopping cart icon in the navigation bar gives users a clear link to navigate there without having
                    to add classes to their cart like the current site. It serves the use case of students who simply want
                    to view their cart or enrolled classes.
                  </li>
                </ul>
              </p>
            </div>
          </div>
          <br/>
          <div className='images fade'>
            <div className='img-wrapper-100-plus'><img className='img' src={userFlow} alt='User flow'/></div>
          </div>
          <br/>

          {/* Wireframes */}
          <p className='text'>
            With an idea of which pages are needed, I <span className='highlight'>wireframed</span> the potential layout of the components.
          </p>
          <br/>
          <div className='images fade'>
            <div className='img-wrapper-100-plus'><img className='img' src={wireframe} alt='Wireframe'/></div>
          </div>
          <br/>

          {/* Style guide */}
          <p className='text'>
            I created a <span className='highlight'>style guide</span> and added to it as I created the hi-fi prototype. It served as a baseline for
            the general theme that the site would follow, in order to avoid skewing from this guide.
          </p>
          <br/>
          <div className='images fade'>
            <div className='img-wrapper-100-plus'><img className='img' src={styleGuide} alt='Style guide'/></div>
          </div>
          <br/><br/>

          {/* Hi-fi prototypes */}
          <p className='proj-subtitle'>Hi-fi prototype</p>
          <br/>
          <div className='images fade'>
            <div className='img-wrapper-100-plus'><img className='img' src={prototype1} alt='Search criteria'/></div>
          </div>
          <p className='subtext'>
            Navigation from semester selection to search criteria page
          </p>
          <br/>
          <div className='images fade'>
            <div className='img-wrapper-100-plus'><img className='img' src={prototype2} alt='Course details'/></div>
          </div>
          <p className='subtext'>
            Search results in expanded view and class details modal
          </p>
          <br/>
          <div className='images fade'>
            <div className='img-wrapper-100-plus'><img className='img' src={prototype3} alt='Cart'/></div>
          </div>
          <p className='subtext'>
            Selecting a class and shopping cart
          </p>
          <br/>

          {/* Xd prototype */}
          {/*
          <p className='text'>
            Click around!
          </p>
          <div className='images'>
            <div className='iframe-wrapper'>
              <iframe style={{'display': display}} src='https://xd.adobe.com/embed/b2cf6654-bbd5-409d-683d-a7b6cca89566-c4fe/' frameborder="0" allowfullscreen></iframe>
            </div>
          </div>
          <br/>
          <a className='prototype-link' target="_blank" href='https://xd.adobe.com/embed/b2cf6654-bbd5-409d-683d-a7b6cca89566-c4fe/'>
            Link to prototype ⟶
          </a>
          */}
          <br/><br/><br/><br/>

        </div>
      </div>
    );
  }
}

export default withRouter(Enrollment);
