import { useState } from 'react';
import leader2 from '../assets/images/icon.png';
import leader1 from '../assets/images/gall3.png';


const leaders = [
  {
    name: 'Qaid-e-Millat Muhamed Ismail Sahib',
    role: 'InspirationalIcon',
    image: leader2,
    bio: "The legendary pioneer of South Indian Muslim political rights whose legacy inspires SIIPRO's founding principles",

  },
  {
    name: 'DR. SRJ.Sultan Badusha',
    role: 'Founder & Chairman',
    image: leader1,
    bio: 'A visionary leader, social activist and international Doctorate holder in Social Work. Dr. Sultan Badusha II founded SIIPRO to give South Indian Muslims a strong, united democratic voice. Based at 28, Kumaran Street, Madurai - 62501',
    philosophy: 'Real leadership starts by listening to the quietest voices in the room.',
  },

];

const Leadership = () => {
  const [selectedLeader, setSelectedLeader] = useState(null);

  return (
    <section className="leadership-section" id="leadership">
      <div className="islamic-pattern"></div>
      <div className="container">
        <div className="section-title fade-in">
          <p className="subtitle">Our Leaders</p>
          <p>Meet the dedicated leaders who guide our movement with wisdom, integrity, and unwavering commitment to our cause.</p>
        </div>

        <div className="leadership-grid">
          {leaders.map((leader, index) => (
            <div className="leader-card fade-in" key={index} style={{ transitionDelay: `${index * 0.12}s` }}>
              <div className="leader-card-image">
                <img src={leader.image} alt={leader.name} />
                <div className="leader-card-overlay"></div>
              </div>
              <div className="leader-card-info" style={{ paddingBottom: '0' }}>
                <h3>{leader.name}</h3>
                <p>{leader.role}</p>
                <button
                  className="btn btn-outline"
                  style={{ marginTop: '16px', width: '100%', fontSize: '0.8rem', padding: '10px' }}
                  onClick={() => setSelectedLeader(leader)}
                >
                  Read Bio
                </button>
              </div>
              <div className="leader-card-socials">
                {/* <a href="#" aria-label={`${leader.name} Facebook`}><FaFacebookF /></a>
                <a href="#" aria-label={`${leader.name} Twitter`}><FaXTwitter /></a>
                <a href="#" aria-label={`${leader.name} Instagram`}><FaInstagram /></a> */}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Leader Bio Modal */}
      {selectedLeader && (
        <div className="modal-overlay" onClick={() => setSelectedLeader(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedLeader(null)}>✕</button>
            <div className="leader-modal-grid">
              <div className="leader-modal-image">
                <img src={selectedLeader.image} alt={selectedLeader.name} />
              </div>
              <div className="leader-modal-info">
                <h2>{selectedLeader.name}</h2>
                <span className="role">{selectedLeader.role}</span>
                <div className="leader-modal-bio">
                  <p>{selectedLeader.bio}</p>
                  <blockquote style={{
                    marginTop: '24px',
                    paddingLeft: '20px',
                    borderLeft: '4px solid var(--accent)',
                    fontStyle: 'italic',
                    color: 'var(--gray-900)'
                  }}>
                    "{selectedLeader.philosophy}"
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Leadership;
