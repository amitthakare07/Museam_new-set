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
      tag: "Fashion",
      description: "Decorative arts and modern fashion design.",
      date: "24 Jan – 21 July 2025"
    },
    {
      title: "CHINA: THIERS ADOLPHE",
      image: "/jcr_content.jpg",
      tag: "Culture",
      description: "Masterpieces from the Qing dynasty scrolls.",
      date: "14 May – 25 Aug 2025"
    },
    {
      title: "THE MET AU LOUVRE",
      image: "/images.jpg",
      tag: "Dialogue",
      description: "Near Eastern Antiquities in Dialogue.",
      date: "29 Feb – 28 Sep 2025"
    },
    {
      title: "WOMEN IN RENAISSANCE ART",
      image: "/dd287e2fd247a075b1cb6a5f96c49efe--italian-renaissance-art-renaissance-artists.jpg",
      tag: "Art & Gender",
      description: "Exploring the roles and representations of women in Renaissance paintings.",
      date: "12 Mar – 30 Sep 2025"
    },
    {
      title: "MAYA: SACRED COSMOS",
      image: "/mayan.mythologyworldwide.com-The-Popol-Vuh-The-Mayas-Epic-Tale-of-Life-and-the-Cosmos.webp",
      tag: "Ancient Civilizations",
      description: "Rituals, astronomy, and mythology in Maya culture and artifacts.",
      date: "5 Apr – 20 Oct 2025"
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <video className="hero-video" autoPlay muted loop playsInline>
          <source src="/3205451-uhd_3840_2160_30fps.mp4" type="video/mp4" />
        </video>
        <div className="hero-content text-white text-center fade-slide">
          <h1 className="display-4 fw-bold">Escape with the <br /> time gallery</h1>
          <div className="info-box mt-4 p-4 bg-dark bg-opacity-75 rounded">
            <p className="mb-1"><strong>Welcome to the time gallery</strong><br />Open today</p>
            <p className="open-time text-warning fw-semibold">9:00 AM → 6:00 PM</p>
            <div className="d-flex justify-content-center gap-3 flex-wrap mt-3">
              <button className="btn-glow">🎫 Book a ticket</button>
              <button className="btn btn-light">ℹ️ Prepare your visit</button>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="louvre-highlights container my-5">
        <h2 className="louvre-section-title text-center mb-5">✨ Highlights</h2>
        <div className="row g-4">
          {highlights.map((item, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div
                className="louvre-highlight-card"
                onMouseMove={(e) => {
                  const card = e.currentTarget.querySelector(".louvre-highlight-inner");
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  const centerX = rect.width / 2;
                  const centerY = rect.height / 2;
                  const rotateX = -(y - centerY) / 20;
                  const rotateY = (x - centerX) / 20;
                  card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                }}
                onMouseLeave={(e) => {
                  const card = e.currentTarget.querySelector(".louvre-highlight-inner");
                  card.style.transform = "rotateX(0deg) rotateY(0deg)";
                }}
              >
                <div className="louvre-highlight-inner">
                  <div className="louvre-highlight-img-wrapper">
                    <img src={item.image} alt={item.title} className="highlight-img" />
                    <span className="louvre-tag">{item.tag}</span>
                  </div>
                  <div className="louvre-card-body">
                    <h5 className="louvre-card-title">{item.title}</h5>
                    <p className="louvre-card-text">{item.description}</p>
                    <p className="louvre-card-date">{item.date}</p>
                  </div>
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
