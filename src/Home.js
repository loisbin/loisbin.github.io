import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { motion, useTransform } from "framer-motion";
import anime from "animejs/lib/anime.es.js";
import "./Home.css";
import _ from "lodash";
import arrow from "./misc/link-arrow.svg";
import copy from "./misc/copy.svg";
import chairish from "./chairish/chairish-cover.png";
import square from "./square/cover.png";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: 0,
      navOpacity: 1,
    };

    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll = () => {
    let position = document.getElementById("body-inner").scrollTop;
    const bodyHeight = document.getElementById("body-inner").scrollHeight;

    // FADE IN
    const fades = document.getElementsByClassName("fade");
    for (let i = 0; i < fades.length - 1; i++) {
      if (
        fades[i].offsetTop < position - 200 &&
        fades[i].style.opacity === ""
      ) {
        fades[i].animate(
          { opacity: [0, 1] },
          { duration: 800, fill: "forwards", easing: "ease-in-out" }
        );
        fades[i].style.opacity = 1;
      } else if (
        position + window.innerHeight >= bodyHeight &&
        fades[fades.length - 1].style.opacity === ""
      ) {
        fades[fades.length - 1].animate(
          { opacity: [0, 1] },
          { duration: 800, fill: "forwards", easing: "ease-in-out" }
        );
        fades[fades.length - 1].style.opacity = 1;
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
    const body = document.getElementById("body-inner");
    if (
      position + window.innerHeight >
      body.scrollHeight - window.innerHeight / 2
    ) {
      this.setState({ navOpacity: 0 });
    } else {
      this.setState({ navOpacity: 1 });
    }

    // INTRO TEXT
    /*
    if (position < window.innerHeight) {
      const text = document.getElementsByClassName('intro')[0];
      //text.style.transform = 'rotateX('+position/5+'deg)';
      text.style.transform = 'matrix(1,' + (position/500) + ',' + (position/100) + ',' + (1+(position/500)) + ', 0,' + (-position) + ')';
    }
    */
  };

  componentDidMount() {
    anime({
      targets: [".nav", ".grid-container"],
      opacity: [0, 1],
      easing: "easeInOutExpo",
      duration: 1300,
      //   delay: 400,
      //   translateX: [200,0],
    });
  }

  render() {
    document.title = "Lois Bin";
    let opacity = this.state.opacity;
    let navOpacity = this.state.navOpacity;

    return (
      <div id="body" onScroll={this.handleScroll}>
        {/* body with padding */}
        <div id="body-inner">
          {/* nav bar */}
          <div className="nav" style={{ opacity: navOpacity }}>
            <p>Lois Bin</p>
            <div className="nav-contact">
              <div className="nav-wrapper">
                <a
                  className="nav-link"
                  href="#"
                  onClick={() => {
                    navigator.clipboard.writeText("lois.bin@gmail.com");
                  }}
                >
                  lois.bin@gmail.com
                </a>
                <img src={copy} />
              </div>
              <div className="nav-wrapper">
                <a
                  className="nav-link"
                  href="http://linkedin.com/in/loisbin"
                  target="_blank"
                >
                  LinkedIn
                </a>
                <img src={arrow} />
              </div>
            </div>
          </div>
          <div className="grid-container">
            {/* intro */}
            <h1 className="grid-item-1-5">Product designer @ Square.</h1>
            <h1 className="grid-item-5">Based in New York City.</h1>

            <hr class="rounded" className="grid-item-full" />

            {/* projects */}
            <h4 className="grid-item-1">UI/UX</h4>
            <h4 className="grid-item-2">Q3 2020</h4>

            {/*
            <h1 className='grid-item-1'>Resquared Reports</h1>
            <h1 className='grid-item-5'><i>2021 – Revamped data viz to show users valuable insights.</i></h1>
            <div className='grid-item-full proj-img'></div>

            <div className='grid-item-full margin-v'></div>
            */}

            <Link className="grid-item-1-5" to="/square">
              <h1>Cart & checkout @ Square</h1>
            </Link>
            <h1 className="grid-item-5">
              Redesign of the hardware cart & checkout experience.
            </h1>
            <div className="grid-item-full proj-img" id="square"></div>

            <hr class="rounded" className="grid-item-full" />
            {/* <div className='grid-item-full margin-v'></div> */}

            {/* contact */}
            <div className="grid-item-1">
              <h4>Email</h4>
              <div className="link-wrapper">
                <a
                  className="nav-link"
                  href="#"
                  onClick={() => {
                    navigator.clipboard.writeText("lois.bin@gmail.com");
                  }}
                >
                  <h1>lois.bin@gmail.com</h1>
                </a>
                <img className="contact-icon" src={copy} />
              </div>
            </div>

            <div className="grid-item-5">
              <h4>Social</h4>
              <div className="link-wrapper">
                <a
                  className="nav-link"
                  href="http://linkedin.com/in/loisbin"
                  target="_blank"
                >
                  <h1>LinkedIn</h1>
                </a>
                <img className="contact-icon" src={arrow} />
              </div>
            </div>

            <div className="grid-item-full margin-v"></div>

            {/* copyright lol */}
            <p className="grid-item-1">c. Lois Bin, 2025</p>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Home);
