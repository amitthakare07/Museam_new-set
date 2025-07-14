import React from "react";
import mans from'./man.jpg';

function MansPage(){
    return(
        <>
             <div className="hero-section">
                <img
                    src={mans}
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
export default MansPage;