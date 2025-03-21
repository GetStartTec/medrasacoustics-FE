import React from "react";

const sections = [
  {
    title: "Acoustics",
    image: "/images/acoustics-photoroom.png",
    content: "Architectural acoustics play a vital role in shaping the overall sound quality and how we perceive it. The surrounding environment significantly influences the way sound is experienced, regardless of its source. Thoughtfully designed interior acoustics can elevate a performance by enhancing musical depth, vocal clarity, and instrumental precision. From the very beginning, proper acoustic design planning is crucial — it saves time, money, and effort. Avoid issues like poor sound quality, standing waves, muffled low frequencies, imbalanced sound distribution, distortion, and costly corrections down the line. Effective sound control is equally important for minimizing noise both within and outside the premises. Well-designed soundproofing ensures your space can be used at any time without causing disturbances or being affected by external noise. At Madras Acoustics, we utilize cutting-edge acoustic prediction and auralization software to deliver optimal solutions for even the most complex challenges. By leveraging EASE modeling software, we accurately predict the acoustical response and performance of future project sites. Creating an immersive experience goes beyond sound alone — we believe in blending aesthetics with acoustics to achieve the perfect balance for our clients. For specialized facilities such as high-precision recording studios, we design both sound isolation and interior acoustics to ensure exceptional performance.",
    imageLeft: true, // Image on the left
  },
  {
    title: "Audio Visuals",
    image: "/images/audio-visuals.png",
    content: "Madras Acoustics, we specialize in professional, independent audiovisual system design consulting and optimization services. In today's fast-evolving media landscape, where technical requirements are increasingly complex, integrating various systems into a seamless working solution demands expert engineering. Regardless of the environment, budget, or challenges, Madras Acoustics is your trusted technology partner, committed to designing the optimal system tailored to your unique requirements. With extensive experience blending technology with interior design considerations, we create ideal AV solutions for diverse spaces. We carefully select equipment that matches your specific needs and budget. By maintaining strong connections with leading international manufacturers and distributors, we stay updated on the latest trends and technologies to ensure you receive the best solutions available. Quality cabling is vital for durable installations. We design professional cabling layouts for analog, digital, audio, video, computer, and control signals. Each project is provided with a detailed wiring diagram, including precise termination details for your setup. Our service extends to comprehensive on-site testing and final measurements, ensuring every specification is met — delivering exceptional quality and value for your investment.",
    imageLeft: false, // Image on the right
  },
  {
    title: "Room Tuning, Calibration & Optimization",
    image: "/images/Tuning-Open.jpg",
    content: "Madras Acoustics, we specialize in fine-tuning audio systems to deliver clear, consistent, and immersive sound experiences. By carefully blending the system with the room’s acoustical environment, we ensure optimal performance tailored to the space. Our system optimization service involves an in-depth analysis of how sound behaves across the listening area. Using advanced tools and proven techniques, we assess room acoustics and speaker interactions to maximize system performance. Once acoustic measurements and analysis are complete, we refine system settings with precision to achieve optimal sound clarity and balance. Finally tonal shaping — is where our expertise shines. Through meticulous adjustments and expert listening, we unlock the system's full potential, ensuring the sound feels natural, engaging, and immersive.This is where the magic happens — allowing you to fully enjoy the music, dialogue, or soundtrack without distraction",
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
