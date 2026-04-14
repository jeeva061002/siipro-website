import { useState, useEffect, useCallback } from 'react';
import HeaderBanner from './components/HeaderBanner';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Vision from './components/Vision';
import Mission from './components/Mission';
import Leadership from './components/Leadership';
import News from './components/News';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Membership from './components/Membership';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [toast, setToast] = useState({ show: false, message: '', type: 'default' });

  // Show toast notification
  const showToast = useCallback((message, type = 'default') => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast({ show: false, message: '', type: 'default' });
    }, 4500);
  }, []);

  // Intersection Observer for scroll animations & active section
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const animElements = document.querySelectorAll('.fade-in, .slide-left, .slide-right');

    // Active section tracking
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
    );

    sections.forEach((section) => sectionObserver.observe(section));

    // Scroll animations
    const animObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { rootMargin: '0px 0px -80px 0px', threshold: 0.1 }
    );

    animElements.forEach((el) => animObserver.observe(el));

    return () => {
      sections.forEach((section) => sectionObserver.unobserve(section));
      animElements.forEach((el) => animObserver.unobserve(el));
    };
  }, []);

  // Scroll-to-top button visibility
  useEffect(() => {
    const scrollTopBtn = document.getElementById('scroll-top-btn');
    const handleScroll = () => {
      if (scrollTopBtn) {
        if (window.scrollY > 600) {
          scrollTopBtn.classList.add('visible');
        } else {
          scrollTopBtn.classList.remove('visible');
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app">
      <HeaderBanner />
      <Navbar activeSection={activeSection} />
      <Hero />
      <About />
      <Vision />
      <Mission />
      <Leadership />
      <News />
      <Gallery />
      <Contact showToast={showToast} />
      <Membership showToast={showToast} />
      <Footer />

      {/* Toast Notification */}
      <div className={`toast ${toast.show ? 'show' : ''} ${toast.type}`}>
        {toast.type === 'celebration' && (
          <>
            <div className="confetti-particle" style={{ left: '10%' }}></div>
            <div className="confetti-particle" style={{ left: '30%' }}></div>
            <div className="confetti-particle" style={{ left: '50%' }}></div>
            <div className="confetti-particle" style={{ left: '70%' }}></div>
            <div className="confetti-particle" style={{ left: '90%' }}></div>
          </>
        )}
        {toast.message}
      </div>
    </div>
  );
}

export default App;
