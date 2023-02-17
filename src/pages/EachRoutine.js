import React from 'react'

const EachRoutine = ({name, rest, sets}) => {
    console.log(name)
  return (
    <div>
        <div>
            <h2>{name}</h2>
            <h3>{rest}</h3>
            <h3>{sets}</h3>
            
        </div>
        
    </div>
  )
}

export default EachRoutine