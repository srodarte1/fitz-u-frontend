import React from 'react'
// import { Eventcalendar, getJson, toast } from '@mobiscroll/react'

import { useState, useEffect, useContext } from 'react'
import EachRoutine from './EachRoutine'
import EachExercise from './EachExercise.js';
import TDEE from './TDEE'
import ExerciseForm from './ExerciseForm'
import RoutineForm from './RoutineForm'
import {Context} from '../Context'
// import {useNavigate} from 'react-router-dom'


const Account = () => {
    // const navigate = useNavigate()
    const [routines, setRoutines] = useState(null)
    const [exercises, setExercises] = useState(null)
    const {user, handleDelete} = useContext(Context)


    // useEffect(() => {
    //   if(!user) {navigate('/login')}
    //   }, [user, navigate])

    useEffect(() => {
      const fetchData = async () => {
        try {
          const r = await fetch("/routines")
          const data = await r.json()
          setRoutines(data)
          
        } catch (e) {
          alert(e)
        }
      }
      if(user){fetchData()}
        
        }, [user])

      useEffect(() => {
        const fetchData = async () => {
          try {
            const r = await fetch("/exercises")
            const data = await r.json()
            setExercises(data)
           
          } catch (e) {
            alert(e)
          }
        } 
        if(user){fetchData()}
        
        }, [user])

        

        const mappedExercises = exercises && exercises.map(exercise => ( <div><EachExercise {...exercise} key = {exercise.id}  className="parent-container"/></div>))
        const mappedRoutines = routines && routines.map(routine => (
          <div key={routine.id} className="parent-container">
            <EachRoutine {...routine}/></div>))
        
        if(!user) return <h3>Loading...</h3>

  return (
    <>
    <h2>Hello, {user.first_name}</h2>
    <TDEE currentUser={user}/>
    {/* <h3>TDEE: 1200 cal/day</h3>
    <h3>H20: 3.5 L</h3> */}
    <br></br>
    <div className="routine-container">
    <h3>Your Routines</h3>
    <div>{mappedRoutines}</div>
    
    <RoutineForm setRoutines={setRoutines}/>
    </div>
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
      <div className="card-container">{mappedExercises}</div>
      
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