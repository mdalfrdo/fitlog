import React, { useState } from "react";
import Back from "/src/components/back.jsx"; // Impor Navbar
import Program from "../components/program"; // Impor konten
import { Link } from "react-router-dom";  // Mengimpor Link dari react-router-dom

const Empathari = () => {
  const [selectedDay, setSelectedDay] = useState(""); // State untuk hari yang dipilih

  const handleSubmit = (e) => {
    e.preventDefault(); // Mencegah refresh halaman
    const selectedValue = document.getElementById("program-day").value;
    setSelectedDay(selectedValue); // Simpan hari yang dipilih ke state
  };

  return (
    <>
      <Back />
      <main>
        <section id="program-details">
          <h1>4-Day Gym Program</h1>

          {/* Form untuk memilih hari */}
          <form id="day-selector" onSubmit={handleSubmit}>
            <label htmlFor="program-day">Select Day:</label>
            <select id="program-day" name="program-day">
              <option value="">Choose a day</option>
              <option value="day1">Day 1</option>
              <option value="day2">Day 2</option>
              <option value="day3">Day 3</option>
              <option value="day4">Day 4</option>
            </select>
            <button type="submit">View Program</button>
          </form>

          {/* Render Program Berdasarkan Hari */}
          {selectedDay === "day1" && (
            <div>
              <h2>Day 1 Program</h2>
              <Program 
                namalatihan="Benchpress"
                videolink="https://www.youtube.com/embed/gRVjAtPip0Y?si=bbwGT8iZ6cz_4KLS"/>
              <Program 
                namalatihan="Chest Flies"
                videolink="https://www.youtube.com/embed/LhDT-vIaGwk?si=JHfZctVF-Vizomed"/>
              <Program 
                namalatihan="Shoulder Press"
                videolink="https://www.youtube.com/embed/WvLMauqrnK8?si=uyxqsIXhNAxy9Z7w"/>
              <Program 
                namalatihan="Lateral Raises"
                videolink="https://www.youtube.com/embed/XPPfnSEATJA?si=QgCwEwjMAt89N2Q3"/>
              <Program 
                namalatihan="Rear Delt Flies"
                videolink="https://www.youtube.com/embed/nlkF7_2O_Lw?si=DHdqIT2_bYpSHGqA"/>
               <Program 
                namalatihan="Triceps Push Down"
                videolink="https://www.youtube.com/embed/6Fzep104f0s?si=IJwftwKuy5McWWc2"/>

              <Link to="/calories" className="cta">Start Program</Link>  {/* Menggunakan Link untuk navigasi */}
              

            </div>
          )}
          {selectedDay === "day2" && (
            <div>
              <h2>Day 2 Program</h2>
              <Program 
                namalatihan="Lat Pull Down"
                videolink="https://www.youtube.com/embed/NAIEnMjN-6w?si=auG1dO8v7L803Ev6"/>
                <Program 
                namalatihan="Barbel Row"
                videolink="https://www.youtube.com/embed/qXrTDQG1oUQ?si=FLWOn7-gYXNdp93e"/>
                <Program 
                namalatihan="Pull Up"
                videolink="https://www.youtube.com/embed/BHsa1yeRugg"/>
                <Program 
                namalatihan="Bicep Curl"
                videolink="https://www.youtube.com/embed/ykJmrZ5v0Oo?si=gElY1KsW2ajTnAH1"/>
                <Program 
                namalatihan="Hammer Curl"
                videolink="https://www.youtube.com/embed/BRVDS6HVR9Q"/>

                <Link to="/calories" className="cta">Start Program</Link>  {/* Menggunakan Link untuk navigasi */}              
            </div>
          )}
          {selectedDay === "day3" && (
            <div>
              <h2>Day 3 Program</h2>
              <Program 
                namalatihan="Squat"
                videolink="https://www.youtube.com/embed/gcNh17Ckjgg"/>
              <Program 
                namalatihan="Bulgarian Squat"
                videolink="https://www.youtube.com/embed/-4LVK1crLSw"/>
              <Program 
                namalatihan="Legs Press"
                videolink="https://www.youtube.com/embed/swZQC689o9U"/>
              <Program 
                namalatihan="Legs Extension"
                videolink="https://www.youtube.com/embed/W1SD96lrudY"/>
              <Program 
                namalatihan="Calf Raises"
                videolink="https://www.youtube.com/embed/eMTy3qylqnE"/>
              
              <Link to="/calories" className="cta">Start Program</Link>  {/* Menggunakan Link untuk navigasi */}
            </div>
          )}
          {selectedDay === "day4" && (
            <div>
              <h2>Day 4 Program</h2>
              <Program 
                namalatihan="Shoulder Press"
                videolink="https://www.youtube.com/embed/WvLMauqrnK8?si=uyxqsIXhNAxy9Z7w"/>
                <Program 
                namalatihan="Lateral Raises"
                videolink="https://www.youtube.com/embed/XPPfnSEATJA?si=QgCwEwjMAt89N2Q3"/>
                <Program 
                namalatihan="Rear Delt Flies"
                videolink="https://www.youtube.com/embed/nlkF7_2O_Lw?si=DHdqIT2_bYpSHGqA"/>
                 <Program 
                namalatihan="Triceps Push Down"
                videolink="https://www.youtube.com/embed/6Fzep104f0s?si=IJwftwKuy5McWWc2"/>
                <Program 
                namalatihan="Bicep Curl"
                videolink="https://www.youtube.com/embed/ykJmrZ5v0Oo?si=gElY1KsW2ajTnAH1"/>

              <Link to="/calories" className="cta">Start Program</Link>  {/* Menggunakan Link untuk navigasi */}
            </div>
          )}
        </section>
      </main>
    </>
  );
};

export default Empathari;
