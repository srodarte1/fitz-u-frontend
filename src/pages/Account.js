import React from 'react'
// import { Eventcalendar, getJson, toast } from '@mobiscroll/react'

import { useState, useEffect } from 'react'
import EachRoutine from './EachRoutine'
import EachExercise from './EachExercise.js';
import TDEE from './TDEE'
import ExerciseForm from './ExerciseForm'
import RoutineForm from './RoutineForm'

const Account = ({user, setUser}) => {
    
    const [routines, setRoutines] = useState([])
    const [exercises, setExercises] = useState([])
    const [currentUser, setCurrentUser] = useState([])

    useEffect(() => {
      const fetchData = async () => {
        try {
          const r = await fetch("http://localhost:3000/users/1")
          const data = await r.json()
          setCurrentUser(data)
          
        } catch (e) {
          alert(e)
        }
      }
      fetchData()
      }, [])

    useEffect(() => {
      const fetchData = async () => {
        try {
          const r = await fetch("http://localhost:3000/routines")
          const data = await r.json()
          setRoutines(data)
          
        } catch (e) {
          alert(e)
        }
      }
      fetchData()
      }, [])

      useEffect(() => {
        const fetchData = async () => {
          try {
            const r = await fetch("http://localhost:3000/exercises")
            const data = await r.json()
            setExercises(data)
           
          } catch (e) {
            alert(e)
          }
        }
        fetchData()
        }, [])
        const handleDelete = (e) => {
          e.preventDefault()
         fetch(`http://localhost:3000/users/${user.id}`, {method: "DELETE"})
          .then(() => setUser(null))
          
          
        }

        const mappedExercises = exercises.map(exercise => <EachExercise {...exercise} key = {exercise.id} />)
        const mappedRoutines = routines.map(routine => <EachRoutine {...routine} key = {routine.id} />)

  return (
    <>
    <h2>Hello, {currentUser.first_name}</h2>
    <TDEE currentUser={currentUser}/>
    {/* <h3>TDEE: 1200 cal/day</h3>
    <h3>H20: 3.5 L</h3> */}
    <br></br>
    <h3>Today's Routine</h3>
    {mappedRoutines}
    <RoutineForm setRoutines={setRoutines}/>
    {/* <CreateRoutine exercises={exercises}/> */}
    <br></br>
    <br></br>
    {/* <div className='app'>
      <h1 className='text-center'>Workout Schedule</h1>
      <div className='calendar-container'>
        <Calendar onChange={setDate} value={date} />
      </div>
      <p className='text-center'>
        <span className='bold'>Selected Date:</span>{' '}
        {date.toDateString()}
      </p>
    </div> */}
    
    <br></br>
   
    <br></br>
    <div>
      <ExerciseForm setExercises={setExercises}/>
      {mappedExercises}
    {/* <ul>
        <li><a href="#">Warmup</a></li>
        <li><a href="#">Glute Activation</a></li>
        <li><a href="#">Cool Down</a></li>
        <li><a href="#">Ab Workouts</a></li>
        <li><a href="#">Nutrition</a></li>
        
    </ul> */}
    <button onClick={handleDelete}>Remove Account</button>
    </div>
    </>
  )
}

export default Account