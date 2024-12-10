import React from "react";
import { motion } from "framer-motion";

const rowVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.5 },
  },
};

const Gallery = () => (
  <div>
    <div>
      <img
        src="./img/p16.jpg"
        className="w-full h-1/2 object-contain"  // تغيير object-cover إلى object-contain
        alt="Main Image"
      />
    </div>
    <br />
    <br />
    <div className="relative flex flex-col items-center">
      {/* Button */}
      <button className="absolute top-0 transform -translate-y-1/2 bg-yellow-600 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded">
        On Instagram
      </button>
      <br />
      <br />
    </div>
    <div className="flex flex-col justify-center items-center ">
      {/* Use motion.div for each image */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={rowVariants}
        className="w-full sm:w-1/2 md:w-1/3">
        <img
          src="./img/p17.jpg"
          className="w-full h-70 object-contain"  // تغيير object-cover إلى object-contain
          alt="Image 17"
        />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={rowVariants}
        className="w-full sm:w-1/2 md:w-1/3">
        <img
          src="./img/p18.jpg"
          className="w-full h-70 object-contain"  // تغيير object-cover إلى object-contain
          alt="Image 18"
        />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={rowVariants}
        className="w-full sm:w-1/2 md:w-1/3">
        <img
          src="./img/p19.jpg"
          className="w-full h-70 object-contain"  // تغيير object-cover إلى object-contain
          alt="Image 19"
        />
      </motion.div>
    </div>
    <br />
  </div>
);

export default Gallery;
