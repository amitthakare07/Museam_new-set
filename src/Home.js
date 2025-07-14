// src/Home.js
import React from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  const highlights = [
    {
      title: "MAMLUKS",
      image: "/202201-3_baibars-mamluk-sultan-of-egypt.jpg",
      tag: "Exhibition",
      description: "Golden age of the Islamic Near East through the Mamluk sultanate.",
      date: "30 April – 28 July 2025"
    },
    {
      title: "LOUVRE COUTURE",
      image: "/1142257-louvre-couture-l-exposition-mode-evenement-la-premiere-de-l-histoire-du-musee-du-louvre-img-9122-jpg-2.jpg",
      tag: "Exhibition",
      description: "Decorative arts and modern fashion design.",
      date: "24 Jan – 21 July 2025"
    },
    {
      title: "CHINA:THIERS ADOLPHE ",
      image: "/jcr_content.jpg",
      tag: "Exhibition",
      description: "Masterpieces from the Qing dynasty scrolls.",
      date: "14 May – 25 Aug 2025"
    },
    {
      title: "THE MET AU LOUVRE",
      image: "/images.jpg",
      tag: "Exhibition",
      description: "Near Eastern Antiquities in Dialogue.",
      date: "29 Feb – 28 Sep 2025"
    },
    {
      title: "AFRICA RISING II",
      image: "/images (1).jpg",
      tag: "Exhibition",
      description: "Barbara Chase-Riboud's outdoor sculpture show.",
      date: "22 May – 10 Sep"
    },
    {
      title: "THE PORTRAIT OF KING CHARLES I",
      image: "/Sir_Anthony_Van_Dyck_-_Charles_I_(1600-49)_-_Google_Art_Project.jpg",
      tag: "Actualités",
      description: "Van Dyck’s portrait returns after restoration.",
      date: "Now showing"
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section with Video Background */}
      <section className="hero">
        <video className="hero-video" autoPlay muted loop playsInline>
          <source src="/3205451-uhd_3840_2160_30fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-content text-white text-center">
          <h1 className="display-4 fw-bold">Escape with the <br /> Louvre</h1>
          <div className="info-box mt-4 p-4 bg-dark bg-opacity-75 rounded">
            <p className="mb-1"><strong>Welcome to the Louvre</strong><br />Open today</p>
            <p className="open-time text-warning fw-semibold">9:00 AM → 6:00 PM</p>
            <div className="d-flex justify-content-center gap-3 flex-wrap mt-3">
              <button className="btn btn-success">🎫 Book a ticket</button>
              <button className="btn btn-light">ℹ️ Prepare your visit</button>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="highlights container my-5">
        <h2 className="section-title text-center mb-5">Highlights</h2>
        <div className="row g-4">
          {highlights.map((item, index) => (
            <div key={index} className="col-md-6">
              <div className="highlight-card card h-100 shadow-sm">
                <img src={item.image} alt={item.title} className="card-img-top" />
                <div className="card-body">
                  <span className="badge bg-primary mb-2">{item.tag}</span>
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.description}</p>
                  <p className="text-muted small">{item.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      

    </div>
  );
}

export default Home;
