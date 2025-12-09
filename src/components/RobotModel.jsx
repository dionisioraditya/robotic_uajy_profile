import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Sparkles } from '@react-three/drei';

const HologramGlobe = () => {
    const meshRef = useRef();

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        if (meshRef.current) {
            meshRef.current.rotation.y = time * 0.1;
            meshRef.current.rotation.z = time * 0.05;
        }
    });

    return (
        <group scale={2.5}>
            <Sphere args={[1, 64, 64]} ref={meshRef}>
                <MeshDistortMaterial
                    color="#00f3ff"
                    emissive="#00f3ff"
                    emissiveIntensity={0.5}
                    wireframe
                    transparent
                    opacity={0.3}
                    distort={0.3}
                    speed={1.5}
                />
            </Sphere>
            <Sparkles count={200} scale={3} size={2} speed={0.4} opacity={0.5} color="#00f3ff" />
        </group>
    );
};

const RobotModel = () => {
    return (
        <div style={{ height: '100%', width: '100%', position: 'absolute', top: 0, left: 0, zIndex: 0 }}>
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1.5} color="#00f3ff" />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff00ff" />

                <HologramGlobe />

                <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
            </Canvas>
        </div>
    );
};

export default RobotModel;
