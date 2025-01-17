import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei'; 

function PointSphere({ title, description, more, position, setInfo }) {
  const sphereRef = useRef();
  
  const handleClick = (event) => {
    event.stopPropagation();
    setInfo({ title, description, more, position });
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
