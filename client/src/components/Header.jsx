import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate()
  const {user, setShowLogin} = useContext(AppContext)
  
  const handleClick = () => {
    if (user) {
      navigate('/result')
    } else {
      setShowLogin(true)
    }
  }

  return (
    <motion.div
      className="relative flex flex-col justify-center items-center text-center my-20 px-4"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Premium Glowing Background Grid */}
      <div className="absolute inset-0 -z-20 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      
      {/* Background Aurora Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-accent/20 dark:bg-accent/15 rounded-full blur-[140px] -z-10 pointer-events-none animate-aurora mix-blend-screen"></div>
      
      {/* Grid Floor Glow */}
      <div className="absolute bottom-0 w-full h-[30%] bg-gradient-to-t from-accent/10 to-transparent -z-10 blur-xl"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-accent/30 bg-accent/5 backdrop-blur-md shadow-[0_0_15px_rgba(168,85,247,0.3)]"
      >
        <p className="text-sm font-semibold text-accent dark:text-highlight tracking-wide uppercase">Premium AI Image Generation</p>
        <img src={assets.star_icon} className="w-4 h-4 dark:invert opacity-80" alt="star" />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="text-5xl sm:text-7xl font-bold max-w-[800px] mx-auto mt-8 tracking-tight text-gray-900 dark:text-white"
      >
        Turn your ideas into <span className="bg-gradient-to-r from-secondary via-accent to-highlight bg-clip-text text-transparent">masterpieces</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-6 leading-relaxed"
      >
        Experience the next generation of AI artistry. Type your vision and watch as Pixora transforms it into stunning, high-resolution visuals in seconds.
      </motion.p>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        onClick={handleClick}
        className="mt-10 px-10 py-4 text-lg font-medium text-white bg-gradient-to-r from-secondary to-accent hover:to-highlight rounded-full shadow-lg shadow-accent/25 flex items-center gap-3 transition-all"
      >
        Generate Now
        <img className="w-5 h-5 invert" src={assets.star_group} alt="stars" />
      </motion.button>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="flex flex-wrap justify-center mt-20 gap-4"
      >
        {Array(6).fill("").map((_, index) => (
          <motion.div 
            key={index} 
            whileHover={{ y: -10 }}
            className="rounded-2xl overflow-hidden shadow-md shadow-gray-200/50 dark:shadow-black/50 border border-white/20 dark:border-gray-800/50 cursor-pointer"
          >
            <img
              className="w-16 sm:w-20 object-cover"
              src={index % 2 === 0 ? assets.sample_img_2 : assets.sample_img_1}
              alt="Generated Sample"
            />
          </motion.div>
        ))}
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="mt-6 text-sm font-medium text-gray-500 dark:text-gray-400"
      >
        Join thousands creating with Pixora
      </motion.p>
    </motion.div>
  );
};

export default Header;
