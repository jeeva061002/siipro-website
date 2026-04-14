import { useState, useEffect } from 'react';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Navbar = ({ activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setMobileOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 72;
      const top = element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'vision', label: 'Vision' },
    { id: 'mission', label: 'Mission' },
    { id: 'leadership', label: 'Leadership' },
    { id: 'news', label: 'News' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="navbar-inner">
        <a href="#home" className="navbar-logo" onClick={(e) => handleNavClick(e, 'home')}>
          <div className="navbar-logo-icon">☪</div>
          <span>SIIPRO</span>
        </a>

        <div className="navbar-links">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={activeSection === item.id ? 'active' : ''}
              onClick={(e) => handleNavClick(e, item.id)}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="navbar-cta">
          <a
            href="#membership"
            className="btn btn-primary"
            onClick={(e) => handleNavClick(e, 'membership')}
          >
            ✦ Join the Movement
          </a>
        </div>

        <button
          className={`mobile-toggle ${mobileOpen ? 'active' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
          id="mobile-menu-toggle"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className={`mobile-nav ${mobileOpen ? 'open' : ''}`}>
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => handleNavClick(e, item.id)}
          >
            {item.label}
          </a>
        ))}
        <a
          href="#membership"
          className="btn btn-primary"
          onClick={(e) => handleNavClick(e, 'membership')}
        >
          ✦ Join the Movement
        </a>
        <div className="social-bar" style={{ justifyContent: 'center', marginTop: '16px' }}>
          <a href="#" className="facebook" aria-label="Facebook"><FaFacebookF /></a>
          <a href="#" className="twitter" aria-label="Twitter"><FaXTwitter /></a>
          <a href="#" className="instagram" aria-label="Instagram"><FaInstagram /></a>
          <a href="#" className="youtube" aria-label="YouTube"><FaYoutube /></a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
