import { FaBalanceScale, FaGraduationCap, FaHandsHelping, FaBriefcase, FaHeart, FaLandmark } from 'react-icons/fa';

const missionItems = [
  {
    icon: <FaBalanceScale />,
    number: '01',
    title: 'Uphold Justice & Equality',
    description: 'Fight for equal rights and opportunities for all citizens regardless of background, faith, or socioeconomic status.',
    accent: '#059669',
  },
  {
    icon: <FaGraduationCap />,
    number: '02',
    title: 'Empower Through Education',
    description: 'Establish world-class educational institutions and scholarship programs to lift communities through knowledge.',
    accent: '#d4a017',
  },
  {
    icon: <FaHandsHelping />,
    number: '03',
    title: 'Strengthen Community Bonds',
    description: 'Foster interfaith dialogue and cooperation to build stronger, more resilient communities united in common purpose.',
    accent: '#10b981',
  },
  {
    icon: <FaBriefcase />,
    number: '04',
    title: 'Economic Empowerment',
    description: 'Create pathways for entrepreneurship, employment, and economic self-sufficiency within marginalized communities.',
    accent: '#047857',
  },
  {
    icon: <FaHeart />,
    number: '05',
    title: 'Advocate for the Vulnerable',
    description: 'Stand as a voice for the voiceless — protecting women, children, elderly, and minorities from injustice.',
    accent: '#34d399',
  },
  {
    icon: <FaLandmark />,
    number: '06',
    title: 'Promote Clean Governance',
    description: 'Champion anti-corruption measures, transparency in public affairs, and accountability at every level.',
    accent: '#065f46',
  },
];

import gallery1 from '../assets/images/gall1.png';

const Mission = () => {
  return (
    <section className="mission-section" id="mission">
      <div className="islamic-pattern"></div>
      <div className="container">
        <div className="section-title fade-in">
          <p className="subtitle">Our Missions</p>
          <h2>Visionary Missions</h2>
        </div>
        <div className="mission-pillars-wrap">
          {/* Left Column: Visual Focus */}
          <div className="mission-visual slide-left">
            <div className="mission-visual-ornament">☪</div>
            <div className="mission-visual-image">
              <img src={gallery1} alt="Community Unity" />
              <div className="mission-visual-content">
                <div className="manifesto-badge" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.3)' }}>Our Core Mission</div>
                <h3>Empowering Every Voice</h3>
                <p>Establishing the foundation for a just, equitable, and progressive society through direct action and community focus.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Pillars List */}
          <div className="mission-pillars-list">
            {missionItems.map((item, index) => (
              <div
                className="mission-pillar-item fade-in"
                key={index}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="mission-pillar-icon" style={{ borderColor: `${item.accent}33` }}>
                  {item.icon}
                </div>
                <div className="mission-pillar-info">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* New Large Bottom CTA */}
        <div className="mission-bottom-cta fade-in">
          <div className="mission-cta-left">
            <h3>Stand With Us for Justice</h3>
            <p>Join over 50,000 members dedicated to building a brighter, more equitable future together.</p>
          </div>
          <a href="#membership" className="btn btn-gold" onClick={(e) => {
            e.preventDefault();
            document.getElementById('membership')?.scrollIntoView({ behavior: 'smooth' });
          }}>
            ✦ Join the Movement
          </a>
        </div>
      </div>
    </section>
  );
};

export default Mission;
