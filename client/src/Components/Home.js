import { NavLink} from 'react-router-dom';
import '../Styles/Home.css'
import animation from '../assets/book.json'
import Lootie from 'lottie-react'

const Home = () => { 
  return (
    <>
        <div className="home-container">
          <div className="home-small-container">
            <div className="content">
              <h1>Welcome to WashSlot</h1>
              <p>Streamline your laundry experience at the hostel with our easy slot booking system. No more waiting in line – reserve your washing machine slot hassle-free. Enjoy convenience, save time, and ensure a seamless laundry process for everyone. Book your slot now!</p>
              <NavLink to={'/hostel'} className='home-btn'>Choose Hostel <i className="fa-solid fa-arrow-right"></i></NavLink>
            </div>
            <div className="home-img">
              <Lootie  animationData={animation} />
            </div>
          </div>
        </div> 
    </>
  )
}

export default Home