import React, {useEffect, useState} from "react";

const Syntax = () => {
  const [checkBoxValue,setCheckBoxValue] = useState(false);

  useEffect(() => {
    console.log('in useEffect');
    return () => {
      console.log('in useEffect Cleanup');
    }
  },[checkBoxValue]) // When changes, the useEffect function is called again

  return (
    <div></div>
  );
}

export default Syntax;