import React from "react";
import Container from "./Container";
 // Make sure to import the CSS file

const RadioButton = () => {
  return (
    <div>
      <Container>
        <input className="w-10 h-10 appearance-none border-[2px]  rounded-full checked:bg-red-500 valid:border-green-500 outline outline-red-500" type="radio" />
      </Container>
    </div>
  );
};

export default RadioButton;
