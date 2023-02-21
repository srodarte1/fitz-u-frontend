import React, { useState } from 'react';

const ExerciseForm = ({  setExercises }) => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    tempo: '',
    category: ''
  });

  function handleSubmit(event) {
    event.preventDefault();

    fetch('/exercises', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(data => {
        
        setExercises(current => {
            
            return [data, ...current]
        }); // Assuming that the `addExercise` prop is a function that adds the new exercise to the UI or state
        setFormData({ name: '', tempo: '', category: '' }); // Reset the form data state variable
      })
      .catch(error => console.log(error));
  }

  return (
    <form className="exercise-form" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={event => setFormData({ ...formData, name: event.target.value })} />
      </label>
      <br />
      <label>
        Tempo:
        <input type="text" name="tempo" value={formData.tempo} onChange={event => setFormData({ ...formData, tempo: event.target.value })} />
      </label>
      <br />
      <label>
        Category:
        <input type="text" name="category" value={formData.category} onChange={event => setFormData({ ...formData, category: event.target.value })} />
      </label>
      <br />
      <button type="submit">Create Exercise</button>
    </form>
  );
};

export default ExerciseForm;
