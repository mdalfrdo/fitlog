import React from 'react';
import Back from "/src/components/back.jsx";
import { Link } from "react-router-dom";

const Formbio = () => {
  return (
    <>
    <Back/>
    <div className='contact-container'>
    <h2>Form Biodata Kelompok</h2>
    <form>
      <label htmlFor="fname">Nama Depan</label>
      <br />
      <input type="text" id="fname" name="fname" />
      <br />
      <label htmlFor="lname">Nama Belakang</label>
      <br />
      <input type="text" id="lname" name="lname" />
      <br />
      <label htmlFor="tgllahir">Tanggal Lahir</label>
      <br />
      <input
        type="date"
        id="tgllahir"
        name="tgllahir"
        min="2000-01-01"
        max="2008-12-31"
      />
      <br />
      <label htmlFor="alamat">Alamat</label>
      <br />
      <input type="text" id="alamat" name="alamat" />
      <br />
      <label htmlFor="rt">RT</label>
      <br />
      <input type="text" id="rt" name="rt" size="3" />
      <br />
      <label htmlFor="rw">RW</label>
      <br />
      <input type="text" id="rw" name="rw" size="3" />
      <br />
      <label htmlFor="norumah">No Rumah</label>
      <br />
      <input type="text" id="norumah" name="norumah" size="3" />
      <br />
      <label htmlFor="kelurahan">Kelurahan</label>
      <br />
      <input type="text" id="kelurahan" name="kelurahan" />
      <br />
      <label htmlFor="kecamatan">Kecamatan</label>
      <br />
      <input type="text" id="kecamatan" name="kecamatan" />
      <br />
      <label htmlFor="kota">Kota</label>
      <br />
      <input type="text" id="kota" name="kota" />
      <br />
      <button type="submit">Submit</button>
      <br />
    </form>
  </div>
  </>
);
}


export default Formbio;
