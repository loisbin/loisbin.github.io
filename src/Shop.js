import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "./Project.css";
import arrow from "./misc/link-arrow.svg";
import copy from "./misc/copy.svg";

import cartOld from "./assets-cart/cart-old.png";
import cartNew from "./assets-cart/cart-new.png";
import checkoutTest from "./assets-cart/checkout-test.png";
import cartOldMobile from "./assets-cart/cart-old-mobile.png";
import cartNewMobile from "./assets-cart/cart-new-mobile.png";
import checkoutTestMobile from "./assets-cart/checkout-test-mobile.png";
import checkoutOld from "./assets-cart/checkout-old.png";
import checkoutNew from "./assets-cart/checkout-new.png";
import checkoutOldMobile from "./assets-cart/checkout-old-mobile.png";
import checkoutNewMobile from "./assets-cart/checkout-new-mobile.png";
import users78 from "./assets-cart/7-8-users.png";
import users58 from "./assets-cart/5-8-users.png";

class Shop extends Component {
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
        fades[i].offsetTop - 600 < position &&
        fades[i].style.opacity === ""
      ) {
        fades[i].style.opacity = 1;
        fades[i].animate(
          { opacity: [0, 1], marginTop: ["4%", 0] },
          { duration: 600, fill: "forwards", easing: "ease-in-out" }
        );
      }
    }
  }

  componentDidMount() {
    document.title = "Cart & checkout • Lois Bin";

    document
      .getElementsByClassName("grid-container")[0]
      .animate(
        { opacity: [0, 1] },
        { duration: 1300, fill: "forwards", easing: "ease-in-out" }
      );
    // document.getElementsByClassName('overview-title')[0].animate(
    //   {opacity: [0,1]},
    //   {duration: 800, fill: 'forwards', easing: 'ease-in-out'}
    // )
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
            <h4 className="grid-item-1-2">UI/UX • Usability test</h4>
            <h4 className="grid-item-2">Q3 2020</h4>
            <div className="grid-item-5 link-wrapper">
              <a
                className="nav-link"
                href="https://squareup.com/shop/hardware/us/en/cart"
                target="_blank"
              >
                <h4>Live page</h4>
              </a>
              <img src={arrow} />
            </div>
            <h1 className="grid-item-full">Cart & checkout @ Square</h1>
            <div className="grid-item-full proj-img" id="shop-redesign"></div>
            <div className="grid-item-1-4">
              <h4>Overview</h4>
              <h2>
                Redesign of the hardware cart & checkout experience, in order to
                increase purchase completion rates.
              </h2>
            </div>
            <div className="grid-item-5-9">
              <h4>Impact</h4>
              <h2>
                Launched to 100% of users in the U.S. & 7 international
                countries.
              </h2>
            </div>

            {/* <div className="grid-item-full proj-img" id="square"></div> */}
            {/* <div className='overview-img' id='overview-square'></div> */}

            <hr class="rounded" className="grid-item-full" />

            <div className="grid-item-1-6">
              <h4>Problem</h4>
              <div>
                <h2>
                  <span className="font-bold"> No expectation setting:</span>{" "}
                  Users don’t have a proper sense of how long checkout is or how
                  many questions there are – leading to drop-off.
                </h2>
              </div>
            </div>

            <div className="img-gray-container fade">
              <h3>Previous checkout</h3>
              <div className="img-wrapper">
                <div className="img-wrapper-d-m">
                  <img className="img" src={checkoutOld} alt="" />
                </div>
                <br />
                <div className="img-wrapper-m">
                  <img className="img" src={checkoutOldMobile} alt="" />
                </div>
              </div>
            </div>

            <div className="grid-item-1-6">
              <h2>
                <span className="font-bold">Lack of consistency:</span> Users
                have to re-adjust expectations moving between the different
                layouts from the cart & checkout pages.
              </h2>
              <h2>
                <span className="font-bold">CTAs below the fold:</span> CTAs to
                check out are at the bottom of the page and move below the fold
                with a larger cart.{" "}
              </h2>
            </div>

            <div className="img-gray-container fade">
              <h3>Previous cart</h3>
              <div className="img-wrapper">
                <div className="img-wrapper-d-m">
                  <img className="img" src={cartOld} alt="" />
                </div>
                <br />
                <div className="img-wrapper-m">
                  <img className="img" src={cartOldMobile} alt="" />
                </div>
              </div>
            </div>

            <div className="grid-item-full">
              <h4>And so...</h4>
              <div
                className="img-gray-container img-wrapper"
                style={{ justifyContent: "center" }}
              >
                <h2 className="how-might-we">
                  How might we{" "}
                  <span className="font-bold">
                    improve expectation-setting, consistency, and general UX{" "}
                  </span>{" "}
                  of the cart & checkout pages, in order to{" "}
                  <span className="font-bold">
                    increase hardware purchase rates
                  </span>
                  ?
                </h2>
              </div>
            </div>

            <hr class="rounded" className="grid-item-full" />

            <div className="grid-item-1-6">
              <h4>Explorations</h4>
              <div>
                <h2>
                  After rounds of design explorations and looping in feedback
                  from the design team and our stakeholders from the hardware
                  shop team, we landed on two potential design solutions:
                </h2>
                <br />
                <h2>
                  <span className="font-bold">
                    Single-page, scrollable checkout
                  </span>
                  <ul>
                    <li>All on 1 page.</li>{" "}
                    <li>
                      Users can review all steps as they’re filling out all
                      steps.
                    </li>
                  </ul>
                </h2>
              </div>
            </div>

            <div className="img-gray-container fade">
              <div className="img-wrapper">
                <div className="img-wrapper-d-m">
                  <img className="img" src={checkoutTest} alt="" />
                </div>
                <br />
                <div className="img-wrapper-m">
                  <img className="img" src={checkoutTestMobile} alt="" />
                </div>
              </div>
            </div>

            <div className="grid-item-1-6">
              <div>
                <h2>
                  <span className="font-bold">
                    Multi-page, progress bar checkout
                  </span>
                  <ul>
                    <li>No scrolling needed.</li>{" "}
                    <li>
                      Users can track progress and steps completed from the
                      progress bar.
                    </li>
                  </ul>
                </h2>
              </div>
            </div>

            <div className="img-gray-container fade">
              <div className="img-wrapper">
                <div className="img-wrapper-d-m">
                  <img className="img" src={checkoutNew} alt="" />
                </div>
                <br />
                <div className="img-wrapper-m">
                  <img className="img" src={checkoutNewMobile} alt="" />
                </div>
              </div>
            </div>

            <hr class="rounded" className="grid-item-full" />

            <div className="grid-item-1-6">
              <h4>Usability testing</h4>
              <div>
                <h2>
                  In order to validate which design will have the best outcome
                  with users, we usability tested both designs with{" "}
                  <span className="font-bold">16 participants </span> – 8 on
                  desktop and 8 on mobile.
                </h2>
              </div>
            </div>

            <div className="grid-item-1-6">
              <h2>
                <span className="font-stats">7/8&nbsp;</span> desktop users
                preferred the progress bar
              </h2>
              <br />
              {/* <div
                  className="img-gray-container img-wrapper fade "
                  style={{ justifyContent: "center" }}
                >
                  <div className="img-wrapper-40">
                    <img className="img" src={users78} alt="" />
                  </div>
                </div> */}
              <h2>
                <span className="font-stats">5/8&nbsp;</span> mobile users
                preferred the progress bar
              </h2>
              {/* <div
                  className="img-gray-container img-wrapper fade"
                  style={{ justifyContent: "center" }}
                >
                  <div className="img-wrapper-40">
                    <img className="img" src={users58} alt="" />
                  </div>
                </div> */}
            </div>

            <h2 className="grid-item-1-6">
              A majority of participants across desktop and mobile tests
              preferred the multi-page checkout and{" "}
              <span className="font-bold">
                favored the use of the progress bar
              </span>{" "}
              as a way to visualize where they are in the checkout process and
              to set expectations, despite being spread across multiple pages.
            </h2>

            <hr class="rounded" className="grid-item-full" />

            <div className="grid-item-1-6">
              <h4>Final designs</h4>
              <h2>
                Based on the results of our usability tests, I finalized and
                handed off designs using the multi-page, progress bar direction.
              </h2>
            </div>
            <div className="img-gray-container fade">
              <h3>Cart</h3>
              <div className="img-wrapper">
                <div className="img-wrapper-d-m">
                  <img className="img" src={cartNew} alt="" />
                </div>
                <br />
                <div className="img-wrapper-m">
                  <img className="img" src={cartNewMobile} alt="" />
                </div>
              </div>
            </div>
            <div className="img-gray-container fade">
              <h3>Checkout</h3>
              <div className="img-wrapper">
                <div className="img-wrapper-d-m">
                  <img className="img" src={checkoutNew} alt="" />
                </div>
                <br />
                <div className="img-wrapper-m">
                  <img className="img" src={checkoutNewMobile} alt="" />
                </div>
              </div>
            </div>

            <hr class="rounded" className="grid-item-full" />

            <div className="grid-item-1-6">
              <h4>Impact</h4>
              <div>
                <h2>
                  After my summer internship at Square, the experiment GA'd and
                  has since launched in all international markets, including
                  Canada, Australia, the U.K., Ireland, France, Spain, and
                  Japan.
                </h2>
                <h2>
                  You can view the live page{" "}
                  <span>
                    <a
                      className="nav-link"
                      href="https://squareup.com/shop/hardware/us/en/cart"
                      target="_blank"
                    >
                      <span>here</span>
                    </a>
                    <img src={arrow} />
                  </span>
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
                  <h2>lois.bin@gmail.com</h2>
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
                  <h2>LinkedIn</h2>
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

export default withRouter(Shop);
