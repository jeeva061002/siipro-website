import { FaHandshake, FaBalanceScale, FaGraduationCap, FaMosque } from 'react-icons/fa';
import heroBanner from '../assets/images/about.png';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="islamic-pattern"></div>
      <div className="container">
        <div className="section-title fade-in">
          <p className="subtitle">About Us</p>
          <h2>About SIIPRO </h2>
        </div>
        <div className="about-split">
          {/* Left Side: Visual Story */}
          <div className="about-split-visual slide-left">
            <div className="about-split-img-wrap">
              <img src={heroBanner} alt="South Indian Muslim Community" />
            </div>
            <div className="about-side-badge">
              <span className="number">TN-12-0086946/2023</span>

              <span className="text">Reg. 2023</span>
            </div>
          </div>

          {/* Right Side: Narrative Content */}
          <div className="about-text slide-right">
            <div className="manifesto-badge">A Movement of Growth</div>
            <h2>தென்னிந்திய இஸ்லாமிய மக்கள் எழுச்சி கழகம்</h2>
            <h3>Empowering Communities through Justice and United Action</h3>
            <p>
              The South Indian Islamic Peoples Rising Organisation (SIIPRO) — known in Tamil as தென்னிந்திய இஸ்லாமிய மக்கள் எழுச்சி கழகம் — is a legally registered political and social organisation founded by DR. SRJ. Sultan Badusha.

              Rooted in Islamic values and democratic principles, SIIPRO works tirelessly to empower Muslim communities across Tamil Nadu and South India through political representation, educational advocacy, and social welfare programs. Operating under Sunnat Wal Jamaath principles, the organisation is headquartered in Madurai, Tamil Nadu.
            </p>

            <div className="about-values" style={{ marginTop: '32px' }}>
              <div className="about-value">
                <div className="about-value-icon"><FaBalanceScale /></div>
                <span>Equity </span>
              </div>
              <div className="about-value">
                <div className="about-value-icon"><FaGraduationCap /></div>
                <span>Education First
                  Scholarships & access</span>
              </div>
              <div className="about-value">
                <div className="about-value-icon"><FaHandshake /></div>
                <span>
                  Political Power
                  Democratic participation</span>
              </div>
              <div className="about-value">
                <div className="about-value-icon"><FaMosque /></div>
                <span>Islamic Values
                  Sunnat Wal Jamaath</span>
              </div>
            </div>

            <div style={{ marginTop: '40px' }}>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontStyle: 'italic' }}>
                "Our legacy is defined by the progress of the people we serve. Together, we rise."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
