import React from "react";
import { motion } from "framer-motion";

const ShowcaseVideo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
      className="flex flex-col items-center justify-center my-24 p-6 md:px-28 relative w-full"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white tracking-tight">
          See <span className="text-accent">Pixora</span> in Action
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 font-medium">Watch how fast and easy it is to generate stunning visuals.</p>
      </div>

      <div className="relative w-full max-w-3xl aspect-video rounded-3xl overflow-hidden shadow-2xl border border-gray-200/50 dark:border-gray-700/50 group mx-auto">
        <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 via-transparent to-secondary/20 pointer-events-none mix-blend-overlay z-10"></div>
        <iframe 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          src="https://www.youtube.com/embed/qTgPSKKjfVg?autoplay=1&mute=1&loop=1&playlist=qTgPSKKjfVg&controls=0&modestbranding=1&showinfo=0"
          title="AI Image Generation Explained"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        
        {/* Fake UI Overlay for "App Demo" feel */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-4 bg-black/50 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
      </div>
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-secondary/10 dark:bg-secondary/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
    </motion.div>
  );
};

export default ShowcaseVideo;
