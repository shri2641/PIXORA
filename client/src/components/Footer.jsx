import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="mt-32 border-t border-gray-200 dark:border-gray-800 bg-white/30 dark:bg-[#0F0B14]/30 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <Link to="/">
              <img className="w-32 dark:hidden" src={assets.logo} alt="Pixora" />
              <img className="w-32 hidden dark:block" src={assets.logo_dark} alt="Pixora" />
            </Link>
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center md:text-left">
              Copyright © 2026 Pixora.<br className="md:hidden" /> All rights reserved.
            </p>
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="hover:-translate-y-1 transition-transform opacity-70 hover:opacity-100">
              <img className="w-6 h-6 dark:invert" src={assets.facebook_icon} alt="Facebook" />
            </a>
            <a href="#" className="hover:-translate-y-1 transition-transform opacity-70 hover:opacity-100">
              <img className="w-6 h-6 dark:invert" src={assets.instagram_icon} alt="Instagram" />
            </a>
            <a href="#" className="hover:-translate-y-1 transition-transform opacity-70 hover:opacity-100">
              <img className="w-6 h-6 dark:invert" src={assets.twitter_icon} alt="Twitter" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
