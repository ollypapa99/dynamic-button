import './App.css';
import Form from './Components/form';
import { useState } from 'react';
import Button from './Components/button';

function App() {

  const x = 23
  const y = 50
  const sum = x + y


  
  // const [carColor, setCarColor] = useState("")
  

  return (
    <div className="App">
      <Form 
      // carColor={carColor}
      // setCarColor={setCarColor}
      />
      
      <h3>{sum}</h3>
    </div>
  );
}

export default App;
