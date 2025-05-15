'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import '../account.css';
import { useAuth } from '../../../component/AuthContext';

const Login = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();

  useEffect(() => {
    if (typeof window !== 'undefined' && localStorage.getItem('login') === 'true') {
      router.push('/account');
    }
  }, [router]);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(
      u => u.email === formData.email
    );

    if (user) {
      if ( formData.password === user.password){
      setMessage(`Welcome back, ${user.username}!`);
      login();
      localStorage.setItem('login', 'true');
      localStorage.setItem('name', user.name);
      localStorage.setItem('username', user.username);
      localStorage.setItem('email', user.email);
      localStorage.setItem('avatar', 'fas fa-user-astronaut');
      setTimeout(() => router.push('/account'), 1500);
      }
      else {
      setMessage('Invalid credentials. Please try again.');
    }
    } else {
      setMessage("Email doesn't exist");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your E-mail"
              value={formData.email}
              onChange={handleChange}
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
                                placeholder="Enter your password"
                                required
                            />
                            <i
                                className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}
                                onClick={() => setShowPassword(!showPassword)}
                            ></i>
                        </div>
                    </div>

          <button type="submit" className="auth-btn">Login</button>
        </form>

        {message && <p className="auth-message">{message}</p>}

        <p className="toggle-text">
          Don’t have an account? <Link href="/account/register"><span>Register</span></Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
