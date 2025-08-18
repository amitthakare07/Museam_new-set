import React, { useState } from 'react';
import './Calendar.css';

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const Calendar = ({ selectedDate, setSelectedDate }) => {
  const [currentMonth, setCurrentMonth] = useState(6);
  const [currentYear, setCurrentYear] = useState(2025);

  const disabledDates = [13, 14, 15, 16, 17, 21, 22, 27, 29];
  const lastAvailable = [18, 28];

  const getDaysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();
  const getStartDay = (month, year) => new Date(year, month, 1).getDay();

  const renderDays = () => {
    const days = [];
    const totalDays = getDaysInMonth(currentMonth, currentYear);
    const startDay = getStartDay(currentMonth, currentYear);
    const offset = startDay === 0 ? 6 : startDay - 1;

    for (let i = 0; i < offset; i++) {
days.push(<div key={`empty-${i}`} className="custom-calendar-day empty"></div>);
    }

    for (let i = 1; i <= totalDays; i++) {
      let classes = 'custom-calendar-day';
      if (disabledDates.includes(i)) classes += ' disabled';
      else if (lastAvailable.includes(i)) classes += ' last-available';
      if (selectedDate === i) classes += ' selected';

      days.push(
        <div
          key={i}
          className={classes}
          onClick={() => {
            if (!disabledDates.includes(i)) setSelectedDate(i);
          }}
        >
          {i}
        </div>
      );
    }

    return days;
  };

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
    setSelectedDate(null);
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
    setSelectedDate(null);
  };

  return (
    <div className="custom-calendar-container text-center fade-slide">
      <div className="custom-calendar-nav d-flex justify-content-between align-items-center px-5">
        <button onClick={prevMonth} className="btn btn-light rounded-circle">&#8249;</button>
        <h5 className="m-0">{months[currentMonth]} {currentYear}</h5>
        <button onClick={nextMonth} className="btn btn-dark rounded-circle text-white">&#8250;</button>
      </div>

      <div className="custom-calendar-weekdays d-flex justify-content-around mt-4 mb-2 text-muted">
        <div>MON</div><div>TUE</div><div>WED</div><div>THU</div><div>FRI</div><div>SAT</div><div>SUN</div>
      </div>

      <div className="custom-calendar-grid d-flex flex-wrap justify-content-center">
        {renderDays()}
      </div>

      <div className="legend mt-3 text-muted small">
        <span className="dot"></span> last places available
      </div>
    </div>
  );
};

export default function LouvreBooking() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState('Spain');
  const countryCityMap = {
    Spain: 'Madrid',
    'United Kingdom': 'London',
    France: 'Paris',
    Italy: 'Rome',
    Germany: 'Berlin',
    China: 'Beijing'
  };

  return (
    <div className="container my-5 custom-booking">
      <h3 className="text-center mb-5 text-success fw-bold">Time gallery Ticket Booking</h3>

      <div className="card p-4 shadow-lg">
        <div className="row g-4">
          <div className="col-md-6">
            <h5 className="text-dark">Choose a Date</h5>
            <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />

            <h5 className="mt-4 text-success fw-bold">Select a Time</h5>
            <div className="mb-3">
              {["10:00 AM", "12:00 PM", "2:00 PM", "4:00 PM"].map((time, i) => (
                <button key={i} className="btn btn-outline-dark m-2 rounded-pill px-4">
                  {time}
                </button>
              ))}
            </div>
          </div>

          <div className="col-md-6">
            <h5 className="text-dark">Personal Details</h5>
            <form className="row g-3">
              <div className="col-md-6">
                <input type="text" className="form-control" placeholder="First name" />
              </div>
              <div className="col-md-6">
                <input type="text" className="form-control" placeholder="Last name" />
              </div>
              <div className="col-md-12">
                <label className="form-label mt-3">Email</label>
                <input type="email" className="form-control" />
              </div>
              <div className="col-md-12">
                <label className="form-label">Password</label>
                <input type="password" className="form-control" />
              </div>
              <div className="col-12">
                <label className="form-label">Address</label>
                <input type="text" className="form-control" placeholder="1234 Main St" />
              </div>
              <div className="col-md-6">
                <label className="form-label">Country</label>
                <select className="form-select" value={selectedCountry} onChange={(e) => setSelectedCountry(e.target.value)}>
                  {Object.keys(countryCityMap).map((country, i) => (
                    <option key={i}>{country}</option>
                  ))}
                </select>
              </div>
              <div className="col-md-6">
                <label className="form-label">City</label>
                <input type="text" className="form-control" value={countryCityMap[selectedCountry]} readOnly />
              </div>
            </form>
          </div>
        </div>

        <div className="text-center mt-4">
          <button type="submit" className="btn btn-success px-5 py-2 rounded-pill shadow">Book Now</button>
        </div>
      </div>

      <div className="mt-5 p-4 bg-light rounded shadow-sm">
        <h4 className="text-success fw-bold mb-3">Time gallery Tickets with Audio Guide</h4>
        <p>Visiting the Time gallery should be a must if you're traveling to Paris. This former royal palace turned museum is a historical and architectural gem in itself. Its iconic glass pyramid marks the entrance to a fascinating journey through centuries of art and culture.</p>
        <p>The Louvre Museum in Paris is home to some of the world's most famous artworks. With our audio guide, you can explore its majestic halls and learn the history behind its most valuable treasures, from the enigmatic Mona Lisa to the imposing Winged Victory of Samothrace.</p>
        <p>With our Louvre Museum tickets with an audio guide, you’ll uncover the secrets of its collections, learn about the civilizations that left their mark on these masterpieces, and understand why this is the most visited museum in the world.</p>
        <p>But the Louvre is much more than just its collection. Did you know that before becoming a museum, it was a medieval fortress? Or that its galleries house over 35,000 pieces? Discover these and other fascinating facts with our Louvre tickets with an audio guide.</p>
        <p>In addition to everything mentioned above, this tour also includes an audio guide of Notre Dame and an audio guide of the city of Paris, allowing you to discover the most iconic landmarks at your own pace and enjoy an even more complete and personalized experience.</p>

        <h5 className="mt-4">Book your Louvre Museum tickets:</h5>
        <ul>
          <li>Entry tickets to the time gallery</li>
          <li>Audio guide in the selected language</li>
          <li>Audio guide of Notre Dame</li>
          <li>Audio guide of the city of Paris</li>
        </ul>
        <p><strong>Does not include:</strong></p>
        <ul>
          <li>Headphones</li>
          <li>Phone</li>
          <li>Notre Dame tickets</li>
        </ul>
        <p className="textp">
          ⚠ Due to the high demand for tickets for this monument and in order to guarantee the availability of your tickets, the final time of your visit may vary with a margin of 90 minutes before and 90 minutes after from the time selected by you in your reservation process (example: If you select your visit for 11:00 a.m., your tickets will be reserved for the first available time in the interval from 11:00 a.m. to 12:30 p.m.)
        </p>
      </div>
    </div>
  );
}