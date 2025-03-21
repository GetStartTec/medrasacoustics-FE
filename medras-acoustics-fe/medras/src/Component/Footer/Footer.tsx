export const Footer = () => {
  return (
    <footer className="footer">
      {/* Top Section - Logo & Navigation */}
      <div className="footer-top">
        {/* Left - Logo & Name */}
        <div className="footer-left">
          {/* <img
            src={`${process.env.PUBLIC_URL}/image/l_t-nobg.png`}
            alt="Medras Acoustics Logo"
            className="footer-logo"
          /> */}
          <span className="footer-company-name">Medras Acoustics</span>
        </div>

        {/* Center - Navigation Links */}
        <nav aria-label="Footer Navigation">
          <ul className="footer-nav">
            {[
              { path: "/", label: "Home" },
              { path: "/acoustics", label: "Acoustics" },
              { path: "/software", label: "Software" },
              { path: "/team", label: "Team" },
              { path: "/contact-us", label: "Contact Us" },
            ].map(({ path, label }) => (
              <li key={path}>
                <a href={path}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>

        
      </div>

      {/* Social Media Links - Centered on a New Line */}
      <div className="footer-social">
        {[
          { href: "https://facebook.com", icon: "fab fa-facebook-f", label: "Facebook" },
          { href: "mailto:jeromedj@madrasacoustics.com", icon: "fas fa-envelope", label: "Email" },
          { href: "https://instagram.com/madras_acoustics/", icon: "fab fa-instagram", label: "Instagram" },
          { href: "https://wa.me/918248365067", icon: "fab fa-whatsapp", label: "WhatsApp" },
          { href: "tel:+918248365067", icon: "fas fa-phone", label: "Phone" },
          { href: "https://goo.gl/maps/example", icon: "fas fa-map-marker-alt", label: "Location" },
        ].map(({ href, icon, label }) => (
          <a key={href} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
            <i className={icon}></i>
          </a>
        ))}
      </div>

      {/* Copyright */}
      <div className="footer-copyright">
        &copy; {new Date().getFullYear()} Madras Acoustics. All rights reserved.
      </div>
    </footer>
  );
};
