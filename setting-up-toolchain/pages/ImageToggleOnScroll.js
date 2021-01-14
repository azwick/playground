import React, {useEffect, useRef, useState} from "react";

const ToggleImg = ({primaryImg, secondaryImg}) => {
  const imageRef = useRef(null);

  // Code magic for finding out which img is in the middle of the view
  const isInView = () => {
    const rect = imageRef.current.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  }

  const [inView,setInView] = useState(false); // False defines the default value = no img is by default in the view

  useEffect(() => {
    setInView(isInView()); // Sets the first img in view 
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  },[]); // Only run when the component is first rendered = []


  // Everytime of scrolling, this will be called again
  const scrollHandler = () => {
      setInView(isInView());
  };

  return (
    <img 
      src={inView ? secondaryImg : primaryImg}
      width="600" 
      alt="" ref={imageRef}
    />
  );
};

const ImageToggleOnScroll = () => {
  return (
    <div>
      {[1, 2, 3, 4, 5, 6].map((myId) => {
        return (
          <div key={myId}>
            <ToggleImg 
              primaryImg={`/static/bw/pic-0${myId}.jpg`}
              secondaryImg={`/static/ori/pic-0${myId}.jpg`}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ImageToggleOnScroll;