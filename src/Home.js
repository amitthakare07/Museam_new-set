import React from 'react'
import './Home.css';
import raj from './blue_louvre_paris_france_sabrina_baxter_2015.jpg'

export default function Home() {
    return (
        <>
        
    <div className="anit">
      {/* Header */}
      <header className="header">
        <div className="header-left">
          <span>🔍 Search</span>
          <span>English ⌄</span>
        </div>
        <h1 className="logo">LOUVRE</h1>
        <div className="header-right">
          <button className="boutique-button">Online Boutique</button>
          <button className="ticket-button">Tickets</button>
        </div>
      </header>

      {/* Nav */}
      <nav className="navbar">
        <span>VISIT</span>
        <span>EXHIBITIONS AND EVENTS</span>
        <span>EXPLORE</span>
        <span>SEE MORE ☰</span>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <img
          src={raj}
          alt="Louvre Museum"
          className="hero-image"
        />
        <h2 className="hero-text">
          ESCAPE WITH THE <br /> LOUVRE Amit
        </h2>
        <div className="info-box">
          <div>
            <strong>WELCOME TO THE LOUVRE</strong>
            <p>The museum is open today</p>
            <p className="hours">9:00 AM → 6:00 PM</p>
          </div>
          <button className="book-button">🎟 Book a ticket</button>
          <button className="visit-button">ℹ Prepare your visit</button>
        </div>
      </section>
    </div>

        </>

      
    )
}

