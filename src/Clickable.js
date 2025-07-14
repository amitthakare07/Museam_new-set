import React from "react";

function Clickable(){
    return(
        <>
    <div className="request-container">
      <h2 className="request-title">SUBMIT A REQUEST</h2>
      <div className="form-section">
        <label htmlFor="subject">Choose a subject</label><br />
        <select id="subject" name="subject" className="dropdown">
          <option value="">-- Select --</option>
          <option value="general">General Inquiry</option>
          <option value="ticket">Ticketing</option>
          <option value="feedback">Feedback</option>
        </select>
      </div>
    </div>

        </>
    )
}

export default Clickable;