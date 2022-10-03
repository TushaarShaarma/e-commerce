import React from "react";
import insta from "../Images/insta.png";
import fb from "../Images/fb.png";
import twitter from "../Images/twitter.png";
import "../Css/Footer.css";
import SaveResponse from "../Components/SaveResponse";

function Footer() {
  return (
    <div className="main">
      <div className="inner-div">
        <h3>AccioJob</h3>
        <div className="icons">
          <img src={fb} />
          <img src={insta} />
          <img src={twitter} />
        </div>
      </div>
      <div className="inner-div">
        <div>
          <h5>Company Info</h5>
          <p>About Us</p>
          <p>Carrier</p>
          <p>We are hiring</p>
          <p>Blog</p>
        </div>
        <div>
          <h5>Legal</h5>
          <p>About Us</p>
          <p>Carrier</p>
          <p>We are hiring</p>
          <p>Blog</p>
        </div>
        <div>
          <h5>Feature</h5>
          <p>Business Marketing</p>
          <p>User Analytic</p>
          <p>Live Chat</p>
          <p>Unlimited Support</p>
        </div>
        <div>
          <h5>Resoures</h5>
          <p>IOS &amp; Android</p>
          <p>Watch a Demo</p>
          <p>Customers</p>
          <p>API</p>
        </div>
        <div>
          <h5>Get in Touch</h5>
          <div>
            {/* <div className="btn-container">
              <div className="ip">
                <input type="text" />
              </div>
              <div className="btn">
                <button>Subscribe</button>
              </div>
            </div> */}
            <div>
              <SaveResponse />

            </div>
            <div className="txt">
              <p>Lorem ixpsum dolor amit</p>
            </div>
          </div>
        </div>
      </div>
      <div className="inner-div">
        <h6>Made with &hearts; at Acciojob by <i>TUSHAR SHARMA</i> (p.s. had to flex &#128531;)</h6>
      </div>
    </div>
  );
}

export default Footer;
