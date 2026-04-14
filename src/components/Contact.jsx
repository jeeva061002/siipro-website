import { useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';

const Contact = ({ showToast }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    showToast('✓ Message sent successfully! We\'ll get back to you soon.', 'celebration');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="islamic-pattern"></div>
      <div className="container">
        <div className="section-title fade-in">
          <p className="subtitle">Get in Touch</p>
          <h2>Contact Us</h2>
          <p>Have a question or want to get involved? We'd love to hear from you.</p>
        </div>

        <div className="contact-grid">
          <div className="contact-info slide-left">
            <h3>Let's Start a Conversation</h3>
            <p>
              Whether you're interested in joining our movement, have policy questions,
              or want to volunteer, our team is here to help.
            </p>

            <div className="contact-detail">
              <div className="contact-detail-icon"><FaMapMarkerAlt /></div>
              <div className="contact-detail-text">
                <h4>Address</h4>
                <p>28, Kumaran Street,<br />Madurai — 625016, Tamil Nadu, India</p>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-detail-icon"><FaPhoneAlt /></div>
              <div className="contact-detail-text">
                <h4>Phone</h4>
                <p>84899 21919 <br />DR. SRJ. Sultan Badusha</p>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-detail-icon"><FaEnvelope /></div>
              <div className="contact-detail-text">
                <h4>Email</h4>
                <p>siipro@unitedmuslimfront.org</p>
              </div>
              {/* </div>

            <div className="contact-detail">
              <div className="contact-detail-icon"><FaClock /></div>
              <div className="contact-detail-text">
                <h4>Office Hours</h4>
                <p>Mon - Sat: 9:00 AM - 6:00 PM</p>
              </div> */}
            </div>
          </div>

          <form className="contact-form slide-right" onSubmit={handleSubmit} id="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="contact-name">Full Name</label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="contact-email">Email Address</label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="contact-subject">Subject</label>
              <input
                type="text"
                id="contact-subject"
                name="subject"
                placeholder="How can we help?"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="Write your message here..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className="form-submit">
              <button type="submit" className="btn btn-primary" id="contact-submit">
                Send Message →
              </button>
            </div>
          </form>
        </div>
      </div>
    </section >
  );
};

export default Contact;
