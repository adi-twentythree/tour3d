import { useFrame } from '@react-three/fiber'
import { useXRControllerLocomotion, useXRInputSourceState, XROrigin } from '@react-three/xr'
import * as THREE from 'three'

export function VRPlayerControl({ playerJump, playerMove }) {
  const controllerRight = useXRInputSourceState('controller', 'right')

  const physicsMove = (velocity, rotationYVelocity) => {
    playerMove({
      forward: false,
      backward: false,
      left: false,
      right: false,
      rotationYVelocity,
      velocity: undefined,
      newVelocity: velocity,
    })
  }

  useXRControllerLocomotion(physicsMove, { speed: 5 })

  useFrame(() => {
    if (controllerRight?.gamepad?.['a-button']?.state === 'pressed') {
      playerJump?.()
    }
  })

  return <XROrigin position={[0, 0, 40]} />
}
