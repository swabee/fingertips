import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import React, { useState } from 'react';

const Category = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9; // Total items to show in one page (3 rows * 3 columns)

  const products = [
    { id: 1, title: "The Catalyzer", price: "$16.00", imageUrl: "https://dummyimage.com/420x260" },
    { id: 2, title: "Shooting Stars", price: "$21.15", imageUrl: "https://dummyimage.com/421x261" },
    { id: 3, title: "Neptune", price: "$12.00", imageUrl: "https://dummyimage.com/422x262" },
    { id: 4, title: "The 400 Blows", price: "$18.40", imageUrl: "https://dummyimage.com/423x263" },
    { id: 5, title: "The Catalyzer", price: "$16.00", imageUrl: "https://dummyimage.com/424x264" },
    { id: 6, title: "Shooting Stars", price: "$21.15", imageUrl: "https://dummyimage.com/425x265" },
    { id: 7, title: "Neptune", price: "$12.00", imageUrl: "https://dummyimage.com/427x267" },
    { id: 8, title: "The 400 Blows", price: "$18.40", imageUrl: "https://dummyimage.com/428x268" },
    { id: 9, title: "New Horizons", price: "$22.00", imageUrl: "https://dummyimage.com/429x269" }, // Added extra product for demo
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  // Filter products based on the search term
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate the current products to display
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  
  // Calculate total pages
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  // Pagination controls
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-5 mx-auto">
        {/* Search bar */}
        <div className="flex justify-center mb-8">
          <input
            type="text"
            placeholder="Search Products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 w-full md:w-1/2"
          />
        </div>
        
        {/* Product grid */}
        <div className="flex flex-wrap -m-4 justify-center lg:ml-28 xl:ml-32">
          {currentProducts.map((product) => (
            <motion.div
              key={product.id}
              className="lg:w-1/4 md:w-1/3 p-4 w-full" // Adjusted for 3 products per row with less width
              initial="hidden"
              animate="visible"
              whileHover="hover"
              variants={cardVariants}
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg h-64"> {/* Increased height */}
                <a href="#" className="block h-full">
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

        {/* Pagination */}
        <div className="flex justify-center items-center mt-8">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded disabled:opacity-50 mx-2"
          >
            Previous
          </button>
          <span className="text-gray-800">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded disabled:opacity-50 mx-2"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default Category;
