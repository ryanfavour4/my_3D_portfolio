import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

const SphereGeometry = () => {
  const cube = useRef<any>();

  return (
    <mesh ref={cube} scale={1.3}>
      <ambientLight intensity={0.5} />
      <OrbitControls />
      <directionalLight intensity={0.6} position={[2, 4, 7]} />
      <Sphere args={[1, 100, 200]} scale={1.3}>
        <MeshDistortMaterial
          color="#ef0af3"
          attach="material"
          distort={0.6}
          speed={2}
        />
      </Sphere>
    </mesh>
  );
};

function Scene() {
  return (
    <Canvas>
      <SphereGeometry />
    </Canvas>
  );
}

export default Scene;
