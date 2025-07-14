import React from "react";
import './Monuments.css'

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

import mona from './monalisa.jpg'
import { Link } from "react-router-dom";


function Gallery(){
    return(
        <>

    <div className="hero-container">
      <img
        src={mona}
        alt="Background"
        className="background-image"
      />
      <div className="search-bar-container">
        <input type="text" placeholder="Search The Lovure Collection" className="search-input" />
      </div>
    </div>

        <div className="para">
            <p>The Collections database consists of entries for more than 500,000 works in the Musée du Louvre and Musée National Eugène-Delacroix. Updated on a daily basis, it is the result of the continuous research and documentation efforts carried out by teams of experts from both museums.</p>
            <Link to="/Music">see more</Link>
        </div>
=
      <div className="Love" style={{backgroundColor:"DarkCyan"}}>
        <br/><br/>
          <p style={{fontSize:"40px" , textAlign:'center',color:'yellow'}}>Explore the collection </p>


        <div className="card">
        <div className="card-item">
          <p className="card-text">ARCHITECTURE & DECORATION</p>
          <img src={log} alt="log" />
        </div>
        <div className="card-item">
          <p className="card-text">ARMS & ARMOUR</p>
          <img src={diamond} alt="diamond" />
        </div>
        <div className="card-item">
          <p className="card-text">ARTS OF THE BOOK</p>
          <img src={books} alt="books" />
        </div>
        <div className="card-item">
          <p className="card-text">JEWELLERY & FINERY</p>
          <img src={arms} alt="arms" />
        </div>
      </div>
        <br/><br/>

    <div className="card">
        <div className="card-item">
          <p className="card-text">DRAWINGS & PRINTS</p>
          <img src={draw} alt="draw" />
        </div>
        <div className="card-item">
          <p className="card-text">FURNITURE</p>
          <img src={write} alt="write" />
        </div>
        <div className="card-item">
          <p className="card-text">WRITING & INSCRIPTION</p>
          <img src={furniture} alt="furniture" />
        </div>
        <div className="card-item">
          <p className="card-text">COINS & MEDALS</p>
          <img src={coin} alt="coin" />
        </div>
      </div>
      <br/><br/>


    <div className="card">
        <div className="card-item">
          <p className="card-text">FUNERARY MONUMENTS & ELEMENTS</p>
          <img src={monument} alt="monument" />
        </div>
        <div className="card-item">
          <p className="card-text">MONUMENTS OBJECT & WORSHIP</p>
          <img src={obj} alt="obj" />
        </div>
        <div className="card-item">
          <p className="card-text">DOMESTIC ITEMS</p>
          <img src={items} alt="items" />
        </div>
        <div className="card-item">
          <p className="card-text">PERSONAL ITEMS</p>
          <img src={pers} alt="pers" />
        </div>
    </div><br/><br/>
    <div className="card">
        <div className="card-item">
          <p className="card-text">TOOLS & INSTRUMENTS</p>
          <img src={tool} alt="tool" />
        </div>
        <div className="card-item">
          <p className="card-text">DRAWINGS</p>
          <img src={painting}alt="tool" />
        </div>
        <div className="card-item">
          <p className="card-text">SEALS & GLYPTIC ART</p>
          <img src={seal}alt="seals"/>
        </div>
        <div className="card-item">
          <p className="card-text">VESSELS AND DISHES</p>
          <img src={pots} />
        </div>
    </div>

    <br/><br/><br/>
      </div>
    <br/><br/>

      <p style={{fontSize:'40px', textAlign:'center'}}>Themed albums</p>

      <div className="cards">
        <div className="card-items">
          <p className="card-textx">
          ACQUISITION MADE IN 2023<br /><hr /><br />
            THE LATEST ADDITION TO THE COLLECTIONS
          </p>
         <Link to="/girlspage"><img src={girls} /></Link> 
        </div>

        <div className="card-items">
          <p className="card-textx">
           ACQUISITION MADE IN 2022<br /><hr /><br />
          </p>
          <Link to="/boyspage"> <img src={boys} /></Link>
        </div>
      </div>

      <br /><br />

      <div className="cards">
        <div className="card-items">
          <p className="card-textx">
           NATIONAL MUSEUMS RECOVERY<br /><hr /><br />
            MNR WORKS AT THE MUSEE DU LOUVRE
          </p>
           <Link to="/lionspage"><img src={lions} /></Link>
        </div>

        <div className="card-items">
          <p className="card-textx">
            MASTERPIECES OF THE LOUVRE<br /><hr /><br />
          </p>
          <Link to="/manspage"><img src={mans} /></Link>
        </div>
      </div>

    </>
    );
}

export default Gallery;