import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

function PointSphere({ position, title, description, more, setInfo }) {
  const sphereRef = useRef();
 
  useFrame(() => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y += 0.01;
    }
  });

  const handleClick = (event) => {
    event.stopPropagation();
    setInfo({ title, description, more });
  };

  return (
    <mesh
      ref={sphereRef}
      position={position}
      onClick={handleClick}
    >
      <sphereGeometry args={[0.2, 16, 16]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}

export default PointSphere;
