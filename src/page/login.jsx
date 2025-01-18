import React, { useState } from 'react';
import './login.css';
import { Link, useNavigate } from "react-router-dom"; // Tambahkan useNavigate

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate(); // Inisialisasi useNavigate

  const handleLogin = async (e) => {
    e.preventDefault(); // Mencegah reload halaman secara default

    try {
      const response = await fetch('http://127.0.0.1:8000/api/auth', { // Ganti dengan URL API Anda
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess('Login berhasil!');
        setError('');
        console.log(data.token);
        
        localStorage.setItem('token', data.token); // Simpan token ke localStorage (opsional)
        
        // Redirect ke halaman Home
        navigate('/home'); // Navigasi ke halaman Home
      } else {
        setError(data.message || 'Login gagal!');
        setSuccess('');
      }
    } catch (error) {
      setError('Terjadi kesalahan saat terhubung ke server.');
      setSuccess('');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Login</h1>
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
        <form onSubmit={handleLogin}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Masukkan Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Masukkan Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Login</button>
          <p>
            <Link to="/register">Daftar Disini</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
