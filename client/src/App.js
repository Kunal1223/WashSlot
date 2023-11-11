import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './Components/Home';
import Login from './Components/Login';
import About from './Components/About';
import Hostel from './Components/Hostel';
import Navbar from './Components/Navbar';
import MachineBooking from './SubComponents/MachineBooking';


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
          <Route path='/soupbooking' element={<MachineBooking userId1={"souparnikaM1"} userId2={"souparnikaM2"}  />} />
          
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>

    </>
  );
}

export default App;
