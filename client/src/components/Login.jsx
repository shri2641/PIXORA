import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const { setShowLogin, backendUrl, setToken, setUser } =
    useContext(AppContext);
  const [state, setState] = useState("Login");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (state === "Login") {
        const { data } = await axios.post(backendUrl + "/api/user/login", {
          email,
          password,
        });
        if (data.success) {
          setToken(data.token);
          setUser(data.user);
          localStorage.setItem("token", data.token);
          setShowLogin(false);
        } else {  
          toast.error(data.message);
        }
      } else {
        const { data } = await axios.post(backendUrl + "/api/user/register", {
          name,
          email,
          password,
        });
        if (data.success) {
          setToken(data.token);
          setUser(data.user);
          localStorage.setItem("token", data.token);
          setShowLogin(false);
        } else {
          toast.error(data.message);
        }
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] backdrop-blur-md bg-black/60 flex justify-center items-center p-4">
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="relative bg-white dark:bg-darkCard p-8 sm:p-10 rounded-2xl shadow-2xl shadow-accent/20 w-full max-w-md border border-gray-100 dark:border-gray-800"
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight">
            {state}
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            {state === "Login" ? "Welcome back! Please sign in to continue" : "Create an account to get started"}
          </p>
        </div>

        <div className="space-y-4">
          {state !== "Login" && (
            <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 dark:bg-[#1A1325] border border-gray-200 dark:border-gray-700 rounded-xl focus-within:border-accent focus-within:ring-1 focus-within:ring-accent transition-all">
              <img className="w-5 h-5 dark:invert opacity-60" src={assets.profile_icon} alt="user" />
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                className="w-full bg-transparent outline-none text-gray-800 dark:text-gray-200 text-sm placeholder-gray-400 dark:placeholder-gray-500"
                type="text"
                placeholder="Full Name"
                required
              />
            </div>
          )}

          <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 dark:bg-[#1A1325] border border-gray-200 dark:border-gray-700 rounded-xl focus-within:border-accent focus-within:ring-1 focus-within:ring-accent transition-all">
            <img className="w-5 h-5 dark:invert opacity-60" src={assets.email_icon} alt="email" />
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="w-full bg-transparent outline-none text-gray-800 dark:text-gray-200 text-sm placeholder-gray-400 dark:placeholder-gray-500"
              type="email"
              placeholder="Email address"
              required
            />
          </div>

          <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 dark:bg-[#1A1325] border border-gray-200 dark:border-gray-700 rounded-xl focus-within:border-accent focus-within:ring-1 focus-within:ring-accent transition-all">
            <img className="w-5 h-5 dark:invert opacity-60" src={assets.lock_icon} alt="lock" />
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="w-full bg-transparent outline-none text-gray-800 dark:text-gray-200 text-sm placeholder-gray-400 dark:placeholder-gray-500"
              type="password"
              placeholder="Password"
              required
            />
          </div>
        </div>

        {state === "Login" && (
          <p className="text-sm text-accent hover:text-highlight mt-4 mb-2 cursor-pointer transition-colors text-right font-medium">
            Forgot password?
          </p>
        )}

        <button 
          disabled={loading}
          className="w-full mt-6 bg-gradient-to-r from-secondary to-accent hover:to-highlight text-white font-medium py-3 rounded-xl shadow-lg shadow-accent/30 transition-all hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
        >
          {loading ? "Please wait..." : (state === "Login" ? "Sign In" : "Create Account")}
        </button>

        <p className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
          {state === "Login" ? "Don't have an account? " : "Already have an account? "}
          <span
            onClick={() => setState(state === "Login" ? "Sign Up" : "Login")}
            className="text-accent hover:text-highlight font-semibold cursor-pointer transition-colors"
          >
            {state === "Login" ? "Sign up" : "Login"}
          </span>
        </p>

        <button
          type="button"
          onClick={() => setShowLogin(false)}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors bg-gray-100/50 dark:bg-gray-800/50 rounded-full"
        >
          <img className="w-4 h-4 dark:invert opacity-70" src={assets.cross_icon} alt="close" />
        </button>
      </motion.form>
    </div>
  );
};

export default Login;
