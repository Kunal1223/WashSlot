import React, { useState } from 'react'

const SouprnikaBooking = () => { 

  const [isModalOpen, setIsModalOpen] = useState(false);


  const openBookingModal = () => {
    setIsModalOpen(true);
  };

  const closeBookingModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="SouprnikaBooking-container">
        <div className="machine-box">
          <h1>Choose the Machine</h1>
          <hr className="machine-hr" />

          <div className="machine-right">
            <img src="./images/mach2.png" alt="machine" />
            <img src="./images/mach2.png" alt="machine" />
          </div>

          <div className="machine-text">
            <h1>Machine A</h1>
            <h1>Machine B</h1>
          </div>
        </div>
      </div>

      <div className="slot-booking">
        <div className="slot1-booking">
          <h4>Click to book M1 Slot </h4>
          <div className="slot">
            <button className='slot-btn' onClick={openBookingModal}  >06:00 AM - 07:30 AM</button>
            <button className='slot-btn' onClick={openBookingModal}  >07:30 AM - 09:00 AM</button>
            <button className='slot-btn' onClick={openBookingModal}  >09:00 AM - 10:30 AM</button>
            <button className='slot-btn' onClick={openBookingModal}  >10:30 AM - 11:00 AM</button>
            <button className='slot-btn' onClick={openBookingModal}  >11:00 AM - 12:30 PM</button>
            <button className='slot-btn' onClick={openBookingModal}  >12:30 PM - 02:00 PM</button>
            <button className='slot-btn' onClick={openBookingModal}  >02:00 PM - 03:30 PM</button>
            <button className='slot-btn' onClick={openBookingModal}  >03:30 PM - 05:00 PM</button>
            <button className='slot-btn' onClick={openBookingModal}  >05:00 PM - 06:30 PM</button>
            <button className='slot-btn' onClick={openBookingModal}  >06:30 PM - 08:00 PM</button>
            <button className='slot-btn' onClick={openBookingModal}  >08:00 PM - 09:30 PM</button>
            <button className='slot-btn' onClick={openBookingModal} >09:30 PM - 11:00 PM</button>
          </div>
        </div>

        <div className="slot1-booking">
          <h4>Click to book M1 Slot </h4>
          <div className="slot">
            <button className='slot-btn' onClick={openBookingModal}  >06:00 AM - 07:30 AM</button>
            <button className='slot-btn' onClick={openBookingModal}  >07:30 AM - 09:00 AM</button>
            <button className='slot-btn' onClick={openBookingModal}  >09:00 AM - 10:30 AM</button>
            <button className='slot-btn' onClick={openBookingModal}  >10:30 AM - 11:00 AM</button>
            <button className='slot-btn' onClick={openBookingModal}  >11:00 AM - 12:30 PM</button>
            <button className='slot-btn' onClick={openBookingModal}  >12:30 PM - 02:00 PM</button>
            <button className='slot-btn' onClick={openBookingModal}  >02:00 PM - 03:30 PM</button>
            <button className='slot-btn' onClick={openBookingModal}  >03:30 PM - 05:00 PM</button>
            <button className='slot-btn' onClick={openBookingModal}  >05:00 PM - 06:30 PM</button>
            <button className='slot-btn' onClick={openBookingModal}  >06:30 PM - 08:00 PM</button>
            <button className='slot-btn' onClick={openBookingModal}  >08:00 PM - 09:30 PM</button>
            <button className='slot-btn' onClick={openBookingModal}  >09:30 PM - 11:00 PM</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default SouprnikaBooking