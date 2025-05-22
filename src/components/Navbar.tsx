import { Link } from "react-router-dom";
import { FaDiscord, FaYoutube, FaLink } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/30 dark:bg-gray-900/50 shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-extrabold text-blue-800 dark:text-white">Boundless Motion</h1>

      <div className="space-x-6 flex items-center">
        <Link to="/" className="text-gray-800 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
        <Link to="/about" className="text-gray-800 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400">About</Link>
        <Link to="/events" className="text-gray-800 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400">Events</Link>
        <Link to="/contact" className="text-gray-800 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400">Join</Link>

        <a href="https://discord.gg/your-invite" target="_blank" rel="noopener noreferrer" className="text-gray-800 dark:text-gray-100 hover:text-indigo-500">
          <FaDiscord size={20} />
        </a>
        <a href="https://youtube.com/your-channel" target="_blank" rel="noopener noreferrer" className="text-gray-800 dark:text-gray-100 hover:text-red-500">
          <FaYoutube size={20} />
        </a>
        <a href="https://linktr.ee/your-link" target="_blank" rel="noopener noreferrer" className="text-gray-800 dark:text-gray-100 hover:text-green-500">
          <FaLink size={20} />
        </a>
      </div>
    </nav>
  );
}
