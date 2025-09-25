import { FaFacebookF, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-16">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-2xl p-8 md:p-12">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Get in Touch With Us
        </h1>

        <div className="grid md:grid-cols-3 gap-8">
          {/* WhatsApp */}
          <a
            href="https://wa.me/94771234567"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center bg-green-100 hover:bg-green-200 transition rounded-xl p-6 text-center shadow-md"
          >
            <FaWhatsapp className="text-green-600 text-4xl mb-4 group-hover:scale-110 transition-transform duration-200" />
            <h2 className="text-lg font-semibold mb-1">WhatsApp</h2>
            <p className="text-sm text-gray-600">Chat with us instantly</p>
          </a>

          {/* Facebook */}
          <a
            href="https://facebook.com/your-page"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center bg-blue-100 hover:bg-blue-200 transition rounded-xl p-6 text-center shadow-md"
          >
            <FaFacebookF className="text-blue-600 text-4xl mb-4 group-hover:scale-110 transition-transform duration-200" />
            <h2 className="text-lg font-semibold mb-1">Facebook</h2>
            <p className="text-sm text-gray-600">Visit our page</p>
          </a>

          {/* Call */}
          <a
            href="tel:+94771234567"
            className="group flex flex-col items-center bg-yellow-100 hover:bg-yellow-200 transition rounded-xl p-6 text-center shadow-md"
          >
            <FaPhoneAlt className="text-yellow-600 text-4xl mb-4 group-hover:scale-110 transition-transform duration-200" />
            <h2 className="text-lg font-semibold mb-1">Call Us</h2>
            <p className="text-sm text-gray-600">+94 77 123 4567</p>
          </a>
        </div>

        {/* Optional Message Box / Map / Form */}
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            We’re here to help and answer any question you might have. Let’s talk!
          </p>
        </div>
      </div>
    </div>
  );
}
