import * as THREE from 'three'
import { groundTexBC, groundTexN, groundTexR } from "../assets/Images/Texture"
import { CuboidCollider, RigidBody } from '@react-three/rapier'

export function Ground(props) {

  return (
    <RigidBody {...props} type="fixed" colliders={false}>
      <mesh receiveShadow position={[0, 0, 0]} rotation-x={-Math.PI / 2}>
        <planeGeometry args={[1000, 1000]} />
        <meshStandardMaterial attach='material' 
        map={groundTexBC} 
        roughnessMap={groundTexR} 
        normalMap={groundTexN}
        map-repeat={[250, 250]}
        roughnessMap-repeat={[250, 250]}
        normalMap-repeat={[250, 250]}
        />
      </mesh>
      <CuboidCollider args={[1000, 2, 1000]} position={[0, -2, 0]} />
    </RigidBody>
  )
}
