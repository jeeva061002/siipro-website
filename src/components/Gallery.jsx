import { useState } from 'react';
import heroBanner from '../assets/images/logo.png';
import gallery1 from '../assets/images/gall1.png';
import leader1 from '../assets/images/community_work.png';
import leader2 from '../assets/images/icon.png';
import leader3 from '../assets/images/gall0.png';
import leader4 from '../assets/images/gall6.png';

const galleryItems = [
  { image: gallery1, caption: 'DOCTORATE AWARD' },
  { image: heroBanner, caption: 'Official Seal' },
  { image: leader1, caption: 'Community Work' },
  { image: leader2, caption: 'Qaid-e-Millat Muhamed Ismail Sahib' },
  { image: leader3, caption: 'Our Flag' },
  { image: leader4, caption: 'Card' },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="gallery-section" id="gallery">
      <div className="islamic-pattern"></div>
      <div className="container">
        <div className="section-title fade-in">
          <p className="subtitle">Moments</p>
          <h2>Photo Gallery</h2>
          <p>Capturing the milestones, events, and community moments that define our journey together.</p>
        </div>

        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <div
              className="gallery-item fade-in"
              key={index}
              style={{ transitionDelay: `${index * 0.08}s`, cursor: 'pointer' }}
              onClick={() => setSelectedImage(item)}
            >
              <img src={item.image} alt={item.caption} />
              <div className="gallery-item-overlay">
                <p>{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="modal-overlay" onClick={() => setSelectedImage(null)} style={{ background: 'rgba(0,0,0,0.9)' }}>
          <button className="modal-close" onClick={() => setSelectedImage(null)} style={{ background: 'white' }}>✕</button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage.image} alt={selectedImage.caption} className="lightbox-image" />
            <p className="lightbox-caption">{selectedImage.caption}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
