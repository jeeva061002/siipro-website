import { FaLightbulb, FaUsers, FaHeartbeat, FaSchool, FaGlobeAsia, FaShieldAlt, FaArrowRight } from 'react-icons/fa';

const visionItems = [
  {
    icon: <FaLightbulb />,
    title: 'Enlightened Governance',
    description: 'Promoting transparent, accountable leadership that serves the people with honesty and integrity, rooted in ethical principles.',
    color: '#059669',
    gradient: 'linear-gradient(135deg, #059669, #047857)',
  },
  {
    icon: <FaUsers />,
    title: 'United Community',
    description: 'Unite South Indian Muslims across all regions and backgrounds under one strong democratic platform that speaks with a collective voice.',
    color: '#d4a017',
    gradient: 'linear-gradient(135deg, #d4a017, #b8860b)',
  },
  {
    icon: <FaHeartbeat />,
    title: 'Healthcare for All',
    description: 'Ensuring universal access to quality healthcare services, with special focus on underserved communities and preventive care.',
    color: '#10b981',
    gradient: 'linear-gradient(135deg, #10b981, #059669)',
  },
  {
    icon: <FaSchool />,
    title: 'Education Revolution',
    description: 'Transforming education through modern infrastructure, technology integration, and quality learning accessible to every child.',
    color: '#047857',
    gradient: 'linear-gradient(135deg, #047857, #064e3b)',
  },
  {
    icon: <FaGlobeAsia />,
    title: 'Sustainable Development',
    description: 'Championing eco-friendly policies and green initiatives that balance economic growth with environmental preservation.',
    color: '#34d399',
    gradient: 'linear-gradient(135deg, #34d399, #10b981)',
  },
  {
    icon: <FaShieldAlt />,
    title: 'Rights & Security',
    description: 'Protecting fundamental rights of all citizens while ensuring safety and security through just and fair governance.',
    color: '#065f46',
    gradient: 'linear-gradient(135deg, #065f46, #064e3b)',
  },
];

const Vision = () => {
  return (
    <section className="vision-section" id="vision">
      <div className="islamic-pattern"></div>
      <div className="container">
        <div className="section-title fade-in">
          <p className="subtitle">Our Visions</p>
          <h2>Visionary </h2>
        </div>
        <div className="vision-manifesto">
          <div className="manifesto-card fade-in">
            <div className="manifesto-badge">Our Core Promise</div>
            <h3>
              A Future Where <span>Justice</span> and <span>Compassion</span> Lead the Way
            </h3>
            <p>
              We envision a society built on the pillars of faith, equity, and progress — where
              every citizen thrives, every community prospers, and every voice shapes our collective
              destiny. Our commitment is to the people, governed by ethics and driven by impact.
            </p>

            <div className="manifesto-footer">
              <div className="manifesto-point">
                <div className="manifesto-point-icon"><FaShieldAlt /></div>
                <span>Unshakable Integrity</span>
              </div>
              <div className="manifesto-point">
                <div className="manifesto-point-icon"><FaUsers /></div>
                <span>Absolute Equality</span>
              </div>
              <div className="manifesto-point">
                <div className="manifesto-point-icon"><FaGlobeAsia /></div>
                <span>Progressive Growth</span>
              </div>
            </div>
          </div>

          <div className="vision-secondary-grid">
            {visionItems.map((item, index) => (
              <div
                className="vision-simple-card fade-in"
                key={index}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="vision-simple-card-icon">{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* New Large Bottom CTA */}
        <div className="mission-bottom-cta fade-in" style={{ marginTop: '60px' }}>
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

export default Vision;
