import React, { useState } from 'react';


function SubmitRequest() {
  const [formData, setFormData] = useState({
    subject1: '',
    email: '',
    subject2: '',
    title: '',
    description: '',
    file: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    alert("Request Submitted!");
  };

  return (
    <div className="submit-container">
      <h2>SUBMIT A REQUEST</h2>
      <form onSubmit={handleSubmit}>
        <label>Choose a subject</label>
        <select name="subject1" value={formData.subject1} onChange={handleChange}>
          <option value="">--Select--</option>
          <option value="General information">General information</option>
          <option value="Booking issues">Booking issues</option>
        </select>

        <label>Your email address</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label>Choose a subject</label>
        <select name="subject2" value={formData.subject2} onChange={handleChange}>
          <option value="">--Select--</option>
          <option value="Visit">Visit</option>
          <option value="Exhibition">Exhibition</option>
        </select>

        <label>Subject</label>
        <input type="text" name="title" value={formData.title} onChange={handleChange} required />

        <label>Description</label>
        <textarea name="description" rows="6" value={formData.description} onChange={handleChange}></textarea>

        <label>Attachments (optional)</label>
        <input type="file" name="file" onChange={handleChange} />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SubmitRequest;