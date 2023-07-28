import React from "react";
import "./aboutYoutubeAdBlocker.scss";
import Image from "next/image";
import Button from "../Button/Button";

const AboutYoutubeAdBlocker = () => {
  return (
    <div className="aboutYoutubeAdBlocker" id="about">
      {/* <Image
        src="/howToadd-bg.svg"
        width={2091.29}
        height={1195.05}
        className="bg"
        alt="how-to-add"
      /> */}
      <div className="container">
        <div className="content">
          <div className="left">
            <h2>About spotify ad blocker</h2>
            <p>
              A Spotify adblocker refers to software or browser extensions
              designed to block advertisements on the Spotify music streaming
              platform. This extension aims to prevent audio, video, and display
              ads from playing during your listening sessions on Spotify,
              providing a soulful music streaming experience.
            </p>
            <p>
              Spotify adblocker blocks all annoying ads on spotify, hulu, twitch
              and youtube. But if you want a separate adblocker of these
              extension then we have true adblocker, hulu adblocker, twitch
              adblocker and youtube adblocker.
            </p>
          </div>
          <div className="right">
            <Image src="/about.svg" fill alt="about-logo" className="image" />
          </div>
        </div>
        <Button text="Install Extention" width="100%" />
      </div>
    </div>
  );
};

export default AboutYoutubeAdBlocker;
