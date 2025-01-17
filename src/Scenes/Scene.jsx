import React, { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { PointerLockControls, KeyboardControls, Loader } from '@react-three/drei';
import { interactionGroups, Physics, RigidBody } from '@react-three/rapier';
import { createXRStore, XR } from '@react-three/xr';

// import * as THREE from 'three'

import Overlay from '../components/Overlay.jsx';

import { Ground } from '../components/Ground.jsx';
import Player from '../components/Player.jsx';
import { Light } from '../components/Light.jsx';
import PointSphere from '../components/PointSphere.jsx';
// import InfoPanel from '../components/InfoPanel.jsx';

import Baradwari from '../models/Baradwari.jsx';
import TreeScatter from '../components/TreeScatter.jsx';
import { Perf } from 'r3f-perf';

const Scene = () => {
    const store = createXRStore();
    const [showOverlay, setShowOverlay] = useState(true);

    // const [info, setInfo] = useState(null);
    
    // const handleClick = (sphereInfo) => {
    //     setInfo(sphereInfo);
    // };

    // const spheresData = [
    //     { position: [11, 1, -5], title: 'Sphere 1', description: 'Description for sphere 1', more: 'https://example.com/sphere1' },
    //     { position: [8, 1, 3], title: 'Sphere 2', description: 'Description for sphere 2', more: 'https://example.com/sphere2' },
    //     { position: [13, 5, 0], title: 'Sphere 3', description: 'Description for sphere 3', more: 'https://example.com/sphere3' },
    //     { position: [13, 6, 1], title: 'Sphere 4', description: 'Description for sphere 4', more: 'https://example.com/sphere4' },
    // ];

    return (
        <>
            <Loader />
            {showOverlay && <Overlay setShowOverlay={setShowOverlay} store={store} />}

            <section className="relative h-screen">
                <KeyboardControls
                    map={[
                        { name: 'forward', keys: ['ArrowUp', 'w', 'W'] },
                        { name: 'backward', keys: ['ArrowDown', 's', 'S'] },
                        { name: 'left', keys: ['ArrowLeft', 'a', 'A'] },
                        { name: 'right', keys: ['ArrowRight', 'd', 'D'] },
                        { name: 'jump', keys: ['Space'] },
                        { name: 'run', keys: ['ShiftLeft'] },
                    ]}
                >
                    <Canvas shadows camera={{ fov: 45, near: 0.1, far: 1000, position: [0, 1.6, 3] }}>
                        <Perf />
                        <XR store={store}>
                            <Suspense fallback={null}>

                                <Light />
                                <Physics gravity={[0, -30, 0]}>
                                    <Ground collisionGroups={interactionGroups([0, 1], [0])} />
                                    <Player />

                                    <RigidBody mass={1} type="dynamic">
                                        <Baradwari />
                                    </RigidBody>

                                    <TreeScatter count={10} areaSize={200} />

                                    {/* {spheresData.map((sphere, index) => (
                                        <PointSphere
                                            key={index}
                                            position={sphere.position}
                                            title={sphere.title}
                                            description={sphere.description}
                                            more={sphere.more}
                                        // setInfo={() => handleClick}
                                        />
                                    ))} */}

                                </Physics>
                            </Suspense>

                            {!showOverlay && <PointerLockControls />}

                        </XR>
                    </Canvas>
                </KeyboardControls>

                <div className="absolute centered cursore">+</div>
            </section>
        </>
    );
};

export default Scene;