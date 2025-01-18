import React, { useEffect, useState } from 'react';
import Navbar from "/src/components/navbar.jsx";  // Impor Navbar
import Footer from '../components/footer';
import { Link } from "react-router-dom";  // Mengimpor Link dari react-router-dom
import axios from 'axios';

const Home = () => {
  const [data, setData] = useState([]); // State untuk menyimpan data
  const [loading, setLoading] = useState(true); // State untuk mengatur loading
  const [error, setError] = useState(null); // State untuk menangani error

  // Fungsi untuk mengambil data
  const fetchData = async () => {
    
    try {
      setLoading(true); // Mulai loading
      const response = await axios.get('http://127.0.0.1:8000/api/program', {
       headers:{
        Authorization:"Bearer "+localStorage.getItem("token")
       }
      }); // Ganti dengan URL API Anda
      if (!response.status == 200) {
        throw new Error('Failed to fetch data',response); // Lempar error jika respons gagal
      }
      const result = await response.data; // Konversi data ke JSON
      console.log(result,'restuk');
      
      setData(result.data); // Simpan data ke state
    } catch (error) {
      setError(error.message); // Tangani error
    } finally {
      setLoading(false); // Matikan loading
    }
  };

  // Gunakan useEffect untuk memanggil fetchData saat komponen dimuat
  useEffect(() => {
    fetchData();
  }, []); // Array kosong agar hanya dijalankan sekali saat komponen dimuat

  if (loading) return <p>Loading...</p>; // Tampilkan pesan loading
  if (error) return <p>Error: {error}</p>;
  return (
    <>   
      <Navbar/>
      <div className='home-container'>
      <p >Welcome to Fitlog! </p>
    <p>
    Here we will help you to shape your ideal body, please choose the available training program
    </p>
      <section id="program-recommendations">
        <h2>Recommended Workout Programs</h2>
        {data.map((val, index) => {
  return (
    <div className="program-card" key={index}>
      <h3>{val.day}-Day {val.title}</h3>
      <ul>
        <li>Upper Body</li>
        <li>Lower Body</li>
        <li>Full Body</li>
      </ul>
      <Link to={`/program/${val.day}`} className="cta">View Details</Link>
    </div>
  );
})}


       
      </section>
      </div>
      <Footer/>
    </>
  );
};

export default Home;
