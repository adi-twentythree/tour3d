import {Sky,  Environment } from '@react-three/drei';
import {
    SkyHDRI,
    RoseHDRI,
    MeadowHDRI
} from '../assets/Hdri/Hdri'

export const Light = () => {

    return (
        <>
            <Environment files={RoseHDRI} background/>

         


            <directionalLight
                shadow-normalBias={0.06}
                position={[20, 30, 10]}
                intensity={5}
                shadow-mapSize={[1024, 1024]}
                shadow-camera-near={1}
                shadow-camera-far={50}
                shadow-camera-top={50}
                shadow-camera-right={50}
                shadow-camera-bottom={-50}
                shadow-camera-left={-50}
                castShadow 
            />

            {/* <fog attach="fog" args={['white', 0, 100]} /> */}


        </>
    )

}