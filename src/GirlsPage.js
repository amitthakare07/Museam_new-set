import React from 'react';
import './GirlsPage.css';
import girl from './just.jpg';
import ladies from './oo.jpg';
import img from './table.jpg';
import photo from './green.jpg';
import pic from './boook.jpg';
import red from './dish.jpg';
import blue from './statue.jpg';
import pot from './fam.jpg';
import p from './wooden.jpg';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageOverlay = () => {
  const firstRowCards = [
    {
      title: "Sculptures",
      description: "Ancient masterpieces from 1100 AD.",
      image: ladies
    },
    {
      title: "Paintings",
      description: "Timeless oil paintings by legends.",
      image: img
    },
    {
      title: "Artifacts",
      description: "Unearthed tools and ornaments.",
      image: photo
    },
    {
      title: "Architecture",
      description: "Lost temples and forts.",
      image: pic
    }
  ];

  const secondRowCards = [
    {
      title: "Ceramics",
      description: "Colorful pots from medieval times.",
      image: pot
    },
    {
      title: "Textiles",
      description: "Handwoven patterns of the 1800s.",
      image: red
    },
    {
      title: "Jewelry",
      description: "Traditional ornaments from queens.",
      image: blue
    },
    {
      title: "Manuscripts",
      description: "Preserved literature in ancient scripts.",
      image: p
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
        <img src={girl} alt="main visual" className="main-image" />
        <div className="overlay-content">
          <h1>ACQUISITIONS MADE IN 2023</h1>
          <p>THE LATEST ADDITIONS TO THE COLLECTIONS</p>
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
        <p>Expanding the national collections is one of the Louvre’s core missions. Given the vast scope of its collections and the Louvre’s status as France’s leading museum, acquiring works has important scientific and symbolic implications. Acquired works are state property, and as such are inalienable and imprescriptible. Because it requires the use of public funds, acquiring works constitutes a great responsibility.</p>
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