import React from "react";
import "./howToAdd.scss";
import Image from "next/image";
import Button from "../Button/Button";

const data = [
  {
    id: 1,
    icon: "/icon-park-outline_ad.svg",
    heading: "SAFE MONEY ON YOUR MOBILE DATA EXPENSES BY USING THE EXTETSION",
    desc: "When you use your mobile data to watch YouTube, it consumes a large amount of data because there are numerous advertisements that appear during the videos. But with the adblocker for Google Chrome, you won't waste any data on advertising. You can enjoy watching your favorite show without any interruptions in adblocker google chrome.",
  },
  {
    id: 2,
    icon: "/jam_task-list.svg",
    heading:
      "SPEED UP YOUR BROWSING EXPERIENCE BY USING THE AD BLOCKER CHROME EXTENTION",
    desc: "Ads and pop-ups not only create disturbance but also slow down your internet connection. If you want to maintain top speed and enjoy faster loading of your favorite websites without unwanted ads, use the adblock plus chrome extension. As, ad blocker chrome extension prevents all the harmful adverts from your browser.",
  },
  {
    id: 3,
    icon: "/ant-design_safety-outlined.svg",
    heading: "BLOCK DANGEROUS WEBSITE WITH ADBLOCK PLUS CHROME",
    desc: "Don't worry about phishing, malicious websites, and malware anymore. With youtube adblock firefox, you won't accidentally visit dangerous websites as it instantly blocks your access and prevents any potential attacks.",
  },
];

const HowToAdd = () => {
  return (
    <div className="how-to-add">
      {/* <Image
        src="/howToadd-bg.svg"
        width={2091.29}
        height={1195.05}
        className="bg"
        alt="how-to-add-bg"
      /> */}
      <div className="top-container">
        <div className="top">
          {data.map((item) => (
            <div className="card" key={item.id}>
              <Image
                src={item.icon}
                alt={item.heading}
                width={67}
                height={67}
              />
              <h3>{item.heading}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="middle">
          <h2>This is the best extension for chrome and firefox</h2>
          <p>
            It works both on Google and firefox. When you visit on Spotify page
            on Chrome and firefox, best adblock for firefox scans the webpage
            that you are using and find the parts of the page that have ads to
            block. Adblock extension firefox stops those ads from loading or
            appearing on the page. This means you can listen to music on spotify
            without ads.
          </p>
        </div>
      </div>
      <div className="bottom-container">
        <div className="bottom-container-top">
          <div className="top">
            <div className="left">
              <h3>HOW TO TAKE CONTROL ON YOUTUBE BROWSER EXTENSION</h3>
            </div>
            <div className="right">
              <Button text="Install Extention" />
            </div>
          </div>
        </div>

        <div className="bottom-container-bottom">
          <div className="left">
            <Image src="/firefox.svg" alt="firefox" fill className="img" />
            <h2>FOR YOUTUBE ADS FIREFOX</h2>
            <p>
              Adjust the settings by going to the browser&apos;s menu, selecting
              &quot;Add-ons,&quot; and customizing the adblolck for youtube
              firefox options.
            </p>
            <p>
              In this extension, you will get an option that will automatically
              block ads. You can also customize your favorite showtime
              experience on<span> Youtube without ads </span> and enjoy
              uninterrupted entertainment.
            </p>
          </div>
          <div className="right">
            <Image src="/chrome.svg" alt="firefox" fill className="img" />
            <h2>FOR YOUTUBE ADS CHROME</h2>
            <p>
              Install the adblocker extension from the free ad blocker chrome
              Web Store.
            </p>
            <p>
              Right-click on the extension icon in the toolbar and choose
              &quot;Options&quot; or &quot;Settings&quot; to configure its
              settings.
            </p>
            <p>
              By following these steps, you can have control over the extension
              on both Firefox and Chrome browsers and watch ad free youtube
              movies and series.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToAdd;
