import { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface useMouseRotationProps {
    max_rotation: number;
    smoothness: number;
}

export function useMouseRotation(props: useMouseRotationProps) {
    const [rotationX, setRotationX] = useState(0);
    const meshRef = useRef<THREE.Mesh>(null);

    useEffect(() => {
        const mouseMoveHandler = (event: MouseEvent) => {
            const { innerWidth } = window;
            const x = (event.clientX / innerWidth) * 2 - 1;

            setRotationX(x * props.max_rotation);
        };

        window.addEventListener("mousemove", mouseMoveHandler);

        return () => {
            window.removeEventListener("mousemove", mouseMoveHandler);
        };
    }, []);

    useFrame(() => {
        const current = meshRef.current;
        if (current) {
            current.rotation.y +=
                (rotationX - current.rotation.y) * props.smoothness;
        }
    });

    return meshRef;
}
