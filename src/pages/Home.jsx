import React from 'react';
import { Link } from 'react-router-dom';
import { BH, CR, POG, Hero, Cover } from '../assets/Images/Images';
import { Learn, Monument, Navigation, Share, VirtualTour, Videography, Photography, } from '../assets/Icons/Icon';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import { FaArrowRight } from "react-icons/fa6";
const Home = () => {

  const services = [
    {
      icon: VirtualTour,
      title: '360 VIRTUAL TOUR',
      description:
        'This virtual 3D archive is dedicated to preserving the ancient ruins and heritage monuments of Assam, Northeast India.',
      color: 'gradient-to-r from-red-500 to-orange-500',
      link: '/portfolio',
    },
    {
      icon: Videography,
      title: 'VIDEOGRAPHY',
      description:
        'High-quality videography and mini-documentaries that vividly capture Assam’s heritage monuments.',
      color: 'gradient-to-r from-violet-600 to-indigo-600',
      link: '#',
    },
    {
      icon: Photography,
      title: 'PHOTOGRAPHY',
      description:
        'Curated collections of photographs offer detailed views of heritage ruins, capturing their historical essence.',
      color: 'gradient-to-r from-emerald-400 to-cyan-400',
      link: '#',
    },
  ];

  const Monuments = [
    {
      id: 1,
      title: "Kachari Ruins",
      description: "Explore the ancient Kachari Ruins, a set of medieval monuments located in Dimapur, Nagaland.",
      imgSrc: CR,
      link: "/scene",
    },
    {
      id: 2,
      title: "Bamuni Hills",
      description: "Discover Bamuni Hills, featuring ancient stone carvings from the 10th to 12th century A.D.",
      imgSrc: BH,
      link: "/scene"
    },
    {
      id: 3,
      title: "Pyramids of Giza",
      description: "Explore the ancient wonders of Egypt like never before.",
      imgSrc: POG,
      link: "/scene"
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      quote:
        'The 360-degree virtual tour of Assam’s heritage monuments was a truly immersive experience. I felt like I was right there exploring the ancient ruins.',
      occupation: 'Historian',
      avatar: 'https://via.placeholder.com/150', // Replace with actual image or avatar
    },
    {
      id: 2,
      name: 'Jane Smith',
      quote:
        'As a photography enthusiast, I was impressed by the detailed shots of the ancient monuments. The virtual archive is beautifully curated!',
      occupation: 'Photographer',
      avatar: 'https://via.placeholder.com/150', // Replace with actual image or avatar
    },
    {
      id: 3,
      name: 'Robert Williams',
      quote:
        'An incredible platform that preserves and promotes the heritage of Assam. The videography and virtual tours offer a unique perspective on history.',
      occupation: 'Teacher',
      avatar: 'https://via.placeholder.com/150', // Replace with actual image or avatar
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen bg-gray-900 text-white overflow-hidden">

        <img src={Hero} alt="" className="absolute inset-0 w-full h-full object-cover opacity-80" />

        <div className="absolute inset-0 bg-gradient-to-b from-neutral-500/10 to-neutral-800/95 "></div>


        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6">

          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white tracking-wide leading-tight">
            Discover the Virtual Archive of
            <br />
            Cultural Heritage Monuments
          </h1>

          <p className="text-lg py-8 lg:text-2xl mt-4 text-gray-300 max-w-3xl">
            Explore the ancient ruins and monuments of Assam in a 360-degree immersive experience, preserving the beauty of history.
          </p>

          <Link
            to="/About"
            className="w-44 bg-orange-500 transition-transform duration-500 hover:bg-red-500 text-white py-3 px-8 rounded-full text-lg font-semibold mt-10 hover:scale-110 hover:shadow-xl"
          >
            Learn More
          </Link>
        </div>
      </section>




      {/* What We Do Section */}
      <section className="relative lg:py-40 py-16 bg-neutral-300">

        <div className="relative z-10 flex flex-col justify-center items-center h-full px-6">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-black tracking-wide leading-tight mb-12">What we Do</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">

            {services.map((service, index) => (

              <div key={index} className="bg-white rounded-lg shadow-lg px-8 py-10  transition-transform duration-300 hover:scale-105">

                <div className={`w-16 h-16 mb-6 rounded-full flex items-center justify-center bg-${service.color}`} >
                  <img src={service.icon} alt={service.title} className="w-8 h-8" />
                </div>

                <div className="py-6">

                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>

                  <div className={`h-0.5 w-16 mb-4 bg-${service.color}`}></div>

                  <p className="text-gray-600 mb-6">{service.description}</p>
                </div>

                <div>
                  <Link
                    to={service.link}
                    className={`px-2 py-2 rounded-md mt-auto bg-${service.color} text-transparent bg-clip-text hover:bg-black-500`}
                  >
                    Explore
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 font-semibold bg-white text-gray-900">
        <h2 className="text-3xl text-center mb-12">How Our Virtual Tours Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">

          <div className="flex flex-col items-center">
            <img src={Monument} alt="Step 1" className="w-20 h-20 mb-4" />
            <h3 className="text-xl">Select a Monument</h3>
          </div>

          <div className="flex flex-col items-center">
            <img src={Navigation} alt="Step 2" className="w-20 h-20 mb-4" />
            <h3 className="text-xl ">Navigate in 360</h3>
          </div>

          <div className="flex flex-col items-center">
            <img src={Learn} alt="Step 3" className="w-20 h-20 mb-4" />
            <h3 className="text-xl ">Learn History</h3>
          </div>

          <div className="flex flex-col items-center">
            <img src={Share} alt="Step 4" className="w-20 h-20 mb-4" />
            <h3 className="text-xl">Share the Experience</h3>
          </div>
        </div>
      </section>

      {/* Featured Monuments Section */}
      <section className="lg:h-screen py-40 bg-neutral-900">

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
                  <Link
                    to={monument.link}
                    className="inline-block bg-orange-500 hover:bg-red-500 text-white font-semibold py-2 px-4 rounded-full transition-colors duration-300"
                  >
                    Read More
                  </Link>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-neutral-800">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-12 text-white">
            What Our Viewers Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-gray-500">{testimonial.occupation}</p>
                  </div>
                </div>

                <div className="relative mb-6">
                  <FaQuoteLeft className="absolute top-0 left-0 text-orange-500" />
                  <p className="text-gray-600 text-sm leading-relaxed pl-6">
                    {testimonial.quote}
                  </p>
                  <FaQuoteRight className="absolute bottom-0 right-0 text-orange-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
};

export default Home;
