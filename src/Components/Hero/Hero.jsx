import { faClock, faMoneyBillWave, faShieldAlt, faShippingFast } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import React from 'react';

const Hero = () => {
  // Define animation variants
  const textVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const buttonVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.5 } },
  };

  const imageVariant = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.5 } },
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        {/* Animated text and description */}
        <motion.div
          className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
          initial="hidden"
          animate="visible"
          variants={textVariant}
        >
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-400">
          Spread Happiness, 
            <br className="hidden lg:inline-block" /> <span className='text-4xl text-gray-800'> One Gift at a Time</span>
          </h1>
          <p className="mb-8 leading-relaxed">
            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic turmeric truffaut hexagon try-hard chambray.
          </p>
          <motion.div className="flex justify-center" variants={buttonVariant}>
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Button
            </button>
            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              Button
            </button>
          </motion.div>
        </motion.div>

        {/* Animated image */}
        <motion.div
          className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
          initial="hidden"
          animate="visible"
          variants={imageVariant}
        >
          <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
        </motion.div>
      </div>

      {/* Feature Chips */}
      <div className="container mx-auto mt-12 px-5 flex flex-wrap justify-center gap-8">
        {/* Feature Chips Data */}
        {[{
          icon: faShippingFast,
          text: "Fast Delivery",
        }, {
          icon: faMoneyBillWave,
          text: "Cash on Delivery",
        }, {
          icon: faShieldAlt,
          text: "Safe Orders",
        }, {
          icon: faClock,
          text: "24/7 Order Tracking",
        }].map((feature, index) => (
          <div
            key={index}
            className="flex items-center space-x-4 p-2 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 transition duration-300 text-sm"
          >
            <FontAwesomeIcon icon={feature.icon} className="text-gray-500 text-xl" />
            <div>
              <h3 className="font-semibold text-gray-800">{feature.text}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
