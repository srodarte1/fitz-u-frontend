import React from 'react'
import { useNavigate } from 'react-router-dom';

const Results = () => {
    const navigate = useNavigate();
    const handleClick = () =>{
        navigate("/account")
    }
  return (
    <div>
        <h2>Great! Thanks! </h2>
        <h3>We'll store that for later, when calculating your TDEE!</h3>
        <h3>Here's some more info on calculating your TDEE</h3>
    <p>Starting with your baseline calories, or your TOTAL DAILY ENERGY EXPENDITURE (TDEE) . Consists of a few things. !. BMR (basil metabolic rate), NEAT (non-exercise activity thermogenesis), TEF (thermic effect of food), and EAT (exercise activity thermogenesis).</p>
       <p> Use the Harris Benedit Equation
        Using the imperial scale (weight in lb and height in inches)
        BMR = 655.1 + (4.53 x weight in lbs) + (4.7 x height in inches) - (4.7 x age in years)</p>

        <p>After calculating your BMR, you can multiply your BMR by an activity level factor. These are just examples, you can go with any value in between if you think that is more appropriate in your situation. </p>

        <p>Sedentaty (little to no exercise): BMR x 1.2
        Light Activity (light exercise or training one to three days per week): BMR x 1.375
        Moderate Activity (moderate exercise or training three to five days per week): BMR x 1.55
        High Activity (hard exercise or training fiver to seven days per week): BMR x 1.725
        Athlete (really hard exercise and a physical job or training two times a day): BMR x 1.9 

        And there you have your extimated TDEE!
        
    </p>
        <button onClick={handleClick}>Next</button>
    </div>
  )
}

export default Results