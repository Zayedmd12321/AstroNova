'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import './account.css'


const MyProfile = () => {
    const [userData, setUserData] = useState({
        username: '',
        name: '',
        email: '',
        phone: 'Not provided',
    });

    useEffect(() => {
        setUserData({
            username: localStorage.getItem('username') || 'Guest',
            name: localStorage.getItem('name') || 'Guest',
            email: localStorage.getItem('email'),
            phone: localStorage.getItem('phoneNo') || 'Not provided',
        });
    }, []);

    return (
        <div className="profile-container">
            <h2 className="profile-title">
                Welcome, <i className='fas fa-user-astronaut'></i>{userData.username}
            </h2>
            <div className="profile-card">
                <p><strong>Username:</strong> {userData.username}</p>
                <p><strong>Name:</strong> {userData.name}</p>
                <p><strong>Email:</strong> {userData.email}</p>
                <p><strong>Phone:</strong> {userData.phone}</p>
                <Link href="/account/edit">
                    <button className="auth-btn">
                        Edit Profile
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default MyProfile;
