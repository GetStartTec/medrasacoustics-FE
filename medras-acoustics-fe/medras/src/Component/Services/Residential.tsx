import { useState } from "react";

const faqs = [
    { question: "What residential services do you offer?", answer: "We offer home acoustics, soundproofing, and AV installations." },
    { question: "Do you provide home theater setup?", answer: "Yes, we specialize in custom home theater designs and installations." },
    { question: "Can I get a consultation?", answer: "Absolutely! We provide in-home consultations to assess your needs." },
];

export const Residential = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const [popupContent, setPopupContent] = useState<{ title: string; image: string; description: string } | null>(null);

    const sections = [
        { title: "Home Theater Acoustics", image: "/images/home-theater.png", description: "Detailed information about Home Theater Acoustics." },
        { title: "Home Soundproofing",  image: "/images/home-sound-proof.png", description: "Detailed information about Home Soundproofing." },
        { title: "Soundproof Doors",  image: "/images/home-door.png", description: "Detailed information about Soundproof Doors." },
        { title: "Soundproof Windows", image: "/images/window-sound.png", description: "Detailed information about Soundproof Windows." },
        { title: "Soundproof Walling",  image: "/images/wall-sound.png", description: "Detailed information about Soundproof Walling." },
        { title: "Soundproof Window Partitioning",  image: "/images/window-partioning.png", description: "Detailed information about Soundproof Window Partitioning." },
        { title: "Soundproof Flooring",  image: "/images/floor.png", description: "Detailed information about Soundproof Flooring." },
        { title: "Residence",  image: "/images/residence.png", description: "Detailed information about Residential Soundproofing." },
        { title: "Library",  image: "/images/librery.png", description: "Detailed information about Library Soundproofing." },
        { title: "Home Office Soundproofing",  image: "/images/home-work.png", description: "Detailed information about Home Office Soundproofing." },
        { title: "Nursery Soundproofing",  image: "/images/nursery.png",description: "Detailed information about Nursery Soundproofing." },
        { title: "Gym & Home Workout Room Soundproofing", image: "/images/gym.png", description: "Detailed information about Gym & Home Workout Room Soundproofing." },
        { title: "Garage & Workshop Soundproofing", image: "/images/garage.png", description: "Detailed information about Garage & Workshop Soundproofing." },
        { title: "Basement Soundproofing",  image: "/images/basement.png", description: "Detailed information about Basement Soundproofing." },
        { title: "Apartment Noise Reduction",  image: "/images/home-sound-2.jpg", description: "Detailed information about Apartment Noise Reduction." }
    ];
    

    return (
        <>
          <div className="hero-section">
        <img src={`${process.env.PUBLIC_URL}/images/residential-bg.png`} alt="Contact" className="hero-image" />
        <div className="hero-content">
          <h1>Get in Touch</h1>
          <p>We’d love to hear from you! Reach out with any queries or concerns.</p>
        </div>
      </div>
        <div className="residential-container">
            {/* Residential Services Section */}
            <div className="service-section">
                <div className="service-content">
                    <h2>Residential Services</h2>
                    <div className="underline"></div>
                    <p>We offer top-quality residential acoustic solutions, soundproofing, and home theater installations to enhance your home experience.</p>
                </div>
                <div className="service-image">
                    <img src="/images/residential-service.png" alt="Residential Service" />
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
