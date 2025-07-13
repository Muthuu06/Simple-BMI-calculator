import "./App.css";
import React, { useState } from "react";

function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setbmi] = useState("");
  const [message, setmessage] = useState("");


  let calcBmi=(e)=>
  {
    e.preventDefault();
    if(weight==0 || height==0)
    {
      alert('please enter a valid weight and height')
    }
    else{
      let bmi=(weight/(height*height)*703)
      setbmi(bmi.toFixed(3))

      if(bmi<16)
      {
        setmessage('Over Underweight')
      }
      else if(bmi>=16 && bmi<18.5)
      {
        setmessage('You are underweight')
      }
      else if(bmi>=18.5 && bmi<25){
        setmessage('You are at normal weight')
      }
      else{
        setmessage('You are overweight')
      }
    }
  }
  let reload=()=>
  {
    window.location.reload()
  }

  return (
    <div className="App">
      <div className="container">
        <h2>BMI CALCULATOR</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight (lbs)</label>
            <input type="text" placeholder="Enter your weight" value={weight} onChange={(e)=> setWeight(e.target.value)} />
          </div>
          <div>
            <label>Height(in)</label>
            <input type="text" placeholder="Enter your height" value={height} onChange={(e)=> setHeight(e.target.value)}/>
          </div>
          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn btn-outline" onClick={reload} type="submit">
              Reload
            </button>
          </div>
          <div className="center">
            <h3>Your BMI is : {bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );

}

export default App;
