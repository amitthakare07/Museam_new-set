import React from "react";
import lions from './lion.jpg'

function LionsPage(){
    return(
        <>

            <div className="hero-section">
                <img
                    src={lions}
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
export default LionsPage;