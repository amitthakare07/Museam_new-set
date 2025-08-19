import React, { useState } from "react";
import "./Calendar.css";

export default function LouvreBooking() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState("Spain");

  const countryCityMap = {
    Spain: "Madrid",
    "United Kingdom": "London",
    France: "Paris",
    Italy: "Rome",
    Germany: "Berlin",
    China: "Beijing",
  };

  // Simple calendar UI
  const renderCalendar = () => {
    const days = Array.from({ length: 30 }, (_, i) => i + 1); // 1-30
    return (
      <div className="custom-calendar-grid d-flex flex-wrap justify-content-center">
        {days.map((day) => (
          <div
            key={day}
            className={`custom-calendar-day rounded-circle shadow-sm mx-1 my-2 d-flex align-items-center justify-content-center 
              ${selectedDate === day ? "bg-success text-white fw-bold" : "bg-light"}`}
            style={{
              width: "45px",
              height: "45px",
              cursor: "pointer",
              transition: "0.3s",
            }}
            onClick={() => setSelectedDate(day)}
          >
            {day}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="container my-5 custom-booking">
      <h2 className="text-center mb-5 text-success fw-bold">
        🎟 Time Gallery Ticket Booking
      </h2>

      {/* Calendar Section */}
      <div className="card p-4 shadow-lg mb-5 border-0 rounded-4">
        <h4 className="text-dark mb-3">📅 Choose a Date</h4>
        {renderCalendar()}

        <h4 className="mt-4 text-success fw-bold">⏰ Select a Time</h4>
        <div className="mb-3 text-center">
          {["10:00 AM", "12:00 PM", "2:00 PM", "4:00 PM"].map((time, i) => (
            <button
              key={i}
              className={`btn m-2 px-4 py-2 rounded-pill shadow-sm ${
                selectedTime === time
                  ? "btn-success text-white"
                  : "btn-outline-dark"
              }`}
              onClick={() => setSelectedTime(time)}
            >
              {time}
            </button>
          ))}
        </div>
      </div>

      {/* Booking Form Section */}
      <div className="card p-5 shadow-lg border-0 rounded-4 bg-light">
        <h4 className="text-dark mb-4">👤 Personal Details</h4>
        <form className="row g-4">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control rounded-3"
              placeholder="First name"
            />
          </div>
          <div className="col-md-6">
            <input
              type="text"
              className="form-control rounded-3"
              placeholder="Last name"
            />
          </div>
          <div className="col-md-12">
            <label className="form-label mt-2 fw-semibold">Email</label>
            <input type="email" className="form-control rounded-3" />
          </div>
          <div className="col-md-12">
            <label className="form-label fw-semibold">Password</label>
            <input type="password" className="form-control rounded-3" />
          </div>
          <div className="col-12">
            <label className="form-label fw-semibold">Address</label>
            <input
              type="text"
              className="form-control rounded-3"
              placeholder="1234 Main St"
            />
          </div>
          <div className="col-md-6">
            <label className="form-label fw-semibold">Country</label>
            <select
              className="form-select rounded-3"
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
            >
              {Object.keys(countryCityMap).map((country, i) => (
                <option key={i}>{country}</option>
              ))}
            </select>
          </div>
          <div className="col-md-6">
            <label className="form-label fw-semibold">City</label>
            <input
              type="text"
              className="form-control rounded-3"
              value={countryCityMap[selectedCountry]}
              readOnly
            />
          </div>
        </form>

        <div className="text-center mt-5">
          <button
            type="submit"
            className="btn btn-success px-5 py-2 rounded-pill shadow-lg fw-semibold"
          >
            ✅ Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
