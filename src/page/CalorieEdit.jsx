import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Mengimpor Axios
import Navbar from "/src/components/navbar.jsx";
import { Link, useNavigate, useParams } from "react-router-dom"; // Menambahkan useParams untuk mendapatkan id dari URL

const CalorieEdit = () => {
  const [weight, setWeight] = useState('');  // State untuk weight
  const [height, setHeight] = useState('');  // State untuk height
  const [age, setAge] = useState('');       // State untuk age
  const [gender, setGender] = useState('male');  // State untuk gender
    const [day, setDay] = useState(0);       // State untuk age
  
  const [result, setResult] = useState(""); // State untuk menyimpan hasil perhitungan
  const [showButton, setShowButton] = useState(false); // State untuk mengontrol tombol "Mulai Latihan"
  const [isEditMode, setIsEditMode] = useState(false); // State untuk memeriksa apakah sedang dalam mode edit
  const navigate = useNavigate(); // Hook untuk navigasi
  const { id } = useParams(); // Mengambil id dari URL
  
  // Fungsi untuk mengambil data pengguna yang ada jika dalam mode edit
  const fetchDataForEdit = async (id) => {
    try {
      const response = await axios.get(`http://localhost:8000/api/program`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        params: {
          type: "recordDetail",
          id: id
        }
      });
      const user = response.data.data;
      setWeight(user.body_weight);
      setHeight(user.body_height);
      setDay(user.program_day);

      setAge(user.age);
      setGender(user.gender);
      setIsEditMode(true); // Set isEditMode true setelah berhasil mengambil data
    } catch (error) {
      console.error("Error fetching user data", error);
      setResult("Failed to fetch data for editing.");
    }
  };

  // Fungsi untuk menangani form submit
  const handleCalculateCalories = async (e) => {
    e.preventDefault();  // Mencegah form melakukan reload

    // Validasi input
    if (!weight || !height || !age) {
      setResult("Please fill in all fields.");
      return;
    }

    try {
      const data = {
        body_weight: parseFloat(weight),
        body_height: parseFloat(height),
        age: parseInt(age, 10),
        program_id: 1,
        program_day : day,
        gender,
      };

      const apiUrl = isEditMode ? `http://localhost:8000/api/program/${id}` : 'http://localhost:8000/api/program';
      const method = isEditMode ? 'put' : 'post';

      // Kirim data ke server menggunakan Axios
      const response = await axios[method](apiUrl, data, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });

      if (response.data && response.data.bmr) {
        setResult(`Your daily calories are ${response.data.bmr.toFixed(2)} cal.`);
        setShowButton(true); // Tampilkan tombol setelah hasil muncul
      } else {
        setResult("Server did not return a valid result.");
        setShowButton(false);
      }

      // Jika update sukses, arahkan ke halaman record
      if (isEditMode) {
        navigate("/record");
      }

    } catch (error) {
      setResult("Error occurred while fetching data. Please try again.");
      console.error(error);
      setShowButton(false);
    }
  };

  // Menambahkan useEffect untuk memuat data jika sedang dalam mode edit
  useEffect(() => {
    if (id) {
      fetchDataForEdit(id); // Memanggil fungsi untuk mengambil data jika id tersedia
    }
  }, [id]); // Pastikan effect ini dijalankan ketika `id` berubah

  return (
    <>
      <Navbar />
      <div className="contact-container">
        <h1>{isEditMode ? "Edit Calories Info" : "Calories Calculator"}</h1>

        <form id="calorie-calculator" onSubmit={handleCalculateCalories}>
        <label htmlFor="weight">Day:</label>
          <input 
            type="number" 
            id="day" 
            name="day" 
            value={day} 
            onChange={(e) => setDay(e.target.value)} 
            required 
          />
          <label htmlFor="weight">Body Weight (Kg):</label>
          <input
            type="number"
            id="weight"
            name="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            required
          />

          <label htmlFor="height">Body Height (Cm):</label>
          <input
            type="number"
            id="height"
            name="height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            required
          />

          <label htmlFor="age">Age (y.o):</label>
          <input
            type="number"
            id="age"
            name="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />

          <label htmlFor="gender">Gender:</label>
          <select
            id="gender"
            name="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
          >
            <option value="male">male</option>
            <option value="female">female</option>
          </select>

          <button type="submit">{isEditMode ? "Update" : "Calculate Calories"}</button>
        </form>

        <p id="result">{result}</p>

        {showButton && (
          <Link to="/record" className="start-training-button">
            <button>Mulai Latihan</button>
          </Link>
        )}
      </div>
    </>
  );
};

export default CalorieEdit;
