'use client';

import { useState } from 'react';
import './schedule.css';
import { coordinates, scheduleData } from '../../component/scheduledata';

const Schedule = () => {
    const [activeDay, setActiveDay] = useState('day1');
    const [zoomedStar, setZoomedStar] = useState(null);
    const [zoomOrigin, setZoomOrigin] = useState({ x: 0, y: 0 });
    const [showInstruction, setShowInstruction] = useState(true);

    const handleStarClick = (event, index, x, y) => {
        setShowInstruction(false);
        const svg = document.querySelector('.constellation');
        const rect = svg.getBoundingClientRect();
        const screenX = rect.left + x * (rect.width / 1200);
        const screenY = rect.top + y * (rect.height / 700);

        setZoomOrigin({ x: screenX, y: screenY });
        setZoomedStar(event);
    };

    return (
        <div className="schedule-container">
            <img src='/images/telescope.png' alt="Telescope" className="telescope-img" />
            {showInstruction && <p className="star-instruction">Click a star to explore</p>}
            <svg className="constellation" viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid meet">
                {scheduleData[activeDay].map((event, index) => {
                    const { x, y } = coordinates[activeDay][index];
                    return (
                        <g key={index} onClick={() => handleStarClick(event, index, x, y)}>
                            <rect
                                x={x - 20}
                                y={y - 30}
                                width={100}
                                height={40}
                                fill="transparent"
                                className='star-rect'
                            />
                            <circle
                                cx={x}
                                cy={y}
                                r={8 + (index % 5)}
                                className="star"
                                style={{ animationDuration: `${1.5 + (index % 4)}s` }}

                            />
                            <text x={x + 15} y={y - 10} className="star-label">{event.title}</text>
                            <text x={x - 15} y={y + 20} className="star-label" style={{textAnchor: "start"}}>{event.time}</text>
                            {index > 0 && (
                                <line
                                    x1={coordinates[activeDay][index - 1].x}
                                    y1={coordinates[activeDay][index - 1].y}
                                    x2={x}
                                    y2={y}
                                    className="const-line"
                                />
                            )}
                        </g>
                    );
                })}
            </svg>

            {zoomedStar && (
                <div
                    className="telescope-zoom-overlay"
                    style={{
                        '--origin-x': `${zoomOrigin.x}px`,
                        '--origin-y': `${zoomOrigin.y}px`,
                    }}
                    onClick={() => setZoomedStar(null)}
                >
                    <div className="lens-image-wrapper">
                        <img src='/images/lens.png' alt="Lens" className="lens-image" />
                        <div className="scope">
                            <div className="scope-star-content">
                                <h2>{zoomedStar.title}</h2>
                                <p>{zoomedStar.venue}</p>
                                <p>{zoomedStar.time}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className="day-buttons">
                {Object.keys(scheduleData).map((day) => (
                    <button key={day} onClick={() => setActiveDay(day)} className={day === activeDay ? 'active' : ''}>
                        {day.toUpperCase()}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Schedule;