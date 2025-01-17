import React from 'react';
import { Link } from 'react-router-dom';
import { Back } from '../assets/Icons/Icon';
import { CR } from '../assets/Images/Images';

const Overlay = ({ setShowOverlay, store }) => {

    return (
        <div className="absolute z-50 bg-white p-5 h-screen w-screen flex border-4 border-white">
            {/* Left Section */}
            <Link to="/portfolio"><img src={Back} alt="Step 3" className="w-10 h-10 mb-4 absolute" /></Link>
            <div className="w-full sm:w-1/2 p-8 flex flex-col justify-center items-start text-left text-gray-900">
                <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold tracking-wide leading-tight mb-20">
                    Baradwari
                </h1>
                <p className="text-lg mb-6 mr-6">
                    The unfinished two-storied residential building of the Cachar kings. The last king of the dynasty, Gobinda Chandra, was killed in 1830 without a heir and the British rulers took over. The specialty of the remaining buildings of the Cachar area from that era was the use of bricks for buildings, whereas the usual construction material used in Assam was wood and other natural materials. The site is at Khaspore near Silchar and is maintained by the Archaeological Survey of India.
                </p>
                <p className="text-lg mb-6">
                    Dive deeper into the rich heritage of the region and understand its cultural significance through our platform.
                </p>

                {/* Buttons and Instructions */}
                <div className="flex w-full mt-10">
                    {/* PC Exploration Button */}
                    <div className="w-1/2">
                        <button
                            className="px-6 py-3 bg-orange-500 hover:bg-red-500 rounded-full text-white"
                            onClick={() => setShowOverlay(false)}
                        >
                            Explore on PC
                        </button>
                        <ul className="text-lg mt-6 list-disc">
                            <li>Look around with the mouse.</li>
                            <li>Move with WASD or Arrow keys.</li>
                            <li>Click on a sphere to show its info panel.</li>
                        </ul>
                        <p className="py-4">
                            <b className="text-orange-500">Note: </b>Click anywhere on the screen to <br /> enable mouse control in the scene.
                        </p>
                    </div>

                    {/* VR Exploration Button */}
                    <div className="w-1/2">
                        <button
                            className="px-6 py-3 bg-orange-500 hover:bg-red-500 rounded-full text-white"
                            onClick={() => store.enterVR()}
                        >
                            Explore in VR
                        </button>
                        <ul className="text-lg mt-6 list-disc">
                            <li>Look around with your head.</li>
                            <li>Move with the VR controllers.</li>
                            <li>Click on a sphere to show its info panel.</li>
                        </ul>
                        <p className="py-4">
                            <b className="text-red-500">Warning: </b>Using VR may cause nausea or <br /> dizziness. Proceed with caution.
                        </p>
                    </div>
                </div>
            </div>

            {/* Right Section - Image */}
            <div className="w-full sm:w-1/2 h-full">
                <img
                    src={CR}
                    alt="Monument"
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    );
};

export default Overlay;
