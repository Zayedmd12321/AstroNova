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

const coordinates = {
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
        { x: 150, y: 350 },
        { x: 300, y: 250 },
        { x: 450, y: 400 },
        { x: 600, y: 280 },
        { x: 720, y: 360 },
        { x: 800, y: 180 },
        { x: 950, y: 300 },
        { x: 1050, y: 200 },
        { x: 1100, y: 420 },
        { x: 900, y: 500 },
      ],
      
      
    
      
      
      
                 
  };

  export { coordinates, scheduleData };