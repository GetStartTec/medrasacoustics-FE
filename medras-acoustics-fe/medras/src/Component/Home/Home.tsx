import React, { useEffect, useState } from "react";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Home = () => {
  interface Client {
    id: number;
    name: string;
    image: string;
    content: string;
  }

  const clients: Client[] = [
    {
      id: 1,
      name: "Client 1",
      image: "/images/client1.jpg",
      content: "Client 1 testimonial or description goes here."
    },
    {
      id: 2,
      name: "Client 2",
      image: "/images/client2.jpg",
      content: "Client 2 testimonial or description goes here."
    },
    {
      id: 3,
      name: "Client 3",
      image: "/images/client3.jpg",
      content: "Client 3 testimonial or description goes here."
    }
  ];


  const nextClient = () => {
    setIndex((prevIndex) => (prevIndex + 1) % clients.length);
  };

  const prevClient = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? clients.length - 1 : prevIndex - 1
    );
  };
  const fullText = "Engineering Excellence in Sound & Silence";
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, 50); // Typing speed

      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <>
      <div className="home-section">
        <div className="home-overlay">
          <h1 className="typewriter">{text}</h1>
          <p className="static-text">We bring precision acoustics to life, enhancing every sonic experience.From home theaters to studios, </p>
          <p className="static-text">we create spaces where sound thrives.</p>
        </div>
      </div>

      {/* Main Container */}
      <div className="home-container mt-10 px-6 md:px-20">

        {/* About Us Section */}
        <div className="about-section">
          <div className="about-image">
            <img src="/images/home-page-2.jpg" alt="About Us" />
          </div>
          <div className="about-text">
            <h2>ABOUT US</h2>
            <h3 className="home-about"></h3>
            <h1>Madras Acoustics</h1>
            <h3>Sound Proofing | Space | Design</h3>
            <p>
              At Madras Acoustics, we craft immersive soundscapes and exceptional audiovisual environments. Since 2020,
              our expertise has shaped over 100 world-class projects — from professional music studios and concert auditoriums to
              luxury hotels, vibrant nightclubs, and elite home cinemas.
            </p>
            <p>
              Our globally experienced team combines creativity and technical precision to deliver customized installations
              that meet the highest standards. By embracing emerging technologies and design innovations, we ensure every
              project offers an enhanced and memorable experience.
            </p>
            <b> "Exceptional sound design is born from expertise, innovation, and a deep understanding of acoustic principles."</b>
          </div>
        </div>

        {/* Services Section */}
        <div className="home-services-section">
          <h2 className="home-section-title">Services</h2>
          <div className="home-services-container">
            <Link to="/services/professional" className="home-card">
              <img src="/images/professional-home.jpg" alt="Professional Services" />
              <div className="home-card-overlay">Professional Services</div>
            </Link>
            <Link to="/services/residential" className="home-card">
              <img src="/images/residential-home.jpg" alt="Residential Services" />
              <div className="home-card-overlay">Residential Services</div>
            </Link>
          </div>
        </div>

      </div>

      {clients.length > 0 && index < clients.length && (
        <div className="client-carousel">
          <h2 className="carousel-title">Our Clients</h2>
          <div className="carousel-container">
            <div className="client-card">
              <div className="client-image">
                <img src={clients[index]?.image} alt={clients[index]?.name} />
              </div>
              <div className="curved-content">
                <div className="curve large">{clients[index]?.content}</div>
                <div className="curve medium"></div>
                <div className="curve small"></div>
              </div>
            </div>
          </div>
          {/* <div className="carousel-buttons">
            <button onClick={prevClient} className="carousel-btn">
              <FaChevronLeft />
            </button>
            <button onClick={nextClient} className="carousel-btn">
              <FaChevronRight />
            </button>
          </div> */}
        </div>
      )}

      {/* 
      <div className="client-carousel">
        <h2 className="carousel-title">Our Clients</h2>
        <div className="carousel-container">
          <div className="client-card">
            <div className="client-image">
              <img src={clients[index].image} alt={clients[index].name} />
            </div>
            <div className="curved-content">
              <div className="curve large">{clients[index].content}</div>
              <div className="curve medium"></div>
              <div className="curve small"></div>
            </div>
          </div>
        </div>
        <div className="carousel-buttons">
          <button onClick={prevClient} className="carousel-btn">
            <FaChevronLeft />
          </button>
          <button onClick={nextClient} className="carousel-btn">
            <FaChevronRight />
          </button>
        </div>
      </div> */}
    </>
  );
};