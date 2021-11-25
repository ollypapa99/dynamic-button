import React, { useState } from "react";
import Input from "./input";


const Form = (props) =>{

    const [carColors, setCarColors] =useState("red")
    const [fatherCar, setFatherCar] =useState("Lexus")
      


    return(

        <div>
            <h1>Form</h1>
           
           <p>This is the car of my father: {fatherCar}</p>
           {/* <p>This is my father car color: {props.carColor}</p> */}
           <Input placeholder="Enter car name" 
           fathersCar={fatherCar}
           setFatherCar={setFatherCar}
           />
           {/* <Input placeholder="Enter car color" value={props.carColor}/> */}
           
           
           
           
        </div>

    );
}
export default Form;