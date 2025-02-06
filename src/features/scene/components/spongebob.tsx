import { MAX_ROTATION, SMOOTH_ROTATION } from "../constants";

import { useLoader } from "@react-three/fiber";
import { useMouseRotation } from "../hooks/useMouseRotation";
import * as THREE from "three";

import spongeBobImage from "../../../assets/scene/spongebob.png";

function SpongeBob() {
    const colorMap = useLoader(THREE.TextureLoader, spongeBobImage);
    const MeshRef = useMouseRotation({
        max_rotation: MAX_ROTATION,
        smoothness: SMOOTH_ROTATION,
    });

    return (
        <mesh ref={MeshRef} position={[3.5, -1.5, 1]}>
            <planeGeometry args={[3, 4, 1]} />
            <meshStandardMaterial
                map={colorMap}
                transparent={true}
                alphaTest={0.1}
            />
        </mesh>
    );
}

export default SpongeBob;
