import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "./Project.css";
import arrow from "./misc/link-arrow.svg";
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
    document.title = "Sales handoff • Lois Bin";

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
            <h4 className="grid-item-1">UI/UX • A/B test</h4>
            <h4 className="grid-item-2">Q3 2023</h4>
            <h1 className="grid-item-full">Sales handoff @ Square</h1>
            <div className="grid-item-full proj-img" id="sales-handoff"></div>
            <div className="grid-item-1-4">
              <h4>Overview</h4>
              <h2>
                Give business owners with high processing volume the option to
                get in touch with our sales team during signup.
              </h2>
            </div>
            <div className="grid-item-5-9">
              <h4>Impact</h4>
              <h2>
                Launched to 100% of users in the U.S., after a 9% stat-sig.
                increase of sales accepted leads.
              </h2>
            </div>

            {/* <div className="grid-item-full proj-img" id="square"></div> */}
            {/* <div className='overview-img' id='overview-square'></div> */}

            <hr class="rounded" className="grid-item-full" />

            <div className="grid-item-1-6">
              <h4>Problem</h4>
              <div>
                <h2>
                  Upmarket sellers are businesses that are processing $250k+ per
                  year through Square. These are considered more established,
                  complex businesses that qualify for discounted processing &
                  SaaS rates and get white-glove onboarding. However, there was:
                </h2>
                <h2>
                  <span className="font-bold">Lack of awareness:</span> The
                  primary onboarding flow doesn’t make upmarket sellers signing
                  up aware of the special deals or onboarding services they’re
                  qualified for nor a way to receive them.
                </h2>
                <h2>
                  <span className="font-bold">Leaky onboarding:</span>{" "}
                  Therefore, Square ends up losing opportunities from upmarket
                  sellers going through our onboarding flow – a lose-lose
                  situation.
                </h2>
              </div>
            </div>

            <div className="img-gray-container fade">
              <div className="img-wrapper">
                <div className="column-wrapper">
                  <h3>
                    1. Business info.{" "}
                    <span style={{ color: "#757575" }}>
                      User's annual revenue is captured.
                    </span>
                  </h3>
                  <br />
                  <div className="img-wrapper-d">
                    <img className="img" src={businessInfo} alt="" />
                  </div>
                </div>
                <br />
                <div className="column-wrapper">
                  <h3>
                    2. Business type.{" "}
                    <span style={{ color: "#757575" }}>
                      No action is taken to route upmarket sellers.
                    </span>
                  </h3>
                  <br />
                  <div className="img-wrapper-d">
                    <img className="img" src={businessType} alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid-item-1-6">
              <h4>Discovery</h4>
              <div>
                <h2>
                  Although we didn’t have research support for the project, we
                  were able to pull from historical research, experiments, and
                  competitive analyses for our onboarding & setup experiences,
                  in order to understand the pain points users had going through
                  onboarding.
                </h2>
                <h2>
                  <span className="font-bold">
                    Access to support is crucial:
                  </span>{" "}
                  Difficulties with reaching support during onboarding remains a
                  high retractor for users.
                </h2>
                <h2>
                  <span className="font-bold">
                    Previous experiments were siloed:
                  </span>{" "}
                  A similar experiment was run only for restaurant sellers that
                  proved successful. However, there still remains a large
                  opportunity to route users from the primary onboarding flow.
                  situation.
                </h2>
                <h2>
                  <span className="font-bold">
                    Competitors lead with contacting sales:
                  </span>{" "}
                  When looking at competitors like Toast or Clover, they lead
                  with getting in touch with their team as the main way to get
                  setup with their systems.
                </h2>
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
                    give upmarket sellers options to contact our sales team
                    during signup
                  </span>
                  , in order to{" "}
                  <span className="font-bold">
                    increase the number of qualified sales leads
                  </span>
                  ?
                </h2>
              </div>
            </div>

            <div className="grid-item-1-6">
              <h4>Measuring success</h4>
              <h2>
                We collaborated closely with the sales team to understand the
                sales funnel and decide on a valuable metric we can use to
                measure success.
              </h2>
              <br />
              <h2>
                <span className="font-stats">SAL&nbsp;</span> Sales Accepted
                Leads
              </h2>
              <br />
              <h2>
                The SALs are leads that are qualified by the sales team to move
                further down the funnel. The SAL rate – ratio of SAL from
                Opportunities – was considered the best metric to observe for
                the experiment.
              </h2>
            </div>

            <hr class="rounded" className="grid-item-full" />

            <div className="grid-item-1-6">
              <h4>Design & strategy</h4>
              <h2>
                We had to build a solution that would only show for upmarket
                sellers, so we were able to use the existing Estimated Annual
                Revenue question in onboarding to capture which users are
                upmarket (over $250k annual revenue).
              </h2>
            </div>

            <div className="img-gray-container fade">
              <div className="img-wrapper">
                <div className="img-wrapper-30">
                  <img className="img" src={userFlow} alt="" />
                </div>
              </div>
            </div>

            <div className="grid-item-1-6">
              <div>
                <h2>
                  With a dynamic screen after the revenue question, we were able
                  to show upmarket sellers:
                  <ul>
                    <li>Options to contact sales.</li>{" "}
                    <li>The benefits of white-glove onboarding.</li>
                  </ul>
                </h2>
              </div>
            </div>

            <div className="img-gray-container fade">
              <div className="img-wrapper">
                <div className="img-wrapper-60">
                  <img className="img" src={handoffStartHighlight} alt="" />
                </div>
              </div>
            </div>

            <div className="grid-item-1-6">
              <div>
                <h2>
                  We used 3rd-party integrations, Marketo and Chili Piper, in
                  order to show a scheduler feature in our onboarding flow to
                  schedule time with the sales team. We re-skinned the tool, in
                  order to be consistent with the Square brand.
                </h2>
              </div>
            </div>

            <div className="img-gray-container fade">
              <div className="img-wrapper">
                <div className="img-wrapper-50">
                  <img className="img" src={chiliPiperExample} alt="" />
                </div>
              </div>
            </div>

            <hr class="rounded" className="grid-item-full" />

            <div className="grid-item-1-6">
              <h4>Final designs</h4>
            </div>
            <div className="img-gray-container fade">
              <h3>1. Upmarket sellers are shown options to contact sales</h3>
              <br />
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
            <div className="img-gray-container fade">
              <h3>2. Users can schedule a call</h3>
              <br />
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
            <div className="img-gray-container fade">
              <h3>3. Call is confirmed</h3>
              <br />
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
            <div className="img-gray-container fade">
              <h3>4. User can continue setup or exit</h3>
              <br />
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

            <div className="grid-item-1-6">
              <h4>Experiment</h4>
              <h2>From the experiment we ran, the observed results were:</h2>
              <br />
              <h2>
                <span className="font-stats font-success">+9% </span> Sales
                Accepted Leads rate (stat-sig)
              </h2>
              <br />
              <h2>
                <span className="font-stats">11% </span> opt-in rate from
                upmarket signups
              </h2>
            </div>

            <hr class="rounded" className="grid-item-full" />

            <div className="grid-item-1-6">
              <h4>Impact</h4>
              <h2>The feature launched to 100% of U.S. users.</h2>
              <h2>
                Follow-up experiments for the project are in the works, as of
                2025.
              </h2>
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

export default withRouter(Sales);
