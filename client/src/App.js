import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './Components/Home';
import Login from './Components/Login';
import About from './Components/About';
import Hostel from './Components/Hostel';
import Navbar from './Components/Navbar';
import MachineBooking from './SubComponents/MachineBooking';
import Signup from './Components/Signup';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/about' element={<About />} />
          <Route path='/hostel' element={<Hostel />} />
          <Route path='/signup' element={<Signup />} />

          <Route path='/soupbooking' element={<MachineBooking userId1={"souparnikaM1"} userId2={"souparnikaM2"} colorapi={"souparnikaColors"} dataapi={"souparnikabookings"} />} />

          <Route path='/nandini' element={<MachineBooking userId1={"nandiniM1"} userId2={"nandiniM2"} colorapi={"nandinislotColors"} dataapi={"nandinibookings"} />} />

          <Route path='/shambhavi' element={<MachineBooking userId1={"shambhaviM1"} userId2={"shambhaviM2"} colorapi={"shambhavislotColors"} dataapi={"shambhavibookings"} />} />

          <Route path='/kavery' element={<MachineBooking userId1={"kaveryM1"} userId2={"kaveryM2"} colorapi={"kaveryColors"} dataapi={"kaverybookings"} />} />

          <Route path='/kumarDhara' element={<MachineBooking userId1={"kumardharaM1"} userId2={"kumardharaM2"} colorapi={"kumardharaColors"} dataapi={"kumardharabookings"} />} />

          <Route path='/netravaty' element={<MachineBooking userId1={"netravatyM1"} userId2={"netravatyM2"} colorapi={"netravatyColors"} dataapi={"netravatybookings"} />} />

        </Routes>
        {/* <Footer /> */} 
      </BrowserRouter>

    </>
  );
}

export default App;
