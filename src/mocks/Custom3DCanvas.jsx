import React from "react";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const Custom3DCanvas = ({ children }) => {
  return (
    <>
      <Canvas camera={{ position: [0, 0, 4] }}>
        <Stage
          intensity={1.5}
          environment="city"
          shadows={{ type: "accumulative", colorBlend: 0, opacity: 1 }}
          adjustCamera={1}
        >
          {children}
        </Stage>
        <OrbitControls
          enableZoom={false}
          autoRotate
          makeDefault
          minPolarAngle={Math.PI / 90}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </>
  );
};

export default Custom3DCanvas;
