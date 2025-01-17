/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

import kachariScene from '../assets/Models/KachariRuins.glb'

const Kachari = (props) => {

  const { nodes, materials } = useGLTF(kachariScene)
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={.5}>
        <mesh 
        castShadow 
        receiveShadow 
        geometry={nodes.Mesh.geometry} 
        material={materials.Roof_m} 
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_1.geometry}
          material={materials.Floor_m}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_2.geometry}
          material={materials.Wall_m}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_3.geometry}
          material={materials.Pillars_m}
        />
      </group>
    </group>
  )
}

useGLTF.preload(kachariScene)

export default Kachari;