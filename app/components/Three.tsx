import React, { Suspense, SyntheticEvent } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Cloud,
  OrbitControls,
  Sky,
  TransformControls,
} from "@react-three/drei";
import { proxy, useSnapshot } from "valtio";

import { useRemixBridge } from "remix-three";

const modes = ["translate", "rotate", "scale"];
const state = proxy({ current: null, mode: 0 });

function Controls() {
  const snap = useSnapshot(state);
  const scene = useThree((state) => state.scene);
  return (
    <>
      <OrbitControls
        makeDefault
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 0.1}
      />
    </>
  );
}

function Rig() {
  const camera = useThree((state) => state.camera);
  return useFrame((state) => {
    camera.position.z = state.clock.getElapsedTime() * -0.001;
  });
}

export function SkyBg() {
  let RemixBridge = useRemixBridge();

  return (
    <Canvas camera={{ position: [0, 0, 20], fov: 90 }}>
      <RemixBridge>
        <ambientLight intensity={1.9} />
        <pointLight intensity={1.8} position={[0, 100, 500]} />
        <Suspense fallback={null}>
          <Cloud position={[-24, -2, -35]} speed={0.4} opacity={0.3} />
          <Cloud position={[4, 2, -15]} speed={0.2} opacity={0.4} />
          <Cloud position={[-4, 2, -10]} speed={0.2} opacity={0.2} />
          <Cloud position={[4, -2, -5]} speed={0.2} opacity={0.2} />
          <Cloud position={[8, 2, -100]} speed={0.2} opacity={0.1} />
        </Suspense>
        <Sky
          azimuth={3}
          turbidity={1}
          rayleigh={0.2}
          inclination={0.6}
          distance={3000}
        />
        {/* <Controls /> */}
        <Rig />
      </RemixBridge>
    </Canvas>
  );
}
