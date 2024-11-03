import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import React from 'react';
import Hero from '../Hero/Hero';

const FeaturedProduct = () => {
  const products = [
    { id: 1, title: "The Catalyzer", price: "$16.00", imageUrl: "https://dummyimage.com/420x260" },
    { id: 2, title: "Shooting Stars", price: "$21.15", imageUrl: "https://dummyimage.com/421x261" },
    { id: 3, title: "Neptune", price: "$12.00", imageUrl: "https://dummyimage.com/422x262" },
    { id: 4, title: "The 400 Blows", price: "$18.40", imageUrl: "https://dummyimage.com/423x263" },
    { id: 5, title: "The Catalyzer", price: "$16.00", imageUrl: "https://dummyimage.com/424x264" },
    { id: 6, title: "Shooting Stars", price: "$21.15", imageUrl: "https://dummyimage.com/425x265" },
    { id: 7, title: "Neptune", price: "$12.00", imageUrl: "https://dummyimage.com/427x267" },
    { id: 8, title: "The 400 Blows", price: "$18.40", imageUrl: "https://dummyimage.com/428x268" },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  return (
    <section className="text-gray-600 body-font lg:ml-28 xl:ml-32 sm:ml-5">
        <Hero/>
      <div className="container px-5 py-24 mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">Featured Products</h2>
        <div className="flex flex-wrap -m-4">
          {products.map((product) => (
            <motion.div
              key={product.id}
              className="lg:w-1/4 md:w-1/2 p-4 w-full"
              initial="hidden"
              animate="visible"
              whileHover="hover"
              variants={cardVariants}
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <a href="#" className="block h-48">
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full transition-transform duration-300"
                    src={product.imageUrl}
                  />
                </a>
                <div className="mt-4 text-center">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">{product.title}</h2>
                  <div className="flex items-center justify-center mt-1">
                    <p className="text-gray-900 mr-2">{product.price}</p>
                    <button className="text-gray-600 hover:text-gray-800 transition-colors duration-300">
                      <FontAwesomeIcon icon={faShoppingCart} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProduct;
