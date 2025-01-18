import React, { useState, useEffect } from "react";
import axios from "axios"; // Mengimpor Axios
import Back from "/src/components/back.jsx";
import "/src/page/record.css"; // Sesuaikan dengan path file CSS
import { calculateBMR } from "./calories";
import { useNavigate } from "react-router-dom";


const Anggota = () => {
  const [users, setUsers] = useState([]);  // State untuk menyimpan data pengguna
  const [loading, setLoading] = useState(true);  // State untuk memantau status loading
  const [error, setError] = useState(null);  // State untuk menangani error
  const navigate = useNavigate();
  useEffect(() => {
    // Fungsi untuk mengambil data dari API
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/program',{
          params:{type:"record"},headers:{
            Authorization:"Bearer "+localStorage.getItem("token")
           }
        }); // Gantilah dengan endpoint API yang sesuai
        setUsers(response.data.data);  // Menyimpan data pengguna ke state
        setLoading(false);  // Menandakan bahwa loading selesai
      } catch (error) {
        setError("Terjadi kesalahan saat mengambil data.");
        setLoading(false);
      }
    };

    fetchData();  // Panggil fungsi untuk mengambil data
  }, []);  // useEffect dijalankan sekali ketika komponen pertama kali dimuat

  const handleUpdate = (id) => {
    navigate("/calories/"+id);
  };

  const handleDelete = async(id) => {
    const response = await axios.delete('http://127.0.0.1:8000/api/program/'+id,{
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    if (response.status === 200) {
      
      alert('Data Berhasil di hapus')
      location.reload();
    }
  };

  if (loading) {
    return <p>Loading...</p>; // Menampilkan loading jika data sedang diambil
  }

  if (error) {
    return <p>{error}</p>; // Menampilkan pesan error jika ada kesalahan saat mengambil data
  }

  return (
    <>
      <Back />
      <div>
        <h1>USER</h1>
        <table>
          <thead>
            <tr>
              <th>User Name</th>
              <th>Calories</th>
              <th>Day</th>
              <th>Action</th> {/* Kolom aksi */}
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{calculateBMR(user.body_weight, user.body_height,user.age,user.gender)}</td>
                <td>Day {user.program_day}</td>
                <td>
                  <button
                    className="btn-update"
                    onClick={() => handleUpdate(user.id)}
                  >
                    Update
                  </button>
                  <button
                    className="btn-delete"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Anggota;
