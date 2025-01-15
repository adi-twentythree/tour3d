import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

import baradwariScene from '../assets/Models/Baradwari.glb'

const Baradwari = (props) => {

  const { nodes, materials } = useGLTF(baradwariScene)
  return (
    <group {...props} dispose={null}>
      <group position={[-0.584, 10.805, 1.133]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.baradwari_with_motif003.geometry}
          material={nodes.baradwari_with_motif003.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.baradwari_with_motif003_1.geometry}
          material={nodes.baradwari_with_motif003_1.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.baradwari_with_motif003_2.geometry}
          material={nodes.baradwari_with_motif003_2.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.baradwari_with_motif003_3.geometry}
          material={nodes.baradwari_with_motif003_3.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.baradwari_with_motif003_4.geometry}
          material={nodes.baradwari_with_motif003_4.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.baradwari_with_motif003_5.geometry}
          material={nodes.baradwari_with_motif003_5.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.baradwari_with_motif003_6.geometry}
          material={nodes.baradwari_with_motif003_6.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.baradwari_with_motif003_7.geometry}
          material={nodes.baradwari_with_motif003_7.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.baradwari_with_motif003_8.geometry}
          material={nodes.baradwari_with_motif003_8.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.baradwari_with_motif003_9.geometry}
          material={nodes.baradwari_with_motif003_9.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.baradwari_with_motif003_10.geometry}
          material={nodes.baradwari_with_motif003_10.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.baradwari_with_motif003_11.geometry}
          material={nodes.baradwari_with_motif003_11.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.baradwari_with_motif003_12.geometry}
          material={nodes.baradwari_with_motif003_12.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.baradwari_with_motif003_13.geometry}
          material={nodes.baradwari_with_motif003_13.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.baradwari_with_motif003_14.geometry}
          material={nodes.baradwari_with_motif003_14.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.baradwari_with_motif003_15.geometry}
          material={nodes.baradwari_with_motif003_15.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.baradwari_with_motif003_16.geometry}
          material={nodes.baradwari_with_motif003_16.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.baradwari_with_motif003_17.geometry}
          material={nodes.baradwari_with_motif003_17.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.baradwari_with_motif003_18.geometry}
          material={nodes.baradwari_with_motif003_18.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.baradwari_with_motif003_19.geometry}
          material={nodes.baradwari_with_motif003_19.material}
        />
      </group>
    </group>
  )
}


useGLTF.preload(baradwariScene)

export default Baradwari;