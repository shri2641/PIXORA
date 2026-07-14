import React, { useContext } from "react";
import { assets, plans } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import { motion } from "framer-motion";

const BuyCredit = () => {
  const { user, setShowLogin } = useContext(AppContext);

  const handleOnClick = () => {
    if (!user) {
      setShowLogin(true);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="min-h-[85vh] text-center pt-14 mb-10 px-4"
    >
      <div className="inline-block border border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-darkCard/50 backdrop-blur-md px-10 py-2 rounded-full mb-6 shadow-sm">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Our Plans</span>
      </div>
      
      <h1 className="text-center text-4xl sm:text-5xl font-bold mb-6 sm:mb-16 tracking-tight text-gray-900 dark:text-white">
        Choose the <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">right plan</span>
      </h1>
      
      <div className="flex flex-wrap justify-center gap-8 text-left max-w-6xl mx-auto">
        {plans.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -10 }}
            className={`relative bg-white/60 dark:bg-darkCard/60 backdrop-blur-md shadow-xl rounded-2xl py-12 px-8 flex-1 min-w-[280px] max-w-sm border transition-all duration-300 ${index === 1 ? 'border-accent shadow-accent/20 scale-105' : 'border-gray-100 dark:border-gray-800 shadow-gray-200/40 dark:shadow-black/40'}`}
          >
            {index === 1 && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-secondary to-accent text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                Most Popular
              </div>
            )}
            
            <img width={40} src={assets.logo_icon} alt="logo" className="dark:invert mb-6" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{item.id}</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 min-h-[40px]">{item.desc}</p>
            
            <div className="my-8">
              <span className="text-4xl font-bold text-gray-900 dark:text-white">Rs. {item.price}</span>
              <span className="text-gray-500 dark:text-gray-400"> / {item.credits} credits</span>
            </div>
            
            <button
              onClick={handleOnClick}
              className={`w-full mt-auto text-sm font-semibold rounded-xl py-3.5 transition-all ${index === 1 ? 'bg-gradient-to-r from-secondary to-accent hover:to-highlight text-white shadow-lg shadow-accent/30 hover:-translate-y-1' : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700'}`}
            >
              {user ? "Purchase Now" : "Get Started"}
            </button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default BuyCredit;
