import React from 'react'
// import { Eventcalendar, getJson, toast } from '@mobiscroll/react'
import Calendar from 'react-calendar';
import { useState } from 'react'



const Account = () => {
    const [date, setDate] = useState(new Date());
  return (
    <>
    <h2>Hello, Sarah!</h2>
    <h3>TDEE: 1200 cal/day</h3>
    <h3>H20: 3.5 L</h3>
    <br></br>
    <div className='app'>
      <h1 className='text-center'>Workout Schedule</h1>
      <div className='calendar-container'>
        <Calendar onChange={setDate} value={date} />
      </div>
      <p className='text-center'>
        <span className='bold'>Selected Date:</span>{' '}
        {date.toDateString()}
      </p>
    </div>

    <div>
    <ul>
        <li><a href="#">Warmup</a></li>
        <li><a href="#">Glute Activation</a></li>
        <li><a href="#">Cool Down</a></li>
        <li><a href="#">Ab Workouts</a></li>
        <li><a href="#">Nutrition</a></li>
        
    </ul>
    </div>
    </>
  )
}

export default Account