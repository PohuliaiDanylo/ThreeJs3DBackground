import { MAX_ROTATION, SMOOTH_ROTATION } from "../constants";

import { useLoader } from "@react-three/fiber";
import { useMouseRotation } from "../hooks/useMouseRotation";
import * as THREE from "three";

import seaweed1 from "../../../assets/scene/seaweed/seaweed1.png";
import seaweed2 from "../../../assets/scene/seaweed/seaweed2.png";
import seaweed3 from "../../../assets/scene/seaweed/seaweed3.png";
import seaweed4 from "../../../assets/scene/seaweed/seaweed4.png";
import seaweed5 from "../../../assets/scene/seaweed/seaweed5.png";
import seaweed6 from "../../../assets/scene/seaweed/seaweed6.png";
import seaweed7 from "../../../assets/scene/seaweed/seaweed7.png";
import seaweed8 from "../../../assets/scene/seaweed/seaweed8.png";
import seaweed9 from "../../../assets/scene/seaweed/seaweed9.png";
import seaweed10 from "../../../assets/scene/seaweed/seaweed10.png";
import seaweed11 from "../../../assets/scene/seaweed/seaweed11.png";
import seaweed12 from "../../../assets/scene/seaweed/seaweed12.png";
import seaweed13 from "../../../assets/scene/seaweed/seaweed13.png";

const seaweedTexturesPaths = [
    seaweed1,
    seaweed2,
    seaweed3,
    seaweed4,
    seaweed5,
    seaweed6,
    seaweed7,
    seaweed8,
    seaweed9,
    seaweed10,
    seaweed11,
    seaweed12,
    seaweed13,
];

const positions: [number, number, number][] = [
    [4, -2, 0],
    [3, -2.2, -0.2],
    [-2, -1.8, 0],
    [-4.1, -1.8, 0],
    [-4.1, 1.8, 0],
    [4, 1.8, 0],
    [2, 2.3, 0],
];

const rotations: number[] = [0.5, 0, 0, -0.7, -2, 3, 3];

function SeaWeed() {
    const seaweedTextures = useLoader(
        THREE.TextureLoader,
        seaweedTexturesPaths
    );

    return (
        <group position={[0, 0, 2.3]}>
            {positions.map((position, index) => {
                const MeshRef = useMouseRotation({
                    max_rotation: MAX_ROTATION,
                    smoothness: SMOOTH_ROTATION,
                });

                return (
                    <mesh
                        rotation-z={rotations[index]}
                        key={index}
                        ref={MeshRef}
                        position={position}
                    >
                        <planeGeometry args={[1.5, 1.5, 1]} />
                        <meshStandardMaterial
                            map={
                                seaweedTextures[index % seaweedTextures.length]
                            }
                            transparent={true}
                            alphaTest={0.1}
                        />
                    </mesh>
                );
            })}
        </group>
    );
}

export default SeaWeed;
