import React, { useEffect, useState } from 'react';
import '../Styles/About.css';
import { useAuth } from '../SubComponents/AuthenticateContext';

const About = () => {
  const { Uemail } = useAuth();
  const [userinfor, setUserinfor] = useState({
    name: '',
    email: Uemail,
    phone: '',
    room: '',
    hostel: '',
    image: '',
  });

  useEffect(() => {
      const fetchData = async () => {
      const storedData = JSON.parse(localStorage.getItem('userinfor'));

      if (storedData) {
        setUserinfor(storedData);
      } else {

        fetch(`http://localhost:5000/api/aboutuser?email=${Uemail}`)
          .then((response) => response.json())
          .then((data) => {
            const updatedUserinfor = {
              ...userinfor,
              name: data.name,
              room: data.room,
              hostel: data.hostel,
              phone: data.phone,
              image: data.imgage,
            };

            // Update state
            setUserinfor(updatedUserinfor);

            // Store data in localStorage
            localStorage.setItem('userinfor', JSON.stringify(updatedUserinfor));
          })
          .catch((error) => {
            console.error('Error in Networks:', error);
          });
      }
    }
    fetchData()
  }, []);

  return (
    <>
      <div className="about-container">
        <div className="about-content">
          <h1 className="about-heading">
            Name : <span className="about-info">{userinfor.name}</span>
          </h1>
          <h1 className="about-heading">
            Email : <span className="about-info">{Uemail}</span>
          </h1>
          <h1 className="about-heading">
            Phone : <span className="about-info">{userinfor.phone}</span>
          </h1>
          <h1 className="about-heading">
            Hostel : <span className="about-info">{userinfor.hostel}</span>
          </h1>
          <h1 className="about-heading">
            Room No: <span className="about-info">{userinfor.room}</span>
          </h1>
        </div>
        <div className="about-image">
          <img src={userinfor.image} alt="ima" />
        </div>
      </div>
    </>
  );
};

export default About;
