import React, { useRef, useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { PointerLockControls, KeyboardControls, Html } from '@react-three/drei';
import { interactionGroups, Physics, RigidBody } from '@react-three/rapier';
import { createXRStore, XR, XROrigin } from '@react-three/xr';

import * as THREE from 'three'

import { Ground } from '../components/Ground.jsx';
import Player from '../components/Player.jsx';
import { Light } from '../components/Light.jsx';
import PointSphere from '../components/PointSphere.jsx';
import InfoPanel from '../components/InfoPanel.jsx';

import Baradwari from '../models/Baradwari.jsx';
import TreeScatter from '../components/TreeScatter.jsx';



const Scene = () => {
    const store = createXRStore();
    // const playerRef = useRef();

    // const [info, setInfo] = useState(null);
    const [showOverlay, setShowOverlay] = useState(true);

    // const handleClick = (info) => {
    //     setInfo(info);
    // };

    const handleScreenClick = () => {
        setShowOverlay(false);
    };

    const spheresData = [
        { position: [11, 1, -5], title: 'Sphere 1', description: 'Description for sphere 1', more: 'https://example.com/sphere1' },
        { position: [8, 1, 3], title: 'Sphere 2', description: 'Description for sphere 2', more: 'https://example.com/sphere2' },
        { position: [13, 5, 0], title: 'Sphere 3', description: 'Description for sphere 3', more: 'https://example.com/sphere3' },
        { position: [13, 6, 1], title: 'Sphere 4', description: 'Description for sphere 4', more: 'https://example.com/sphere4' },
    ];

    return (
        <section className="relative h-screen" onClick={handleScreenClick}>
            {showOverlay && (
                <div className="absolute z-50 bg-white/0 backdrop-blur-lg shadow-lg h-screen w-screen flex">
                    <button
                        className="absolute bg-black/85 rounded-md border-none font-bold text-white p-3 px-8 cursor-pointer text-2xl bottom-4 left-1/2 shadow-lg transform -translate-x-1/2"
                        onClick={() => store.enterVR()}
                    >
                        Enter VR
                    </button>
                </div>
            )}

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
                <Canvas shadows camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 1.6, 3] }}>
                    <XR store={store}>
                        <Suspense fallback={<Html><span>Loading...</span></Html>}>

                            <Light />
                            <Physics gravity={[0, -30, 0]}>
                                <Ground collisionGroups={interactionGroups([0, 1], [0])} />
                                <Player />

                                <RigidBody>
                                    <Baradwari />
                                </RigidBody>

                                <TreeScatter count={10} areaSize={200} />

                                {spheresData.map((sphere, index) => (
                                    <PointSphere
                                        key={index}
                                        position={sphere.position}
                                        title={sphere.title}
                                        description={sphere.description}
                                        more={sphere.more}
                                        setInfo={() => handleClick(sphere)}
                                    />
                                ))}

                                {/* <InfoPanel info={info} playerRef={playerRef} /> */}
                            </Physics>
                        </Suspense>
                        <PointerLockControls />
                    </XR>
                </Canvas>
            </KeyboardControls>

            <div className="absolute centered cursore">+</div>


        </section>
    );
};

export default Scene;