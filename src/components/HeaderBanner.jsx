import heroBanner from '../assets/images/logo.png';

const HeaderBanner = () => {
  return (
    <div className="header-banner">
      <div className="header-banner-content">
        <div className="header-banner-logo">
          <span className="crescent"></span>

        </div>
      </div>
      <img src={heroBanner} alt="UMF Banner" className="header-banner-img" />
      <div className="header-banner-overlay"></div>
    </div>
  );
};

export default HeaderBanner;
