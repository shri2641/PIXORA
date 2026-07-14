import React from 'react'
import { motion } from 'framer-motion'
import { assets } from '../assets/assets'

const Features = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen pt-14 pb-20 px-4 max-w-7xl mx-auto"
    >
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900 dark:text-white tracking-tight">
          Explore <span className="text-accent">Features</span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 font-medium max-w-2xl mx-auto">
          Discover the powerful capabilities that make Pixora the ultimate AI image generator for creators.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            title: "Lightning Fast Generation",
            desc: "Experience unprecedented speed. Pixora's optimized AI cluster generates highly detailed images in just seconds.",
            icon: "⚡"
          },
          {
            title: "8K Hyper-Realism",
            desc: "Don't settle for blurry outputs. Generate crystal clear, 8K resolution images perfect for professional use.",
            icon: "✨"
          },
          {
            title: "Endless Styles",
            desc: "From cyberpunk and cinematic 3D to classical oil painting and anime, switch styles effortlessly.",
            icon: "🎨"
          },
          {
            title: "Commercial Licensing",
            desc: "Use generated images anywhere. All creations on paid plans come with full commercial usage rights.",
            icon: "💼"
          },
          {
            title: "Smart Prompting",
            desc: "Not a prompt engineer? No problem. Our AI automatically refines your ideas to produce the best possible result.",
            icon: "🧠"
          },
          {
            title: "Cloud Gallery",
            desc: "Never lose a creation. All your generated images are securely saved and accessible from any device.",
            icon: "☁️"
          }
        ].map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white/60 dark:bg-darkCard/60 backdrop-blur-md p-8 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-xl shadow-gray-200/40 dark:shadow-black/40 hover:-translate-y-2 transition-all duration-300 group"
          >
            <div className="w-14 h-14 bg-accent/10 dark:bg-accent/20 rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
      
      {/* Visual Break */}
      <div className="my-20 relative w-full h-[400px] rounded-3xl overflow-hidden shadow-2xl border border-gray-200/50 dark:border-gray-700/50">
         <img src={assets.sample_img_2} className="w-full h-full object-cover" alt="Feature Showcase" />
         <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-10">
            <h3 className="text-white text-3xl font-bold mb-2">Unleash Your Creativity</h3>
            <p className="text-gray-300 max-w-xl">No more boundaries. If you can imagine it, you can generate it with Pixora.</p>
         </div>
      </div>
    </motion.div>
  )
}

export default Features
