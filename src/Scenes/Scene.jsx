import React, { useState, useEffect, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { createXRStore, XR } from '@react-three/xr';
import { interactionGroups, Physics, RigidBody } from '@react-three/rapier';
import { PointerLockControls, KeyboardControls, Loader, OrbitControls } from '@react-three/drei';

import Overlay from '../components/Overlay.jsx';

import { Ground } from '../components/Ground.jsx';
import { Light } from '../components/Light.jsx';
import Player from '../components/Player.jsx';

import TreeScatter from '../components/TreeScatter.jsx';
import Baradwari from '../models/Baradwari.jsx';
import { Perf } from 'r3f-perf';

const Scene = () => {
    const store = createXRStore();
    const [isMobile, setIsMobile] = useState(false);

    // Detect mobile devices based on window width
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // You can adjust this value to your preference
        };
        window.addEventListener('resize', handleResize);
        handleResize(); // Check on initial load

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <Loader />
            <Overlay store={store} isMobile={isMobile} />

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
                        {/* <Perf /> */}
                        <XR store={store}>
                            <Suspense fallback={null}>
                                <Light />
                                <Physics gravity={[0, -30, 0]}>
                                    <Ground collisionGroups={interactionGroups([0, 1], [0])} />

                                    {/* Render Player only on desktop */}
                                    {!isMobile && <Player />}

                                    <RigidBody mass={1} type="fixed">
                                        <Baradwari />
                                    </RigidBody>

                                    {/* <TreeScatter count={10} areaSize={200} /> */}
                                </Physics>
                            </Suspense>

                            {/* Use PointerLockControls on desktop, OrbitControls on mobile */}
                            {!isMobile ? (
                                <PointerLockControls />
                            ) : (
                                <OrbitControls
                                maxPolarAngle={Math.PI / 2.1}
                                minDistance={15}
                                maxDistance={40}
                                />
                            )}
                        </XR>
                    </Canvas>
                </KeyboardControls>
                {/* <div className="absolute centered cursor">+</div> */}
            </section>
        </>
    );
};

export default Scene;
