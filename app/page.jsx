"use client";

import Navbar from "./components/Navbar";
import Image from "next/image";
import big from "../app/big3.png";
import { Suspense } from "react";
import { useGLTF } from "@react-three/drei";

import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Physics, RigidBody, CuboidCollider } from '@react-three/rapier';
import Background3D from "./components/3DBackground";

function Donut() {
  const ref = useRef();

  return (
    <RigidBody ref={ref} restitution={0.5} friction={0.5}>
      <mesh castShadow>
        <torusGeometry args={[1, 0.4, 16, 100]} />
        <meshStandardMaterial color="hotpink" />
      </mesh>
    </RigidBody>
  );
}

function InvisibleWall() {
  return (  
    <RigidBody type="fixed" colliders={false}>
      <CuboidCollider args={[5, 5, 0.1]} position={[0, 0, 0]} />
    </RigidBody>
  );
}

export default function App() {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
    {/* <Canvas camera={{ position: [0, 2, 5], fov: 50 }} shadows>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} castShadow />
      <Physics gravity={[0, -9.81, 0]}>
        <Donut />
        <InvisibleWall />
      </Physics>
      <OrbitControls />
    </Canvas> */}
    <Background3D/>
    </div>
  );
}
