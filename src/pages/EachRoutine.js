import React from 'react'

const EachRoutine = ({name, rest, sets}) => {
    console.log(name)
  return (
    <div>
        <div className="card-container" >
            <h3>{name}</h3>
            <br></br>
            <h3>{rest} seconds of rest </h3>
            <br></br>
            <br></br>
            <h3>{sets}</h3>
            
        </div>
        
    </div>
  )
}

export default EachRoutine