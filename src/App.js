import React, { useState } from "react";
import './style.css';


  const CounterList=()=>{

    const [number, setNum] = useState(0); 
    const incNumber= () =>{
        setNum(number+1);
    };

    const decNumber= () =>{
      if(number>0){
        setNum(number-1);
      }
      else{
        alert('Sorry, you cannot go below zero.');
        setNum(0);
      }
        
    };

    const resetNumber= () =>{
        setNum(0);
    };
  return (
    <div className="App">
         <div className='main-container'>
                <div className='maincontainer-wrapper'>
                    <h4>Counter Application </h4>
                    <h1>{number}</h1>
                    <div className='button-container'>
                        <button onClick={incNumber}>Increment</button>
                        <button onClick={decNumber}>Decrement</button>
                        <button onClick={resetNumber}>Reset</button>
                    </div>
                </div>
            </div>
    </div>
  );
}

export default CounterList;
