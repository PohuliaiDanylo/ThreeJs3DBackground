import "./Scene.scss";
import Background from "./components/background";
import SpongeBob from "./components/spongebob";
import SeaWeed from "./components/seaweed";
import Blur from "./components/blur";

import { Canvas } from "@react-three/fiber";
import {
    Bloom,
    DepthOfField,
    EffectComposer,
    Noise,
    Vignette,
} from "@react-three/postprocessing";

function Scene() {
    return (
        <div className="scene-container">
            <Canvas>
                <Background />
                <SpongeBob />
                <SeaWeed />
                <ambientLight intensity={1} />
                <directionalLight position={[0, 0, 1]} color="white" />
                <Blur />
            </Canvas>
        </div>
    );
}

export default Scene;
