import React from "react";
import "./Welcome.css";

const Welcome = () => {
  return (
    <div className="welcome">
      <div className="welcomeChild" />
      <div className="frame2" />
      <div className="welcomeItem" />
      <div className="unsubscribeBrowser">
      <i>
      Using our online video editor, you can quickly create and share videos
      to all your social channels.
      </i>
      <div className="subscribeBrowser">
      Unsubscribe | Browser view
      </div>
      </div>
      <div className="welcomeInner" />
      <div className="g1">
        <img className="image2Icon" alt="" src="/image-2@2x.png" />
        <b className="hiWelcome">Hi! Welcome</b>
        <i className="letsMakeGreat">
          Let's make great things happen together!
        </i>
      </div>
      <div className="goToAccount">
        <div className="buttonParent">
          <img className="buttonIcon" alt="" src="/button.svg" />
          <div className="goToYour">Go to your account</div>
        </div>
      </div>
      <div className="yourRegistrationIs">
        Your registration is successful!
      </div>
      <div
        className="loremIpsumDolor"
      >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim `}</div>
      <div className="enjoy10Days">Enjoy 10 days of free trail !</div>
      <div className="header">
        <div className="create">Create</div>
        <div className="contact">{`Contact `}</div>
        <div className="aboutUs">About us</div>
        <div className="logo">LOGO</div>
      </div>
      <img className="icons" alt="" src="/icons@2x.png" />
      <div className="loremIpsumDolor1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud
      </div>
      <div className="thankYouFor">Thank you for choosing us!</div>
      <img className="imgIcon" alt="" src="/img@2x.png" />
    </div>
  );
};

export default Welcome;
