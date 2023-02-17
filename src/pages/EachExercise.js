import React from 'react'

const EachExercise = ({name, category, tempo}) => {
  
  return (
    <>
    <div className="exercise-container">
         <h3>{name}</h3>
         <p>{category}</p>
         <p>{tempo}</p>
    </div>
        
    </>
  )
}


export default EachExercise