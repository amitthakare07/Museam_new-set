import React from 'react';
import Download1 from './dh1.jpg';
import Download2 from './dh2.jpg';

import './Calendar.css';



const Calendar = () => {
  const lastAvailable = [18, 28];
  const disabledDates = [13, 14, 15, 16, 17, 21, 22, 27, 29];

  const renderDays = () => {
    const totalDays = 31;
    let days = [];

    for (let i = 1; i <= totalDays; i++) {
      let classes = "calendar-day";

      if (disabledDates.includes(i)) {
        classes += " disabled";
      } else if (lastAvailable.includes(i)) {
        classes += " last-available";
      }

      days.push(
        <div key={i} className={classes}>
          {i}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="calendar-container text-center ms-5">
      <h2 className="mb-3">Select a date</h2>
      <div className="calendar-nav d-flex justify-content-between align-items-center px-5">
        <button className="btn btn-light rounded-circle">&#8249;</button>
        <h5 className="m-0">JULY 2025</h5>
        <button className="btn btn-dark rounded-circle text-white">&#8250;</button>
      </div>

      <div className="calendar-weekdays d-flex justify-content-around mt-4 mb-2 text-muted">
        <div>MON</div>
        <div>TUES</div>
        <div>WED</div>
        <div>THURS</div>
        <div>FRI</div>
        <div>SAT</div>
        <div>SUN</div>
      </div>

      <div className="calendar-grid d-flex flex-wrap justify-content-center">
        {renderDays()}
      </div>

      <div className="legend mt-3 text-muted small">
        <span className="dot"></span> last places available
      </div>
    </div>
    
  );
};

export default function LouvreBooking() {
  return (
    <>
    
      <div>
        <center>
          <img src={Download2} alt="Museum" width="100%" height="600" />
        </center>
        <br />
        <center>
          <h3 style={{ color: 'brown' }}>Louvre Museum Ticket Booking</h3>
        </center>
        <hr style={{ borderTop: '5px solid black' }} />
        <h4 className="right">Full Name</h4>
        <div className="row">
          <div className="col">
            <input type="text" className="form-control" placeholder="First name" aria-label="First name" />
          </div>
          <div className="col">
            <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" />
          </div>
        </div>
          <div className="row mt-4">
        <div className="col-md-6">
          <Calendar />
        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <img src={Download1} alt="Side Museum" className="img-fluid rounded"width='600' style={{ maxHeight: '600px' }} />
        </div>
      </div>
    </div>
      <hr className="mt-5" />

        <div className="mt-4 text-center">
          <h2 className="fw-bold text-muted">Select a time</h2>
          <p className="text-secondary">Select a date, then select a time</p>
        </div>

        <hr className="mt-5" />

        <div className="mt-4 text-center">
          <h2 className="fw-bold text-muted">Choose your tickets</h2>
          <p className="text-secondary">Validate the previous steps, then select your tickets</p>
        </div>
        <hr></hr>
        <form className="row g-3">
  <div className="col-md-6">
    <label for="inputEmail4" className="form-label">Email</label>
    <input type="email" className="form-control" id="inputEmail4"/>
  </div>
  <div className="col-md-6">
    <label for="inputPassword4" className="form-label">Password</label>
    <input type="password" className="form-control" id="inputPassword4"/>
  </div>
  <div className="col-12">
    <label for="inputAddress" className="form-label">Address</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  
  <div className="col-md-6">
    <label for="inputCity" className="form-label">City</label>
    <input type="text" className="form-control" id="inputCity"/>
  </div>
  <div className="col-md-4">
    <label for="inputState" className="form-label">State</label>
    <select id="inputState" className="form-select">
      <option selected>Choose...</option>
      <option>India</option>
    </select>
  </div>
  
  

  
</form>
  );

        
        



    </>
  );
}






