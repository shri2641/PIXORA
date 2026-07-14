import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { useTheme } from "../context/ThemeContext";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  const { user, setShowLogin, logout, credit } = useContext(AppContext);
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  return (
    <div className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-darkBg/70 border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <Link to={"/"}>
            <div className="flex items-center gap-2">
               <img src={theme === 'dark' ? assets.logo_dark : assets.logo} className="w-28 sm:w-32 lg:w-40 transition-all duration-300" alt="Pixora Logo" />
            </div>
          </Link>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={toggleTheme} 
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5 text-gray-300" /> : <Moon className="w-5 h-5 text-gray-600" />}
            </button>

            {user ? (
              <div className="flex items-center gap-2 sm:gap-4">
                <button
                  className="flex items-center gap-2 bg-gradient-to-r from-accent/10 to-highlight/10 dark:from-accent/20 dark:to-highlight/20 px-4 sm:px-6 py-2 rounded-full hover:scale-105 transition"
                  onClick={() => navigate("/buy")}
                >
                  <img src={assets.credit_star} className="w-4 h-4" />
                  <p className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">
                    Credits: {credit}
                  </p>
                </button>
                <p className="cursor-pointer text-gray-600 dark:text-gray-300 font-medium hover:text-accent dark:hover:text-highlight transition hidden md:block" onClick={() => navigate("/features")}>
                  Features
                </p>
                <p className="text-gray-700 dark:text-gray-300 max-sm:hidden font-medium ml-2">Hi, {user.name}</p>
                <div className="relative group">
                  <img src={assets.profile_icon} className="w-9 h-9 rounded-full shadow-sm hover:ring-2 hover:ring-accent transition cursor-pointer" />
                  <div className="absolute hidden group-hover:block top-full right-0 z-10 pt-2">
                    <ul className="list-none m-0 p-2 bg-white dark:bg-darkCard rounded-xl border border-gray-100 dark:border-gray-800 shadow-xl text-sm min-w-[120px]">
                      <li onClick={logout} className="px-4 py-2 cursor-pointer rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 transition">Logout</li>
                    </ul>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-2 sm:gap-5">
                <p className="cursor-pointer text-gray-600 dark:text-gray-300 font-medium hover:text-accent dark:hover:text-highlight transition" onClick={() => navigate("/features")}>
                  Features
                </p>
                <p className="cursor-pointer text-gray-600 dark:text-gray-300 font-medium hover:text-accent dark:hover:text-highlight transition" onClick={() => navigate("/buy")}>
                  Pricing
                </p>
                <button
                  onClick={() => setShowLogin(true)}
                  className="bg-gradient-to-r from-secondary to-primary dark:from-accent dark:to-secondary text-white px-7 py-2 sm:px-8 text-sm rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all"
                >
                  Login
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
