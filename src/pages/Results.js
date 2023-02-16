import React from 'react'
import { useNavigate } from 'react-router-dom';

const Results = () => {
    const navigate = useNavigate();
    const handleClick = () =>{
        navigate("/account")
    }
  return (
    <div>
        <h2>Results</h2>
        <h3>TDEE: </h3>
        <h3>Daily H20 Consupmption: </h3>
        <button onClick={handleClick}>Next</button>
    </div>
  )
}

export default Results