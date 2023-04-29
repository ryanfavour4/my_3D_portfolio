import React, { useMemo } from "react";
import { Line, Sphere } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";

// You can draw the shape in this way if do not want to import a ready-to-use 3D model.
const Shape = () => {
  const rimsColor = "#61dbfb"
  const points = useMemo(
    () =>
      new THREE.EllipseCurve(0, 0, 2.9, 1.15, 0, 2 * Math.PI, true, 0).getPoints(
        40
      ),
    []
  );
  return (
    <group>
      <Line worldUnits points={points} color={rimsColor} lineWidth={0.3} />
      <Line
        worldUnits
        points={points}
        color={rimsColor}
        lineWidth={0.3}
        rotation={[0, 0, 1]}
      />
      <Line
        worldUnits
        points={points}
        color={rimsColor}
        lineWidth={0.3}
        rotation={[0, 0, -1]}
      />
      <Sphere args={[0.55, 64, 64]}>
        <meshBasicMaterial color={[8.08, 6.56, 4.32]} toneMapped={false} />
      </Sphere>
    </group>
  );
};

const Atom = () => {
  return (
    <>
      <Shape />
      <EffectComposer>
        <Bloom mipmapBlur luminanceThreshold={1} radius={0.7} />
      </EffectComposer>
    </>
  );
};

export default Atom;
