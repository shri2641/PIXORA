import React from "react";
import { assets, testimonialsData } from "../assets/assets";
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
      className="flex flex-col items-center justify-center my-20 py-12 px-4"
    >
      <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900 dark:text-white tracking-tight">
        Customer Testimonials
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">What Our Users Are Saying</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {testimonialsData.map((item, index) => (
          <motion.div 
            key={index} 
            whileHover={{ y: -10 }}
            className="bg-white/60 dark:bg-darkCard/60 backdrop-blur-md p-10 rounded-2xl shadow-lg shadow-gray-200/40 dark:shadow-black/40 border border-gray-100 dark:border-gray-800 transition-all cursor-pointer"
          >
            <div className="flex flex-col items-center">
              <img className="rounded-full w-16 h-16 object-cover border-2 border-accent/20" src={item.image} alt={item.name} />
              <h2 className="text-xl font-bold mt-4 text-gray-900 dark:text-white">{item.name}</h2>
              <p className="text-sm font-medium text-accent mb-4">{item.role}</p>
              <div className="flex mb-5 gap-1">
                {Array(item.stars).fill().map((_, idx) => (
                  <img src={assets.rating_star} key={idx} className="w-4 h-4 drop-shadow-sm" alt="star" />
                ))}
              </div>
              <p className="text-center text-gray-600 dark:text-gray-400 leading-relaxed">"{item.text}"</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Testimonials;
