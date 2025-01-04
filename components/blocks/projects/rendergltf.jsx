import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Canvas, useFrame } from "@react-three/fiber";


export function RenderGLTF({ gltfPath, cameraSpecs }) {
    const Model = ({ url }) => {
        const { scene } = useGLTF(url);

        useFrame(() => {
            scene.rotation.y += 0.002; // Adjust for desired speed
        });

        return <primitive object={scene} />;
    };

    return (
        // <Canvas>
        //     <ambientLight intensity={1} />
        //     <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        //     <Model url={gltfPath} />
        //     <OrbitControls />
        // </Canvas>

        //cameraSpecs.position = [0,5,10], cameraSpecs.fov = 2

        <Canvas camera={{ position: cameraSpecs.position, fov: cameraSpecs.fov }}>
            <ambientLight intensity={1} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <Model url={gltfPath} /* scale={[2, 2, 2]} */ />
            <OrbitControls minDistance={1} maxDistance={20} />
        </Canvas>
    );

}
