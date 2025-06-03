// components/JiggleMaterial.js
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";

export function JiggleMaterial({ color = "#ffffff" }) {
  const shaderRef = useRef();

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uColor: { value: new THREE.Color(color) },
    }),
    [color]
  );

  useFrame((state) => {
    if (shaderRef.current) {
      shaderRef.current.uniforms.uTime.value = state.clock.elapsedTime;
    }
  });

  return (
    <shaderMaterial
      ref={shaderRef}
      uniforms={uniforms}
      vertexShader={`
        uniform float uTime;
        varying vec3 vNormal;
        void main() {
          vec3 pos = position;
          float strength = 0.05;
          pos += normal * sin(uTime * 5.0 + position.x * 10.0) * strength;
          vNormal = normal;
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
      attach="material"
    />
  );
}
