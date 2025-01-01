import { useState } from 'react' //importing useState from react
import reactLogo from './assets/react.svg' 
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //let counter =15;
  
  let [counter, setCounter]=useState(15); //hook in react to use state in functional component 
 
  const addValue=()=>{
     
    //counter=counter+1; // to increase the value of counter by
    setCounter(counter+1); // to set the value of counter
    setCounter(prevCounter=>prevCounter+1)
    setCounter(prevCounter=>prevCounter+1)
    setCounter(prevCounter=>prevCounter+1)
    
  
  } 
  const removeValue=()=>{
    if(counter<20){
      
}
    setCounter(counter-1); // to set the value of counter
  }


  return (
    <>
      <h1>chai aur react with vite| Santosh kumar</h1>
      <h2>Counter value: {counter}</h2>

      <button 
      onClick={addValue}
      >Add value {counter}</button>  
       
      <br />
      <button
      onClick={removeValue}
      >remove value{counter}</button>
      <p>footer:{counter}</p> 
    </>
  )
}

export default App

//code for value not exceeding 20 and not less than 0

// import React, { useState } from 'react';

// function App() {
//   const [counter, setCounter] = useState(0);

//   const addValue = () => {
//     if (counter < 20) {
//       setCounter(counter + 1);
//     } else {
//       console.log("Counter cannot exceed 20");
//     }
//   };

//   const removeValue = () => {
//     if (counter > 0) {
//       setCounter(counter - 1);
//     } else {
//       console.log("Counter cannot be less than 0");
//     }
//   };

//   return (
//     <>
//       <h1>chai aur react with vite| Santosh kumar</h1>
//       <h2>Counter value: {counter}</h2>

//       <button onClick={addValue}>Add value {counter}</button>  
       
//       <br />
//       <button onClick={removeValue}>remove value {counter}</button>
//       <p>footer: {counter}</p> 
//     </>
//   );
// }

// export default App;