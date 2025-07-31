import React from 'react';
import muse from './p.jpg';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function Cont() {

  return (
    <>

    <div className="hero" >
      <img src={muse}
        alt="Background"
        className="background"
      />
      <div className="search-bar-container fade-slide" >
        <input type="text" placeholder="Search..." className="search-input" />
      </div>
    </div>
    <br/><br/>
       <div className="container">
      <section className="themes-section">
        <h2 className="section-title red">THEMES</h2>
        <div className="button-group">
          <Link to="/Info"><Button variant="primary">General information</Button></Link>
           <Link to="/OnlineTicketingService"><Button variant="primary">Online ticketing service</Button></Link>
           <Link to="/Group"><Button variant="primary">Group reservations and information</Button></Link>
        
        </div>
      </section>

      <section className="faq-section">
        <h2 className="section-title blue">FREQUENTLY ASKED QUESTIONS </h2>
        <div className="faq-grid">
         <div> Is the reservation mandatory? Can I buy tickets at the ticket offices on the day?<hr/></div>
          <div>Does the museum offer a cloakroom? And what do I have to leave there?<hr/></div>
          <div>Will some rooms be closed on the day I have planned to visit?<hr/></div>
          <div>How do I buy a ticket online?<hr/></div>
          <div>I would like to modify my date of visit<hr/></div>
          <div>What does the ‘right to speak’ mean?<hr/></div>
        </div>
      </section>

      <section className="contact-section">
        <h2 className="section-title purple">CONTACT</h2>
        <p>Didn't find the answer to your question? You may ask us directly.We will answer you as soon as possible.</p>
        <div style={{textAlign: "center", marginTop: "10px", marginRight:"150px"}}>
        <Link to="/Clickable">
           <Button variant="primary">Click Here</Button>
        </Link></div>
      </section>
    </div>

    </>
  );
}

export default Cont;