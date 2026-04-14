import { FaCalendarAlt, FaArrowRight } from 'react-icons/fa';
import heroBanner from '../assets/images/award.png';
import gallery1 from '../assets/images/organisation.png';
import leader1 from '../assets/images/gall3.png';

const newsItems = [
  {
    category: 'Event',
    date: 'March 2026',
    title: 'SIIPRO Hosts Grand Felicitation Ceremony for Community Leaders',
    image: heroBanner,
  },
  {
    category: 'Organisation',
    date: '2023',
    title: 'Official SIIPRO Membership Cards Launched Across Tamil Nadu',
    image: gallery1,
  },
  {

    category: 'Leadership',
    date: 'MARCH 2026',
    title: 'DR. SRJ. Sultan Badusha Receives International Doctorate in Social Work',
    description: 'SIIPRO Chairman SRJ. Sultan Badusha was awarded a prestigious international Doctorate in Social Work, honouring decades of service to Muslim communities across South India.',
    image: leader1,
  },
];

const News = () => {
  return (
    <section className="news-section" id="news">
      <div className="islamic-pattern"></div>
      <div className="container">
        <div className="section-title fade-in">
          <p className="subtitle">Latest Updates</p>
          <h2>The SIIPRO Journal</h2>
          <p>Voices of progress, community impact, and regional milestones from across South India.</p>
        </div>

        <div className="news-journal-wrap">
          {/* Featured Article */}
          <div className="news-journal-featured slide-left">
            <img src={newsItems[0].image} alt={newsItems[0].title} />
            <div className="news-journal-featured-content">
              <div className="manifesto-badge" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.3)' }}>
                {newsItems[0].category}
              </div>
              <h3>{newsItems[0].title}</h3>
              <p>{newsItems[0].description}</p>
              <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <FaCalendarAlt /> <span>{newsItems[0].date}</span>
              </div>
            </div>
          </div>

          {/* News List */}
          <div className="news-journal-list slide-right">
            {newsItems.slice(1).map((item, index) => (
              <div className="news-journal-item fade-in" key={index}>
                <div className="news-journal-item-img">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="news-journal-item-info">
                  <div style={{ color: 'var(--primary)', fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase', marginBottom: '4px' }}>
                    {item.category}
                  </div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '8px', color: 'var(--gray-900)' }}>
                    {item.title}
                  </h4>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <FaCalendarAlt size={12} /> {item.date}
                  </div>
                </div>
              </div>
            ))}

            <a href="#" className="btn btn-outline" style={{ marginTop: 'auto', width: '100%', justifyContent: 'center' }}>
              View All Journal Entries <FaArrowRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
