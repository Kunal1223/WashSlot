import React from 'react'
import { NavLink } from 'react-router-dom'
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
        <NavLink to={'/soupbooking'} className='hostelcart-navlink'>
          <HostelCart cartimg={'./images/hostelpic.jpg'} cartname={"Souparnika"} cartdicrp={"First year hostel"} /></NavLink>

        <NavLink to={'/nandini'} className='hostelcart-navlink'>
          <HostelCart cartimg={'./images/hostelpic.jpg'} cartname={"Nandini"} cartdicrp={"Boy's Senior hostel"} /> </NavLink>

        <NavLink to={'/shambhavi'} className='hostelcart-navlink'>
          <HostelCart cartimg={'./images/hostelpic.jpg'} cartname={"Shambhavi"} cartdicrp={"2nd Boy's Senior hostel"} /></NavLink>
      </div>

      <div className="hostelcart1">
        <NavLink to={'/kavery'} className='hostelcart-navlink'><HostelCart cartimg={'./images/hostelpic.jpg'} cartname={"Kavery"} cartdicrp={"Closest from Mess ( Boy's Hostel )"} /> </NavLink>

        <NavLink to={'/kumardhara'} className='hostelcart-navlink'>
        <HostelCart cartimg={'./images/hostelpic.jpg'} cartname={"KumarDhara"} cartdicrp={"Girl's hostel"} /></NavLink>

        <NavLink to={'/netravaty'} className='hostelcart-navlink'>
        <HostelCart cartimg={'./images/hostelpic.jpg'} cartname={"Netravaty"} cartdicrp={"Girl's hostel"} /></NavLink>
      </div>
    </>
  )
}

export default Hostel