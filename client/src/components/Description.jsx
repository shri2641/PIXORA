import React from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const Description = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
      className="flex flex-col items-center justify-center my-24 p-6 md:px-28 relative"
    >
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-accent/10 dark:bg-accent/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900 dark:text-white tracking-tight">
          Create <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">AI Images</span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 font-medium">Turn your imagination into stunning visuals</p>
      </div>

      <div className="flex flex-col gap-10 md:gap-16 lg:flex-row items-center w-full max-w-6xl">
        <motion.div 
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="relative group w-full lg:w-1/2"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-secondary to-accent rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <img className="relative w-full rounded-xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 object-cover aspect-square md:aspect-auto" src={assets.sample_img_1} alt="AI Generation Sample" />
        </motion.div>
        
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
            Introducing the Ultimate <br/> <span className="text-accent">Text-to-Image</span> Engine
          </h2>
          <div className="space-y-6 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
            <p>
              Easily bring your ideas to life with our free AI image generator.
              Whether you need stunning visuals or unique imagery, our tool
              transforms your text into eye-catching images with just a few
              clicks. Imagine it, describe it, and watch it come to life
              instantly.
            </p>
            <p>
              Simply type in a text prompt, and our cutting-edge AI will generate
              high-quality images in seconds. From product visuals to character
              designs and portraits, even concepts that don’t yet exist can be
              visualized effortlessly. Powered by advanced AI technology, the
              creative possibilities are limitless!
            </p>
          </div>
          
          <div className="mt-10 flex gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-accent/10 dark:bg-accent/20 flex items-center justify-center">
                <span className="text-accent font-bold text-xl">⚡</span>
              </div>
              <div className="text-left">
                <p className="font-bold text-gray-900 dark:text-white">Lightning Fast</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Seconds to generate</p>
              </div>
            </div>
            <div className="flex items-center gap-3 ml-4">
              <div className="w-12 h-12 rounded-full bg-secondary/10 dark:bg-secondary/20 flex items-center justify-center">
                <span className="text-secondary font-bold text-xl">✨</span>
              </div>
              <div className="text-left">
                <p className="font-bold text-gray-900 dark:text-white">8K Quality</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Hyper-realistic</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Description;
