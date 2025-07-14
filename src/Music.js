import React from "react";

function Music(){
    return(
        <>
            <div className="about-container">
                <div className="about-title">
                    <span className="line"></span>
                    <h2>ABOUT THE COLLECTIONS WEBSITE</h2>
                    <span className="line"></span>
                </div>
            </div>
            <p style={{color:'#1f618d ', fontSize:'25px', padding:'20px 360px 20px 360px'}}>Contents of the database</p>
            <div className="paragraph">
                <p>
                    The database for the Louvre’s collections consists of entries for more than <strong>500,000 works of art that are part of the national collections</strong> and registered in the inventories of the museum’s nine curatorial departments (Near Eastern Antiquities; Egyptian Antiquities; Greek, Etruscan and Roman Antiquities; Byzantine and Eastern Christian Art; Islamic Art; Paintings; Medieval, Renaissance and Modern Sculpture; Prints and Drawings; Medieval, Renaissance and Modern Decorative Arts), those of the History of the Louvre department, or the inventories of the Musée National Eugène-Delacroix, administratively attached to the Louvre since 2004. 
                </p>
                <p>
                    The Collections database also includes so-called <strong>‘MNR’ works (Musées Nationaux Récupération, or National Museums Recovery), recovered after WWII,</strong> retrieved by the Office des Biens et Intérêts Privés. A list of all MNR works conserved at the Musée du Louvre is available in a dedicated album and may also be consulted in the French Ministry of Culture's Rose Valland database. 
                </p>
            </div>
            <p style={{color:'#1f618d ', fontSize:'25px', padding:'20px 360px 20px 360px'}}>Research Tools</p>
            <div className="para1">
                <p>The Louvre’s collections site offers <strong>several research tools</strong>: full-text search engine; advanced search form; features that filter search results according to date of creation, collection the work belongs to, where the work is located, category of work, artist/maker; themed albums; and an interactive map to find works on display in the museum. Search results can also be exported as a flat file (CSV). Each entry has its own URL based on the ARK identification protocol to guarantee uniqueness and durability. The permalink is located at the bottom of each entry. The site allows users to <strong>download texts about the artwork in JSON format</strong> (JSON Documentation).</p>
            </div>
        </>
    )
}

export default Music;