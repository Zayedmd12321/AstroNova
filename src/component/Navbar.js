'use client';
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useAuth } from "./AuthContext";
import './navbar.css'

const Navbar = () => {
    const location = usePathname();
    const [open, setOpen] = useState(false);
    const { isLoggedIn, avatar, logout } = useAuth();
    const [scrolled, setScrolled] = useState(false);
    const [w, setWidth] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleDropdown = () => {
        setOpen(prev => !prev);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            const dropdown = document.getElementById('dropdown-menu');
            const button = document.querySelector('.profile-icon');
            if (dropdown && !dropdown.contains(event.target) && !button.contains(event.target)) {
                setOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav id="navbar" className={scrolled ? "scrolled" : ""}>
            <div id="logo" className="fade-in">
                <Image src="/images/logo.png" alt="Logo" width={50} height={50} />
                <Link href="/"><span className="name">AstroNova</span></Link>
            </div>

            <div id="link">
                <ul className="nav">
                    <li className={`item fade-in ${location === '/' ? 'active-link' : ''}`}>
                        <Link href="/">Home</Link>
                    </li>
                    <li className={`item fade-in ${location === '/schedule' ? 'active-link' : ''}`}>
                        <Link href="/schedule">Schedule</Link>
                    </li>
                    <li className={`item fade-in ${location === '/guestlecture' ? 'active-link' : ''}`}>
                        <Link href="/guestlecture">Guest Lecture</Link>
                    </li>
                    <li className={`item fade-in ${location === '/teams' ? 'active-link' : ''}`}>
                        <Link href="/teams">Teams</Link>
                    </li>
                    <li className={`item fade-in ${location === '/gallery' ? 'active-link' : ''}`}>
                        <Link href="/gallery">Gallery</Link>
                    </li>
                    <li className={`item fade-in ${location === '/contact' ? 'active-link' : ''}`}>
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
            </div>

            <div className="profile-dropdown">
                <button
                    className={`profile-icon ${open ? 'pulse-glow' : ''}`}
                    onClick={toggleDropdown}
                    style={{ transform: `${!open ? 'scale(1)' : 'scale(1.1)'}` }}
                >
                    <i className={avatar}></i>
                </button>

                {open && (
                    <div id="dropdown-menu" className="dropdown-menu">
                        {w < 771 && (
                            <>
                                <Link href="/" onClick={() => setOpen(false)}>Home</Link>
                                <Link href="/schedule" onClick={() => setOpen(false)}>Schedule</Link>
                                <Link href="/teams" onClick={() => setOpen(false)}>Teams</Link>
                            </>
                        )}
                        <Link href={"/account" + (!isLoggedIn ? "/login" : "")} onClick={() => setOpen(false)}>My Profile</Link>
                        {!isLoggedIn ? (
                            <Link href="/account/login" onClick={() => setOpen(false)}>Log In</Link>
                        ) : (
                            <Link href="/" className="logout-btn" onClick={() => { logout(); setOpen(false); }}>Log Out</Link>
                        )}
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
