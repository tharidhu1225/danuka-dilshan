import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import classNames from "classnames";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Blogs", path: "/blogs" },
    { name: "Packages", path: "/packages" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  // Scroll effect for shrinking header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={classNames(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white shadow-md",
        {
          "py-2": isScrolled,
          "py-4": !isScrolled,
        }
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center transition-all duration-300">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img
            src="/logo.jpg"
            alt="Dilsha Blog Logo"
            className={classNames("transition-all duration-300", {
              "h-10 sm:h-12": isScrolled,
              "h-12 sm:h-[60px]": !isScrolled,
            })}
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={classNames(
                  "font-medium transition-colors duration-200",
                  {
                    "text-blue-600": isActive,
                    "text-gray-700 hover:text-blue-600": !isActive,
                  }
                )}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          {isOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
        </button>
      </div>

      {/* Mobile Menu with animation */}
      <div
        className={classNames(
          "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
          {
            "max-h-[400px] opacity-100": isOpen,
            "max-h-0 opacity-0": !isOpen,
          }
        )}
      >
        <nav className="flex flex-col bg-white border-t border-gray-200 px-4 py-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={classNames(
                "font-medium transition-colors duration-200",
                {
                  "text-blue-600": location.pathname === link.path,
                  "text-gray-700 hover:text-blue-600":
                    location.pathname !== link.path,
                }
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
