import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const testimonials = [
  {
    id: 1,
    name: "Sonale Verma",
    salary: "6.5 LPA",
    role: "Cloud Developer at Global Logics",
    image: "/images/acoustic-1.jpeg",
    text: "I took the DevOps certification course at Coursdeck, and it was a game-changer for my career. Their high-quality content and effective training pedagogy made learning a breeze...",
  },
  {
    id: 2,
    name: "Amit Sharma",
    salary: "7 LPA",
    role: "DevOps Engineer at Infosys",
    image: "/images/acoustic-1.jpeg",
    text: "The hands-on training and support from Coursdeck helped me transition smoothly into a DevOps role. The placement team was very supportive...",
  },
  {
    id: 3,
    name: "Riya Mehta",
    salary: "8 LPA",
    role: "Software Engineer at TCS",
    image: "/images/acoustic-1.jpeg",
    text: "Coursdeck's structured courses and live sessions made learning easy. I gained confidence in cloud technologies and secured a great job...",
  },
  {
    id: 4,
    name: "Rahul Singh",
    salary: "9 LPA",
    role: "Cloud Architect at Accenture",
    image: "/images/acoustic-1.jpeg",
    text: "Thanks to Coursdeck, I was able to build a strong career in cloud computing. The mentors were extremely helpful throughout the course...",
  },
];


export const Home = () => {
  const fullText = "Engineering Excellence in Sound & Silence";
  const [text, setText] = useState("");
  const [typewriterIndex, setTypewriterIndex] = useState(0);
  const [carouselIndex, setCarouselIndex] = useState(0);

  // Typewriter Effect
  useEffect(() => {
    if (typewriterIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[typewriterIndex]);
        setTypewriterIndex(typewriterIndex + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [typewriterIndex]);

  // Carousel Navigation
  const nextSlide = () => {
    setCarouselIndex((prev) =>
      prev + 2 < testimonials.length ? prev + 2 : 0
    );
  };

  const prevSlide = () => {
    setCarouselIndex((prev) =>
      prev - 2 >= 0 ? prev - 2 : testimonials.length - 2
    );
  };


  return (
    <>
      <div className="home-section">
        <div className="home-overlay">
          <h1 className="typewriter">{text}</h1>
          <p className="static-text">
            We bring precision acoustics to life, enhancing every sonic
            experience. From home theaters to studios,
          </p>
          <p className="static-text">
            we create spaces where sound thrives.
          </p>
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

      <div className="testimonial-container">
        <h2 className="home-section-title">Our Clients</h2>

        <div className="carousel">
          <div className="carousel-track">
            {testimonials.slice(carouselIndex, carouselIndex + 2).map((client) => (
              <div key={client.id} className="testimonial-card">
                <div className="curve-bg"></div>

                <div className="testimonial-header">
                  <div className="logo">
                    <img src="/images/acoustic-1.jpeg" alt="Coursdeck Logo" />
                  </div>
                  <div className="testimonial-title">
                    <h3>
                      STUDENT <span className="highlight">TESTIMONIAL</span>
                    </h3>
                    <div className="stars">★★★★★</div>
                  </div>
                </div>

                <div className="testimonial-content">
                  <p>{client.text}</p>
                </div>

                <div className="testimonial-footer">
                  <div className="student-info">
                    <h4 className="student-name">
                      {client.name} <span>({client.salary})</span>
                    </h4>
                    <p className="student-role">{client.role}</p>
                  </div>
                  <div className="student-image">
                    <img src={client.image} alt={client.name} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button className="carousel-btn left" onClick={prevSlide}>
            {'<'}
          </button>

          <button className="carousel-btn right" onClick={nextSlide}>
            {'>'}
          </button>

      </div>

    </>
  );
};