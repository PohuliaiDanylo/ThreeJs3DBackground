function Blur() {
    return (
        <mesh position={[0, 0, 0.05]}>
            <planeGeometry args={[20, 10, 1]} />
            <meshStandardMaterial transparent={true} opacity={0.5} />
        </mesh>
    );
}

export default Blur;
