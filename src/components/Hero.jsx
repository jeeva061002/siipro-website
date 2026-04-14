import leader1 from '../assets/images/gall3.png';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-split">
          {/* Left Content Side */}
          <div className="hero-content-side slide-left">
            <div className="hero-crescent">☪</div>
            <p className="hero-arabic">بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ</p>
            <h1>
              தென்னிந்திய இஸ்லாமிய மக்கள் எழுச்சி கழகம்
              <span> SOUTH INDIAN ISLAMIC PEOPLES</span>
            </h1>
            <p>
              Building bridges of justice, equality, and progress. Together we stand for a
              brighter future rooted in compassion and community empowerment.
            </p>

            <div className="hero-buttons">
              <a href="#about" className="btn btn-gold">
                Our Manifesto →
              </a>
              <a href="#membership" className="btn btn-outline">
                Join the Cause
              </a>
            </div>

            <div className="hero-stats-mini">
              <div className="hero-stat-item">
                <span className="num">2023</span>
                <span className="txt">Year Founded</span>
              </div>
              <div className="hero-stat-item">
                <span className="num">50K+</span>
                <span className="txt">Members</span>
              </div>
              <div className="hero-stat-item">
                <span className="num">12+</span>
                <span className="txt">Districts</span>
              </div>
            </div>
          </div>

          {/* Right Portrait Side */}
          <div className="hero-portrait-side slide-right">
            <div className="hero-portrait-frame">
              <img src={leader1} alt="Leadership Portrait" className="hero-portrait-img" />
              <div className="portrait-badge">
                <span>OUR LEADER</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mosque silhouette wave at the bottom */}
      <div className="hero-mosque-silhouette">
        <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <defs>
            <linearGradient id="mosqueGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#fafaf5" />
              <stop offset="100%" stopColor="#fafaf5" />
            </linearGradient>
          </defs>
          <path d="M0,120 L0,80 L80,80 L80,60 L90,40 L95,25 L100,40 L110,60 L110,80 L200,80 L200,70 L205,55 L210,70 L210,80 L350,80 L350,50 L355,45 L360,30 L362,15 L364,30 L369,45 L374,50 L374,80 L500,80 L600,80 L600,65 L610,50 L615,35 L620,50 L630,65 L630,80 L750,80 L750,55 L755,50 L760,35 L762,20 L764,35 L769,50 L774,55 L774,80 L900,80 L900,70 L905,60 L910,70 L910,80 L1050,80 L1050,45 L1055,40 L1060,25 L1062,10 L1064,25 L1069,40 L1074,45 L1074,80 L1200,80 L1200,65 L1210,50 L1215,40 L1220,50 L1230,65 L1230,80 L1350,80 L1350,70 L1355,60 L1360,70 L1360,80 L1440,80 L1440,120 Z" fill="url(#mosqueGrad)" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
