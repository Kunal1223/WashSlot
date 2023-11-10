import React from 'react'
import {NavLink} from 'react-router-dom'
import '../Styles/Hostel.css'
import HostelCart from '../SubComponents/HostelCart'

const Hostel = () => {
  return (
    <>
        <div className="Hostel-container">
          <div className="nmit-hostel">
            <h1>Welcome to NMIT</h1>
            <hr className="home-hr" />
          </div>

          <h3>Choose Your Hostel:</h3>
          <hr className="home-hr1" />
        </div>

        <div className="hostelcart">
          <NavLink to={'/soupbooking'} className='hostelcart-navlink'><HostelCart cartimg={'./images/hostelpic.jpg'} cartname={"Nandini"}  cartdicrp={"First year hostel"}/> </NavLink>
          <HostelCart cartimg={'./images/hostelpic.jpg'} cartname={"Nandini"}  cartdicrp={"First year hostel"}/> 
          <HostelCart cartimg={'./images/hostelpic.jpg'} cartname={"Nandini"}  cartdicrp={"First year hostel"}/> 
        </div>

        <div className="hostelcart1">
          <NavLink to={'/soupbooking'} className='hostelcart-navlink'><HostelCart cartimg={'./images/hostelpic.jpg'} cartname={"Nandini"}  cartdicrp={"First year hostel"}/> </NavLink>
          <HostelCart cartimg={'./images/hostelpic.jpg'} cartname={"Nandini"}  cartdicrp={"First year hostel"}/> 
          <HostelCart cartimg={'./images/hostelpic.jpg'} cartname={"Nandini"}  cartdicrp={"First year hostel"}/> 
        </div>
    </>
  )
}

export default Hostel