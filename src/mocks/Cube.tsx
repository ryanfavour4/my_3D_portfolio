import React, { useRef } from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { PerspectiveCamera, RenderTexture, Text, OrbitControls, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
// import terrazoImg from "../images/terrazo.png"

export const BoxGeometry = () => {
  const textRef = useRef<any>();
  // const texture = useTexture(terrazoImg)

  useFrame(
    (state) =>
      (textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 7.5)
  );
  return (
    <mesh scale={2}>
      <ambientLight intensity={0.9} />
      <OrbitControls enableZoom={false} autoRotate />
      <directionalLight  intensity={0.5} position={[2, 4, 7]} />
      <boxGeometry />
      <meshPhysicalMaterial map={null} clearcoat={1} clearcoatRoughness={0} roughness={0} metalness={0.5} >
        <RenderTexture attach="map" sourceFile={null}>
        <PerspectiveCamera makeDefault manual aspect={1 / 1} position={[0, 0, 5]} />
          <color attach="background" args={["#cb30cf"]} />
          <Text ref={textRef} fontSize={3} color="#fff">
            RYAN FAVOUR
          </Text>
        </RenderTexture>
      </meshPhysicalMaterial>
    </mesh>
  );
};
