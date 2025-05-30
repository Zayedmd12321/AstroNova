import React from 'react';
import styles from "../app/page.module.css"

const SponsorTierNav = ({ tiers, onSelect, selectedTier }) => {
  return (
    <nav className="sponsor-tier-nav">
      <div className="tier-nav-btn-group">
        {tiers.map((tier) => (
          <button
            key={tier.name}
            className={styles['hero-btn']}
            onClick={() => onSelect(tier.name)}
            type="button"
            aria-pressed={selectedTier === tier.name}
          >
            <span className="tier-icon">{tier.icon}</span>
            {tier.name}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default SponsorTierNav;
