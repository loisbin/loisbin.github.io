import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "./Project.css";
import arrow from "./misc/link-arrow.svg";
import back from "./misc/Arrows/left arrow.svg";
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
          { duration: 500, fill: "forwards", easing: "ease-in-out" }
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
        { duration: 1000, fill: "forwards", easing: "ease-in-out" }
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
          {/* <div className="nav">
            <div>
              <Link className="link-proj" to="/">
                <p>Back</p>
              </Link>
            </div>
          </div> */}

          <div className="grid-container">
            <Link className="back link-proj" to="/">
              <div className="nav-wrapper">
                <img src={back} />
              </div>
            </Link>
            <div className="grid-item-main-text overview">
              <div className="pill-container ">
                <div className="pill">
                  <h4>Mobile</h4>
                </div>
                <div className="pill">
                  <h4>Growth</h4>
                </div>
              </div>
              <h1>Landing page redesign @ Amazon</h1>
              <div>
                <h4>Overview</h4>
                <p>
                  Help users understand the core benefits of Amazon In-Garage
                  Delivery to increase user acquistion.
                </p>
              </div>
              <div className="grid-item-secondary-text">
                <h4>Impact</h4>
                <p>Launched to users in the U.S.</p>
              </div>
            </div>
            <div className="grid-right-panel proj-img" id="lp-redesign"></div>
            <hr class="rounded" className="grid-item-full" />
            <div className="grid-item-main-text">
              <h4>Problem</h4>
              <div>
                <p>
                  Customers land on the In-Garage Delivery landing page
                  interested in In-Garage Delivery but drop off due to security
                  concerns and lack of clarity on the service.
                </p>
                <p>
                  We wanted to test new messaging and revamp the design to
                  improve our CTR.
                </p>
              </div>
            </div>
            <div className="img-gray-container img-wrapper fade">
              <div className="img-wrapper-30">
                <img className="img" src={problem} alt="" />
              </div>
            </div>
            <br />
            <div className="grid-item-main-text">
              <h4>Previous tests</h4>
              <div>
                <p>
                  An A/B test ran in 2025 to test updates to security messaging.
                </p>
                <p>
                  However, it did not yield a lift in the landing page’s CTR.
                </p>
                <p>
                  Based on the previous experiment that only tested the hero
                  content, I wanted to test bolder changes based on user
                  insights as well as a lift in the landing page’s visuals.
                </p>
              </div>
            </div>
            <div className="img-gray-container img-wrapper fade">
              <div className="img-wrapper-60">
                <img className="img" src={previousTests} alt="" />
              </div>
            </div>
            <br />
            <div className="grid-item-main-text">
              <h4>Research</h4>
              <div>
                <p>
                  In order to discover opportunities for our landing page
                  re-design, I looked at the user surveys our Marketing team
                  sends out to users quarterly who’ve dropped off during
                  onboarding, CSAT, and churned customers as well.
                </p>
                <p>
                  There were clear patterns across our UXR that users had
                  security concerns and needed more clarity about information,
                  like eligibility and garage compatibility, in order to feel
                  more confident about using In-Garage Delivery.
                </p>
              </div>
            </div>
            <div className="img-gray-container img-wrapper fade">
              <div className="img-wrapper-60">
                <img className="img" src={research} alt="" />
              </div>
            </div>
            <br />
            <div className="grid-item-main-text">
              <h4>Measuring success</h4>
              <div>
                <p>
                  Our primary metric we measured was click-through rate (CTR).
                </p>
                <p>
                  We also measured secondary metrics like CTRs of the CTAs below
                  the fold to measure how engaged users were with the content.
                </p>
              </div>
            </div>
            <div
              className="img-gray-container img-wrapper"
              style={{ justifyContent: "center", flexDirection: "column" }}
            >
              <p>
                <span className="font-stats">Click-through rate&nbsp;</span>{" "}
                Primary metric
              </p>
            </div>
            <br />
            <div className="grid-item-main-text">
              <h4>And so...</h4>
            </div>
            <div
              className="img-gray-container img-wrapper"
              style={{ justifyContent: "center" }}
            >
              <p className="how-might-we">
                How might we improve the security and expectation setting of
                In-Garage Delivery, in order to increase the click-through rate?
              </p>
            </div>
            <hr class="rounded" className="grid-item-full" />
            <div className="grid-item-main-text">
              <h4>Explorations</h4>
              <p>
                I started with high-level concepts where I first aligned with
                the team on the content and hierarchy of the page. After
                alignment, I worked with higher fidelity iterations of each
                section – hero, security, pricing, etc. – working with our
                copywriter to refine the messaging.
              </p>
              <p>
                Once we had a set direction as a working team, we reviewed
                designs with the Head of Marketing and Product, receiving
                sign-off.
              </p>
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
              <div className="img-wrapper-50">
                <img className="img" src={finals1} alt="" />
              </div>
            </div>
            <div className="img-gray-container img-wrapper fade">
              <div className="img-wrapper-d">
                <img className="img" src={finals2} alt="" />
              </div>
            </div>
            <div className="img-gray-container img-wrapper fade">
              <div className="img-wrapper-50">
                <img className="img" src={finals3} alt="" />
              </div>
            </div>
            <br />
            <hr class="rounded" className="grid-item-full" />
            <div className="grid-item-main-text">
              <h4>Impact</h4>

              <p>
                We observed a stat. sig. positive increase in our primary
                metric.{" "}
              </p>
              <p>
                What may be a bigger win was observing up to 2x CTR on CTAs down
                the page, indicating users were scrolling further and more
                engaged with the content below the fold.
              </p>
            </div>
            <div className="img-gray-container fade">
              <div
                className="img-wrapper-column img-wrapper"
                style={{ flexDirection: "column" }}
              >
                <p>
                  <span className="font-stats font-success">+0.54% </span>{" "}
                  click-through rate
                </p>
                <br />
                <p>
                  <span className="font-stats font-success">up to 2x </span>{" "}
                  clicks below the fold
                </p>
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
            <h5>c. Lois Bin, 2026</h5>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(LP);
