import React from "react";
const teamMembers = [
  { name: "Prasanna ", role: "Acoustics Advisor", image: "/images/prasanna.jpg",about: "Bringing years of expertise, Prasanna provides strategic guidance on acoustic design, ensuring top-tier sound quality in every project." },
  { name: "Danish", role: "Chief Sound Engineer", image: "/images/danish.jpg",about: "Leading the sound engineering division, Danish specializes in advanced acoustic treatments, soundproofing, and system optimization for diverse spaces." },
  { name: "Raju", role: "Senior Sound Engineer", image: "/images/raju.jpg",about: "With extensive experience in audio engineering, Raju focuses on designing and implementing high-performance acoustic solutions."},
  { name: "Deepak", role: "Lead Technician & CAD Designer", image: "/images/deepak.jpg",about: "Deepak combines technical expertise with CAD design, creating precise blueprints and layouts for seamless acoustic execution."},
  { name: "Jafrin Reena", role: "Administrative Manager", image: "/images/jafrin.jpg",about: "Overseeing operations and project coordination, Jafrin ensures smooth execution of all administrative and client management tasks" },
  { name: "Lokesh Kannan", role: "Software Developer", image:"/images/acoustic-1.jpeg",about: "A skilled software developer, specializes in building robust and efficient applications" },
  { name: "Vijayalakshmi", role: "Software Developer", image: "/images/acoustic-1.jpeg",about: "With a passion for software development, focuses on creating intuitive and high-performance applications." },
];

export const Teams: React.FC = () => {

  return (
    <>
    <div className="hero-section">
        <img src={`${process.env.PUBLIC_URL}/images/team-banner.jpg`} alt="Contact" className="hero-image" />
        <div className="team-content">
        <h1>Meet the Minds Behind the Sound</h1>
        <p>Our expert team delivers precision, innovation, and excellence in every sound. Reach out to collaborate with us!</p>
        </div>
      </div>
    <div className="teams-container">
      {/* About Us Section */}
      <div className="about-section">
        <div className="about-image">
          <img src="/images/about-us-banner.jpg" alt="About Us" />
        </div>
        <div className="about-text">
          <h2>ABOUT US</h2>
          <div className="underline"></div>
          <p>
            We are a passionate team dedicated to delivering high-quality services.
            Our goal is to innovate and inspire through technology.
          </p>
        </div>
      </div>

     {/* Our Team Section */}
     <div className="team-section">
        <h2>OUR TEAM</h2>
        <div className="underline"></div>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="flip-card">
              <div className="flip-card-inner">
                {/* Front Side */}
                <div className="flip-card-front">
                  <img src={member.image} alt={member.name} className="team-img" />
                  <h5>{member.name}</h5>
                  <p>{member.role}</p>
                </div>
                
                {/* Back Side */}
                <div className="flip-card-back">
                  <h5>{member.name}</h5>
                  <br/>
                  <p className="flip-role">{member.role}</p>
                  <p className="flip-about">{member.about}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};





