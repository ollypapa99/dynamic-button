import React, { useState } from "react";

const Button = (props) =>{

    return(
      <div>
          <button onClick={props.setToForm}>Log in name</button>
          {/* <button onClick={changeCarColor}>car color</button> */}
      </div>

    );
}
export default Button;