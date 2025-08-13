'use client';

import { useState, useEffect, useLayoutEffect } from 'react';
import './schedule.css';
import { coordinate, coordinatesMobile, scheduleData, constellationInfo } from '../../component/scheduledata';

const Schedule = () => {
    const [activeDay, setActiveDay] = useState('day2');
    const [zoomedStar, setZoomedStar] = useState(null);
    const [zoomOrigin, setZoomOrigin] = useState({ x: 0, y: 0 });
    const [showInstruction, setShowInstruction] = useState(true);
    const [showHelp, setShowHelp] = useState(false);
    const [focusedIndex, setFocusedIndex] = useState(null)
    const [showText, setShowText] = useState(false);
    const [coordinates, setCoordinates] = useState(null);
    const [offset, setOffset] = useState(null);


    useLayoutEffect(() => {
        if (typeof window !== "undefined") {
            const w = window.innerWidth;
            setCoordinates(w > 430 ? coordinate : coordinatesMobile);
            setOffset(w > 430 ? 10 : 20);
        }
    }, []);

    // 🔁 Update on resize
    useEffect(() => {
        if (typeof window !== "undefined") {
            const handleResize = () => {
                const w = window.innerWidth;
                setCoordinates(w > 430 ? coordinate : coordinatesMobile);
                setOffset(w > 430 ? 20 : 10);
            };

            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
        }
    }, []);

    if (!coordinates || !coordinates[activeDay]) return null;

    const handleStarClick = (starData, index, x, y) => {
        setShowInstruction(false);
        setZoomOrigin({ x: (x / 1200) * 100, y: (y / 700) * 100 });
        setZoomedStar(starData);
        setFocusedIndex(index);
        setShowText(false);
        setTimeout(() => setShowText(true), 100); // Delay for smooth fade
    };

    const getStarRadius = (index) => {
        return offset - 2 + (index % 5);
    };

    const focusZoomedStar = (index) => {
        const starData = scheduleData[activeDay][index];
        const { x, y } = coordinates[activeDay][index];
        setZoomOrigin({ x: (x / 1200) * 100, y: (y / 700) * 100 });
        setZoomedStar(starData);
        setFocusedIndex(index);
    };

    const handleNext = () => {
        const events = scheduleData[activeDay];
        if (!events) return;
        const nextIndex = focusedIndex === null ? 0 : (focusedIndex + 1) % events.length;
        focusZoomedStar(nextIndex);
    };

    const handlePrev = () => {
        const events = scheduleData[activeDay];
        if (!events) return;
        const prevIndex = focusedIndex === null ? events.length - 1 : (focusedIndex - 1 + events.length) % events.length;
        focusZoomedStar(prevIndex);
    };

    return (
        <div className="schedule-container">
            <img src="/images/telescope.png" alt="Telescope" className="telescope-img" />
            {showInstruction && <p className="star-instruction">Click a star to explore</p>}

            <svg className="constellation" viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid meet">
                {scheduleData[activeDay].map((event, index) => {
                    const { x, y } = coordinates[activeDay][index];
                    return (
                        <g
                            key={index}
                            onClick={() => handleStarClick(event, index, x, y)}
                            role="button"
                            tabIndex="0"
                            aria-label={`Event: ${event.title} at ${event.time}`}
                        >
                            <rect
                                x={x - 20}
                                y={y - 30}
                                width={100}
                                height={40}
                                fill="transparent"
                                className="star-rect"
                            />
                            <circle
                                cx={x}
                                cy={y}
                                r={getStarRadius(index)}
                                className={`star ${focusedIndex === index ? 'focused-star' : ''}`}
                                style={{ animationDuration: `${1.5 + (index % 4)}s` }}
                            />
                            <text x={x + 15} y={y - 10 -offset} className="star-label">{event.title}</text>
                            <text x={x - 15} y={y + 10 +  2 * offset} className="star-label" style={{ textAnchor: 'start' }}>{event.time}</text>
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
                    onClick={() => setZoomedStar(null)}
                >
                    <div className="lens-image-wrapper" onClick={(e) => e.stopPropagation()}>

                        {/* ⬅️ Left arrow */}
                        <button className="arrow-btn left-arrow" onClick={handlePrev}>
                            <i className="fas fa-chevron-left"></i>
                        </button>


                        <img src='/images/lens.png' alt="Lens" className="lens-image" />

                        <div className="scope" style={{
                            backgroundImage: `url("/images/planet${Math.floor(Math.random() * 4) + 1}.png")`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}
                        >
                            <div className="scope-star-content">
                                <h1>{zoomedStar.title}</h1>
                                <p>{zoomedStar.venue}</p>
                                <p>{zoomedStar.time}</p>
                            </div>
                        </div>

                        {/* ➡️ Right arrow */}
                        <button className="arrow-btn right-arrow" onClick={handleNext}>
                            <i className="fas fa-chevron-right"></i>
                        </button>


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
