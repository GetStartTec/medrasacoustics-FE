import React from "react";

const sections = [
  {
    title: "Acoustics",
    image: "/images/acoustics-photoroom.png",
    content: "Acoustics is the science of sound control in environments. It plays a crucial role in designing spaces that enhance speech clarity, minimize unwanted noise, and improve overall auditory experience. Effective acoustics ensures a balanced sound environment, crucial for auditoriums, theaters, and home studios.",
    imageLeft: true, // Image on the left
  },
  {
    title: "Audio Visuals",
    image: "/images/audio-visuals.png",
    content: "Audio Visuals (AV) involve the integration of sound and visual components to create immersive experiences. This is essential for conference rooms, home theaters, and entertainment venues. High-quality AV systems provide clear communication, superior entertainment, and seamless presentations.",
    imageLeft: false, // Image on the right
  },
  {
    title: "Room Tuning, Calibration & Optimization",
    image: "/images/Tuning-Open.jpg",
    content: "Room tuning and calibration ensure optimal sound quality by adjusting speaker placement, equalization, and room acoustics. It is vital for home theaters, recording studios, and professional sound setups, balancing sound reflections and absorption for a superior audio experience.",
    imageLeft: true, // Image on the left
  },
];

export const Acoustics: React.FC = () => {
  return (
    <>
      <div className="hero-section">
        <img src={`${process.env.PUBLIC_URL}/images/acoustics-banner.jpg`} alt="Contact" className="hero-image" />
        <div className="hero-content">
          <h1>Get in Touch</h1>
          <p>We’d love to hear from you! Reach out with any queries or concerns.</p>
        </div>
      </div>
    <div className="acoustics-container">
      {sections.map((section, index) => (
        <div key={index} className={`acoustic-section ${section.imageLeft ? "left" : "right"}`}>
          <div className="acoustic-image">
            <img src={section.image} alt={section.title} />
          </div>
          <div className="acoustic-text">
            <h2>{section.title}</h2>
            <div className="underline"></div>
            <p>{section.content}</p>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};
