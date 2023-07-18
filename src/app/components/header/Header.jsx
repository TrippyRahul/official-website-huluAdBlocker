import React from "react";
import "./header.scss";
import Navbar from "../navbar/Navbar";
import Image from "next/image";
import Button from "../Button/Button";

const Header = () => {
  return (
    <header className="header">
      <Navbar />
      <section className="hero">
        <div className="container">
          <div className="left">
            <h1>
              Enjoy a vast library of music, podcasts, and other audio content
              with Spotify
            </h1>
            <p>
              Spotify ad blocker is the most famous google chrome ad blocker. As
              it allows you to enjoy your favorite music or playlist without any
              commercial interruptions. By downloading and installing the
              extension you can block ads on spotify.
            </p>
            <Button text="Install Extension"/>
          </div>
          <div className="right">
            <Image
              src="./header-main.svg"
              alt="header-main"
              fill
              className="image"
            />
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
