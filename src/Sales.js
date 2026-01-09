import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "./Project.css";
import arrow from "./misc/link-arrow.svg";
import back from "./misc/Arrows/left arrow.svg";
import copy from "./misc/copy.svg";

import businessInfo from "./assets-sales/business-info.png";
import businessType from "./assets-sales/business-type.png";
import userFlow from "./assets-sales/user-flow.png";
import handoffStartHighlight from "./assets-sales/handoff-start-highlight.png";
import chiliPiperExample from "./assets-sales/chili-piper-example.png";
import handoffStart from "./assets-sales/handoff-start.png";
import handoffStartM from "./assets-sales/handoff-start-m.png";
import handoffSchedule from "./assets-sales/handoff-schedule.png";
import handoffScheduleM from "./assets-sales/handoff-schedule-m.png";
import handoffConfirm from "./assets-sales/handoff-confirm.png";
import handoffConfirmM from "./assets-sales/handoff-confirm-m.png";
import handoffThanks from "./assets-sales/handoff-thanks.png";
import handoffThanksM from "./assets-sales/handoff-thanks-m.png";

class Sales extends Component {
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
          { duration: 500, fill: "forwards", easing: "ease-in-out" }
        );
      }
    }
  }

  componentDidMount() {
    document.title = "Sales handoff • Lois Bin";

    document
      .getElementsByClassName("grid-container")[0]
      .animate(
        { opacity: [0, 1] },
        { duration: 1000, fill: "forwards", easing: "ease-in-out" }
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
          <div className="grid-container">
            <Link className="back link-proj" to="/">
              <div className="nav-wrapper">
                <img src={back} />
              </div>
            </Link>
            <div className="grid-item-main-text overview">
              <div className="pill-container ">
                <div className="pill">
                  <h4>Onboarding</h4>
                </div>
                <div className="pill">
                  <h4>Growth</h4>
                </div>
              </div>
              {/* <h4 className="grid-item-2">Q3 2023</h4> */}
              <h1>Sales handoff @ Square</h1>
              <div>
                <h4>Overview</h4>
                <p>
                  Give business owners with high processing volume the option to
                  get in touch with our sales team during signup.
                </p>
              </div>
              <div className="grid-item-secondary-text">
                <h4>Impact</h4>
                {/* <p>
                  Launched to users in the U.S., after a{" "}
                  <span className=" font-success">+4% </span> stat-sig. increase
                  of sales accepted leads.
                </p> */}
                <p>Launched to users in the U.S.</p>
              </div>
            </div>
            <div className="grid-right-panel proj-img" id="sales-handoff"></div>

            <hr class="rounded" className="grid-item-full" />

            <div className="grid-item-main-text">
              <h4>Problem</h4>
              <div>
                <p>
                  Upmarket sellers are businesses that are processing $250k+ per
                  year through Square. These are considered more established,
                  complex businesses that qualify for discounted processing &
                  SaaS rates and get white-glove onboarding. However, there was:
                </p>
                <p>
                  <span className="font-bold">Lack of awareness:</span> The
                  primary onboarding flow doesn’t make upmarket sellers signing
                  up aware of the special deals or onboarding services they’re
                  qualified for nor a way to receive them.
                </p>
                <p>
                  <span className="font-bold">Leaky onboarding:</span>{" "}
                  Therefore, Square ends up losing opportunities from upmarket
                  sellers going through our onboarding flow – a lose-lose
                  situation.
                </p>
              </div>
            </div>

            <div className="img-gray-container fade">
              <div className="img-wrapper-column">
                <h4>
                  1. Business info.{" "}
                  <span style={{ color: "#757575" }}>
                    User's annual revenue is captured.
                  </span>
                </h4>
                <br />
                <div className="img-wrapper-60">
                  <img className="img" src={businessInfo} alt="" />
                </div>
              </div>
              <br />
              <div className="img-wrapper-column">
                <h4>
                  2. Business type.{" "}
                  <span style={{ color: "#757575" }}>
                    No action is taken to route upmarket sellers.
                  </span>
                </h4>
                <br />
                <div className="img-wrapper-60">
                  <img className="img" src={businessType} alt="" />
                </div>
              </div>
            </div>

            <br />
            {/* 
            <div className="grid-item-main-text">
              <h4>Discovery</h4>
              <div>
                <p>
                  Pulling from previous research, experiments, and competitive
                  analyses of our onboarding & setup experiences, we defined the
                  pain points users had going through onboarding.
                </p>
                <p>
                  <span className="font-bold">
                    Access to support is crucial:
                  </span>{" "}
                  Difficulties with reaching support during onboarding remains a
                  high retractor for users.
                </p>
                <p>
                  <span className="font-bold">
                    Previous experiments were siloed:
                  </span>{" "}
                  A similar experiment was run only for restaurant sellers that
                  proved successful. However, there still remains a large
                  opportunity to route users from the primary onboarding flow.
                </p>
                <p>
                  <span className="font-bold">
                    Competitors lead with contacting sales:
                  </span>{" "}
                  When looking at competitors like Toast or Clover, they lead
                  with getting in touch with their team as the main way to get
                  setup with their systems.
                </p>
              </div>
            </div> */}

            <div className="grid-item-main-text">
              <h4>And so...</h4>
            </div>
            <div className="img-gray-container img-wrapper">
              <p className="how-might-we">
                How might we{" "}
                <span className="font-bold">
                  give upmarket sellers options to contact our sales team during
                  signup
                </span>
                , in order to{" "}
                <span className="font-bold font-success">
                  increase the number of qualified sales leads
                </span>
                ?
              </p>
            </div>

            <br />

            <div className="grid-item-main-text">
              <h4>Measuring success</h4>
              <p>
                We collaborated closely with the sales team to understand the
                sales funnel and decide on a valuable metric we can use to
                measure success.
              </p>
              <p>
                The SALs are leads that are qualified by the sales team to move
                further down the funnel. The SAL rate – ratio of SAL from
                Opportunities – was considered the best metric to observe for
                the experiment.
              </p>
            </div>

            <div
              className="img-gray-container img-wrapper"
              style={{ justifyContent: "center" }}
            >
              <p>
                <span className="font-stats">SAL&nbsp;</span> Sales Accepted
                Leads
              </p>
            </div>

            <hr class="rounded" className="grid-item-full" />

            <div className="grid-item-main-text">
              <h4>Ideation</h4>
              <p>
                We had to build a solution that would only show for upmarket
                sellers, so we were able to use the existing Estimated Annual
                Revenue question in onboarding to capture which users are
                upmarket (over $250k annual revenue).
              </p>
            </div>

            <div className="img-gray-container fade">
              <div className="img-wrapper">
                <div className="img-wrapper-30">
                  <img className="img" src={userFlow} alt="" />
                </div>
              </div>
            </div>

            <br />

            <div className="grid-item-main-text">
              <div>
                <p>
                  With a dynamic screen after the revenue question, we were able
                  to show upmarket sellers:
                  <ul>
                    <li>Options to contact sales.</li>{" "}
                    <li>The benefits of white-glove onboarding.</li>
                  </ul>
                </p>
              </div>
            </div>

            <div className="img-gray-container fade">
              <div className="img-wrapper">
                <div className="img-wrapper-60">
                  <img className="img" src={handoffStartHighlight} alt="" />
                </div>
              </div>
            </div>

            <br />

            <div className="grid-item-main-text">
              <div>
                <p>
                  Using 3rd-party integrations Marketo and Chili Piper to allow
                  users to schedule a call with our sales team was the fastest
                  option while ensuring a comprehensive experience. The tool was
                  re-skinned in order to be consistent with the Square brand.
                </p>
              </div>
            </div>

            <div className="img-gray-container fade">
              <div className="img-wrapper">
                <div className="img-wrapper-60">
                  <img className="img" src={chiliPiperExample} alt="" />
                </div>
              </div>
            </div>

            <hr class="rounded" className="grid-item-full" />

            <div className="grid-item-main-text">
              <h4>Final designs</h4>
              <p>
                Upmarket sellers will be shown options to contact sales right
                away or to schedule a call for later.
              </p>
            </div>

            <div className="img-gray-container fade">
              <div className="img-wrapper">
                <div className="img-wrapper-d-m">
                  <img className="img" src={handoffStart} alt="" />
                </div>
                <br />
                <div className="img-wrapper-m">
                  <img className="img" src={handoffStartM} alt="" />
                </div>
              </div>
            </div>

            <br />

            <div className="grid-item-main-text">
              <p>
                The scheduler allows users to select an available date and time.
              </p>
            </div>
            <div className="img-gray-container fade">
              <div className="img-wrapper">
                <div className="img-wrapper-d-m">
                  <img className="img" src={handoffSchedule} alt="" />
                </div>
                <br />
                <div className="img-wrapper-m">
                  <img className="img" src={handoffScheduleM} alt="" />
                </div>
              </div>
            </div>

            <br />

            <div className="grid-item-main-text">
              <p>
                The user's call is confirmed. They're also able to optionally
                add any questions or notes for the sales team.
              </p>
            </div>
            <div className="img-gray-container fade">
              <div className="img-wrapper">
                <div className="img-wrapper-d-m">
                  <img className="img" src={handoffConfirm} alt="" />
                </div>
                <br />
                <div className="img-wrapper-m">
                  <img className="img" src={handoffConfirmM} alt="" />
                </div>
              </div>
            </div>

            <br />

            <div className="grid-item-main-text">
              <p>
                Upmarket sellers are then able to continue to setup or go
                straight to the dashboard.
              </p>
            </div>
            <div className="img-gray-container fade">
              <div className="img-wrapper">
                <div className="img-wrapper-d-m">
                  <img className="img" src={handoffThanks} alt="" />
                </div>
                <br />
                <div className="img-wrapper-m">
                  <img className="img" src={handoffThanksM} alt="" />
                </div>
              </div>
            </div>

            <hr class="rounded" className="grid-item-full" />

            <div className="grid-item-main-text">
              <h4>Impact</h4>
              <p>
                Based on the positive impact we observed, the feature launched
                to 100% of U.S. users.
              </p>
              <p>
                Our team discussed opportunities to further improve the
                experience, such as:
                <ul>
                  <li>Remove friction further up the funnel.</li>{" "}
                  <li>Improve accuracy of targeting upmarket sellers.</li>
                  <li>
                    Provide options to contact sales at other stages of the user
                    journey.
                  </li>
                </ul>
              </p>
            </div>

            <div className="img-gray-container fade">
              <div
                className="img-wrapper-column img-wrapper"
                style={{ flexDirection: "column" }}
              >
                <p>
                  <span className="font-stats font-success">+4% </span> Sales
                  Accepted Leads rate (stat-sig)
                </p>
                <br />
                <p>
                  <span className="font-stats">11% </span> opt-in rate from
                  upmarket signups
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

export default withRouter(Sales);
