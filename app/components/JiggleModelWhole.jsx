"use client";

import { useGLTF } from "@react-three/drei";
import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function JigglyModelWhole({ path, scale = 1, speed = 1 }) {
  const { scene } = useGLTF(path);
  const wrapper = useRef();      // Controls rotation + scale (jiggle)
  const modelGroup = useRef();   // Holds the centered model

  const t = useRef(Math.random() * 100);

  useEffect(() => {
    // Center the model
    const box = new THREE.Box3().setFromObject(scene);
    const center = new THREE.Vector3();
    box.getCenter(center);
    modelGroup.current.position.sub(center);

    // Stand it upright — flip X axis to rotate from flat to vertical
    modelGroup.current.rotation.x = -Math.PI / 2;
  }, [scene]);

  useFrame((_, delta) => {
    t.current += delta * speed;

    const jiggle = Math.sin(t.current * 1) * 0.05;
    const squash = 1 - jiggle;

    wrapper.current.scale.set(0.4 + jiggle, squash, 1 + jiggle);
    wrapper.current.rotation.y += delta * 0.5;
    wrapper.current.rotation.z += delta * 0.5;
    wrapper.current.position.y = Math.cos(t.current * 2) * 0.1;
    
  });

  return (
    <group ref={wrapper} scale={0.1}>
      <group ref={modelGroup}>
        {scene.children.map((child, i) =>
          child.isMesh ? (
            <mesh
              key={i}
              geometry={child.geometry}
              material={child.material.clone()}
              castShadow
              receiveShadow
            />
          ) : null
        )}
      </group>
    </group>
  );
}

