import React, { useState } from 'react';
import axios from 'axios'; // Mengimpor Axios
import Navbar from "/src/components/navbar.jsx";
import { Link, useNavigate } from "react-router-dom";

const Calories = () => {
  const [weight, setWeight] = useState('');  // State untuk weight
  const [height, setHeight] = useState('');  // State untuk height
  const [age, setAge] = useState('');       // State untuk age
  const [day, setDay] = useState(0);       // State untuk age

  const [gender, setGender] = useState('male');  // State untuk gender
  const [result, setResult] = useState(""); // State untuk menyimpan hasil perhitungan
  const [showButton, setShowButton] = useState(false); // State untuk mengontrol tombol "Mulai Latihan"
  const navigate = useNavigate();

  const handleCalculateCalories = async (e) => {
    e.preventDefault();  // Mencegah form melakukan reload

    // Validasi input
    if (!weight || !height || !age) {
      setResult("Please fill in all fields.");
      return;
    }

    try {
      // Kirim data ke server menggunakan Axios
      const response = await axios.post('http://localhost:8000/api/program', {
        body_weight: parseFloat(weight),
        body_height: parseFloat(height),
        age: parseInt(age, 10),
        program_id : 1,
        program_day : day,
        gender,
      },{
        headers:{
          Authorization:"Bearer "+localStorage.getItem("token")
         }
      });

      // Tampilkan hasil dari server
      if (response.status == 200) {
        alert('data berhasil ditambahkan')
        navigate('/record');
      }
    } catch (error) {
      // Tangani error dari Axios
      setResult("Error occurred while fetching data. Please try again.");
      console.error(error);
      setShowButton(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="contact-container">
        <h1>Calories Calculator</h1>

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

          <button type="submit">Calculate Calories</button>
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

export default Calories;
