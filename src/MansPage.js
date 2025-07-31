import React from 'react';
import './GirlsPage.css';
import mans from './man.jpg';
import boxing from './box.jpg';
import publicable from './public.jpg';
import beautiful from './beauty.jpg';
import mhh from './mh.jpg';
import monuu from './monu.jpg';
import nik from './nike.jpg';
import fami from './family.jpg';
import kingg from './king.jpg';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageOverlay = () => {
  const firstRowCards = [
    {
      title: "Coffre des pierreries de Louis XIV",
      description: "Place of creation : Paris.",
      image: boxing
    },
    {
      title: "Les Noces de Cana",
      description: "Place of creation : Cologne.",
      image: publicable
    },
    {
      title: "La Femme au miroir",
      description: "Place of creation : Italie",
      image: beautiful
    },
    {
      title: "relief mural",
      description: "Place of discovery : Dur Sharrukin = Khorsabad.",
      image: mhh
    }
  ];

  const secondRowCards = [
    {
      title: "Feuillet de diptyque en cinq parties : l'Empereur triomphant",
      description: "Place of creation : Constantinople.",
      image: monuu
    },
    {
      title: "Portrait de l'artiste tenant un chardon",
      description: "Département des Peintures.",
      image: nik
    },
    {
      title: "Le Tricheur à l’as de carreau",
      description: "Place of creation : Limoges.",
      image: fami
    },
    {
      title: "Louis XIV (1638-1715), roi de France",
      description: "Preserved literature in ancient scripts.",
      image: kingg
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
        <img src={mans} alt="main visual" className="main-image" />
        <div className="overlay-content">
          <h1>Masterpieces of the Louvre</h1>
         
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
        <p>Artworks essential to history and the history of art, masterpieces bear witness to the wealth of the Louvre’s collections and the wide range of artistic practices used around the world and through the ages.</p>
      </div>  <br/>


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