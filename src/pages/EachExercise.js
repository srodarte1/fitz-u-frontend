import React from "react";

const EachExercise = ({ name, category, tempo }) => {

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent the form from submitting
  
    const routine = e.target.elements.routine.value;
    const exercise = {
      name,
      category,
      tempo
    };
  
    fetch("/routines", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ routine, exercise })
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to add exercise to routine");
        }
        alert("Exercise added to routine successfully");
      })
      .catch((error) => {
        console.error(error);
        alert(error.message);
      });
  };
  
  return (
    <>
      <div className="exercise-container">
        <h3>{name}</h3>
        <p>{category}</p>
        <p>{tempo}</p>
        <form className="add-exercise" onSubmit={handleSubmit}>
          <label htmlFor="routine">Routine:</label>
          <select id="routine">
            <option value="heavy-chest">Heavy Chest</option>
            <option value="leg-day">Leg Day</option>
            <option value="back-day">Back Day</option>
            <option value="shoulder-day">Shoulder Day</option>
          </select>
          <br />
          <br />
          <button type="submit">Add exercise to workout</button>
        </form>
      </div>
    </>
  );
};

export default EachExercise;
