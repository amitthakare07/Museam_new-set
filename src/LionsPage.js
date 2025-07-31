import React from 'react';
import './GirlsPage.css';
import lions from './lion.jpg'
import lad from './magar.jpg';
import im from './full.jpg';
import phot from './paints.jpg';
import pics from './hourse.jpg';
import redd from './ruchi.jpg';
import bluee from './ritika.jpg';
import pott from './reau.jpg';
import pp from './mayu.jpg';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageOverlay = () => {
  const firstRowCards = [
    {
      title: "applique",
      description: "Place of discovery : Luristan.",
      image: lad
    },
    {
      title: "lecythos",
      description: "Place of creation : Athènes.",
      image: im
    },
    {
      title: "Paints",
      description: "Place of creation : Bruxelles",
      image: phot
    },
    {
      title: "figurine d'Isis allaitant",
      description: "Place of creation : Egypt.",
      image: pics
    }
  ];

  const secondRowCards = [
    {
      title: "sarcophage",
      description: "Place of discovery : Liban.",
      image: pott
    },
    {
      title: "couvercle de pichet",
      description: "Place of creation : Athènes.",
      image: redd
    },
    {
      title: "Vue du Forum à Rome",
      description: "Place of creation : Italie.",
      image: bluee
    },
    {
      title: "statue",
      description: "Place of discovery : Syrie",
      image: pp
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <>
      {/* Top Image Section */}
      <div className="image-wrapper">
        <img src={lions} alt="main visual" className="main-image" />
        <div className="overlay-content">
          <h1>National Museums Recovery</h1>
          <p>MNR works at the Musée du Louvre</p>
        </div>
      </div><br/>
       <div className="just">
            {
              "THEMED ALBUM".split("").map((char, i) => (
                <span key={i}>{char === " " ? "\u00A0\u00A0" : char}</span> // adds extra space between "THEMED" and "ALBUM"
              ))
            }
        </div>

      <div className='rucha'>
        <p>Created in 1944, the Commission for the Recovery of Works of Art (CRA) made 45,000 restitutions to the artworks’ rightful owners or their beneficiaries before 1950. Open case files were eventually entrusted to the Office des biens et intérêts privés (OBIP; Office for Personal Property and Interests) at the French Ministry of Foreign Affairs. From 1949 to 1953, a Select Committee made a selection of about 2,000 works. These are not part of the French national collections, in accordance with their status as defined in a 30 September 1949 decree. They are not listed in museum inventories, but rather in special provisional inventories, which together form a repository of works designated by the acronym ‘MNR’ (Musées Nationaux Récupération, or National Museums Recovery). </p>
      </div>  


      {/* First 4 Cards Slider */}
      <div className="slider-section">
        <Slider {...settings}>
          {firstRowCards.map((card, index) => (
            <div className="slider-padding" key={index}>
              <div className="slider-card">
                <img src={card.image} alt={card.title} />
                <div className="card-content">
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Second 4 Cards Slider */}
      <div className="slider-section">
        <Slider {...settings}>
          {secondRowCards.map((card, index) => (
            <div className="slider-padding" key={index}>
              <div className="slider-card">
                <img src={card.image} alt={card.title} />
                <div className="card-content">
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default ImageOverlay;