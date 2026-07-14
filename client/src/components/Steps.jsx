import React from "react";
import { stepsData } from "../assets/assets";
import { motion } from "framer-motion";

const Steps = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
      className="flex flex-col items-center justify-center my-32 px-4"
    >
      <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900 dark:text-white tracking-tight">How it works</h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
        Transform Words Into Stunning Images
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
        {stepsData.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -10 }}
            className="flex flex-col items-center text-center p-8 bg-white/50 dark:bg-darkCard/50 backdrop-blur-md shadow-lg shadow-gray-200/50 dark:shadow-black/50 border border-gray-100 dark:border-gray-800 rounded-2xl transition-all duration-300"
          >
            <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-accent/20 to-highlight/20 rounded-full mb-6">
              <img className="w-8 h-8 dark:invert" src={item.icon} alt={item.title} />
            </div>
            <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{item.title}</h2>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Steps;
