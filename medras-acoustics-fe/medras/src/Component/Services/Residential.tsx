import { useState } from "react";

const faqs = [
    { question: "What residential services do you offer?", answer: "We offer home acoustics, soundproofing, and AV installations." },
    { question: "Do you provide home theater setup?", answer: "Yes, we specialize in custom home theater designs and installations." },
    { question: "Can I get a consultation?", answer: "Absolutely! We provide in-home consultations to assess your needs." },
    { question: "Do you offer soundproofing solutions for noisy environments?", answer: "Yes, we provide customized soundproofing for homes, studios, and commercial spaces." },
    { question: "Can you integrate smart home technology with AV systems?", answer: "Yes, we specialize in integrating smart controls with your home entertainment systems." },
];

export const Residential = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const [popupContent, setPopupContent] = useState<{ title: string; image: string; description: string } | null>(null);

    const sections = [
        { title: "Home Theater Acoustics", image: "/images/home-theater.png", description: "Perfect Home Theater isn’t just about a big screen—it’s about immersive sound that makes every movie come alive. Proper acoustics ensure clear dialogue, deep bass, and an immersive surround sound experience. <b> Room Design & Layout </b> – Optimize speaker placement and seating for the best sound distribution. " },
        { title: "Home Soundproofing",  image: "/images/home-sound-proof.png", description: "Enjoy peace and quiet by soundproofing your home! Whether you want to block outside noise or prevent sound from escaping, proper soundproofing ensures a calm and comfortable living space. <b> Wall Insulation  </b> – Use acoustic panels, mass-loaded vinyl, or double drywall for noise reduction" },
        { title: "Soundproof Doors",  image: "/images/home-door.png", description: "A door isn't just an entryway—it can be a major source of sound leakage. Soundproof doors help block noise, ensuring privacy, quiet, and acoustic control in homes, studios, offices, and theaters. <b> Solid Core Construction </b> – Heavier materials like wood or composite reduce sound transmission." },
        { title: "Soundproof Windows", image: "/images/window-sound.png", description: "Block out unwanted noise and create a calm, quiet space with soundproof windows. Whether you live in a busy city or want to enhance home acoustics, proper window soundproofing ensures peace and comfort. <b> Double or Triple Glazing </b>  – Multiple glass layers reduce external noise significantly." },
        { title: "Soundproof Walling",  image: "/images/wall-sound.png", description: "Transform your space into a quiet sanctuary with soundproof walling! Whether for homes, offices, studios, or theaters, the right wall treatments can block noise, reduce echoes, and enhance privacy. <b> Acoustic Panels </b> – Absorb sound waves to minimize echoes and improve room acoustics." },
        { title: "Soundproof Window Partitioning",  image: "/images/window-partioning.png", description: "Create quiet, private spaces without sacrificing natural light! Soundproof window partitioning helps reduce noise transmission while maintaining an open and modern aesthetic in offices, studios, and homes. <b>  Double-Glazed Glass </b> – Two layers of glass with an air gap for enhanced sound insulation. " },
        { title: "Soundproof Flooring",  image: "/images/floor.png", description: "Reduce impact noise and create a quieter, more comfortable space with soundproof flooring. Whether in homes, offices, or studios, the right flooring materials and techniques help minimize footstep noise, vibrations, and airborne sound. <b> Acoustic Underlays </b>  – Foam, rubber, or cork layers absorb impact noise and vibrations. " },
        { title: "Residence",  image: "/images/residence.png", description: "Create a peaceful and noise-free home with effective acoustic solutions! Whether you want to block outside noise or enhance your home's sound quality, proper soundproofing ensures comfort, privacy, and tranquility. <b>Soundproof Walls </b>  – Use acoustic panels, insulation, and MLV to reduce noise transfer. " },
        { title: "Library",  image: "/images/librery.png", description: "Library should be a quiet sanctuary for reading, studying, and concentration. Proper acoustics and soundproofing help minimize distractions and create a peaceful learning environment. <b> Acoustic Wall Panels </b>  – Absorb ambient noise and reduce sound reflections. " },
        { title: "Home Office Soundproofing",  image: "/images/home-work.png", description: "Boost productivity and focus by creating a quiet, distraction-free workspace at home! Proper soundproofing minimizes outside noise, echoes, and disturbances for a more professional and comfortable environment. <b> Soundproof Walls </b> – Use acoustic panels, insulation, or MLV to block unwanted noise." },
        { title: "Nursery Soundproofing",  image: "/images/nursery.png",description: "Ensure a calm and restful environment for your little one with proper nursery soundproofing. Minimize outside noise, reduce echoes, and create a peaceful space for sleep and play <b> Soundproof Walls </b> – Use acoustic panels, insulation, or MLV to block outside noise." },
        { title: "Gym & Home Workout Room Soundproofing", image: "/images/gym.png", description: "Keep the energy high and the noise low with proper soundproofing for your gym or home workout space. Reduce impact noise, prevent sound leakage, and create a focused training environment without disturbing others. <b> Acoustic Rubber Flooring </b> - Absorbs impact noise from weights and movement. " },
        { title: "Garage & Workshop Soundproofing", image: "/images/garage.png", description: "Turn your garage or workshop into a noise-controlled space where you can work freely without disturbing others. Effective soundproofing minimizes power tool noise, echoes, and vibrations, creating a more comfortable and focused environment. <b> Soundproof Walls </b>  – Use acoustic panels, MLV, or insulation to reduce sound transmission." },
        { title: "Basement Soundproofing",  image: "/images/basement.png", description: "Transform your basement into a quiet retreat by blocking out unwanted noise from the rest of the house or preventing sound from escaping. Whether it's a home theater, music studio, gym, or office, proper soundproofing ensures privacy and comfort. <b> Noise-Blocking Doors & Windows </b> – Install solid-core doors and weather stripping for better isolation." },
        { title: "Apartment Noise Reduction",  image: "/images/home-sound-2.jpg", description: "Living in an apartment comes with unavoidable noise, but the right soundproofing solutions can help create a quieter, more peaceful home by reducing outside disturbances and preventing sound from leaking. <b> Soft Flooring  <b/> – Carpets, rugs, or cork underlayment absorb impact noise from footsteps." }
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
                    <p>In today’s high-definition world, home entertainment systems have evolved significantly. At Madras Acoustics, we specialize in creating customized spaces that cater to each client's unique preferences and requirements. Whether it's a home cinema, lounge area, or party room, we provide professional acoustic and AV design solutions to meet even the most demanding needs.<br/><br/>
                        Our designed spaces are not only engineered to deliver exceptional sound quality, but they are also aesthetically crafted to complement your interiors. Leveraging decades of global expertise, we excel in combining acoustic performance, sound insulation, ergonomics, and interior design to achieve outstanding results.<br/><br/>
                        Our goal is to provide every client with a structured, efficient, and timely service to ensure smooth project execution. With our expert team of acousticians, audio engineers, interior designers, and construction specialists, we turn your home entertainment vision into reality..</p>
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
