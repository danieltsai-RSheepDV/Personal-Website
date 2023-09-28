
import {Canvas, useFrame} from "@react-three/fiber";
import React, {useState} from 'react'
import PWScene from "./PWScene.jsx";
import PWSkybox from "./skybox";
import {useEffect} from "react";

function AnimatedScene(){
    const psCanvas = React.useRef();
    useFrame(({clock}) => {
        const a = clock.getElapsedTime();
        psCanvas.current.rotation.y = (a/3 % 360) * Math.PI/180;
        psCanvas.current.rotation.x = Math.sin(a/4) * 1 * Math.PI/180;
    })

    return(
        <group ref={psCanvas}>
            <PWScene/>
            <PWSkybox/>
        </group>
    );
}

function CanvasScene() {

    const [resizeFactor, setResizeFactor] = useState(1);

    useEffect(() => {
        const handleResize = () => {
            setResizeFactor(1600/innerWidth);
        }

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    return (
        <div id="canvas-container">
            <Canvas
                dpr = {resizeFactor}
                camera={ {fov: 70, near: 0.1, far: 90, position: [0, 3, 10], rotation: [10 * Math.PI/180, 0, 0] }}
            >
                <ambientLight intensity={0.1} />
                <directionalLight color="white" position={[0, 0, 5]} />
                <AnimatedScene/>
            </Canvas>
        </div>
    )
}

export default CanvasScene
