// components/Background3D.js
"use client";

import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import * as THREE from "three";
import JigglyModel from "./JigglyModel";

function JiggleMaterial() {
  const shaderRef = useRef();

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uColor: { value: new THREE.Color("#ff6b6b") },
    }),
    []
  );

  useFrame((state) => {
    if (shaderRef.current) {
      shaderRef.current.uniforms.uTime.value = state.clock.elapsedTime;
    }
  });

  return (
    <shaderMaterial
      ref={shaderRef}
      vertexShader={`
        uniform float uTime;
        varying vec3 vNormal;
        void main() {
          vec3 pos = position;
          float strength = 0.05;
          pos += normal * sin(uTime * 5.0 + position.x * 10.0) * strength;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `}
      fragmentShader={`
        uniform vec3 uColor;
        varying vec3 vNormal;
        void main() {
          float lighting = dot(normalize(vNormal), vec3(0.0, 0.0, 1.0));
          gl_FragColor = vec4(uColor * lighting, 1.0);
        }
      `}
      uniforms={uniforms}
    />
  );
}

function loadModel( url ) {
  const gltf = useLoader(GLTFLoader, url);
  return <primitive object={gltf.scene} />
}

function JiggleShape({ geometry, color, speed }) {
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
    <mesh ref={ref} geometry={geometry}>
      <JiggleMaterial color={color} />
    </mesh>
  );
}


export default function Background3D() {
  const sphere = new THREE.SphereGeometry(0.5, 64, 64);
  const torus = new THREE.TorusGeometry(0.6, 0.2, 32, 100);
  const cube = new THREE.BoxGeometry(0.7, 0.7, 0.7, 32, 32, 32);
 // Replace with your model path  
  return (
    <div className="absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />

        {[...Array(1)].map((_, i) => (
          <JiggleShape key={"sphere" + i} geometry={sphere} color="#ff6b6b" speed={1 + i * 0.2} />
        ))}
        {[...Array(1)].map((_, i) => (
          <JiggleShape key={"torus" + i} geometry={torus} color="#6bc1ff" speed={0.8 + i * 0.3} />
        ))}
        {[...Array(1)].map((_, i) => (
          <JiggleShape key={"cube" + i} geometry={cube} color="#8aff6b" speed={1.5 + i * 0.4} />
        ))}
        <JigglyModel path="/espice(2).glb" scale={1} color="blue" speed={4} />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}
