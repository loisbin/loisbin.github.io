import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "./Project.css";
import arrow from "./misc/link-arrow.svg";
import copy from "./misc/copy.svg";

import header from "./square/header.png";
import checkoutCover from "./square/checkout-cover.png";
import posCover from "./square/pick my pos.png";
import smsCover from "./square/sms-cover.png";
import cartOld from "./square/cart-old.png";
import cartNew from "./square/cart-new.png";
import cartOldMobile from "./square/cart-old-mobile.png";
import cartNewMobile from "./square/cart-new-mobile.png";
import checkoutOld from "./square/checkout-old.png";
import checkoutNew from "./square/checkout-new.png";
import checkoutOldMobile from "./square/checkout-old-mobile.png";
import checkoutNewMobile from "./square/checkout-new-mobile.png";

class Square extends Component {
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
          { opacity: [0, 1], marginTop: ["4%", 0] },
          { duration: 600, fill: "forwards", easing: "ease-in-out" }
        );
      }
    }
  }

  componentDidMount() {
    document.title = "Square | Lois Bin";

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
            <h4 className="grid-item-1">UI/UX</h4>
            <h4 className="grid-item-2">Q3 2020</h4>
            <div className="grid-item-5 link-wrapper">
              <a
                className="nav-link"
                href="https://squareup.com/us/en/"
                target="_blank"
              >
                <h4>Live page</h4>
              </a>
              <img src={arrow} />
            </div>

            <h1 className="grid-item-1-4">Square Shop Checkout</h1>
            <h1 className="grid-item-5">
              <i>Redesign of the marketing site's checkout experience.</i>
            </h1>
            <div className="grid-item-full">
              <img className="img" src={checkoutCover} alt="" />
            </div>
            <div className="grid-item-1-8">
              <h4>Overview</h4>
              <div>
                <p>
                  During my summer with Square's Marketing Web team, I created
                  and redesigned pages on Square's website to market, educate,
                  and assist business owners.
                </p>
                <p>
                  My main project was a redesign of Square's Shop cart and
                  checkout flows, in order to address long-standing buildup of
                  features on a years-old checkout experience and to reduce the
                  user-dropoff rates within checkout pages.
                </p>
              </div>
            </div>
            {/* <div className="grid-item-full proj-img" id="square"></div> */}
            {/* <div className='overview-img' id='overview-square'></div> */}

            <hr class="rounded" className="grid-item-full" />

            {/* <p className="header grid-item-1-8">
              Economic empowerment through sleek, efficient design interfaces.
            </p> */}

            <div className="grid-item-1-8">
              <h4>Problem</h4>
              <div>
                <p>
                  Issues with the current cart experience largely stems from the
                  layout and hierarchy of the information within the page. A
                  cart with a large number of items will push info regarding
                  price and the button to checkout or sign in{" "}
                  <mark>below the fold</mark>, resulting in unnecessary
                  scrolling. The
                  <mark>
                    {" "}
                    current layout does not mirror the checkout pages
                  </mark>
                  , requiring users to become accustomed to 2 layouts.
                </p>
              </div>
            </div>
            <br />
            <div className="grid-item-full img-2-wrapper img-wrapper-100 fade">
              <div className="img-wrapper-70">
                <img className="img" src={cartOld} alt="" />
              </div>
              <div className="img-wrapper-25">
                <img className="img" src={cartOldMobile} alt="" />
              </div>
            </div>
            <br />
            <br />
            <div className="grid-item-1-8">
              <p>
                From an SEO perspective, the main goal of the redesign of the
                checkout pages is to
                <mark> reduce the rate of dropoff</mark> from within the
                experience. UX difficulties of the experience are seen in the
                user's inability to overview the number of steps of the checkout
                process.
              </p>
            </div>
            <br />
            <div className="grid-item-full img-2-wrapper img-wrapper-100 fade">
              <div className="img-wrapper-70">
                <img className="img" src={checkoutOld} alt="" />
              </div>
              <div className="img-wrapper-25">
                <img className="img" src={checkoutOldMobile} alt="" />
              </div>
            </div>
            <br />
            <br />
            <div className="grid-item-1-8">
              <h4>New cart</h4>
              <div>
                <p>
                  The cart redesign created a{" "}
                  <mark>more uniform experience</mark> from cart to checkout,
                  with the price card to the left of the items, and shortened
                  the real estate of the page. The button was moved above the
                  fold for <mark>easy accessibility</mark> for the user and
                  prevent un-needed scrolling.
                </p>
              </div>
            </div>
            <br />
            <div className="grid-item-full img-2-wrapper img-wrapper-100 fade">
              <div className="img-wrapper-70">
                <img className="img" src={cartNew} alt="" />
              </div>
              <div className="img-wrapper-25">
                <img className="img" src={cartNewMobile} alt="" />
              </div>
            </div>
            <br />
            <br />

            <div className="grid-item-1-8">
              <h4>New checkout</h4>
              <div>
                <p>
                  I designed and iterated between two checkout experiences,
                  funnelling them down through <mark>usability tests</mark> to
                  the use of the progress bar, at the top of the checkout page
                  shown below, as a means for users to view which step of the
                  process they're at. Tests showed an overall preference for
                  this design of the checkout on both desktop and mobile. The
                  new cart and checkout pages are set to ship{" "}
                  <mark>Q1 2021</mark>.
                </p>
              </div>
            </div>
            <br />
            <div className="grid-item-full img-2-wrapper img-wrapper-100 fade">
              <div className="img-wrapper-70">
                <img className="img" src={checkoutNew} alt="" />
              </div>
              <div className="img-wrapper-25">
                <img className="img" src={checkoutNewMobile} alt="" />
              </div>
            </div>

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
                  <h1>Linkedin</h1>
                </a>
                <img className="contact-icon" src={arrow} />
              </div>
            </div>

            <div className="grid-item-full margin-v"></div>

            {/* copyright lol */}
            <p className="grid-item-1">c. Lois Bin, 2023</p>

            {/* <div className="grid-item-full img-wrapper-full fade">
              <img className="img" src={posCover} alt="" />
            </div>
            <br />
            <p className="grid-item-1-8 header">
              Pick My POS — Intern Hack Week
            </p>
            <p className="grid-item-1-8 text">
              During a week-long hack week for interns, I designed the interface
              and interaction of my team's web questionnaire that recommends
              Square sellers, prospective or new, a POS device based on their
              business and needs. Our project won 1st place, allowing us the
              opportunity to present to the Square leads.
            </p> */}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Square);
