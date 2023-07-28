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
              <div className={styles["image-container"]}>
                <Image
                  src="/logo.png"
                  alt="youtube-ad-blocker-logo"
                  // fill={true}
                  width={150}
                  height={150}
                  className={styles.image}
                />
              </div>
            </Link>
          </li>
          <li className={styles.link}>
            <Link href="#about">ABOUT </Link>
          </li>
          <li className={styles.link}>
            <Link href="#frequentely-asked-questions">FAQ</Link>
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
                src="/logo.png"
                alt="youtube-ad-blocker-logo"
                width={100}
                height={50}
                style={{ mixBlendMode: "screen" }}
              />
            </Link>
          </div>
          <ul className={styles.links}>
            <li className={styles.link}>
              <Link href="/">HOME </Link>
            </li>
            <li className={styles.link}>
              <Link href="#about">ABOUT </Link>
            </li>
            <li className={styles.link}>
              <Link href="#frequentely-asked-questions">FAQ</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
