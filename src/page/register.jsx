import React, { useState } from 'react';
import './register.css';
import { Link } from "react-router-dom";

function Register() {
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const register_prosses = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());

    if (formJson.password !== formJson['confirm-password']) {
      setErrorMessage('Password dan Konfirmasi Password tidak cocok');
      return;
    }

    try {
      const response = await fetch('http://127.0.0.1:8000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formJson.username,
          email: formJson.email,
          password: formJson.password,
          confirmed: formJson['confirm-password'], // Laravel membutuhkan field ini untuk validasi
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setErrorMessage(errorData.message || 'Terjadi kesalahan saat mendaftar');
        return;
      }

      const result = await response.json();
      setSuccessMessage(result.message);
      form.reset(); // Reset form setelah sukses
    } catch (error) {
      setErrorMessage('Gagal terhubung ke server');
    }
  };

  return (
    <div className="form-container">
      <h1>Buat Akun</h1>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      <form method="post" onSubmit={register_prosses}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" placeholder="Masukkan username" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Masukkan email" required />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" placeholder="Masukkan password" required />

        <label htmlFor="confirm-password">Konfirmasi Password</label>
        <input type="password" id="confirm-password" name="confirm-password" placeholder="Ulangi password" required />

        <button type="submit">Buat Akun</button>
      </form>
      <p>Sudah punya akun? <Link to="/">Login di sini</Link></p>
    </div>
  );
}

export default Register;
