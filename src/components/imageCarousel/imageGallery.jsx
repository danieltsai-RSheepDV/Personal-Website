import ImageCarouselItem from "./imageCarouselItem";
import './imageCarousel.css'
import {useCallback, useEffect, useRef, useState} from "react";
import { useAnimate } from "framer-motion"

export const fileNames = [
    "twcwy1.png",
    "twcwy2.png",
    "Yuki Katamari.png"
]

export default function ImageCarousel(){

    const itemWidth = 420;
    const aspectRatio = 2/3;

    const [imageIndices, setImageIndices] = useState([0]);
    const [reset, setReset] = useState(false);
    const [contentRef, animate] = useAnimate();
    const [animation, setAnimation] = useState(null);

    const handleResize = useCallback(() => {
        const amount = Math.ceil(window.innerWidth/itemWidth) + 1;
        const tIndices = [...imageIndices];

        if(amount > tIndices.length){
            for(let i = tIndices.length; i < amount; i++) {
                tIndices.push((tIndices[tIndices.length - 1] + 1) % fileNames.length);
            }
        }else if(amount < tIndices.length){
            for(let i = tIndices.length; i > amount; i--){
                tIndices.pop();
            }
        }

        setImageIndices(tIndices);
    }, []);

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [handleResize]);

    useEffect(() => {
        if(reset) {
            const tIndices = [...imageIndices];
            tIndices.shift();
            tIndices.push((tIndices[tIndices.length - 1] + 1) % fileNames.length);
            setImageIndices(tIndices);

            setReset(false)
            animation.play();
        }
    }, [reset])

    useEffect(() => {
        handleResize();
        setAnimation(animate(contentRef.current, {x : [0, -448]}, {duration: 5, ease: "linear", onComplete: () => {setReset(true)}}));
    }, []);

    return(
        <div className={"ImageCarousel"}>
            <div
                className={"content"}
                ref={contentRef}
            >
                {imageIndices.map((srcIndex, index) =>
                    <ImageCarouselItem
                        key={index}
                        src={"Screenshots/" + fileNames[srcIndex]}
                        width={itemWidth}
                        height={itemWidth * aspectRatio}
                        onMouseEnter={() => {animation.pause()}}
                        onMouseExit={() => {animation.play()}}
                    />
                )}
            </div>
        </div>
    );
}