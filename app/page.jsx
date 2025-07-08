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
import FluidGlass from "./components/LensFlare";

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

export default function App() {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <div style={{ height: '100vh', position: 'relative', width: '100vw' }}>
        <FluidGlass 
          mode="lens" // or "bar", "cube"
          lensProps={{
            scale: 0.14,
            ior: 1.15,
            thickness: 4,
            chromaticAberration: 0.01,
            anisotropy: 0.5  
          }}
        />
    </div>
  </div>
  );
}
