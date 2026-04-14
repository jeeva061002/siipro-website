import { FaFacebookF, FaInstagram, FaYoutube, FaArrowUp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 72;
      const top = element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer" id="footer">
      <div className="islamic-pattern"></div>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>SIIPRO <span>Front</span></h3>
            <p>
              United Muslim Front is dedictated to building a society grounded in the principles of
              justice, equality, and compassion. Together, we are shaping a brighter tomorrow.
            </p>
            <div className="social-links" style={{ display: 'flex', gap: '15px' }}>
              <a href="#" className="facebook" style={{ color: 'white', fontSize: '1.2rem' }}><FaFacebookF /></a>
              <a href="#" className="twitter" style={{ color: 'white', fontSize: '1.2rem' }}><FaXTwitter /></a>
              <a href="#" className="instagram" style={{ color: 'white', fontSize: '1.2rem' }}><FaInstagram /></a>
              <a href="#" className="youtube" style={{ color: 'white', fontSize: '1.2rem' }}><FaYoutube /></a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home" onClick={(e) => handleNavClick(e, 'home')}>Home</a></li>
              <li><a href="#about" onClick={(e) => handleNavClick(e, 'about')}>About Us</a></li>
              <li><a href="#vision" onClick={(e) => handleNavClick(e, 'vision')}>Our Vision</a></li>
              <li><a href="#mission" onClick={(e) => handleNavClick(e, 'mission')}>Our Mission</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Resources</h4>
            <ul>
              <li><a href="#news" onClick={(e) => handleNavClick(e, 'news')}>Latest News</a></li>
              <li><a href="#gallery" onClick={(e) => handleNavClick(e, 'gallery')}>Photo Gallery</a></li>
              <li><a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact Us</a></li>
              <li><a href="#membership" onClick={(e) => handleNavClick(e, 'membership')}>Join the Party</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <div className="footer-newsletter-box">
              <h4>Stay Informed</h4>
              <p>Subscribe to our newsletter for the latest updates and community news.</p>
              <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="Your email address" required />
                <button type="submit">Subscribe Now</button>
              </form>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 SIIPRO — South Indian Islamic Peoples Rising Organisation. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Credits</a>
          </div>
        </div>
      </div>

      <button
        className="scroll-top"
        onClick={scrollToTop}
        aria-label="Scroll to top"
        id="scroll-top-btn"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
};

export default Footer;
