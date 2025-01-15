import { Canvas } from '@react-three/fiber'
import { XR, createXRStore } from '@react-three/xr'
import { useState } from 'react'

const store = createXRStore()

const Scenenew = () => {
  // const [red, setRed] = useState(false)
  // return (
  //   <>
  //     <button
  //       className='absolute bg-black/85 rounded-md border-none font-bold text-white p-3 px-8 text-2xl bottom-4 left-1/2 shadow-lg transform -translate-x-1/2'
  //       onClick={() => store.enterVR()}
  //     >
  //       Enter VR
  //     </button>
  //     <Canvas>
  //       <XR store={store}>
  //         <mesh pointerEventsType={{ deny: 'grab' }} onClick={() => setRed(!red)} position={[0, 1, -1]}>
  //           <boxGeometry />
  //           <meshBasicMaterial color={red ? 'red' : 'blue'} />
  //         </mesh>
  //       </XR>
  //     </Canvas>
  //   </>
  // )
}

export default Scenenew;