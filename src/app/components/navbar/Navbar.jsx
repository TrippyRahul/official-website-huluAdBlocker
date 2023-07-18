"use client";

import React, { useState } from "react";
import styles from "./navbar.module.scss";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className={styles.navbar}>
        <ul className={styles.links}>
          <li className={styles.logo}>
            <Link href="/">
              <Image
                src="./navbar-logo.svg"
                alt="youtube-ad-blocker-logo"
                width={96}
                height={54}
              />
            </Link>
          </li>
          <li className={styles.link}>
            <Link href="/">Spotify Ad Blocker</Link>
          </li>
          <li className={styles.link}>
            <Link href="/about">ABOUT </Link>
          </li>
          <li className={styles.link}>
            <Link href="#accordian">FAQ</Link>
          </li>
        </ul>

        <div
          className={`${styles.mobileMenuBtn}  ${isOpen && styles.animate}`}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className={`${styles.line} ${styles.firstLine}`}></span>
          <span className={`${styles.line} ${styles.middleLine}`}></span>
          <span className={`${styles.line} ${styles.lastLine}`}></span>
        </div>
      </nav>

      {isOpen && (
        <div className={styles.mobile}>
          <div className={styles.logo}>
            <Link href="/">
              <Image
                src="./navbar-logo.svg"
                alt="youtube-ad-blocker-logo"
                width={96}
                height={54}
              />
            </Link>
          </div>
          <ul className={styles.links}>
            <li className={styles.link}>
              <Link href="/youtube-ad-blocker">YOUTUBE AD BLOCKER</Link>
            </li>
            <li className={styles.link}>
              <Link href="/about">ABOUT YOUTUBE AD BLOCKER</Link>
            </li>
            <li className={styles.link}>
              <Link href="/frequently-asked-questions">FAQ</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
