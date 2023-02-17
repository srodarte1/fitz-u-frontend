import React, {useState} from 'react'

const RoutineForm = ({setRoutines}) => {
    const [formData, setFormData] = useState({
        name: '',
        rest: '',
        sets: '',
        exercise_id: '',
        user_id: '',
      });
      function handleSubmit(event) {
        event.preventDefault();
    
        fetch('http://localhost:3000/routines', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        })
          .then(response => response.json())
          .then(data => {
            
            setRoutines(current => {
                
                return [data, ...current]
            }); // Assuming that the `addExercise` prop is a function that adds the new exercise to the UI or state
            setFormData({ name: '', rest: '', sets: '' }); // Reset the form data state variable
          })
          .catch(error => console.log(error));
      }
    
      return (
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" value={formData.name} onChange={event => setFormData({ ...formData, name: event.target.value })} />
          </label>
          <br />
          <label>
            Rest:
            <input type="text" name="rest" value={formData.rest} onChange={event => setFormData({ ...formData, rest: event.target.value })} />
          </label>
          <br />
          <label>
            Sets:
            <input type="text" name="sets" value={formData.sets} onChange={event => setFormData({ ...formData, sets: event.target.value })} />
          </label>
          <br />
          <button type="submit">Create Routine</button>
        </form>
      );
    };
 

export default RoutineForm