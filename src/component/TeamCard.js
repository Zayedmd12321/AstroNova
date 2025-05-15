import React from 'react';
import './TeamCard.css';

const TeamCard = ({ name, title, image, socials }) => {
  const getIconClass = (url) => {
    if (url.includes('facebook')) return 'fab fa-facebook';
    if (url.includes('mailto')) return 'fas fa-envelope';
    if (url.includes('linkedin')) return 'fab fa-linkedin';
    return 'fas fa-user';
  };

  return (
    <div className="hologram-card-box">
      <div className="hologram-card">

        <div className="card-content">
          <img
            src={`https://${image}`}
            alt={name}
            className="profile-img"
          />
          <h3 className="name">{name}</h3>
          <p className="title">{title}</p>
          <div className="social-icons">
            {socials.map((url, index) => (
              <a href={url} target="_blank" rel="noopener noreferrer" key={index}>
                <i className={getIconClass(url)}></i>
              </a>
            ))}
          </div>
          <div className="holo-beam"></div>
          <div className="particles"></div>
        </div>
      </div>

      <div className="projector-stack">
        <div className="ring ring1"></div>
        <div className="ring ring2"></div>
        <div className="ring ring3"></div>
      </div>
    </div>
  );
};

export default TeamCard;
