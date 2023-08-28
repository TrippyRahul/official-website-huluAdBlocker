"use client"
import React from "react";
import "./install.scss";
import Image from "next/image";

const Install = () => {
  const handleButtonClick = () => {
    const redirectURL = "https://chrome.google.com/webstore/detail/trueadblocker/bfnbbojgkemfejhnedknbidfceobmmek?utm_source=ext_sidebar&hl=en-US";
    window.open(redirectURL, "_blank");
  };
  return (
    <div className="install">
      <div className="container">
        <div className="left">
          <Image src="/firefox.svg" className="image" fill alt="firefox-logo" />
        </div>
        <div className="right">
          <h2>HOW TO INSTALL THE SPOTIFY AD BLOCKER FIREFOX FEATURE?</h2>
          <p>
            It is very simple, just go to your browser, download the spotify
            adblock firefox browser extension and then install spotify adblock
            firefox. It will automatically start running.
          </p>
          <button onClick={handleButtonClick}>
            {" "}
            <Image
              src="/ri_firefox-fill.svg"
              width={30}
              height={30}
              alt="firefox-logo"
            />
            Add to Firefox
          </button>
        </div>
      </div>
    </div>
  );
};

export default Install;
