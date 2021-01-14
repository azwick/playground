import React, {useRef} from "react";

const ToggleImg = ({primaryImg, secondaryImg}) => {
    const imageRef = useRef(null);

    return (
        <img onMouseOver={() => {
            imageRef.current.src = secondaryImg;
        }} onMouseOut={() => {
            imageRef.current.src = primaryImg;
        }} 
            src={primaryImg} 
            width="400" 
            alt="" ref={imageRef}
        />
    )
}

const ImageChangeOnMouseOver = () => {
    return (
        <div>
            <ToggleImg 
                primaryImg="/static/bw/pic-01.jpg" 
                secondaryImg="/static/ori/pic-01.jpg" 
            />
            &nbsp;&nbsp;&nbsp;
            <ToggleImg 
                primaryImg="/static/bw/pic-02.jpg" 
                secondaryImg="/static/ori/pic-02.jpg" 
            />
        </div>
    )
}

export default ImageChangeOnMouseOver;