import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router, Routes, and Route
import './index.css';
import '../home.css';
import './page/contact.css';
import Login from './page/login.jsx';
import Register from './page/register.jsx';
import Home from './page/home.jsx';
import Program from './page/Program.jsx';
import Empathari from './page/empathari.jsx';
import Limahari from './page/limahari.jsx';
import Enamhari from './page/enamhari.jsx';
import Contact from './page/contact.jsx';
import Anggota from './page/record.jsx';
import Calories from './page/calories.jsx';
import Formbio from './page/formbio.jsx';
import CalorieEdit from './page/CalorieEdit.jsx';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/program/:id" element={<Program />} />
        <Route path="/empathari" element={<Empathari />} />
        <Route path="/limahari" element={<Limahari />} />
        <Route path="/enamhari" element={<Enamhari />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/record" element={<Anggota />} />
        <Route path="/calories" element={<Calories />} />
        <Route path="/formbio" element={<Formbio />} />
        <Route path="/calories/:id" element={<CalorieEdit />} />

        
      </Routes>
    </Router>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
