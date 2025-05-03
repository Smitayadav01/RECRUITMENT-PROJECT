import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Blog from './components/Blog';
import About from './components/About';
import Footer from './components/Footer';
import JobApplication from './pages/JobApplication';

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Blog />
      <About />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/apply" element={<JobApplication />} />
        </Routes>
        <Toaster position="top-right" />
      </div>
    </BrowserRouter>
  );
}

export default App;