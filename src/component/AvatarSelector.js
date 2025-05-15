'use client';

import { useState, useEffect } from 'react';
import { useAuth } from './AuthContext';

const avatars = [
  { id: 'astronaut', icon: 'fas fa-user-astronaut' },
  { id: 'rocket', icon: 'fas fa-rocket' },
  { id: 'satellite', icon: 'fas fa-satellite' },
  { id: 'alien', icon: 'fad fab fa-reddit-alien' },
  { id: 'moon', icon: 'fas fa-moon' },
  { id: 'meteor', icon: 'fas fa-meteor' },
  { id: 'earth', icon: 'fas fa-earth' },
  { id: 'sun', icon: 'fas fa-sun' },
  { id: 'spaceshuttle', icon: 'fas fa-space-shuttle' },
];



const AvatarSelector = ({ onSelect }) => {
  const { updateAvatar } = useAuth();
  const [selected, setSelected] = useState(localStorage.getItem('avatar') || 'fas-user-astronaut');

  useEffect(() => {
    if (onSelect) onSelect(selected);
  }, [selected, onSelect]);

  const handleSelect = (icon) => {
    setSelected(icon);
    updateAvatar(icon);
  };

  return (
    <div className="avatar-selector">
      <h3>Select Your Avatar</h3>
      <div className="avatar-grid">
        {avatars.map(({ id, icon }) => (
          <div
            key={id}
            className={`avatar-option ${selected === icon ? 'selected' : ''}`}
            onClick={() => handleSelect(icon)}
          >
            <i className={`${icon}`}></i>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvatarSelector;
