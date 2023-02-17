import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react"


const TDEE = ({ currentUser, setCurrentUser }) => {
    const navigate = useNavigate();
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setCurrentUser({ ...currentUser, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      fetch(`http://localhost:3000/users/${currentUser.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(currentUser),
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          if (data.user) {
            setCurrentUser(data.user);
            navigate("/results");
          } else {
            alert(data.message);
          }
        });
    };
  
    return (
        <>
      <form className="tdee-calculator" onSubmit={handleSubmit}>
        <h3>Let's update some info</h3>
        <input
          onChange={handleChange}
          type="radio"
          value="male"
          name="gender"
          checked={currentUser.gender === "male"}
        />{" "}
        Male
        <input
          onChange={handleChange}
          type="radio"
          value="female"
          name="gender"
          checked={currentUser.gender === "female"}
        />{" "}
        Female
        <input
          onChange={handleChange}
          type="radio"
          value="other"
          name="gender"
          checked={currentUser.gender === "other"}
        />{" "}
        Other
        <br />
        <input
          onChange={handleChange}
          type="text"
          value={currentUser.age}
          name="age"
        />
        <br />
        <input
          onChange={handleChange}
          type="text"
          value={currentUser.weight}
          name="weight"
        />
        <br />
        <input
          onChange={handleChange}
          type="text"/>
          <button type="submit">Submit</button>
        </form> 
  </>
  )
   
   
}

export default TDEE