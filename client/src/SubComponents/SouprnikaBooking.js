import React, { useEffect, useState } from 'react'

const SouprnikaBooking = () => {

  const [slotColors, setSlotColors] = useState({});
  const userId = 'user123';

  useEffect(() => {
    fetch(`http://localhost:5000/api/slotColors?userId=${userId}`)
      .then((response) => response.json())
      .then((data) => {
        setSlotColors(data);
      })
      .catch((error) => {
        console.error('Error fetching slot colors:', error);
      });
  }, []);

  const openBookingModal = (slotTime) => {
    const userId = 'user123';

    fetch('http://localhost:5000/api/bookings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ slotTime, userId }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === 'Booking successful') {
          alert('Slot booked successfully!');
        } else {
          alert(data.message);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Error in booking slot. Please try again.');
      });
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
            <button
              className="slot-btn"
              onClick={() => openBookingModal('06:00 AM - 07:30 AM')}
              style={slotColors['06:00 AM - 07:30 AM'] || {}}
            >
              06:00 AM - 07:30 AM
            </button>
            <button
              className="slot-btn"
              onClick={() => openBookingModal('07:30 AM - 09:00 AM')}
              style={slotColors['07:30 AM - 09:00 AM'] || {}}
            >
              07:30 AM - 09:00 AM
            </button>
            <button
              className="slot-btn"
              onClick={() => openBookingModal('09:00 AM - 10:30 AM')}
              style={slotColors['09:00 AM - 10:30 AM'] || {}}
            >
              09:00 AM - 10:30 AM
            </button>
            <button
              className="slot-btn"
              onClick={() => openBookingModal('10:30 AM - 12:00 PM')}
              style={slotColors['10:30 AM - 12:00 PM'] || {}}
            >
              10:30 AM - 12:00 PM
            </button>
            <button
              className="slot-btn"
              onClick={() => openBookingModal('12:00 PM - 01:30 PM')}
              style={slotColors['12:00 PM - 01:30 PM'] || {}}
            >
              12.00 PM - 01:30 PM
            </button>
            <button
              className="slot-btn"
              onClick={() => openBookingModal('01:30 PM - 03:00 PM')}
              style={slotColors['01:30 PM - 03:00 PM'] || {}}
            >
              01:30 PM - 03:00 PM
            </button>
            <button
              className="slot-btn"
              onClick={() => openBookingModal('03:00 PM - 04:30 PM')}
              style={slotColors['03:00 PM - 04:30 PM'] || {}}
            >
              03:00 PM - 04:30 PM
            </button>
            <button
              className="slot-btn"
              onClick={() => openBookingModal('04:30 PM - 06:00 PM')}
              style={slotColors['04:30 PM - 06:00 PM'] || {}}
            >
              04:30 PM - 06:00 PM
            </button>
            <button
              className="slot-btn"
              onClick={() => openBookingModal('06:00 PM - 07:30 PM')}
              style={slotColors['06:00 PM - 07:30 PM'] || {}}
            >
              06:00 PM - 07:30 PM
            </button>
            <button
              className="slot-btn"
              onClick={() => openBookingModal('07:30 PM - 09:00 PM')}
              style={slotColors['07:30 PM - 09:00 PM'] || {}}
            >
              07:30 PM - 09:00 PM
            </button>
            <button
              className="slot-btn"
              onClick={() => openBookingModal('09:00 PM - 10:30 PM')}
              style={slotColors['09:00 PM - 10:30 PM'] || {}}
            >
             09:00 PM - 10:30 PM
            </button>
            <button
              className="slot-btn"
              onClick={() => openBookingModal('10:30 PM - 12:00 PM')}
              style={slotColors['10:30 PM - 12:00 PM'] || {}}
            >
            10:30 PM - 12:00 PM
            </button>
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