import { TbFaceIdError } from "react-icons/tb"; // Feather Icon - Inbox (minimal & clean)
import { Link } from "react-router-dom";

export default function EmptyState({ title = "No Items Found", message = "Try again later or explore other content.", showButton = false, buttonText = "Explore", buttonLink = "/" }) {
  return (
    <div className="flex flex-col items-center justify-center text-center text-gray-500 py-12">
      <TbFaceIdError className="text-6xl text-gray-700 mb-4" />
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="max-w-md">{message}</p>

      {showButton && (
        <Link
          to={buttonLink}
          className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition"
        >
          {buttonText}
        </Link>
      )}
    </div>
  );
}
