import React from 'react';

import { Link } from 'react-router-dom';
import {
  BH,
  CR,
  ET,
  POG,
  TWOC
} from '../assets/Images/Images'


const Monuments = [
  {
    id: 1,
    title: "Kachari Ruins",
    description: "Explore the ancient Kachari Ruins, a set of medieval monuments located in Dimapur, Nagaland.",
    imgSrc: CR,
    link: "/scene"
  },
  {
    id: 2,
    title: "Bamuni Hills",
    description: "Discover Bamuni Hills, featuring ancient stone carvings from the 10th to 12th century A.D.",
    imgSrc: BH,
    link: "/scenenew"
  },
  {
    id: 3,
    title: "Pyramids of Giza",
    description: "Explore the ancient wonders of Egypt like never before.",
    imgSrc: POG,
    link: "/scene"
  },
  {
    id: 3,
    title: "Pyramids of Giza",
    description: "Explore the ancient wonders of Egypt like never before.",
    imgSrc: POG,
    link: "/scene"
  },
  {
    id: 4,
    title: "Eiffel Tower",
    description: "Discover the beauty of Paris' iconic structure in stunning detail.",
    imgSrc: ET,
    link: "/scene"
  },
  {
    id: 5,
    title: "Great Wall of China",
    description: "Walk along one of the world's most magnificent structures.",
    imgSrc: TWOC,
    link: "/scene"
  }
];

const Portfolio = () => {
  return (
    <>
      <section className="lg:h-full py-40 bg-neutral-900">
        <div className="flex flex-col items-center px-6">
          <p className="text-lg py-2 lg:text-2xl text-gray-300 max-w-3xl">Explore our latest work </p>

          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white tracking-wide leading-tight">Immerse in History</h1>

          <p className="text-lg py-2 lg:text-2xl mb-20 text-gray-300 max-w-3xl">Explore the ancient ruins and monuments of Assam. </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {Monuments.map((monument) => (
              <div key={monument.id} className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-transform duration-500 flex flex-col">
                <img
                    src={monument.imgSrc}
                    alt={monument.title}
                    className="w-full h-56 object-cover transition-opacity duration-300 hover:opacity-90"
                  />
                  <div className="px-6 pt-6 flex-grow">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{monument.title}</h3>
                    <p className="text-gray-600 h-24 overflow-hidden">
                      {monument.description}
                    </p>
                  </div>
                  <div className='p-6 pt-0'>
                    <a
                      href={monument.link}
                      className="inline-block bg-orange-500 hover:bg-red-500 text-white font-semibold py-2 px-4 rounded-full transition-colors duration-300"
                    >
                      Read More
                    </a>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;