import React from "react";
import "./functionality.scss";
import Image from "next/image";

const data = [
  {
    id: 1,
    icon: "/icon-park-outline_ad.svg",
    heading: "It block ads for free",
    desc: "By installing the extension, you can say goodbye to spotify free ads. This extension is free of cost that provides protection for your browser from dangerous websites.",
  },
  {
    id: 2,
    icon: "/jam_task-list.svg",
    heading: "Enjoy free ad music on spotify",
    desc: "With free spotify premium, you can experience no ad music and get rid of spotify free ads on Spotify.",
  },
  {
    id: 3,
    icon: "/ant-design_safety-outlined.svg",
    heading: "It manages data",
    desc: "You can protect all your private data with this extension. It will keep you safe from malware and risks.",
  },
  {
    id: 4,
    icon: "/thunder.svg",
    heading: "It fastens your browsing speed",
    desc: "It will maintain your speed while using the extension.",
  },
];

const Functionality = () => {
  return (
    <div className="functionality">
      {/* <Image src="/func-bg.svg" width={2300} height={1045.26} className="bg" alt="functionality-logo"/> */}
      <div className="container">
        <h2>AD BLOCK CHROME HAS SO MANY FUNCTIONALITY</h2>

        <div className="cards">
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
      </div>
    </div>
  );
};

export default Functionality;
