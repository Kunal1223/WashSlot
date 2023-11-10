import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './Components/Home';
import Login from './Components/Login';
import About from './Components/About';
import Hostel from './Components/Hostel';
import Navbar from './Components/Navbar';
import SouprnikaBooking from './SubComponents/SouprnikaBooking';


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
          <Route path='/soupbooking' element={<SouprnikaBooking />} />
          {/* <Route path='/' element={<Home />} /> */}
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>

    </>
  );
}

export default App;
