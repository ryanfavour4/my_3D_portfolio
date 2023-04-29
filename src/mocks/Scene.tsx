import { Canvas } from "@react-three/fiber";

function Scene({children, camera }:any) {
  return (
    <Canvas camera={camera}>
      {children}
    </Canvas>
  );
}

export default Scene;
