import React from 'react'
import { useNavigate } from 'react-router-dom';

const TDEE = () => {

    const navigate = useNavigate();
    const handleClick = (e) => {
        navigate("/results")
    }
  return (
    <>
    <form className="tdee-calculator">
        <h3>TDEE Calculator</h3>
    <input type="radio" value="Male" name="gender" /> Male
        <input type="radio" value="Female" name="gender" /> Female
        <input type="radio" value="Other" name="gender" /> Other
        <br></br>
        <input type="text" value="age"/>
        <br></br>
        <input type="text" value="weight"/>
        <br></br>
        <select>
            <option value="height">3'0</option>
            <option value="height">3'1</option>
            <option value="height">3'2</option>
            <option value="height">3'3</option>
            <option value="height">3'4</option>
            <option value="height">3'5</option>
            <option value="height">3'6</option>
            <option value="height">3'7</option>
            <option value="height">3'8</option>
            <option value="height">3'9</option>
            <option value="height">3'10</option>
            <option value="height">3'11</option>
            <option value="height">4'0</option>
            <option value="height">4'1</option>
            <option value="height">4'2</option>
            <option value="height">4'3</option>
            <option value="height">4'4</option>
            <option value="height">4'5</option>
            <option value="height">4'6</option>
            <option value="height">4'7</option>
            <option value="height">4'8</option>
            <option value="height">4'9</option>
            <option value="height">4'10</option>
            <option value="height">4'11</option>
            <option value="height">5'0</option>
            <option value="height">5'1</option>
            <option value="height">5'2</option>
            <option value="height">5'3</option>
            <option value="height">5'4</option>
            <option value="height">5'5</option>
            <option value="height">5'6</option>
            <option value="height">5'7</option>
            <option value="height">5'8</option>
            <option value="height">5'9</option>
            <option value="height">5'10</option>
            <option value="height">5'11</option>
            <option value="height">6'0</option>
            <option value="height">6'1</option>
            <option value="height">6'2</option>
            <option value="height">6'3</option>
            <option value="height">6'4</option>
            <option value="height">6'5</option>
            <option value="height">6'6</option>
            <option value="height">6'7</option>
            <option value="height">6'8</option>
            <option value="height">6'9</option>
            <option value="height">6'10</option>
            <option value="height">6'11</option>
            <option value="height">7'0</option>
            <option value="height">7'1</option>
        </select>
        <br></br>
        <select>
            <option value="select one">Select One</option>
            <option value="sedentary">Sedentary (office job)</option>
            <option value="sedentary">Light exercise (1-2 days/week)</option>
            <option value="sedentary">Moderate exercise (3-5 days/week)</option>
            <option value="sedentary">Heavy exercise (6-7 days/week)</option>
            <option value="sedentary">Athlete (2 times/day)</option>
        </select>
        <br></br>
        <button onClick={handleClick}>Calculate</button>


    </form>
    <h3>TDEE Calculated</h3>
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
    </>
  )
}

export default TDEE