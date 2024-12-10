import React from "react";
import { motion } from "framer-motion";

const rowVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.2 },
  },
};

const TravelSection = () => {
  return (
    <>
      <section className="relative flex flex-col lg:flex-row items-center lg:items-stretch min-h-screen bg-white dark:bg-gray-900 ">
        <br />
        <div className="relative flex-1 p-8 lg:p-16">
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-black dark:text-white  ">
            We are dedicated to providing the best travel experience.
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Discover the Land of a Thousand Hills
          </p>

          <div className="mt-8 lg:mt-12 bg-white shadow-lg rounded-lg p-6 border-2 border-gray-100 hover:bg-green-300 dark:bg-gray-800 ">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
              <div>
                <label className="block text-gray-600 text-sm mb-2">Guest</label>
                <select className="w-full border text-gray-600 border-gray-300 rounded-md p-2">
                  <option>2 Adult</option>
                  <option>1 Adult</option>
                  <option>3 Adult</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-600 text-sm mb-2">Date</label>
                <input
                  type="date"
                  className="w-full border text-gray-600  border-gray-300 rounded-md p-2"
                />
              </div>

              <div>
                <label className="block text-gray-600 text-sm mb-2">Package</label>
                <select className="w-full border text-gray-600  border-gray-300 rounded-md p-2">
                  <option>Akagera Tour</option>
                  <option>Safari Adventure</option>
                  <option>Beach Escape</option>
                </select>
              </div>

              <div className="flex items-end">
                <button className="w-full bg-green-600 text-white font-semibold rounded-md p-3 hover:bg-green-500 transition">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 flex justify-center items-center p-4">
          <img
            src="./img/p11.jpg"
            alt="Chimps in nature"
            className="w-3/4 h-3/4 object-cover"
          />
        </div>
      </section>

      <div className="min-h-screen bg-white py-12 dark:bg-gray-900">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-black text-3xl md:text-4xl font-bold text-center dark:text-white">
            Welcome to Africa Wizzy Safari
          </h1>
          <br />
          <div className="bg-green-700 h-1 w-1/6 mx-auto"></div>
          <br />
          <br />

          {/* Row 1 */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={rowVariants}
          >
            <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-md mx-auto w-full hover:scale-110 transform transition-all duration-300">
              <img
                src="./img/p12.jpg"
                alt="Safari Image 1"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="bg-white dark:bg-gray-700  rounded-lg shadow-lg p-6 flex items-center max-w-md mx-auto w-full hover:bg-green-200 hover:scale-105 transform transition-all duration-300">
              <p className="text-gray-600 dark:text-gray-400   leading-relaxed">
                Welcome to Africa Wizzy Safari, a leading tourism company based in Rwanda. We have been in business for over 5 years and are committed to providing top-quality tours and services to our clients. Our mission is to showcase the beauty and culture of Rwanda to visitors from around the world, and to contribute to the sustainable development of the country through responsible tourism practices.
              </p>
            </div>
          </motion.div>

          {/* Row 2 */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={rowVariants}
          >
             {/* Text */}
            <div className="bg-white dark:bg-gray-700   rounded-lg shadow-lg p-6 flex items-center max-w-md mx-auto w-full order-2 md:order-none hover:bg-green-200 hover:scale-105 transform transition-all duration-300">
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                At Africa Wizzy safari, we offer a wide range of tours and activities, including cultural and historical tours, wildlife safaris, mountain gorilla trekking, and more. Our experienced and knowledgeable guides will ensure that you have a safe and enjoyable experience while exploring the stunning landscapes and rich culture of Rwanda.
              </p>
            </div>
            {/* Image */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-md mx-auto w-full order-1 md:order-none">
              <img
                src="./img/p13.jpg"
                alt="Safari Image 2"
                className="w-full h-64 object-cover"
              />
            </div>
           
          </motion.div>

          {/* Row 3 */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={rowVariants}
          >
            <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-md mx-auto w-full hover:scale-110 transform transition-all duration-300">
              <img
                src="./img/p14.jpg"
                alt="Safari Image 3"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="bg-white dark:bg-gray-700  rounded-lg shadow-lg p-6 flex items-center max-w-md mx-auto w-full hover:bg-green-200 hover:scale-105 transform transition-all duration-300">
              <p className="text-gray-600 dark:text-gray-400   leading-relaxed">
                We are proud to have received numerous awards and accolades for our commitment to excellence, including the RDD award and the Excellence award.
                <br />
                <br />
                Thank you for choosing Africa Wizzy Safari for your travel needs in Rwanda. We look forward to welcoming you on one of our tours soon!
              </p>
            </div>
          </motion.div>
        </div>
      </div>

    </>
  );
};

export default TravelSection;
