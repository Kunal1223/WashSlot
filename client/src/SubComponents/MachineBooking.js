import React, { useEffect, useState } from 'react'

const MachineBooking = ({userId1 , userId2}) => {

  const [slotColorsM1, setSlotColorsM1] = useState({});
  const [slotColorsM2, setSlotColorsM2] = useState({});

  const userIdM1 = userId1;
  const userIdM2 = userId2;

  //for the machine M1
  useEffect(() => {
    fetch(`http://localhost:5000/api/slotColors?userId=${userIdM1}`)
      .then((response) => response.json())
      .then((data) => {
        setSlotColorsM1(data);
      })
      .catch((error) => {
        console.error('Error fetching slot colors:', error);
      });
  }, [userIdM1]);


  //For the machine M2
  useEffect(() => {
    fetch(`http://localhost:5000/api/slotColors?userId=${userIdM2}`)
      .then((response) => response.json())
      .then((data) => {
        setSlotColorsM2(data);
      })
      .catch((error) => {
        console.error('Error fetching slot colors:', error);
      });
  }, [userIdM2]);


  const openBookingModal = (slotTime) => {
    fetch('http://localhost:5000/api/bookings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ slotTime, userId:userIdM1 }),
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

  //For the Machine 2
  const openBookingModal1 = (slotTime) => {
    fetch('http://localhost:5000/api/bookings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ slotTime, userId:userIdM2 }),
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
              style={slotColorsM1['06:00 AM - 07:30 AM'] || {}}
            >
              06:00 AM - 07:30 AM
            </button>
            <button
              className="slot-btn"
              onClick={() => openBookingModal('07:30 AM - 09:00 AM')}
              style={slotColorsM1['07:30 AM - 09:00 AM'] || {}}
            >
              07:30 AM - 09:00 AM
            </button>
            <button
              className="slot-btn"
              onClick={() => openBookingModal('09:00 AM - 10:30 AM')}
              style={slotColorsM1['09:00 AM - 10:30 AM'] || {}}
            >
              09:00 AM - 10:30 AM
            </button>
            <button
              className="slot-btn"
              onClick={() => openBookingModal('10:30 AM - 12:00 PM')}
              style={slotColorsM1['10:30 AM - 12:00 PM'] || {}}
            >
              10:30 AM - 12:00 PM
            </button>
            <button
              className="slot-btn"
              onClick={() => openBookingModal('12:00 PM - 01:30 PM')}
              style={slotColorsM1['12:00 PM - 01:30 PM'] || {}}
            >
              12.00 PM - 01:30 PM
            </button>
            <button
              className="slot-btn"
              onClick={() => openBookingModal('01:30 PM - 03:00 PM')}
              style={slotColorsM1['01:30 PM - 03:00 PM'] || {}}
            >
              01:30 PM - 03:00 PM
            </button>
            <button
              className="slot-btn"
              onClick={() => openBookingModal('03:00 PM - 04:30 PM')}
              style={slotColorsM1['03:00 PM - 04:30 PM'] || {}}
            >
              03:00 PM - 04:30 PM
            </button>
            <button
              className="slot-btn"
              onClick={() => openBookingModal('04:30 PM - 06:00 PM')}
              style={slotColorsM1['04:30 PM - 06:00 PM'] || {}}
            >
              04:30 PM - 06:00 PM
            </button>
            <button
              className="slot-btn"
              onClick={() => openBookingModal('06:00 PM - 07:30 PM')}
              style={slotColorsM1['06:00 PM - 07:30 PM'] || {}}
            >
              06:00 PM - 07:30 PM
            </button>
            <button
              className="slot-btn"
              onClick={() => openBookingModal('07:30 PM - 09:00 PM')}
              style={slotColorsM1['07:30 PM - 09:00 PM'] || {}}
            >
              07:30 PM - 09:00 PM
            </button>
            <button
              className="slot-btn"
              onClick={() => openBookingModal('09:00 PM - 10:30 PM')}
              style={slotColorsM1['09:00 PM - 10:30 PM'] || {}}
            >
             09:00 PM - 10:30 PM
            </button>
            <button
              className="slot-btn"
              onClick={() => openBookingModal('10:30 PM - 12:00 AM')}
              style={slotColorsM1['10:30 PM - 12:00 AM'] || {}}
            >
            10:30 PM - 12:00 PM
            </button>
          </div>
        </div>



        <div className="slot1-booking">
          <h4>Click to book M2 Slot </h4>
          <div className="slot">
          <button
              className="slot-btn"
              onClick={() => openBookingModal1('06:01 AM - 07:31 AM')}
              style={slotColorsM2['06:01 AM - 07:31 AM'] || {}}
            >
              06:00 AM - 07:30 AM
            </button>
            <button
              className="slot-btn"
              onClick={() => openBookingModal1('07:31 AM - 09:00 AM')}
              style={slotColorsM2['07:31 AM - 09:00 AM'] || {}}
            >
              07:30 AM - 09:00 AM
            </button>
            <button
              className="slot-btn"
              onClick={() => openBookingModal1('09:01 AM - 10:30 AM')}
              style={slotColorsM2['09:01 AM - 10:30 AM'] || {}}
            >
              09:00 AM - 10:30 AM
            </button>
            <button
              className="slot-btn"
              onClick={() => openBookingModal1('10:31 AM - 12:00 PM')}
              style={slotColorsM2['10:31 AM - 12:00 PM'] || {}}
            >
              10:30 AM - 12:00 PM
            </button>
            <button
              className="slot-btn"
              onClick={() => openBookingModal1('12:01 PM - 01:30 PM')}
              style={slotColorsM2['12:01 PM - 01:30 PM'] || {}}
            >
              12.00 PM - 01:30 PM
            </button>
            <button
              className="slot-btn"
              onClick={() => openBookingModal1('01:31 PM - 03:00 PM')}
              style={slotColorsM2['01:31 PM - 03:00 PM'] || {}}
            >
              01:30 PM - 03:00 PM
            </button>
            <button
              className="slot-btn"
              onClick={() => openBookingModal1('03:01 PM - 04:30 PM')}
              style={slotColorsM2['03:01 PM - 04:30 PM'] || {}}
            >
              03:00 PM - 04:30 PM
            </button>
            <button
              className="slot-btn"
              onClick={() => openBookingModal1('04:31 PM - 06:00 PM')}
              style={slotColorsM2['04:31 PM - 06:00 PM'] || {}}
            >
              04:30 PM - 06:00 PM
            </button>
            <button
              className="slot-btn"
              onClick={() => openBookingModal1('06:01 PM - 07:30 PM')}
              style={slotColorsM2['06:01 PM - 07:30 PM'] || {}}
            >
              06:00 PM - 07:30 PM
            </button>
            <button
              className="slot-btn"
              onClick={() => openBookingModal1('07:31 PM - 09:00 PM')}
              style={slotColorsM2['07:31 PM - 09:00 PM'] || {}}
            >
              07:30 PM - 09:00 PM
            </button>
            <button
              className="slot-btn"
              onClick={() => openBookingModal1('09:01 PM - 10:30 PM')}
              style={slotColorsM2['09:01 PM - 10:30 PM'] || {}}
            >
             09:00 PM - 10:30 PM
            </button>
            <button
              className="slot-btn"
              onClick={() => openBookingModal1('10:31 PM - 12:00 AM')}
              style={slotColorsM2['10:31 PM - 12:00 AM'] || {}}
            >
            10:30 PM - 12:00 AM
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default MachineBooking