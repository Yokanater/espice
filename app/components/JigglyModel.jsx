// components/JigglyModel.js
"use client";

import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { JiggleMaterial } from "./JiggleMaterial";

export default function JigglyModel({ path, scale = 1, color = "#ffffff", speed = 1 }) {
  const { scene } = useGLTF(path);
  const ref = useRef();
  const time = useRef(Math.random() * 100);

  useFrame(() => {
    time.current += 0.01 * speed;
    ref.current.position.x = Math.sin(time.current) * 2;
    ref.current.position.y = Math.cos(time.current) * 2;
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.01;
  });

  return (
    <group ref={ref} scale={scale}>
      {scene.children.map((child, i) =>
        child.isMesh ? (
          <mesh
            key={i}
            geometry={child.geometry}
            position={child.position}
            rotation={child.rotation}
            scale={child.scale}
          >
            <JiggleMaterial color={color} />
          </mesh>
        ) : null
      )}
    </group>
  );
}
