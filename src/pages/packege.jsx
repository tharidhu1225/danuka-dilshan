import { FaPhoneAlt } from "react-icons/fa";

export default function Packages() {
  const packages = [
    {
      title: "Single Shoot",
      price: "LKR 8,000",
      features: [
        "Edited Photos 20",
        "3 Days Delivery",
      ],
      color: "border-blue-500",
      highlight: false,
    },
    {
      title: "Couple Shoot",
      price: "LKR 12,000",
      features: [
        "Edited Photos 20",
        "A4 size Enlargement",
        "5 Days Delivery",
      ],
      color: "border-green-500",
      highlight: false,
    },
    {
      title: "Premium Package",
      price: "LKR 7,500",
      features: [
        "Unlimited Posts",
        "Social Media Sharing",
        "Full SEO Optimization",
        "Priority Support",
      ],
      color: "border-purple-500",
      highlight: true,
    },
  ];

  return (
    <div className="bg-gradient-to-b from-white to-gray-100 min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Our Packages
        </h1>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Choose the perfect plan that fits your needs and scale your content with us.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative group bg-white rounded-3xl shadow-xl border-t-8 ${pkg.color} p-8 flex flex-col justify-between transform transition-all duration-300 hover:scale-105 hover:shadow-2xl`}
            >
              {/* Highlight badge */}
              {pkg.highlight && (
                <div className="absolute -top-4 right-4 bg-purple-600 text-white text-xs px-3 py-1 rounded-full shadow-md animate-bounce">
                  Best Value
                </div>
              )}

              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                  {pkg.title}
                </h2>
                <p className="text-4xl font-bold text-blue-600 mb-6">
                  {pkg.price}
                </p>
                <ul className="text-left mb-6 space-y-3">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="text-gray-700 flex items-center">
                      <span className="w-2 h-2 rounded-full bg-blue-500 mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Call Us Button with gradient hover */}
              <a
                href="tel:+94771234567"
                className="mt-auto inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <FaPhoneAlt className="mr-2" />
                Call Us
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
