import React from 'react'
// import { Eventcalendar, getJson, toast } from '@mobiscroll/react'
import Calendar from 'react-calendar';
import { useState, useEffect } from 'react'
import CreateRoutine from './pages/CreateRoutine'



const Account = () => {
    const [date, setDate] = useState(new Date());
    const [routines, setRoutines] = useState([])
    const [exercises, setExercises] = useState([])

    useEffect(() => {
      const fetchData = async () => {
        try {
          const r = await fetch("http://localhost:3001/routines")
          const data = await r.json()
          setRoutines(data)
          console.log(data)
        } catch (e) {
          alert(e)
        }
      }
      fetchData()
      }, [])
      useEffect(() => {
        const fetchData = async () => {
          try {
            const r = await fetch("http://localhost:3001/exercises")
            const data = await r.json()
            setExercises(data)
            console.log(data)
          } catch (e) {
            alert(e)
          }
        }
        fetchData()
        }, [])
  return (
    <>
    <h2>Hello, Sarah!</h2>
    <h3>TDEE: 1200 cal/day</h3>
    <h3>H20: 3.5 L</h3>
    <br></br>
    <CreateRoutine />
    <br></br>
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
    
    <br></br>
   
    <br></br>
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