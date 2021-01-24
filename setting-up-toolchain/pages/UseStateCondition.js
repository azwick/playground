import React, { useEffect, useState } from "react";

const inputElement = () => {
  const randomBoolean = Math.random() >= 0.5;
  const [isLoading, setIsLoading] = useState(randomBoolean === true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    },2000);
  })

  return isLoading ? <div>Loading...</div> : <input placeholder="Enter some text" />;
}

export default inputElement;