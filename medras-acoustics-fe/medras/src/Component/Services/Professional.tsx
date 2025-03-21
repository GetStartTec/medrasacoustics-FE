import { useState } from "react";

const faqs = [
  { question: "What services do you offer?", answer: "We offer acoustics, audio-visuals, room tuning, and more." },
  { question: "How can I contact you?", answer: "You can contact us via email or phone." },
  { question: "Do you offer consultation?", answer: "Yes, we provide professional consultation services." },
];

export const Professional = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const [popupContent, setPopupContent] = useState<{ title: string; image: string; description: string } | null>(null);
  const sections = [
    { title: "Music Studios", image: "/images/music-studio.png", description: "Detailed information about Music Studios." },
    { title: "Film Mix Stages", image: "/images/film-mix.png", description: "Detailed information about Film Mix Stages." },
    { title: "Recording Room", image: "/images/song-room.jpg", description: "Detailed information about Recording Rooms." },
    { title: "Commercial Theater", image: "/images/theater-1.jpg", description: "Detailed information about Commercial Theaters." },
    { title: "Cinema", image: "/images/theater-2.jpg", description: "Detailed information about Cinemas." },
    { title: "Commercial", image: "/images/commercial.png", description: "Detailed information about Commercial spaces." }
  ];

  return (
    <>
      <div className="hero-section">
        <img src={`${process.env.PUBLIC_URL}/images/professional-bg.png`} alt="Contact" className="hero-image" />
        <div className="hero-content">
          <h1>Get in Touch</h1>
          <p>We’d love to hear from you! Reach out with any queries or concerns.</p>
        </div>
      </div>
      <div className="professional-container">
        {/* Professional Services Section */}
        <div className="service-section">
          <div className="service-content">
            <h2>Professional Services</h2>
            <div className="underline"></div>
            <p>We provide high-quality professional services for various industries, ensuring top-notch solutions for your needs.</p>
          </div>
          <div className="service-image">
            <img src="/images/professional-service.png" alt="Professional Service" />
          </div>
        </div>
        <div className="we-are-in-container">
          <h2>We Are In</h2>
          <div className="underline"></div>
          <div className="we-are-in-grid">
            {sections.map((section) => (
              <div
                key={section.title}
                className="we-are-in-item"
                onClick={() => setPopupContent(section)}
              >
                <img src={section.image} alt={section.title} />
                <div className="overlay">
                  <h3>{section.title}</h3>
                </div>
              </div>
            ))}
          </div>

          {popupContent && (
            <div className="popup-overlay" onClick={() => setPopupContent(null)}>
              <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                <span className="close-btn" onClick={() => setPopupContent(null)}>&times;</span>
                <div className="popup-inner">
                  <img src={popupContent.image} alt={popupContent.title} className="popup-image" />
                  <div className="popup-text">
                    <h3>{popupContent.title}</h3>
                    <p>{popupContent.description}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
        {/* FAQ Section */}
        <div className="faq-section">
          <h2>FAQ's</h2>
          <div className="accordion">
            {faqs.map((faq, index) => (
              <div key={index} className="accordion-item">
                <button className={`accordion-title ${openIndex === index ? "active" : ""}`} onClick={() => toggleFAQ(index)}>
                  {faq.question}
                  <span>{openIndex === index ? "▲" : "▼"}</span>
                </button>
                {openIndex === index && <div className="accordion-content">{faq.answer}</div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
