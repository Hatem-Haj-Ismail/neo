import React, { useState } from 'react';
import { IoIosSync, IoIosHeartEmpty } from 'react-icons/io';
import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { VscSettings } from 'react-icons/vsc';
import { ImStatsBars } from 'react-icons/im';
import img1 from '../../../../img/1.webp'
import img2 from '../../../../img/2.webp'
import img3 from '../../../../img/3.webp'
import img4 from '../../../../img/4.webp'

import './Richadminpanel.scss';

const contents = [
  {
    id: 1,
    title: "Rich Admin Panel",
    text: "Rich Management tools",
    icon: <IoIosSync />, // Icon für Integration A
    h2Title: "Control Everything",
    contentText: "Easily create, edit, and organize content for your marketplace. Keep your product listings, vendor profiles, and promotional materials up-to-date effortlessly.",
    contentText2: "",
    imageUrl: img1  // Beispielbild
  },
  {
    id: 2,
    title: "Multiple Services",
    text: "Build Super Apps",
    icon: <VscSettings />, // Icon für Integration B
    h2Title: "Build Super Apps",
    contentText: "Neo enables you to create and customize multiple services on your site, like food delivery and e-commerce, each with its own settings",
    contentText2: "",
    imageUrl: img2
  },
  {
    id: 3,
    title: "Loyalty Program",
    text: "Poit , Coupons, Refferals",
    icon: <IoIosHeartEmpty />, // Icon für Integration C
    h2Title: "Reward your customers",
    contentText: "Attract more customers with a points rewards system, a referral rewards system, and advanced coupons with customizable settings for each one.",
    contentText2: "",
    imageUrl: img3  },
  {
    id: 4,
    title: "Finance & Reports",
    text: "Detailed Reports",
    icon: <ImStatsBars />, // Icon für Integration D
    h2Title: "Financial Transparency",
    contentText: "The system includes an e-wallet for each party buyers, sellers, and drivers along with a system wallet.",
    contentText2: "Financial transactions are created for each order, providing great transparency for all system users, as well as detailed reports.",
    imageUrl: img4  },
];

export const Richadminpanel = () => {
  const [activeTab, setActiveTab] = useState(1);
  const activeContent = contents.find((item) => item.id === activeTab);
  const navigate = useNavigate();


  return (
    <div className="Richadminpanel-container">
      <div className="header">
        <span className="badge">Powerful Features        </span>
        <h1>
        Streamline Your <span>Business</span> Operations
        </h1>
        <p>
        Neo simplifies marketplace management with powerful tools and insights.
        </p>
      </div>
      
      <div className="button-group">
        {contents.map((item) => (
          <button
            key={item.id}
            className={activeTab === item.id ? "active" : ""}
            onClick={() => setActiveTab(item.id)}
          >
            <div className="button-content">
              {item.icon}
              <div className="button-text">
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </div>
              </div>
          </button>
        ))}
      </div>

      {/* Der Inhalt für die aktive Auswahl */}
      <div className="Richadminpanel-card">
        <div className="Richadminpanel-content">
          <div className="text">
            <h6 className="badge">{activeContent.title}</h6>
            <h2>{activeContent.h2Title}</h2>
            <p>{activeContent.contentText}</p>
            <p>{activeContent.contentText2}</p>
            <button className="Button" onClick={() => navigate("/features")}>
  <span className="buttonText" >
  Learn more { useNavigate }
 <BsArrowRight className="icon" />
  </span>
</button>
          </div>
          <div className="image">
            <img src={activeContent.imageUrl} alt={activeContent.title} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Richadminpanel; 