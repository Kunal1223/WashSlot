import React from 'react'
import '../Styles/Hostel.css'

const HostelCart = ({cartimg , cartname , cartdicrp}) => {
  return (
    <> 
        <div className="hostelcart-container">
            <div className="hostelcart-box">
                <img src={cartimg} alt="cartimg" className='cart-pic' />
                <h2>{cartname}</h2>
                <h6>{cartdicrp}</h6>
            </div>
        </div>
    
    </>
  )
}

export default HostelCart