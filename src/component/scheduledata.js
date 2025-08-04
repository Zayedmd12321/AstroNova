const scheduleData = {
  day0: [
    {
      title: 'Opening Ceremony',
      venue: 'Bhatnagar Auditorium',
      time: '6:30PM',
      link: '#',
    },
    {
      title: 'Stargazing Session',
      venue: 'Tata Steel Sports Complex',
      time: '8PM',
      link: '#',
    },
  ],
  day1: [
    { title: 'Case Study', venue: 'Maitrayee Auditorium', time: '9AM', link: '#' },
    { title: 'Lift Off', venue: 'MG Ground', time: '10AM', link: '#' },
    { title: 'Eggstravaganza', venue: 'Gymkhana', time: '10AM', link: '#' },
    { title: 'Hoverpod', venue: 'Vikramshila Arena', time: '11AM', link: '#' },
    { title: 'Pitch The Cosmos', venue: 'KCSTC', time: '1PM', link: '#' },
    { title: 'IUCAA Workshop', venue: 'Vikramshila V4', time: '1PM', link: '#' },
    { title: 'Space Quiz Prelims', venue: 'Maitrayee Auditorium', time: '2PM', link: '#' },
    { title: 'Cosmonath', venue: 'Maitrayee Auditorium', time: '4PM', link: '#' },
    { title: 'Guest Lecture', venue: 'Vikramshila V4', time: '4PM', link: '#' },
    { title: 'Talk Show', venue: 'Vikramshila V3', time: '7PM', link: '#' },
  ],
  day2: [
    { title: 'Paper Presentation', venue: 'KCSTC', time: '9AM', link: '#' },
    { title: 'Astrobyte', venue: 'Maitrayee Auditorium', time: '9AM', link: '#' },
    { title: 'Ashish Mahabal', venue: 'Bhatnagar Auditorium', time: '9:30AM', link: '#' },
    { title: 'Lift Off', venue: 'MG Ground', time: '10AM', link: '#' },
    { title: 'Maze Runner', venue: 'Vikramshila Arena', time: '11AM', link: '#' },
    { title: 'Debdatta Mishra', venue: 'Vikramshila V4', time: '11:30AM', link: '#' },
    { title: 'Data Analytics', venue: 'Maitrayee Auditorium', time: '11:30AM', link: '#' },
    { title: 'Space Quiz', venue: 'Bhatnagar Auditorium', time: '12PM', link: '#' },
    { title: 'Dr. P SreeKumar', venue: 'Vikramshila V4', time: '3PM', link: '#' },
    { title: 'Closing Ceremony', venue: 'Vikramshila V2', time: '7PM', link: '#' },
  ],
};

const coordinate = {
  day0: [
    { x: 200, y: 200 },
    { x: 1000, y: 500 },
  ]
  ,
  day1: [
    { x: 100, y: 200 },  // shoulder
    { x: 300, y: 100 },  // shoulder
    { x: 400, y: 250 },  // belt left
    { x: 550, y: 300 },  // belt middle
    { x: 700, y: 250 },  // belt right
    { x: 850, y: 150 },  // shoulder
    { x: 950, y: 300 },  // leg
    { x: 800, y: 500 },  // foot
    { x: 600, y: 480 },  // knee
    { x: 400, y: 500 },  // foot
  ],
  day2: [
    { x: 80, y: 200 },
    { x: 230, y: 150 },
    { x: 350, y: 200 },
    { x: 470, y: 250 },
    { x: 590, y: 300 },
    { x: 620, y: 375 },
    { x: 650, y: 450 },
    { x: 930, y: 440 },
    { x: 960, y: 250 },
    { x: 830, y: 180 },
  ],

};

const coordinatesMobile = {
  day0: [
    { x: 508, y: 774 },
    { x: 843, y: -163 },
  ],
  day1: [
    { x: 468, y: 884 },
    { x: 316, y: 624 },
    { x: 521, y: 492 },
    { x: 610, y: 300 },
    { x: 521, y: 108 },
    { x: 316, y: -84 },
    { x: 681, y: -206 },
    { x: 900, y: 27 },
    { x: 871, y: 278 },
    { x: 900, y: 529 },
  ],
  day2: [
    { x: 508, y: 978 },
    { x: 423, y: 766 },
    { x: 508, y: 554 },
    { x: 593, y: 342 },
    { x: 678, y: 130 },
    { x: 934, y: 22 },
    { x: 922, y: -133.5 },
    { x: 910, y: -289 },
    { x: 593, y: -343 },
    { x: 427, y: -17 },
  ],
};



const constellationInfo = {
  day0: {
    name: "Lyra",
    description: "Lyra is a small constellation representing the lyre, a musical instrument. It’s associated with creativity and harmony—apt for our opening day.",
    image: "/images/lyra.png",
    link: "https://en.wikipedia.org/wiki/Lyra",
  },
  day1: {
    name: "Orion",
    description: "Orion, the hunter, is one of the brightest constellations. Its belt of three stars symbolizes balance and pursuit—perfect for Day 1's rhythm.",
    image: "/images/orion.jpg",
    link: "https://en.wikipedia.org/wiki/Orion_(constellation)",
  },
  day2: {
    name: "Pegasus",
    description: "Pegasus, the winged horse, represents imagination and exploration. Our Day 2 star path gallops toward a stellar conclusion.",
    image: "/images/pegasus.png",
    link: "https://en.wikipedia.org/wiki/Pegasus_(constellation)",
  },
};

export { coordinate, coordinatesMobile, scheduleData, constellationInfo };
