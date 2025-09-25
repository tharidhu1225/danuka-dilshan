import { FaFacebookF, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 px-4 mt-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Logo and Description */}
        <div>
          <img src="/logo.jpg" alt="Logo" className="h-14 mb-4 rounded" />
          <p className="text-sm text-gray-400">
            Dilsha Blog - Explore blogs, stories, and packages that inspire.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/blogs" className="hover:text-white">Blogs</a></li>
            <li><a href="/packages" className="hover:text-white">Packages</a></li>
            <li><a href="/about" className="hover:text-white">About Us</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-white font-semibold mb-3">Connect With Us</h3>
          <div className="flex items-center gap-4">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/YOUR_PAGE_NAME"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition"
            >
              <FaFacebookF size={20} />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/94771234567" // Replace with your number (Ex: 94+771234567)
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 p-2 rounded-full hover:bg-green-600 transition"
            >
              <FaWhatsapp size={20} />
            </a>

            {/* Call */}
            <a
              href="tel:+94771234567" // Replace with your phone number
              className="bg-gray-700 p-2 rounded-full hover:bg-gray-800 transition"
            >
              <FaPhoneAlt size={20} />
            </a>
          </div>
          <p className="text-sm text-gray-500 mt-4">Call us: +94 77 123 4567</p>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} TN International Privet Limited. All rights reserved.
      </div>
    </footer>
  );
}
