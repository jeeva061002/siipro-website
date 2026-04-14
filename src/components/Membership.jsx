import { useState } from 'react';

const Membership = ({ showToast }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    occupation: '',
    district: '',
    reason: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    showToast('🎉 Welcome to the movement! Your membership application has been submitted.', 'celebration');
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      address: '',
      occupation: '',
      district: '',
      reason: '',
    });
  };

  return (
    <section className="membership-section" id="membership">
      <div className="islamic-pattern" style={{ opacity: 0.04 }}></div>
      <div className="container">
        <div className="section-title fade-in">
          <p className="subtitle">Join Us</p>
          <h2>Become a Member</h2>
          <p>Stand with us in the pursuit of justice and equality. Your voice matters in building a better tomorrow.</p>
        </div>

        <div className="membership-form-wrapper fade-in">
          <form className="membership-form" onSubmit={handleSubmit} id="membership-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="member-name">Full Name *</label>
                <input
                  type="text"
                  id="member-name"
                  name="fullName"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="member-email">Email Address *</label>
                <input
                  type="email"
                  id="member-email"
                  name="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="member-phone">Phone Number *</label>
                <input
                  type="tel"
                  id="member-phone"
                  name="phone"
                  placeholder="+91 XXXXX XXXXX"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="member-occupation">Occupation</label>
                <input
                  type="text"
                  id="member-occupation"
                  name="occupation"
                  placeholder="Your occupation"
                  value={formData.occupation}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="member-address">Address *</label>
              <input
                type="text"
                id="member-address"
                name="address"
                placeholder="Your full address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="member-district">District</label>
              <input
                type="text"
                id="member-district"
                name="district"
                placeholder="Your district"
                value={formData.district}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="member-reason">Why do you want to join? (Optional)</label>
              <textarea
                id="member-reason"
                name="reason"
                placeholder="Tell us why you'd like to be part of the movement..."
                value={formData.reason}
                onChange={handleChange}
                rows="4"
              ></textarea>
            </div>

            <div className="form-submit">
              <button type="submit" className="btn btn-gold" id="membership-submit">
                ✦ Submit Application
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Membership;
