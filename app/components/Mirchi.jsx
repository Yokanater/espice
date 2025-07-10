import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/3d/mirchi.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle001.geometry}
        material={nodes.Circle001.material}
        position={[-0.049, -0.019, 0]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={0.821}
      />
    </group>
  )
}

useGLTF.preload('/mirchi.glb')