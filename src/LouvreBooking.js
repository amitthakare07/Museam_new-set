import React, { useState } from "react";
import "./Calendar.css";
import axios from "axios";

export default function LouvreBooking() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');

  // POST booking API
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/booking", {
        firstname,
        lastname,
        email,
        address,
        city,
        state,
        selectedDate,
        selectedTime,
      });

      alert(response.data.message || "Booking successful ✅");

      // Reset form
      setFirstName('');
      setLastName('');
      setEmail('');
      setAddress('');
      setCity('');
      setState('');
      setSelectedDate(null);
      setSelectedTime(null);
    } catch (error) {
      console.error("❌ Error sending booking:", error);
      alert("Failed to send booking");
    }
  };

  // Calendar UI
  const renderCalendar = () => {
    const days = Array.from({ length: 30 }, (_, i) => i + 1);
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
              type="button"
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
        <form className="row g-4" onSubmit={handleSubmit}>
          <div className="col-md-6">
            <input
              type="text"
              className="form-control rounded-3"
              placeholder="First name"
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="col-md-6">
            <input
              type="text"
              className="form-control rounded-3"
              placeholder="Last name"
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div className="col-md-12">
            <label className="form-label mt-2 fw-semibold">Email</label>
            <input
              type="email"
              className="form-control rounded-3"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="col-12">
            <label className="form-label fw-semibold">Address</label>
            <input
              type="text"
              className="form-control rounded-3"
              placeholder="1234 Main St"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label fw-semibold">Country</label>
            <input
              type="text"
              className="form-control rounded-3"
              placeholder="India"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label fw-semibold">City</label>
            <input
              type="text"
              className="form-control rounded-3"
              placeholder="Mumbai"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>

          <div className="text-center mt-5">
            <button
              type="submit"
              className="btn btn-success px-5 py-2 rounded-pill shadow-lg fw-semibold"
            >
              ✅ Book Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

























// import React, { useState } from "react";
// import "./Calendar.css";
// import axios from "axios";

// export default function LouvreBooking() {
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [selectedTime, setSelectedTime] = useState(null);
//   const [selectedCountry, setSelectedCountry] = useState("Spain");

//   const countryCityMap = {
//     Spain: "Madrid",
//     "United Kingdom": "London",
//     France: "Paris",
//     Italy: "Rome",
//     Germany: "Berlin",
//     China: "Beijing",
//   };

//   const [firstname, setFirstName] = useState('');
//   const [lastname, setLastName] = useState('');
//   const [email, setEmail] = useState('');
//   const [address, setAddress] = useState('');
//   const [city, setCity] = useState('');
//   const [state, setState] = useState('');
  
  
//     // Mam given code📄
    
//     // const fetchUserdata = async () =>{
//     //   try {
//     //       const response = await axios.get('http://localhost:8000/bookingfind');
//     //       console.log('test',response);
//     //       const userData = response.data.userData;
  
//     //       setFirstName(userData.firstname || '');
//     //       setLastName(userData.lastname || '');
//     //       setEmail(userData.email || '');
//     //       setAddress(userData.address || '');
//     //       setCity(userData.city || '');
//     //       setState(userData.state|| '');
//     //   }
//     //   catch (err) {
//     //       console.error('Error fetching user data:', err);
//     //   }
//     // }
  
//     const handleSubmit = async (e) => {
//       e.preventDefault();
//     try {
//       const response = await axios.post("http://localhost:8000/booking", {
//           firstname,
//           lastname,
//           email,
//           address,
//           city,
//           state
//       });
  
//       alert(response.data.message || "Message sent successfully");
    
//           setFirstName('');
//           setLastName('');
//           setEmail('');
//           setAddress('');
//           setCity('');
//           setState('');
      
//     } catch (error) {
//       console.error("Error sending message:", error);
//       alert("Failed to send message");
//     }
//   };

//       // Simple calendar UI
//       const renderCalendar = () => {
//       const days = Array.from({ length: 30 }, (_, i) => i + 1); // 1-30


//     return (
//       <div className="custom-calendar-grid d-flex flex-wrap justify-content-center">
//         {days.map((day) => (
//           <div
//             key={day}
//             className={`custom-calendar-day rounded-circle shadow-sm mx-1 my-2 d-flex align-items-center justify-content-center 
//               ${selectedDate === day ? "bg-success text-white fw-bold" : "bg-light"}`}
//             style={{
//               width: "45px",
//               height: "45px",
//               cursor: "pointer",
//               transition: "0.3s",
//             }}
//             onClick={() => setSelectedDate(day)}
//           >
//             {day}
//           </div>
//         ))}
//       </div>
//     );
//   };

//   return (
//     <div className="container my-5 custom-booking">
//       <h2 className="text-center mb-5 text-success fw-bold">
//         🎟 Time Gallery Ticket Booking
//       </h2>

//       {/* Calendar Section */}
//       <div className="card p-4 shadow-lg mb-5 border-0 rounded-4">
//         <h4 className="text-dark mb-3">📅 Choose a Date</h4>
//         {renderCalendar()}

//         <h4 className="mt-4 text-success fw-bold">⏰ Select a Time</h4>
//         <div className="mb-3 text-center">
//           {["10:00 AM", "12:00 PM", "2:00 PM", "4:00 PM"].map((time, i) => (
//             <button
//               key={i}
//               className={`btn m-2 px-4 py-2 rounded-pill shadow-sm ${
//                 selectedTime === time
//                   ? "btn-success text-white"
//                   : "btn-outline-dark"
//               }`}
//               onClick={() => setSelectedTime(time)}
//             >
//               {time}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Booking Form Section */}
//       <div className="card p-5 shadow-lg border-0 rounded-4 bg-light" onSubmit={handleSubmit}>
//         <h4 className="text-dark mb-4">👤 Personal Details</h4>
//         <form className="row g-4">
//           <div className="col-md-6">
//             <input
//               type="text"
//               className="form-control rounded-3"
//               placeholder="First name"
//               onChange={(e) => setFirstName(e.target.value)}
//             />
//           </div>
//           <div className="col-md-6">
//             <input
//               type="text"
//               className="form-control rounded-3"
//               placeholder="Last name"
//               onChange={(e) => setLastName(e.target.value)}
//             />
//           </div>
//           <div className="col-md-12">
//             <label className="form-label mt-2 fw-semibold">Email</label>
//             <input type="email" className="form-control rounded-3" />
//             onChange={(e) => setEmail(e.target.value)}
//           </div>
//           {/* <div className="col-md-12">
//             <label className="form-label fw-semibold">Password</label>
//             <input type="password" className="form-control rounded-3" />
//             onChange={(e) => set(e.target.value)}
//           </div> */}
//           <div className="col-12">
//             <label className="form-label fw-semibold">Address</label>
//             <input
//               type="text"
//               className="form-control rounded-3"
//               placeholder="1234 Main St"
//               onChange={(e) => setAddress(e.target.value)}
//             />
//           </div>
//            <div className="col-md-6">
//             <label className="form-label fw-semibold">Country</label>
//             <input
//               type="text"
//               className="form-control rounded-3"
//               placeholder="India"
//               onChange={(e) => setState(e.target.value)}
//               // value={countryCityMap[selectedCountry]}
//               // readOnly
//             />
//           </div>
          
//           <div className="col-md-6">
//             <label className="form-label fw-semibold">City</label>
//             <input
//               type="text"
//               className="form-control rounded-3"
//               placeholder="Mumbai"
//               onChange={(e) => setCity(e.target.value)}
//               // value={countryCityMap[selectedCountry]}
//               // readOnly
//             />
//           </div>
//         </form>

//         <div className="text-center mt-5"  >
//           <button
//             type="submit"className="btn btn-success px-5 py-2 rounded-pill shadow-lg fw-semibold" >
//             ✅ Book Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
