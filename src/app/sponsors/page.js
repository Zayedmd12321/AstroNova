"use client";
import React, { useState } from "react";
import SponsorTierNav from "../../component/SponsorTierNav";
import "./sponsors.css";
import styles from '../page.module.css'

const sponsorTiers = [
  { name: "Quasar", icon: "🌠", description: "Title Sponsor: Illuminating the cosmos" },
  { name: "Galaxy", icon: "🌌", description: "Major Sponsor: Expanding our universe" },
  { name: "Supernova", icon: "💫", description: "Event Sponsor: Igniting young minds" },
  { name: "Nebula", icon: "☁️", description: "Associate Sponsor: Seeding discovery" },
];

const sponsors = [
  { name: "CosmicTech", logo: "https://ebaoxford.co.uk/e-commerce-expo/images/logo_company/615/cosmic-technologies-pvt-ltd.jpg", tier: "Quasar", website: "https://cosmictech.com" },
  { name: "Stellar Innovations", logo: "/sponsors/stellar.png", tier: "Galaxy", website: "https://stellarinnov.com" },
  { name: "Nebula Labs", logo: "/sponsors/nebula.png", tier: "Supernova", website: "https://nebulalabs.com" },
  { name: "Astro Associates", logo: "/sponsors/astro.png", tier: "Nebula", website: "https://astroassociates.com" },
];

const testimonials = [
  { name: "CosmicTech", quote: "Supporting NSSC means investing in the future of cosmic exploration and innovation." },
  { name: "Stellar Innovations", quote: "We are proud to be part of a journey that inspires the next generation of space pioneers." },
];

export default function Sponsors() {
  const [selectedTier, setSelectedTier] = useState(sponsorTiers[0].name);

  const filteredSponsors = sponsors.filter(sponsor => sponsor.tier === selectedTier);

  return (
    <div className="sponsors-page">
      {/* Hero Section */}
      <section className="sponsor-hero">
        <h2>Our Cosmic Collaborators</h2>
        <p>Empowering the next generation to unravel the universe’s greatest mysteries.</p>
      </section>

      {/* About Section */}
      <section className="sponsor-about">
        <h2>Fueling Discovery Beyond the Known</h2>
        <p>Our sponsors are the guiding stars on our journey to explore the unknown. Their support enables us to push boundaries, inspire innovation, and empower young minds to seek answers among the stars.</p>
      </section>

      {/* Sponsor Tier Navigation */}
      <SponsorTierNav tiers={sponsorTiers} selectedTier={selectedTier} onSelect={setSelectedTier} />

      {/* Sponsor Tiers Description */}
      <section className="sponsor-tiers-description">
        {sponsorTiers.map(tier => (
          tier.name === selectedTier && (
            <div key={tier.name} className="tier-description">
              <h3>{tier.icon} {tier.name}</h3>
              <p>{tier.description}</p>
            </div>
          )
        ))}
      </section>

      {/* Sponsor Logos for Selected Tier */}
      <section className="sponsor-logos">
        <h2>{selectedTier} Sponsors</h2>
        <div className="logo-grid">
          {filteredSponsors.map(sponsor => (
            <a href={sponsor.website} key={sponsor.name} className={`logo-orb ${sponsor.tier.toLowerCase()}`} target="_blank" rel="noopener noreferrer" title={`Thank you, ${sponsor.name}, for supporting cosmic exploration!`}>
              <img src={sponsor.logo} alt={sponsor.name} />
            </a>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="sponsor-testimonials">
        <h2>Voices from the Cosmos</h2>
        <div className="testimonial-cards">
          {testimonials.map(t => (
            <div className="testimonial-card" key={t.name}>
              <p>“{t.quote}”</p>
              <span>- {t.name}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
