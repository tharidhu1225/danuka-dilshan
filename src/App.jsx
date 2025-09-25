import { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { GoogleOAuthProvider } from '@react-oauth/google';

import Header from './components/header';
import HomePage from './pages/homePage';
import Footer from './components/footer';
import ContactUs from './pages/contact';
import AboutUs from './pages/about';
import Packages from './pages/packege';
import BlogPage from './pages/blog';
import PostOverview from './pages/postOverview';

function App() {
  return (
      <div className="bg-primary min-h-screen flex flex-col">
        <BrowserRouter>
          <Toaster position="top-right" />

          {/* ✅ Fixed Header */}
          <Header />

          {/* ✅ Main Content with padding for header */}
          <div className="pt-[50px] flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/blogs" element={<BlogPage/>} />
              <Route path="/packages" element={<Packages/>} />
              <Route path="/about" element={<AboutUs/>} />
              <Route path="/contact" element={<ContactUs/>} />
              <Route path="/blogs/:id" element={<PostOverview />} />
              {/* 404 Route */}
              <Route path="*" element={<h1 className="text-red-500 text-xl">404 Not Found</h1>} />
            </Routes>
          </div>

          {/* ✅ Footer goes here */}
          <Footer />
        </BrowserRouter>
      </div>
  );
}

export default App;
