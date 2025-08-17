import React from "react";
import './Monuments.css';
import { Link } from "react-router-dom";

import log from './art.jpg';
import diamond from './images (1).jpg';
import books from './book.jpg';
import arms from './arm.jpg';
import draw from './drawings.jpg';
import write from './writing.jpg';
import furniture from './fur.jpg';
import coin from './coins.jpg';
import monument from './domestic.jpg';
import obj from './object.jpg';
import items from './item.jpg';
import pers from './personal.jpg';
import tool from './tools.jpg';
import painting from './paint.jpg';
import seal from './seals.jpg';
import pots from './pot.jpg';
import girls from './girl.jpg';
import boys from './boy.jpg';
import lions from './lion.jpg';
import mans from './man.jpg';

const collectionItems = [
  {
    title: "ARCHITECTURE & DECORATION",
    image: log,
    description: "Explore ornamental features, architectural styles, and design innovations that defined ancient civilizations and modern movements."
  },
  {
    title: "ARMS & ARMOUR",
    image: diamond,
    description: "From swords to shields, discover the evolution of weaponry and protective gear used in battle and ceremony throughout history."
  },
  {
    title: "ARTS OF THE BOOK",
    image: books,
    description: "Beautifully illustrated manuscripts, calligraphy, and bindings that showcase the written word as an art form."
  },
  {
    title: "DRAWINGS & PRINTS",
    image: draw,
    description: "Rare sketches, etchings, and prints by master artists revealing their process, style, and imagination."
  },
  {
    title: "FURNITURE",
    image: write,
    description: "Chairs, tables, and cabinets that combine utility and artistry across centuries of craftsmanship."
  },
  {
    title: "WRITING & INSCRIPTION",
    image: furniture,
    description: "Ancient texts and engravings that preserve languages, cultures, and legacies from early civilizations."
  },
  {
    title: "FUNERARY MONUMENTS",
    image: monument,
    description: "Tombs and memorial sculptures honoring the dead, reflecting cultural views on life, death, and remembrance."
  },
  {
    title: "OBJECTS OF WORSHIP",
    image: obj,
    description: "Sacred items and religious artifacts used in rituals, prayer, and ceremonies across different faiths."
  },
  {
    title: "DOMESTIC ITEMS",
    image: items,
    description: "Everyday objects that offer insights into home life, routine, and tradition in ancient and modern times."
  },
  {
    title: "TOOLS & INSTRUMENTS",
    image: tool,
    description: "Manual and scientific instruments used in construction, medicine, music, and more."
  },
  {
    title: "DRAWINGS",
    image: painting,
    description: "Detailed renderings in ink, pencil, and charcoal capturing moments, ideas, and beauty through lines and shades."
  },
  {
    title: "SEALS & GLYPTIC ART",
    image: seal,
    description: "Engraved stones and seals used for decoration, authority, and identity throughout empires."
  },
  {
    title: "COINS & MEDALS",
    image: coin,
    description: "Currency and commemorative medals that tell economic, political, and artistic stories of their time."
  },
  {
    title: "PERSONAL OBJECTS",
    image: pers,
    description: "Jewelry, accessories, and tokens that reflect individual taste, status, and cultural identity."
  },
  {
    title: "POTS & VESSELS",
    image: pots,
    description: "Ceramic and metal containers used for cooking, storage, and ceremonies, often adorned with decorative motifs."
  },
  {
    title: "ARMOUR ACCESSORIES",
    image: arms,
    description: "Helmet crests, clasps, and decorative details that once complemented armor in battle and pageantry."
  }
];

function GalleryCard({ title, image, description }) {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={image} alt={title} />
          <p className="gallery-card-text">{title}</p>
        </div>
        <div className="flip-card-back">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

function Gallery() {
  return (
    <>
      <div className="gallery-hero-container fade-slide">
        <video className="hero-video" autoPlay muted loop playsInline>
          <source src="/228782.mp4" type="video/mp4" />
        </video>
        <div className="gallery-hero-overlay">
          <h1 className="gallery-hero-title">Discover the Treasures of Civilization</h1>
          <p className="gallery-hero-subtitle">Explore timeless art, history, and cultural heritage at the time gallery</p>
          <Link to="/explore" className="gallery-hero-button">Start Exploring</Link>
        </div>
      </div>

      <div className="gallery-description">
        <p>
          The Collections database consists of entries for more than 500,000 works in the Musée du time gallery  National Eugène-Delacroix. Updated on a daily basis, it is the result of the continuous research and documentation efforts carried out by teams of experts from both museums.
        </p>
        <Link to="/Music">See more</Link>
      </div>

      <div className="gallery-collection">
        <p className="gallery-collection-title">Explore the Collection</p>
        <div className="gallery-card-grid">
          {collectionItems.map((item, index) => (
            <GalleryCard
              key={index}
              title={item.title}
              image={item.image}
              description={item.description}
            />
          ))}
        </div>
      </div>

      <p className="gallery-album-heading">Themed Albums</p>
      <div className="gallery-album-grid" style={{marginBottom:'50px'}}>
        <div className="gallery-album-card">
          <p className="gallery-album-text">ACQUISITION MADE IN 2023<br /><hr />THE LATEST ADDITION</p>
          <Link to="/girlspage"><img src={girls} alt="2023" /></Link>
        </div>
        <div className="gallery-album-card">   
          <p className="gallery-album-text">ACQUISITION MADE IN 2022<br /><hr /></p>
          <Link to="/boyspage"><img src={boys} alt="2022" /></Link>
        </div>
        <div className="gallery-album-card">
          <p className="gallery-album-text">NATIONAL MUSEUM RECOVERY<br /><hr />MNR WORKS</p>
          <Link to="/lionspage"><img src={lions} alt="MNR" /></Link>
        </div>
        <div className="gallery-album-card">
          <p className="gallery-album-text">MASTERPIECES OF THE LOUVRE<br /><hr /></p>
          <Link to="/manspage"><img src={mans} alt="Masterpieces" /></Link>
        </div>
      </div>
    </>
  );
}

export default Gallery;
