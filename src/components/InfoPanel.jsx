import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from 'three';

const InfoPanel = ({ info, playerRef }) => {
  const panelRef = useRef();

  useFrame(() => {
    if (playerRef.current && panelRef.current && info) {
      // Get player's position
      const playerPosition = new THREE.Vector3();
      playerRef.current.getWorldPosition(playerPosition);

      // Get player's facing direction
      const direction = new THREE.Vector3();
      playerRef.current.getWorldDirection(direction);

      // Offset the panel position in front of the player
      const panelPosition = playerPosition.clone().add(direction.multiplyScalar(2)); // Adjust `2` for distance

      // Set the position of the panel
      panelRef.current.position.copy(panelPosition);

      // Optionally adjust rotation to face the player
      panelRef.current.lookAt(playerPosition);
    }
  });

  return (
    <group ref={panelRef}>
      <mesh>
        <planeGeometry args={[1, 0.5]} /> {/* Adjust size */}
        <meshBasicMaterial color="white" />
      </mesh>
      {/* Add text or additional components inside */}
      {info && (
        <Html>
          <div style={{ color: 'black', padding: '10px' }}>
            <h3>{info.title}</h3>
            <p>{info.description}</p>
            <a href={info.more} target="_blank" rel="noopener noreferrer">More info</a>
          </div>
        </Html>
      )}
    </group>
  );
};

export default InfoPanel;
