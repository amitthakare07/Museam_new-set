import React from "react";
import girls from './girl.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



function GirlsPage(){
    return(
        <>
        <div className="hero-section">
            <img
                src={girls}
                alt="Artwork"
                className="background-img"
            />
            <div className="overlay-content">
                <h1>ACQUISITIONS MADE IN 2023</h1>
                <p className="subtitle">THE LATEST ADDITIONS TO THE COLLECTIONS</p>
                <p className="art-count">164 artworks</p>
                <div className="footer-row">
                    <p className="themed">THEMED ALBUM</p>
                </div>
            </div>
        </div>
        </>
    )
}
export default GirlsPage;