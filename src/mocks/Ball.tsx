import { OrbitControls } from '@react-three/drei';
import React, { useRef } from 'react'

const SphereGeometry = () => {
  const cube = useRef<any>()
  
  return (
    <mesh ref={cube} scale={1.3}>
      <ambientLight intensity={0.5} />
      <OrbitControls />
      <directionalLight intensity={0.6} position={[2, 4, 7]} />
      <sphereGeometry args={[1.3, 40]} />
      <meshStandardMaterial color="#ef0af3" />
  </mesh>
  );
};

export default SphereGeometry
