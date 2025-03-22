import React from "react";

const softwareSections = [
  {
    title: "AFMG",
    image: "/images/afmg.png",
    content: "EASE 5 isn’t just a tool—it’s the global standard for transforming spaces with precision acoustics. <b>Powered by Innovation </b> With support from 140+ leading loudspeaker manufacturers, EASE 5 ensures seamless sound integration across industries. <b>Adaptive & Customizable </b> Fine-tune acoustics effortlessly with a versatile material library, tailored manually or enhanced through SoundFlow. From concert halls to boardrooms, EASE 5 delivers unparalleled modeling, simulation, and auralization—because sound should be experienced, not just heard",
    imageLeft: true,
  },
  {
    title: "SOUND FLOW",
    image: "/images/sound-flow.jfif",
    content: "SoundFlow is a powerful simulation tool designed to analyze and optimize sound behavior in multi-layer structures. <b> Advanced Sound Control </b> Calculate absorption, reflection, and transmission with unmatched accuracy. <b> Versatile Structural Modeling </b> Effortlessly design walls, floors, and ceilings by customizing layer materials and thickness to meet your exact needs. <b> Seamless with EASE or Standalone Power </b> While the perfect companion for EASE software, SoundFlow also delivers exceptional results as an independent solution.",
    imageLeft: false,
  },
  {
    title: "REFLEX",
    image: "/images/acoustic-1.jpeg",
    content: "Reflex is a cutting-edge 2D acoustics simulation tool designed to model how sound waves reflect, diffuse, and scatter across complex geometries. <b> Precision Sound Modeling </b> Simulate sound interactions with custom-defined structures to achieve optimal acoustic performance. <b> Tailored for Any Space </b> Analyze and refine reflection and diffusion patterns for walls, ceilings, and architectural elements. <b> Seamless with EASE or Standalone Excellence </b> Designed to work flawlessly with EASE software yet powerful enough to deliver results on its own.",
    imageLeft: true,
  },
  {
    title: "INSUL",
    image: "/images/acoustic-1.jpeg",
    content: "INSUL is a powerful acoustic prediction tool designed to evaluate and enhance sound isolation across various structures. <b> Comprehensive Noise Control </b> Accurately predict transmission loss, impact sound, and rain noise for walls, floors, roofs, ceilings, and windows. <b> Advanced Acoustic Insights </b> Assess key performance metrics like Sound Transmission Class (STC/Rw), Impact Insulation Class (IIC), and LnTw ratings with ease. <b>  Optimize Every Structure </b> From residential buildings to industrial projects, INSUL helps create quieter, more acoustically efficient spaces.",
    imageLeft: false,
  },
  {
    title: "SYSTUNE",
    image: "/images/acoustic-1.jpeg",
    content: "SysTune is an advanced audio measurement software designed to capture and process full-length impulse responses in real time with exceptional accuracy. <b> Unmatched Measurement Quality </b> Delivering precise, high-resolution data for professional audio analysis. <b> Designed for Efficiency </b> Packed with unique features to streamline workflows, making a technician’s job faster and easier. <b> Optimize Sound Like Never Before </b> From live events to studio setups, SysTune ensures accurate, real-time acoustic assessment for flawless audio performance.",
    imageLeft: true,
  },
];

export const Software: React.FC = () => {
  return (
    <>

      <div className="hero-section">
        <img src={`${process.env.PUBLIC_URL}/images/software-banner.jpg`} alt="Contact" className="hero-image" />
        <div className="software-content">
          <h1>Powering Sound with Precision</h1>
          <p>We use cutting-edge software to design, analyze, and perfect acoustics, ensuring the highest quality in every project.</p>

        </div>
      </div>
      <div className="software-container">

        {softwareSections.map((section, index) => (
          <div key={index} className={`software-section ${section.imageLeft ? "left" : "right"}`}>
            <div className="software-image">
              <img src={section.image} alt={section.title} />
            </div>
            <div className="software-text">
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

