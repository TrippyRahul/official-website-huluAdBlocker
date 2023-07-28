import React from "react";
import "./installYoutubeAdsBlocker.scss";
import Image from "next/image";
import Button from "../Button/Button";

const InstallYoutubeAdsBlocker = () => {
  return (
    <div className="installYoutubeAdsBlocker">
      {/* <Image
        src="/install-bg.svg"
        width={1817.37}
        height={1045.26}
        className="bg"
        alt="install-bg"
      /> */}
      <div className="container">
        <h2>Enjoy unlimited music in adblocker firefox and Chrome</h2>

        <div className="content">
          <ul>
            <li>Experience no ad music on Spotify</li>
            <li>Remove ads with Spotify</li>
            <li>It enhances your web page speed</li>
            <li>
              You can mute spotify ads, while listening to your favorite music
            </li>
          </ul>
          <ul>
            <li>Ad free Spotify will protect your data</li>
            <li>Enjoy free ad music in spotify</li>
            <li> Ad blocker firefox will give a safe browsing experience</li>
            <li>It manages all your data and protects them from hackers.</li>
            <li>Get rid of annoying ads</li>
          </ul>
        </div>
        <Button text="Install Extension" width="100%" />
        
      </div>
    </div>
  );
};

export default InstallYoutubeAdsBlocker;
