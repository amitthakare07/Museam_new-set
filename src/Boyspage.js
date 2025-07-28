import React from 'react';
import './GirlsPage.css';
import boys from './boy.jpg'
import ladi from './mother.jpg';
import rucha from './design.jpg';
import suvarna from './house.jpg';
import revti from './people.jpg';
import rita from './machine.jpg';
import bluuee from './decorate.jpg';
import potter from './round.jpg';
import ppp from './thum.jpg';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageOverlay = () => {
  const firstRowCards = [
    {
      title: "Figure d'applique : Vierge à l'Enfant",
      description: "Place of creation : Paris.",
      image:ladi
    },
    {
      title: "Nimbe émaillé",
      description: "Place of creation : Cologne.",
      image: rucha
    },
    {
      title: "Coffret hexagonal",
      description: "Place of creation : Italie ",
      image: suvarna
    },
    {
      title: "Assiette en grisaille illustrant le mois d'août",
      description: ".",
      image: revti
    }
  ];

  const secondRowCards = [
    {
      title: "Assiette ",
      description: "Place of creation : Limoges.",
      image: potter
    },
    {
      title: "Chandelier armorié avec Aurore, Céphale et Adonis",
      description: "Place of creation : Athènes.",
      image: rita
    },
    {
      title: ",Salière hexagonale en grisaille illustrant des dieux et des déesses",
      description: "Place of creation :Limoges .",
      image: bluuee
    },
    {
      title: "Salière hexagonale en grisaille illustrant des dieux et des déesses",
      description: "Place of creation : Limoges",
      image: ppp
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
        <img src={boys} alt="main visual" className="main-image" />
        <div className="overlay-content">
          <h1>Acquisitions made in 2022</h1>
          
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
        <p>Expanding the national collections is one of the Louvre’s core missions. Given the vast scope of its collections and the Louvre’s status as France’s leading museum, acquiring works has important scientific and symbolic implications. Acquired works are state property, and as such are inalienable and imprescriptible. Because it requires the use of public funds, acquiring works constitutes a great responsibility..</p>
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