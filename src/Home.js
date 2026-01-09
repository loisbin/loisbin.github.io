import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { motion, useTransform } from "framer-motion";
import anime from "animejs/lib/anime.es.js";
import "./Home.css";
import _ from "lodash";
import arrow from "./misc/link-arrow.svg";
import copy from "./misc/copy.svg";

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
  };

  componentDidMount() {
    anime({
      targets: [".nav", ".grid-container"],
      opacity: [0, 1],
      easing: "easeInOutExpo",
      duration: 1000,
      //   delay: 400,
      //   translateX: [200,0],
    });
  }

  render() {
    document.title = "Lois Bin";
    let opacity = this.state.opacity;
    let navOpacity = this.state.navOpacity;

    return (
      <div id="body">
        {/* body with padding */}
        <div id="body-inner" onScroll={this.handleScroll}>
          <div className="grid-container">
            <div className="nav grid-item-main-text">
              <div className="status-wrapper">
                <div className="status-icon" />
                <p style={{ fontWeight: 400 }}>Lois</p>
              </div>
              <p className="grid-item-main-text">
                Currently creating at Amazon in New York City.
              </p>
              <div className="nav-wrapper">
                <a
                  className="nav-link"
                  href="#"
                  onClick={() => {
                    navigator.clipboard.writeText("lois.bin@gmail.com");
                  }}
                >
                  <p>lois.bin@gmail.com</p>
                </a>
                <img src={copy} />
              </div>
              <div className="nav-wrapper">
                <a
                  className="nav-link"
                  href="http://linkedin.com/in/loisbin"
                  target="_blank"
                >
                  <p>LinkedIn</p>
                </a>
                <img src={arrow} />
              </div>
              {/* copyright lol */}
              <h5 className="copyright">c. Lois Bin, 2026</h5>
            </div>
            {/* intro */}
            {/* <div className="grid-item-1" style={{ height: "25vh" }}></div> */}
            <div className="grid-right-panel">
              <div className="pill-container">
                <div className="pill">
                  <h4>Mobile</h4>
                </div>
                <div className="pill">
                  <h4>Growth</h4>
                </div>
              </div>
              <Link className="grid-item-1-5" to="/lp">
                <h1>Landing page redesign @ Amazon</h1>
              </Link>
              <p>Help users understand in-garage delivery.</p>
              <Link className="grid-item-full" to="/lp">
                <div className="grid-item-full proj-img" id="lp-redesign"></div>
              </Link>
              <hr class="rounded" className="grid-item-full" />
              <div className="pill-container">
                <div className="pill">
                  <h4>Onboarding</h4>
                </div>
                <div className="pill">
                  <h4>Growth</h4>
                </div>
              </div>
              <Link className="grid-item-1-5" to="/sales">
                <h1>Sales handoff @ Square</h1>
              </Link>
              <p>Connect upmarket businesses to white-glove onboarding.</p>
              <Link className="grid-item-full" to="/sales">
                <div
                  className="grid-item-full proj-img"
                  id="sales-handoff"
                ></div>
              </Link>
              <hr class="rounded" className="grid-item-full" />
              <div className="pill-container">
                <div className="pill">
                  <h4>Web</h4>
                </div>
                <div className="pill">
                  <h4>Usability test</h4>
                </div>
              </div>
              {/* <div className="link-wrapper">
                <a
                  className="nav-link"
                  href="https://squareup.com/shop/hardware/us/en/cart"
                  target="_blank"
                >
                  <h4>Live page</h4>
                </a>
                <img src={arrow} />
              </div> */}
              <Link className="grid-item-1-5" to="/shop">
                <h1>Cart & checkout @ Square</h1>
              </Link>
              <p>Redesign of the shop's cart & checkout experience.</p>
              <Link className="grid-item-full" to="/shop">
                <div
                  className="grid-item-full proj-img"
                  id="shop-redesign"
                ></div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Home);
