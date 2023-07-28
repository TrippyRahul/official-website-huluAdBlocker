import React from "react";
import styles from "./footer.module.scss";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
import Button from "../Button/Button";

const Footer = () => {
  return (
    <div className={styles.footer}>
      {/* <Image
        src="/footer-bg.svg"
        alt="footer-bg"
        fill
        className="bg"
        style={{ position: "absolute", left: "-30%", top: "-20%" }}
      /> */}
      <div className={styles.container}>
        <h2>Spotify Ad Blocker</h2>
        <p>
          Listen to your favorite music without any ads with spotify ad blocker
        </p>

        <Button text="Install Extension" />

        <hr className={styles.line} style={{ color: "gray" }} />

        <div className={styles.content}>
          <div className={styles["popular-searches"]}>
            <p>
              <span>Popular searches:</span> block spotify ads, spotify no ads
              pc, spotify ads manager, advertising on spotify, add stop
            </p>
          </div>
          <ul>
            <li className="inline-block pl-4">
              <a href="/">
                <BsFacebook className={styles.icon} />
              </a>
            </li>
            <li className="inline-block pl-6">
              <a href="/">
                <AiFillTwitterCircle className={styles.icon} />
              </a>
            </li>
            <li className="inline-block pl-6">
              <a href="/">
                <AiFillLinkedin className={styles.icon} />
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <Link href="/">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/">Disclaimer</Link>
            </li>
            <li>
              <Link href="/">Blogs</Link>
            </li>
            <li>
              <Link href="/">Terms & Condition</Link>
            </li>
          </ul>

          <div className={styles.copyright}>
            <p>© Copyright {new Date().getFullYear()}, All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
