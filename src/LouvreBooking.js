import React, { useState, useEffect } from 'react';
import './Calendar.css';
import { motion } from "framer-motion";
import axios from 'axios';

const months = [
  'January','February','March','April','May','June',
  'July','August','September','October','November','December'
];

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(6);
  const [currentYear, setCurrentYear] = useState(2025);
  const [selectedDate, setSelectedDate] = useState(null);

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

  // form states
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');

  // fetch data on load
  useEffect(() => {
    const fetchUserdata = async () => {
      try {
        const response = await axios.post('http://localhost:8000/booking');
        const userData = response.data.userData || {};
        setFirstName(userData.firstname || '');
        setLastName(userData.lastname || '');
        setEmail(userData.email || '');
        setAddress(userData.address || '');
        setCity(userData.city || '');
        setState(userData.state || '');
      } catch (err) {
        console.error('Error fetching user data:', err);
      }
    };
    fetchUserdata();
  }, []);

  // submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/booking", {
        firstname, lastname, email, address, city, state
      });
      alert(response.data.message || "Message sent successfully");
      setFirstName(''); setLastName(''); setEmail('');
      setAddress(''); setCity(''); setState('');
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message");
    }
  };

  return (
    <div className="container my-5">
      {/* Calendar */}
      <div className="custom-calendar-container text-center fade-slide mb-5">
        <div className="custom-calendar-nav d-flex justify-content-between align-items-center px-5">
          <button onClick={prevMonth} className="btn btn-light rounded-circle">&#8249;</button>
          <h5 className="m-0">{months[currentMonth]} {currentYear}</h5>
          <button onClick={nextMonth} className="btn btn-dark rounded-circle text-white">&#8250;</button>
        </div>
        <div className="custom-calendar-weekdays d-flex justify-content-around mt-4 mb-2 text-muted">
          <div>MON</div><div>TUE</div><div>WED</div>
          <div>THU</div><div>FRI</div><div>SAT</div><div>SUN</div>
        </div>
        <div className="custom-calendar-grid d-flex flex-wrap justify-content-center">
          {renderDays()}
        </div>
        <div className="legend mt-3 text-muted small">
          <span className="dot"></span> last places available
        </div>
      </div>

      {/* Form */}
      <div className="card p-4 shadow-lg">
        <h4 className="text-dark mb-3">Personal Details</h4>
        <form className="row g-3" onSubmit={handleSubmit}>
          <div className="col-md-6">
            <label className="form-label">First Name</label>
            <input type="text" className="form-control"
              value={firstname} onChange={(e)=>setFirstName(e.target.value)} />
          </div>
          <div className="col-md-6">
            <label className="form-label">Last Name</label>
            <input type="text" className="form-control"
              value={lastname} onChange={(e)=>setLastName(e.target.value)} />
          </div>
          <div className="col-md-12">
            <label className="form-label">Email</label>
            <input type="email" className="form-control"
              value={email} onChange={(e)=>setEmail(e.target.value)} />
          </div>
          <div className="col-12">
            <label className="form-label">Address</label>
            <input type="text" className="form-control"
              value={address} onChange={(e)=>setAddress(e.target.value)} />
          </div>
          <div className="col-md-6">
            <label className="form-label">City</label>
            <input type="text" className="form-control"
              value={city} onChange={(e)=>setCity(e.target.value)} />
          </div>
          <div className="col-md-6">
            <label className="form-label">State</label>
            <input type="text" className="form-control"
              value={state} onChange={(e)=>setState(e.target.value)} />
          </div>
          <div className="col-12 text-center mt-3">
            <button type="submit" className="btn btn-success px-5 py-2 rounded-pill shadow">Book Now</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Calendar;
