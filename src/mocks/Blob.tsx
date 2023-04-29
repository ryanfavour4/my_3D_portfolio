import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import { useRef } from "react";

const BlobGeometry = () => {
  const cube = useRef<any>();

  return (
    <mesh ref={cube} scale={1.7}>
      <OrbitControls autoRotate enableZoom={false} />
      <ambientLight intensity={0.5} />
      <directionalLight intensity={0.5} position={[2, 4, 7]} />
      <Sphere args={[1, 100, 200]} scale={1.7}>
        <MeshDistortMaterial
          color="#cb30cf"
          attach="material"
          distort={0.45}
          speed={2}
        />
      </Sphere>
    </mesh>
  );
};

export default BlobGeometry;
