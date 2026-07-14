import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";
import { AppContext } from "../context/AppContext";

const Result = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(assets.sample_img_1);
  const [input, setInput] = useState("");

  const { generateImage } = useContext(AppContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (input) {
      const generatedImage = await generateImage(input);
      if (generatedImage) {
        setIsImageLoaded(true);
        setImage(generatedImage);
      }
    }
    setLoading(false);
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      onSubmit={handleSubmit}
      className="flex flex-col min-h-[85vh] justify-center items-center px-4"
    >
      <div className="relative flex flex-col items-center">
        <div className={`relative rounded-xl overflow-hidden shadow-2xl transition-all duration-500 ${loading ? 'shadow-accent/40 ring-4 ring-accent/30' : 'shadow-gray-200/50 dark:shadow-black/50 border border-gray-200 dark:border-gray-800'}`}>
          <img className="max-w-xs sm:max-w-md md:max-w-lg object-cover" src={image} alt="Generated result" />
          
          {loading && (
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center backdrop-blur-sm">
              <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin"></div>
                <p className="text-white font-medium animate-pulse">Generating your masterpiece...</p>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {!isImageLoaded && (
        <div className="flex w-full max-w-2xl bg-white dark:bg-darkCard text-gray-900 dark:text-white p-2 mt-12 rounded-full border border-gray-200 dark:border-gray-700 shadow-xl shadow-gray-200/40 dark:shadow-black/40">
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            type="text"
            placeholder="Describe what you want to generate..."
            className="flex-1 bg-transparent outline-none ml-6 placeholder-gray-400 dark:placeholder-gray-500 font-medium"
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-gradient-to-r from-secondary to-accent hover:to-highlight text-white px-8 sm:px-12 py-3.5 rounded-full shadow-lg shadow-accent/25 hover:scale-105 transition-all font-medium disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {loading ? "Generating..." : "Generate"}
          </button>
        </div>
      )}
      
      {isImageLoaded && (
        <div className="flex flex-wrap gap-4 justify-center items-center mt-12">
          <button
            type="button"
            onClick={() => setIsImageLoaded(false)}
            className="bg-transparent border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-accent hover:text-accent dark:hover:border-highlight dark:hover:text-highlight px-8 py-3.5 rounded-full font-medium transition-colors"
          >
            Generate Another
          </button>
          <a
            href={image}
            download
            className="bg-gradient-to-r from-secondary to-accent hover:to-highlight text-white px-10 py-3.5 rounded-full shadow-lg shadow-accent/25 hover:scale-105 transition-all font-medium inline-block text-center"
          >
            Download Image
          </a>
        </div>
      )}
    </motion.form>
  );
};

export default Result;
