"use client";

import React, { useState } from "react";
import styles from "./accordian.module.scss";
import Image from "next/image";
import Button from "../Button/Button";

const questions = [
  {
    id: 1,
    ques: "how to block ads on spotify?",
    ans: "If you don’t know how to block ads on spotify, then don’t worry because by installing it on your browser. You can block the spot where the ads come from.",
  },
  {
    id: 2,
    ques: "Does adblock work on spotify?",
    ans: "Yes, it works on Spotify and you can blocks ads by downloading and installing the extension in your browser.",
  },
  {
    id: 3,
    ques: "Is this extension free to use?",
    ans: "Yes, it is free of cost with no hidden charges So, hurry up and install the extension now to listen ad free music.",
  },
  {
    id: 4,
    ques: "What types of ads spotify block?",
    ans: "It blocks all types of ads such as pop ups, banner ads, and spotify ads.",
  },
];

const Accordian = () => {
  const [showAnswer, setShowAnswer] = useState(null);

  const toggleAnswer = (questionId) => {
    if (showAnswer === questionId) {
      setShowAnswer(null);
      console.log("Show");
    } else {
      setShowAnswer(questionId);
      console.log("er");
    }
  };

  return (
    <div className={styles.accordian} id="frequentely-asked-questions">
      {/* <Image
        src="/accor-bg.svg"
        width={1817.37}
        height={1045.26}
        style={{ position: "absolute", top: "-20%", left: "-10%" }}
        alt="accordian-bg"
      /> */}
      <div className={styles.container}>
        <h2>FREQUENTLY ASKED QUESTION</h2>

        <ol>
          {questions.map((question) => (
            <li key={question.id} onClick={() => toggleAnswer(question.id)}>
              <div className={styles.question}>
                <p>{question.ques}</p>
                <div className={styles.img}>
                  <Image src="/add.svg" width={50} height={50} alt="add-logo" />
                </div>
              </div>
              {showAnswer === question.id && (
                <div
                  className={`${styles.answer} ${
                    showAnswer === question.id ? styles.active : ""
                  }`}
                >
                  <p>{question.ans}</p>
                </div>
              )}
            </li>
          ))}
        </ol>
        <Button
          text="GET TRUE ADBLOCKER NOW"
          width="100%"
        />
      </div>
    </div>
  );
};

export default Accordian;
