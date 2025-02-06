import { MAX_ROTATION, SMOOTH_ROTATION } from "../constants";

import { useLoader } from "@react-three/fiber";
import { useMouseRotation } from "../hooks/useMouseRotation";
import * as THREE from "three";

import bg from "../../../assets/scene/bg.jpeg";

function Background() {
    const colorMap = useLoader(THREE.TextureLoader, bg);
    const backgroundMeshRef = useMouseRotation({
        max_rotation: MAX_ROTATION,
        smoothness: SMOOTH_ROTATION,
    });

    return (
        <mesh ref={backgroundMeshRef} position={[0, 0, 0]}>
            <planeGeometry args={[20, 10, 1]} />
            <meshStandardMaterial map={colorMap} />
        </mesh>
    );
}

export default Background;
