import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaHome, FaPhone } from "react-icons/fa";
import { SiBlogger } from "react-icons/si";
import { FcAbout } from "react-icons/fc";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 left-0 z-50 bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-2 px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
        <img
        src="/logo.jpg"
        alt="Logo"
        className="h-10 w-auto object-contain"
        />
       </Link>


        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-8">
          <NavLink to="/home/dash" label="Home" icon={<FaHome />} />
          <NavLink to="/home/blogs" label="Blogs" icon={<SiBlogger />} />
          <NavLink to="/home/about" label="About Us" icon={<FcAbout />} />
          <NavLink to="/home/contact" label="Contact Us" icon={<FaPhone />} />
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-3xl text-black"
          onClick={() => setIsOpen(true)}
        >
          <RxHamburgerMenu />
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "tween", duration: 0.3 }}
          className="fixed inset-0 bg-black bg-opacity-50 z-50"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="bg-white w-64 h-full shadow-lg p-6 flex flex-col"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            <button
              className="self-end text-3xl text-black"
              onClick={() => setIsOpen(false)}
            >
              <IoClose />
            </button>

            <nav className="mt-4 space-y-5 flex flex-col">
              <NavLink to="/home/dash" label="Home" icon={<FaHome />} onClick={() => setIsOpen(false)} />
              <NavLink to="/home/blogs" label="Blogs" icon={<SiBlogger />}  onClick={() => setIsOpen(false)}/>
              <NavLink to="/home/about" label="About Us" icon={<FcAbout />}  onClick={() => setIsOpen(false)}/>
              <NavLink to="/home/contact" label="Contact Us" icon={<FaPhone />}  onClick={() => setIsOpen(false)}/>
            </nav>
          </motion.div>
        </motion.div>
      )}
    </header>
  );
}

// Reusable Navigation Link Component
const NavLink = ({ to, label, icon, onClick }) => (
  <Link
    to={to}
    className="flex items-center gap-3 text-lg font-medium text-black hover:text-gray-800 transition"
    onClick={onClick}
  >
    {icon} {label}
  </Link>
);
