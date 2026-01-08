import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "./Project.css";
import arrow from "./misc/link-arrow.svg";
import copy from "./misc/copy.svg";

import problem from "./assets-lp/problem.png";
import previousTests from "./assets-lp/previous-tests.png";
import research from "./assets-lp/research.png";
import explorations from "./assets-lp/explorations.png";
import finals1 from "./assets-lp/finals-1.png";
import finals2 from "./assets-lp/finals-2.png";
import finals3 from "./assets-lp/finals-3.png";

class LP extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "none",
      visibility: "hidden",
      position: "absolute",
      top: "90%",
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleClick() {
    document
      .getElementById("body-inner")
      .scrollTo({ top: 0, behavior: "smooth" });
  }

  handleLoad = () => {};

  handleScroll() {
    let position = document.getElementById("body-inner").scrollTop;

    //absolute to fixed links
    // const links = document.getElementsByClassName('links')[0];
    // if (position > window.innerHeight*.65) {
    //   this.setState({'position': 'fixed'});
    //   this.setState({'top': '0'});
    // } else if (position < window.innerHeight*.65) {
    //   this.setState({'position': 'absolute'});
    //   this.setState({'top': '65%'});
    // } else if (position > 100) {
    //   this.setState({'visibility': 'visible'});
    // } else if (position === 0) {
    //   this.setState({'visibility': 'hidden'});
    // }

    //FADE IN
    const fades = document.getElementsByClassName("fade");
    for (let i = 0; i < fades.length; i++) {
      if (
        fades[i].offsetTop - 500 < position &&
        fades[i].style.opacity === ""
      ) {
        fades[i].style.opacity = 1;
        fades[i].animate(
          { opacity: [0, 1] },
          { duration: 600, fill: "forwards", easing: "ease-in-out" }
        );
      }
    }
  }

  componentDidMount() {
    document.title = "Landing page redesign • Lois Bin";

    document
      .getElementsByClassName("grid-container")[0]
      .animate(
        { opacity: [0, 1] },
        { duration: 1300, fill: "forwards", easing: "ease-in-out" }
      );
  }

  render() {
    let visibility = this.state.visibility;
    let display = this.state.display;
    let position = this.state.position;
    let top = this.state.top;

    return (
      <div id="body">
        <div id="body-inner" onScroll={this.handleScroll}>
          {/* nav bar */}
          <div className="nav">
            <div>
              <Link className="link-proj" to="/">
                <p style={{ fontWeight: 500 }}>Back</p>
              </Link>
            </div>
          </div>

          <div className="grid-container">
            <h4 className="grid-item-1">Mobile • Growth</h4>
            {/* <h4 className="grid-item-2">Q4 2025</h4> */}
            <h1 className="grid-item-full">Landing page redesign @ Amazon</h1>
            <div className="grid-item-full proj-img" id="lp-redesign"></div>
            <div className="grid-item-main-text">
              <h4>Overview</h4>
              <h2>
                Help users understand the core benefits of Amazon In-Garage
                Delivery to increase user acquistion.
              </h2>
            </div>
            <div className="grid-item-secondary-text">
              <h4>Impact</h4>
              <h2>Launched to users in the U.S.</h2>
            </div>

            <hr class="rounded" className="grid-item-full" />

            <div className="grid-item-main-text">
              <h4>Problem</h4>
              <div>
                <h2>
                  Customers land on the In-Garage Delivery landing page
                  interested in In-Garage Delivery but drop off due to security
                  concerns and lack of clarity on the service.
                </h2>
                <h2>
                  We wanted to test new messaging and revamp the design to
                  improve our CTR.
                </h2>
              </div>
            </div>

            <div className="img-gray-container img-wrapper fade">
              <div className="img-wrapper-50">
                <img className="img" src={problem} alt="" />
              </div>
            </div>

            <br />

            <div className="grid-item-main-text">
              <h4>Previous tests</h4>
              <div>
                <h2>
                  An A/B test ran in 2025 to test updates to security messaging.
                </h2>
                <h2>
                  However, it did not yield a lift in the landing page’s CTR.
                </h2>
                <h2>
                  Based on the previous experiment that only tested the hero
                  content, I wanted to test bolder changes based on user
                  insights as well as a lift in the landing page’s visuals.
                </h2>
              </div>
            </div>

            <div className="img-gray-container img-wrapper fade">
              <div className="img-wrapper-d">
                <img className="img" src={previousTests} alt="" />
              </div>
            </div>

            <br />

            <div className="grid-item-main-text">
              <h4>Research</h4>
              <div>
                <h2>
                  In order to discover opportunities for our landing page
                  re-design, I looked at the user surveys our Marketing team
                  sends out to users quarterly who’ve dropped off during
                  onboarding, CSAT, and churned customers as well.
                </h2>
                <h2>
                  There were clear patterns across our UXR that users had
                  security concerns and needed more clarity about information,
                  like eligibility and garage compatibility, in order to feel
                  more confident about using In-Garage Delivery.
                </h2>
              </div>
            </div>

            <div className="img-gray-container img-wrapper fade">
              <div className="img-wrapper-d">
                <img className="img" src={research} alt="" />
              </div>
            </div>

            <br />

            <div className="grid-item-main-text">
              <h4>Measuring success</h4>
              <div>
                <h2>
                  Our primary metric we measured was click-through rate (CTR).
                </h2>
                <h2>
                  We also measured secondary metrics like CTRs of the CTAs below
                  the fold to measure how engaged users were with the content.
                </h2>
              </div>
            </div>

            <div className="grid-item-img">
              <div
                className="img-gray-container img-wrapper"
                style={{ justifyContent: "center", flexDirection: "column" }}
              >
                <h2>
                  <span className="font-stats">Click-through rate&nbsp;</span>{" "}
                  Primary metric
                </h2>
              </div>
            </div>

            <br />

            <div className="grid-item-main-text">
              <h4>And so...</h4>
            </div>

            <div className="grid-item-img">
              <div
                className="img-gray-container img-wrapper"
                style={{ justifyContent: "center" }}
              >
                <h2 className="how-might-we">
                  How might we improve the security and expectation setting of
                  In-Garage Delivery, in order to increase the click-through
                  rate?
                </h2>
              </div>
            </div>

            <hr class="rounded" className="grid-item-full" />

            <div className="grid-item-main-text">
              <h4>Explorations</h4>
              <h2>
                I started with high-level concepts where I first aligned with
                the team on the content and hierarchy of the page. After
                alignment, I worked with higher fidelity iterations of each
                section – hero, security, pricing, etc. – working with our
                copywriter to refine the messaging.
              </h2>
              <h2>
                Once we had a set direction as a working team, we reviewed
                designs with the Head of Marketing and Product, receiving
                sign-off.
              </h2>
            </div>

            <div className="img-gray-container img-wrapper fade">
              <div className="img-wrapper-d">
                <img className="img" src={explorations} alt="" />
              </div>
            </div>

            <br />

            <div className="grid-item-main-text">
              <h4>Final designs</h4>
            </div>

            <div className="img-gray-container img-wrapper fade">
              <div className="img-wrapper-60">
                <img className="img" src={finals1} alt="" />
              </div>
            </div>

            <div className="img-gray-container img-wrapper fade">
              <div className="img-wrapper-d">
                <img className="img" src={finals2} alt="" />
              </div>
            </div>

            <div className="img-gray-container img-wrapper fade">
              <div className="img-wrapper-60">
                <img className="img" src={finals3} alt="" />
              </div>
            </div>

            <br />

            <hr class="rounded" className="grid-item-full" />

            <div className="grid-item-main-text">
              <h4>Impact</h4>

              <h2>
                We observed a stat. sig. positive increase in our primary
                metric.{" "}
              </h2>
              <h2>
                What may be a bigger win was observing up to 2x CTR on CTAs down
                the page, indicating users were scrolling further and more
                engaged with the content below the fold.
              </h2>
            </div>

            <div className="img-gray-container fade">
              <div
                className="img-wrapper-column img-wrapper"
                style={{ flexDirection: "column" }}
              >
                <h2>
                  <span className="font-stats font-success">+0.54% </span>{" "}
                  click-through rate
                </h2>
                <br />
                <h2>
                  <span className="font-stats font-success">up to 2x </span>{" "}
                  clicks below the fold
                </h2>
              </div>
            </div>

            <hr class="rounded" className="grid-item-full" />

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

            <div className="grid-item-4">
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
            <p className="grid-item-1">c. Lois Bin, 2026</p>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(LP);
