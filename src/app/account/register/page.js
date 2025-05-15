'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import '../account.css';

const Register = () => {
    const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '' });
    const [message, setMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const validatePassword = (password) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return regex.test(password);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (typeof window === 'undefined') return;

        if (!validatePassword(formData.password)) {
            setMessage('Password must be at least 8 characters and include uppercase, lowercase, number, and special character.');
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            setMessage('Passwords do not match.');
            return;
        }

        const users = JSON.parse(localStorage.getItem('users')) || [];

        if (users.find(user => user.email === formData.email)) {
            setMessage('An account with this email already exists.');
            return;
        }
        if (users.find(user => user.username === formData.username)) {
            setMessage('Username already in use.');
            return;
        }

        const newUser = {
            name: formData.name,
            username: formData.username,
            email: formData.email,
            password: formData.password
        };

        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        setMessage('Registered successfully! Redirecting to login...');
        setTimeout(() => router.push('/account/login'), 1500);
    };

    return (
        <div className="auth-container">
            <div className="auth-box">
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter Your Name"
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label>User Name</label>
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            placeholder="Enter Your New Username"
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter Your E-mail"
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label>Password</label>
                        <div className="password-container">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Create a strong password"
                                required
                            />
                            <i
                                className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}
                                onClick={() => setShowPassword(!showPassword)}
                            ></i>
                        </div>
                    </div>
                    <div className="input-group">
                        <label>Confirm Password</label>
                        <div className="password-container">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                placeholder="Re-enter your password"
                                required
                            />
                            <i
                                className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}
                                onClick={() => setShowPassword(!showPassword)}
                            ></i>
                        </div>
                    </div>
                    <button type="submit" className="auth-btn">Register</button>
                </form>
                {message && <p className="auth-message">{message}</p>}
                <p className="toggle-text">
                    Already have an account? <Link href="/account/login"><span>Login</span></Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
