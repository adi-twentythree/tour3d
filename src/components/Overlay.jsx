import React, { useState } from "react";
import { Navigation, Mouse } from '../assets/Icons/Icon';
import { FaArrowLeft, FaBars, FaVolumeMute, FaVolumeUp, FaVrCardboard, FaExpand, FaInfoCircle, FaTimes, FaCompress } from "react-icons/fa";
import { CR } from '../assets/Images/Images';
import { Link } from "react-router-dom";
import { useAudio } from "../components/Audio"; // Importing the custom hook

const OverlayControls = ({ store, isMobile }) => {
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [isInfoPanelVisible, setIsInfoPanelVisible] = useState(false);
    const [isPopUpVisible, setIsPopUpVisible] = useState(true);

    const { isMuted, toggleMute, handleUserInteraction } = useAudio();  // Using the custom hook for audio control

    const toggleFullscreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
            setIsFullscreen(true);
        } else {
            document.exitFullscreen();
            setIsFullscreen(false);
        }
    };

    const toggleInfoPanel = () => {
        setIsInfoPanelVisible(prevState => !prevState);
    };

    const handleScreenClick = () => {
        setIsPopUpVisible(false);
        handleUserInteraction();
    };

    return (
        <div className="absolute z-30 top-0 left-0 w-full h-full pointer-events-none" onClick={handleScreenClick}>
            {/* Top Left - Back Button */}
            <Link
                to="/portfolio"
                className="absolute top-6 left-6 flex items-center justify-center w-12 h-12 rounded-full bg-white/80 text-black text-2xl hover:bg-white transition-all shadow-md pointer-events-auto"
                aria-label="Back to Portfolio"
            >
                <FaArrowLeft />
            </Link>

            {/* Top Right - Nav Bar Button */}
            <button
                className="absolute top-6 right-6 flex items-center justify-center w-12 h-12 rounded-full bg-white/80 text-black text-2xl hover:bg-white transition-all shadow-md pointer-events-auto"
                aria-label="Menu"
            >
                <FaBars />
            </button>

            {/* Bottom Left - Mute Button */}
            <button
                onClick={toggleMute}
                className="absolute bottom-6 left-6 flex items-center justify-center w-12 h-12 rounded-full bg-white/80 text-black text-2xl hover:bg-white transition-all shadow-md pointer-events-auto"
                aria-label={isMuted ? "Unmute" : "Mute"}
            >
                {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
            </button>

            {/* ESC Key Tooltip */}
            {!isMobile && (
                <div className="absolute bottom-28 right-6 flex items-center space-x-1 p-1 rounded-lg bg-white/90 shadow-md text-xs">
                    <p className="px-2 py-0.5 rounded-full bg-orange-500 text-white font-medium">
                        ESC
                    </p>
                    <p className="text-gray-800  font-semibold">KEY TO RELEASE MOUSE</p>
                </div>
            )}

            {/* Bottom Right - VR, Fullscreen, Info Buttons */}
            <div className="absolute bottom-6 right-6 flex flex-row gap-10 pointer-events-auto">
                <button
                    onClick={() => store.enterVR()}
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-white/80 text-black text-2xl hover:bg-white transition-all shadow-md"
                    aria-label="Enter VR"
                >
                    <FaVrCardboard />
                </button>

                {!isMobile && (
                    <>
                        <button
                            onClick={toggleFullscreen}
                            className="flex items-center justify-center w-12 h-12 rounded-full bg-white/80 text-black text-2xl hover:bg-white transition-all shadow-md"
                            aria-label={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
                        >
                            {isFullscreen ? <FaCompress /> : <FaExpand />}
                        </button>
                    </>
                )}

                <button
                    onClick={toggleInfoPanel}
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-white/80 text-black text-2xl hover:bg-white transition-all shadow-md"
                    aria-label="Toggle Info Panel"
                >
                    <FaInfoCircle />
                </button>
            </div>

            {/* Info Panel */}
            {isInfoPanelVisible && (
                <div className="z-40 absolute top-1/2 transform -translate-y-1/2 left-4 right-4 md:left-auto md:right-4 lg:right-4 lg:left-auto md:w-1/3 lg:w-1/4 bg-white/90 backdrop-blur-md text-black flex flex-col rounded-2xl shadow-lg transition-all duration-300 pointer-events-auto max-h-full">
                    {/* Close Button */}
                    <button
                        onClick={toggleInfoPanel}
                        className="absolute top-4 left-4 text-black text-2xl opacity-90 hover:opacity-100 transition-opacity pointer-events-auto bg-white rounded-full p-2"
                        aria-label="Close Info Panel"
                    >
                        <FaTimes />
                    </button>

                    {/* Full-width Image */}
                    <div className="w-full rounded-t-2xl overflow-hidden mb-4">
                        <img
                            src={CR}
                            alt="Monument Icon"
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    {/* Text Content */}
                    <div className="p-4">
                        <h2 className="text-xl md:text-3xl lg:text-4xl font-bold tracking-wide leading-tight mb-4">
                            Baradwari
                        </h2>
                        <p className="text-sm md:text-lg">
                            The unfinished two-storied residential building of the Cachar kings. The last king of the dynasty, Gobinda Chandra, was killed in 1830 without an heir and the British rulers took over. The specialty of the remaining buildings of the Cachar area from that era was the use of bricks for buildings, whereas the usual construction material used in Assam was wood and other natural materials. The site is at Khaspore near Silchar and is maintained by the Archaeological Survey of India.
                        </p>
                    </div>
                </div>
            )}

              {/* Pop-up Message */}
            {isPopUpVisible && !isMobile && (
                <div className="z-50 absolute inset-0 flex items-center justify-center bg-black/50 pointer-events-auto">
                    <div className="lg:w-1/4 md:w-1/2 bg-white rounded-lg p-8 shadow-lg flex flex-col gap-6">
                        <div className="flex gap-12">
                            {/* Keyboard Movement Section */}
                            <div className="flex flex-col items-center justify-center">
                                <img src={Navigation} alt="Keyboard Controls" className="w-32 h-32 mb-4" />
                                <p className="text-sm text-center">
                                    You can move using <strong>W, A, S, D</strong> on the keyboard.
                                </p>
                            </div>

                            {/* Mouse Movement Section */}
                            <div className="flex flex-col items-center justify-center">
                                <img src={Mouse} alt="Mouse Controls" className="w-32 h-32 mb-4" />
                                <p className="text-sm text-center">
                                    You can move the mouse and move the direction.
                                </p>
                            </div>
                        </div>

                        {/* Click to Start Text */}
                        <div className="text-center text-lg mt-8">
                            <p className="text-sm text-gray-600">
                                Click anywhere on the screen to start
                            </p>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};

export default OverlayControls;
