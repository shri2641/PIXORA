import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Result from "./pages/Result";
import BuyCredit from "./pages/BuyCredit";
import Features from "./pages/Features";
import Navbar from './components/Navbar'
import Footer from "./components/Footer";
import Login from "./components/Login";
import { AppContext } from "./context/AppContext";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.css'

const App = () => {
  const {showLogin} = useContext(AppContext)
  return (
    <div className="min-h-screen bg-transparent transition-colors duration-300 relative overflow-hidden" >
      <ToastContainer position="bottom-right" theme="dark"/>
      <Navbar/>
      {showLogin && <Login/>}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
        <Route path="/buy" element={<BuyCredit />} />
        <Route path="/features" element={<Features />} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
