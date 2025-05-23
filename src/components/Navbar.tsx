import { Link } from "react-router-dom";
import { FaDiscord, FaYoutube, FaLink } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/30 dark:bg-gray-900/50 shadow-md px-6 py-4 flex flex-col md:flex-row items-center justify-center md:justify-between gap-3 md:gap-0">
      {/* Logo/Title */}
      <Link to="/">
        <h1 className="text-xl font-extrabold text-blue-800 dark:text-white text-center md:text-left">
          B O U N D L E S S
        </h1>
      </Link>

      {/* Nav + Icons */}
      <div className="flex flex-wrap justify-center items-center gap-6">
        {/* Animated Nav Links */}
        {[
          { label: "Shuriken", to: "/projects/drone" },
          { label: "Magrider", to: "/projects/hoverboard" },
          { label: "HyperX", to: "/projects/hyperloop" },
          { label: "About", to: "/about" },
          { label: "Events", to: "/events" },
          { label: "Join", to: "/contact" },
        ].map(({ label, to }) => (
          <Link
            key={label}
            to={to}
            className="relative group text-gray-800 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400"
          >
            {label}
            <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-current transition-all duration-300 group-hover:w-full" />
          </Link>
        ))}

        {/* Social Icons */}
        <a
          href="https://discord.gg/your-invite"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 dark:text-gray-100 hover:text-indigo-500"
        >
          <FaDiscord size={20} />
        </a>
        <a
          href="https://youtube.com/your-channel"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 dark:text-gray-100 hover:text-red-500"
        >
          <FaYoutube size={20} />
        </a>
        <a
          href="https://linktr.ee/your-link"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 dark:text-gray-100 hover:text-green-500"
        >
          <FaLink size={20} />
        </a>
      </div>
    </nav>
  );
}
