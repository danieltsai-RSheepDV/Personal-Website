import './imageCarousel.css'
import {useState} from "react";

export default function ImageCarouselItem({src, width, height, onMouseEnter, onMouseExit}){

    const [scale, setScale] = useState(1);
    const [zIndex, setZIndex] = useState(0);

    const expand = (event) => {
        setScale(1.2);
        setZIndex(1);
        onMouseEnter();
    }
    const shrink = (event) => {
        setScale(1)
        setZIndex(0);
        onMouseExit();
    }

    return(
        <img
            src={src}
            onMouseEnter={expand}
            onMouseLeave={shrink}
            width={width} height={height}
            style={{transform: 'scale(' + scale + ')', zIndex: zIndex}}
        />
    );
}