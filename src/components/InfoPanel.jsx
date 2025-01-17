import React from 'react';
import { Text } from '@react-three/drei';  // For 3D text rendering

function InfoPanel({ info, onClose }) {
  if (!info) return null;  // If no info is available, don't render the panel

  return (
    <group position={info.position}>
      <Text
        fontSize={1}
        color="white"
        anchorX="center"
        anchorY="middle"
        position={[0, 0, 0]}
      >
        {info.title}
      </Text>
      <Text
        fontSize={0.5}
        color="white"
        anchorX="center"
        anchorY="middle"
        position={[0, -1.5, 0]}
      >
        {info.description}
      </Text>
      <Text
        fontSize={0.4}
        color="yellow"
        anchorX="center"
        anchorY="middle"
        position={[0, -2.5, 0]}
      >
        {/* <a href={info.more} target="_blank" rel="noopener noreferrer">
          Learn more
        </a> */}
      </Text>
      <Text
        fontSize={0.4}
        color="red"
        anchorX="center"
        anchorY="middle"
        position={[0, -3.5, 0]}
        onClick={onClose}
      >
        Close
      </Text>
    </group>
  );
}

export default InfoPanel;
