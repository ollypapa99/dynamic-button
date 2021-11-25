import React, { useState } from "react";
import Button from "./button";

const Input = (props) =>{
    const [tempValue, setTempValue]=useState("")

    const handleChangeCarName =(event)=>{
        setTempValue(event.target.value)
    }

    const setToForm = ()=>{
        props.setFatherCar(tempValue)
    }
    console.log(tempValue)
    // const hadleChangeCarColor = () => {

    // }
    return(
      <div>
          <input value ={tempValue} placeholder ={props.placeholder} onChange={handleChangeCarName}/>
          {/* <input value ={props.carColor} placeholder ={props.placeholder} onChange={hadleChangeCarColor}/> */}
          <Button 
           setToForm={setToForm}
           />
      </div>

    );
}
export default Input;