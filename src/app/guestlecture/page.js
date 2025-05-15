'use client';
// import Image from 'next/image';
// import './guestLecture.css';

const guestSpeakers = [
    {
        name: 'Dr V. Narayanan',
        title: 'Chairman, ISRO',
        topic: 'High-Energy Astronomy Missions',
        image: '/images/dr_v_narayanan.jpeg',
        linkedin: '#',
        website: '#',
    },
    {
        name: 'Ashwin Vasavada',
        title: 'Engineer and Astronaut, NASA',
        topic: 'Propulsion and Future Mars Missions',
        image: '/images/ashwin_vasavada.jpeg',
        linkedin: '#',
        website: '#',
    },
    {
        name: 'Ashwin Vasavada',
        title: 'Engineer and Astronaut, NASA',
        topic: 'Propulsion and Future Mars Missions',
        image: '/images/ashwin_vasavada.jpeg',
        linkedin: '#',
        website: '#',
    },
    {
        name: 'Ashwin Vasavada',
        title: 'Engineer and Astronaut, NASA',
        topic: 'Propulsion and Future Mars Missions',
        image: '/images/ashwin_vasavada.jpeg',
        linkedin: '#',
        website: '#',
    },
    {
        name: 'Ashwin Vasavada',
        title: 'Engineer and Astronaut, NASA',
        topic: 'Propulsion and Future Mars Missions',
        image: '/images/ashwin_vasavada.jpeg',
        linkedin: '#',
        website: '#',
    },
    // Add more speakers here
];

// export default function GuestLecturePage() {
//     return (
//         <div className="guest-page">
//             <section className="guest-hero">
//                 <h1>Meet the Minds of the Cosmos</h1>
//                 <p>Guest Lectures by Space Leaders, Visionaries, and Trailblazers</p>
//                 <div className="guest-countdown">
//                     <p>🚀 Next Launch: March 2, 2025 - 3:00 PM IST</p>
//                 </div>
//             </section>

//             <section className="guest-timeline">
//                 <h2>🚀 Lecture Timeline</h2>
//                 <ul>
//                     {guestSpeakers.map((guest, index) => (
//                         <li key={index}><strong>{guest.time}:</strong> {guest.name} — {guest.topic}</li>
//                     ))}
//                 </ul>
//             </section>

//             <section className="guest-timeline">
//                 <h2>🚀 Guest Lecture Timeline</h2>
//                 {guestSpeakers.map((guest, index) => (
//                     <div key={index} className="guest-timeline-item">
//                         <div className="guest-timeline-item-content">
//                             <h2>{guest.name}</h2>
//                             <h4>{guest.title}</h4>
//                             <p className="guest-topic">{guest.topic}</p>
//                             <p className="guest-time">🕒 {guest.time}</p>
//                             <div className="guest-links">
//                                 <a href={guest.linkedin} target="_blank" rel="noopener noreferrer">
//                                     <i className="fas fa-linkedin" />
//                                 </a>
//                                 <a href={guest.website} target="_blank" rel="noopener noreferrer">
//                                     <i className="fas fa-globe" />
//                                 </a>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </section>


//             <section className="guest-stats">
//                 <h2>📊 Stellar Stats</h2>
//                 <p>✨ Total Speakers: 12 | 🌍 Countries Represented: 5 | 🛰 Organizations: ISRO, NASA, ESA</p>
//             </section>

//             <section className="guest-qa">
//                 <h2>💬 Ask the Experts</h2>
//                 <p>Submit your question for our upcoming guest lecturers. Top-voted questions will be answered live!</p>
//                 <button className="submit-question">Submit a Question</button>
//             </section>
//         </div>
//     );
// }

// app/guest-lectures/page.js
import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './guestlecture.module.css';

const GuestLecturePage = () => {
  const [timeRemaining, setTimeRemaining] = useState({ days: 0, hours: 0, minutes: 0 });
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);

  // Countdown timer setup
  useEffect(() => {
    const targetDate = new Date('2025-06-15T15:00:00+05:30').getTime();
    
    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;
      
      setTimeRemaining({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      });
    };

    const timerInterval = setInterval(updateTimer, 60000);
    updateTimer();
    
    return () => clearInterval(timerInterval);
  }, []);

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h2 className={styles.heroTitle}>
          Cosmic Dialogues
        </h2>
        <div className={styles.launchInfo}>
          <div className={styles.countdown}>
            {Object.entries(timeRemaining).map(([unit, value]) => (
              <div key={unit} className={styles.timeUnit}>
                <span>{value.toString().padStart(2, '0')}</span>
                <small>{unit}</small>
              </div>
            ))}
          </div>
          <div className={styles.stats}>
            <p>✨ <span>12</span> Speakers</p>
            <p>🌍 <span>5</span> Countries</p>
            <p>🛰 <span>ISRO</span> <span>NASA</span> <span>ESA</span></p>
          </div>
        </div>
      </section>

      {/* Speakers Grid */}
      <section className={styles.speakersGrid}>
        {guestSpeakers.map((speaker, index) => (
          <article 
            key={index}
            className={styles.speakerCard}
            onClick={() => setSelectedSpeaker(speaker)}
          >
            <div className={styles.speakerImageWrapper}>
              <Image
                src={speaker.image}
                alt={speaker.name}
                width={200}
                height={200}
                className={styles.speakerImage}
              />
            </div>
            <h3>{speaker.name}</h3>
            <p className={styles.title}>{speaker.title}</p>
            <div className={styles.topicBadge}>{speaker.topic}</div>
          </article>
        ))}
      </section>

      {/* Question Submission */}
      <section className={styles.questionSection}>
        <h2>Submit Your Question</h2>
        <p>Top-voted questions will be answered live during the lecture</p>
        <div className={styles.questionForm}>
          <input type="text" placeholder="Type your question here..." />
          <button className={styles.submitButton}>Launch Question</button>
        </div>
      </section>
    </div>
  );
};

export default GuestLecturePage;
