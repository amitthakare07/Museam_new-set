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
import mona from './monalisa.jpg';

function Gallery() {
  return (
    <>
      {/* Hero Section */}
      <div className="gallery-hero-container">
        <img src={mona} alt="Background" className="gallery-background-image" />
        <div className="gallery-search-bar">
          <input type="text" placeholder="Search The Louvre Collection" className="gallery-search-input" />
        </div>
      </div>

      {/* Description */}
      <div className="gallery-description">
        <p>
          The Collections database consists of entries for more than 500,000 works in the Musée du Louvre and Musée National Eugène-Delacroix. Updated on a daily basis, it is the result of the continuous research and documentation efforts carried out by teams of experts from both museums.
        </p>
        <Link to="/Music">See more</Link>
      </div>

      {/* Explore Section */}
      <div className="gallery-collection">
        <p className="gallery-collection-title">Explore the Collection</p>

        <div className="gallery-card-grid">
  <div className="gallery-card"><p className="gallery-card-text">ARCHITECTURE & DECORATION</p><img src={log} alt="" /></div>
  <div className="gallery-card"><p className="gallery-card-text">ARMS & ARMOUR</p><img src={diamond} alt="" /></div>
  <div className="gallery-card"><p className="gallery-card-text">ARTS OF THE BOOK</p><img src={books} alt="" /></div>
  <div className="gallery-card"><p className="gallery-card-text">DRAWINGS & PRINTS</p><img src={draw} alt="" /></div>

  <div className="gallery-card"><p className="gallery-card-text">FURNITURE</p><img src={write} alt="" /></div>
  <div className="gallery-card"><p className="gallery-card-text">WRITING & INSCRIPTION</p><img src={furniture} alt="" /></div>
  <div className="gallery-card"><p className="gallery-card-text">FUNERARY MONUMENTS</p><img src={monument} alt="" /></div>
  <div className="gallery-card"><p className="gallery-card-text">OBJECTS OF WORSHIP</p><img src={obj} alt="" /></div>

  <div className="gallery-card"><p className="gallery-card-text">DOMESTIC ITEMS</p><img src={items} alt="" /></div>
  <div className="gallery-card"><p className="gallery-card-text">TOOLS & INSTRUMENTS</p><img src={tool} alt="" /></div>
  <div className="gallery-card"><p className="gallery-card-text">DRAWINGS</p><img src={painting} alt="" /></div>
  <div className="gallery-card"><p className="gallery-card-text">SEALS & GLYPTIC ART</p><img src={seal} alt="" /></div>

  <div className="gallery-card"><p className="gallery-card-text">COINS & MEDALS</p><img src={coin} alt="" /></div>
  <div className="gallery-card"><p className="gallery-card-text">PERSONAL OBJECTS</p><img src={pers} alt="" /></div>
  <div className="gallery-card"><p className="gallery-card-text">POTS & VESSELS</p><img src={pots} alt="" /></div>
  <div className="gallery-card"><p className="gallery-card-text">ARMOUR ACCESSORIES</p><img src={arms} alt="" /></div>
</div>

      </div>

      {/* Themed Albums */}
      <p className="gallery-album-heading">Themed Albums</p>

      <div className="gallery-album-grid">
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
