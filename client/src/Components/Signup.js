import React, { useState } from 'react'
import { NavLink, useNavigate } from "react-router-dom";
import Signupani from '../assets/resister.json'
import Lottie from 'lottie-react'
import '../Styles/Login.css'
import axios from 'axios'

const Signup = () => {
  const navigate = useNavigate();
  const [Userinfo, setUserinfo] = useState({ name: "", email: "", password: "", room: "", hostel: "", phone: "" })
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState("");


  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  function uploadSingleImage(base64) {
    setLoading(true);
    axios
      .post("http://localhost:5000/uploadImage", { image: base64 })
      .then((res) => {
        setUrl(res.data);
        // alert("Image uploaded Succesfully");
      })
      .then(() => setLoading(false))
      .catch(console.log);
  }

  const uploadImage = async (event) => {
    const files = event.target.files;

    if (files.length === 1) {
      const base64 = await convertBase64(files[0]);
      uploadSingleImage(base64);
      return;
    }
  };



  const handleonSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name: Userinfo.name, email: Userinfo.email, password: Userinfo.password, room: Userinfo.room, hostel: Userinfo.hostel, phone: Userinfo.phone, url: url })
    });

    const json = await response.json();

    if (!json.success) {
      alert(json.message);
    } else {
      alert(json.message);
      setUserinfo({ name: "", email: "", password: "", phone: "" });
      navigate('/login', { replace: true });
    }
  };


  const onchange = (e) => {
    setUserinfo({ ...Userinfo, [e.target.name]: e.target.value })
  };

  return (
    <>
      <form onSubmit={handleonSubmit}>
        <div className="container2">
          <div className="contain">
            <div className="left">
              <h1 className='heading1'>Sign up</h1>
              <input type="text" placeholder='Your Name' className='user' name='name' value={Userinfo.name} onChange={onchange} autoComplete="new" />

              <input type="email" placeholder='Your Email' className='user' name='email' value={Userinfo.email} onChange={onchange} />

              <input type="password" placeholder='Password' className='user' name='password' value={Userinfo.password} onChange={onchange} />

              <input type="number" placeholder='Room No' className='user' name='room' value={Userinfo.room} onChange={onchange} />

              <input type="text" placeholder='Hostel Name' className='user' name='hostel' value={Userinfo.hostel} onChange={onchange} />

              <input type="number" placeholder='Your Phone no' className='user' name='phone'
                value={Userinfo.phone} onChange={onchange} />

              <div className="image-section">
                <div className="image-content">
                  <input onChange={uploadImage} id="dropzone-file" type="file" className="user" /><br />
                  <span className='hostel-id'>*Upload your college hostel id</span>
                </div>
                <div>
                  {loading ? (
                    <div className="flex items-center justify-center">
                      <img src='./images/assets.gif' alt='loading img' className='loading' />{" "}
                    </div>
                  ) : ""}
                </div>
              </div>

              < hr className='hr' />
              <button className='btn' type='submit'>SUBMIT</button>
            </div>
            <div className="right1">
              <Lottie className='animation1' animationData={Signupani} />
              <NavLink to='/login' className='btn4'>Login</NavLink>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}

export default Signup