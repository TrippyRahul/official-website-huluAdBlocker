import React from "react";
import "./use.scss";
import Image from "next/image";

const Use = () => {
  return (
    <div className="use">
      {/* <Image
        src="./use-bg-1.svg"
        alt="youtube-logo"
        width={1817.37}
        height={1045.26}
        className="bg1"
      />
      <Image
        src="./use-bg-2.svg"
        alt="youtube-logo"
        width={1817.37}
        height={1045.26}
        className="bg2"
      /> */}
      <div className="container">
        <div className="top">
          <div className="left">
            <h2>How to use this extension</h2>
            <p>
              In this extension, it will automatically remove ads. So, listen to
              your favorite music with <span>spotify no ads.</span>
            </p>
          </div>
          <div className="right">
            <h2>
              How can I listen to my favorite music without interruptions in
              spotify?
            </h2>
            <p>
              By simply installing <span> best adblocker for chrome</span> in
              your browser you can enjoy unlimited music with{" "}
              <span>best chrome ad blocker.</span> Listen to your favorite audio
              content by using <span> free spotify premium.</span>
            </p>
          </div>
        </div>
        <div className="bottom">
          <div className="bottom-top">
            <div className="left">
              <h2>How can I block an unlimited number of ads on spotify?</h2>
              <p>
                All you have to do is download{" "}
                <span>spotify adblocker chrome</span> to your browser and
                install it for free. The process is super quick. This{" "}
                <span>google chrome ad blocker</span> will automatically remove
                all the annoying ads and will allow you to listen to your
                favorite playlist without any disturbance.
              </p>
            </div>
            <div className="right">
              <Image
                src="./youtube-logo.svg"
                alt="youtube-logo"
                fill
                className="image"
              />
            </div>
          </div>
          <div className="bottom">
            <div className="bottom-bottom">
              <div className="left">
                <h2>How does it work in a web browser?</h2>
                <p>
                  It works in both Google and firefox smoothly and each of them
                  has its own features. It also provides you various
                  functionalities such as by installing it you can
                  <span> remove ads .</span>
                </p>
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="bottom-bottom">
              <div className="left">
                <h2>This is the best extension for chrome and firefox</h2>
                <p>
                  It works both on Google and firefox. When you visit on Spotify
                  page on Chrome and firefox,{" "}
                  <span> best adblock for firefox </span> scans the webpage that
                  you are using and find the parts of the page that have ads to
                  block. <span> Adblock extension firefox </span> stops those
                  ads from loading or appearing on the page. This means you can
                  listen to music on <span> spotify without ads. </span>
                </p>
              </div>
              <div className="right">
                <h2>Enjoy the freedom with the best Chrome ad blocker</h2>
                <p>
                  This extension for firefox and Chrome improves your Spotify
                  experience by<span> Spotify no ads </span>, speeding up page
                  loading, and providing protection from malware and adware.{" "}
                  <span> Ad free spotify </span>
                  ensures a safer browsing experience on
                  <span> Spotify without ads. </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Use;
