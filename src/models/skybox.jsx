import * as THREE from "three";
import { useLoader } from '@react-three/fiber'

export default function PWSkybox(){
    const texture = useLoader(THREE.TextureLoader, "skybox.png")

    return (
        <mesh rotation={[-45 * Math.PI/180, -15 * Math.PI/180, 0]}>
            <sphereGeometry args={[90, 60, 40]} />
            <meshBasicMaterial map={texture} side={THREE.BackSide} />
        </mesh>
    );
}