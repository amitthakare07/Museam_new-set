import React, { useState } from 'react';
import axios from 'axios';
import './Calendar.css';

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const Calendar = ({ selectedDate, setSelectedDate }) => {
  const [currentMonth, setCurrentMonth] = useState(6); // July
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
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    address: '',
    city: '',
    state: '',
    country: ''
  });

  const times = ["10:00 AM", "12:00 PM", "2:00 PM", "4:00 PM"];

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime) return alert('Please select a date and time.');

    const payload = {
      ...formData,
      visitDate: `${selectedDate} ${months[new Date().getMonth()]} ${new Date().getFullYear()}`,
      visitTime: selectedTime
    };

    try {
      await axios.post('http://localhost:5000/register', payload);
      alert("Booking successful!");
    } catch (err) {
      console.error(err);
      alert("Booking failed.");
    }
  };

  return (
    <div className="container my-5 custom-booking">
      <h3 className="text-center mb-5 text-success fw-bold">Louvre Museum Ticket Booking</h3>

      <div className="row g-5 align-items-start">
        {/* Calendar + Time */}
        <div className="col-md-7">
          <h4 className="text-dark">Choose a Date</h4>
          <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />

          <h4 className="mt-5 text-success fw-bold">Select a Time</h4>
          <div className="mb-4">
            {times.map((time, i) => (
              <button
                key={i}
                className={`btn m-2 rounded-pill px-4 ${selectedTime === time ? 'btn-success' : 'btn-outline-dark'}`}
                onClick={() => setSelectedTime(time)}
              >
                {time}
              </button>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="col-md-5">
          <h4 className="text-dark">Personal Details</h4>
          <form className="row g-3 mt-3" onSubmit={handleSubmit}>
            <div className="col-md-6">
              <input type="text" name="firstName" className="form-control" placeholder="First name" onChange={handleChange} required />
            </div>
            <div className="col-md-6">
              <input type="text" name="lastName" className="form-control" placeholder="Last name" onChange={handleChange} required />
            </div>
            <div className="col-md-12">
              <label className="form-label mt-3">Email</label>
              <input type="email" name="email" className="form-control" onChange={handleChange} required />
            </div>
            <div className="col-md-12">
              <label className="form-label">Password</label>
              <input type="password" name="password" className="form-control" onChange={handleChange} required />
            </div>
            <div className="col-12">
              <label className="form-label">Address</label>
              <input type="text" name="address" className="form-control" placeholder="1234 Main St" onChange={handleChange} required />
            </div>
            <div className="col-md-6">
              <label className="form-label">City</label>
              <input type="text" name="city" className="form-control" onChange={handleChange} required />
            </div>
            <div className="col-md-6">
              <label className="form-label">State</label>
              <input type="text" name="state" className="form-control" placeholder="e.g. Maharashtra" onChange={handleChange} required />
            </div>
            <div className="col-12">
              <label className="form-label">Country</label>
              <select className="form-select" name="country" onChange={handleChange} required>
                <option value="">Choose...</option>
                <option>India</option>
                <option>France</option>
                <option>Germany</option>
                <option>Italy</option>
                <option>United Kingdom</option>
                <option>China</option>
              </select>
            </div>
            <div className="col-12 text-center mt-4">
              <button type="submit" className="btn btn-success px-5 py-2 rounded-pill shadow">Book Now</button>
            </div>
          </form>
        </div>
      </div>

      {/* Country Flags */}
      <div className="mt-5">
        <h4 className="text-dark mb-3">Select your Country</h4>
        <div className="country-flags d-flex flex-wrap gap-4">
          <div className="flag-option d-flex align-items-center">
            <img src="https://flagcdn.com/w40/es.png" alt="Spain" className="me-2" />
            <span>Spain</span>
          </div>
          <div className="flag-option d-flex align-items-center">
            <img src="https://flagcdn.com/w40/gb.png" alt="UK" className="me-2" />
            <span>United Kingdom</span>
          </div>
          <div className="flag-option d-flex align-items-center">
            <img src="https://flagcdn.com/w40/fr.png" alt="France" className="me-2" />
            <span>France</span>
          </div>
          <div className="flag-option d-flex align-items-center">
            <img src="https://flagcdn.com/w40/it.png" alt="Italy" className="me-2" />
            <span>Italy</span>
          </div>
          <div className="flag-option d-flex align-items-center">
            <img src="https://flagcdn.com/w40/de.png" alt="Germany" className="me-2" />
            <span>Germany</span>
          </div>
          <div className="flag-option d-flex align-items-center">
            <img src="https://flagcdn.com/w40/cn.png" alt="China" className="me-2" />
            <span>China</span>
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="mt-5 p-4 bg-light rounded shadow-sm">
        <h4 className="text-success fw-bold mb-3">Louvre Museum Tickets with Audio Guide</h4>
        <p>Visiting the Louvre Museum should be a must if you're traveling to Paris...</p>
        <ul>
          <li>Entry tickets to the Louvre Museum</li>
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
          ⚠️ Due to the high demand... your tickets will be reserved within 90 minutes before or after your selected time.
        </p>
      </div>
    </div>
  );
}
