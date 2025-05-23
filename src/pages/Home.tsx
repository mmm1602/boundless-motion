import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const projects = [
  {
    title: "Shuriken",
    image: "/Jetson-One.jpg",
    description: "A personal eVTOL drone built for vertical takeoff and low-altitude testing.",
    path: "/projects/drone",
  },
  {
    title: "Maglev",
    image: "/images.jpeg",
    description: "A magnetic levitation hoverboard that glides above a conductive track.",
    path: "/projects/hoverboard",
  },
  {
    title: "HyperX",
    image: "/train.jpg",
    description: "A scaled prototype of a high-speed vacuum tube transport system.",
    path: "/projects/hyperloop",
  },
];

export default function Home() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [offsetY, setOffsetY] = useState(0);
  const navigate = useNavigate();
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{
            transform: `translateY(${offsetY * 0.6}px)`,
            willChange: "transform",
          }}
        >
          <source src="/background-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/100 via-black/40 to-transparent" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-20 px-6 flex flex-col items-center"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">B O U N D L E S S @ U C F</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
            Future-Driven. Student-Built.
          </p>
          <a
            href="#projects"
            className="mt-10 animate-bounce text-white"
            aria-label="Scroll to Projects"
          >
            <FaChevronDown size={24} />
          </a>
        </motion.div>
      </section>

      {/* Project Selector Section */}
    <section
      id="projects"
      className="relative min-h-[600px] w-full flex flex-col md:flex-row"
    >

        <div
          className={`absolute inset-0 z-20 flex items-center justify-center text-center transition-opacity duration-1000 ${
            hovered !== null ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-none"
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-extrabold">Our Projects</h2>
        </div>

        {projects.map((project, index) => {
          const isHovered = hovered === index;
          const isOtherHovered = hovered !== null && hovered !== index;

          return (
          <div
            key={index}
            onClick={() => navigate(project.path)}
            onMouseEnter={() => !isMobile && setHovered(index)}
            onMouseLeave={() => !isMobile && setHovered(null)}
            className={`relative transition-all duration-500 ease-in-out cursor-pointer w-full md:flex-grow min-h-[300px] md:min-h-0 ${
              isHovered ? "md:basis-1/2" : isOtherHovered ? "md:basis-1/6" : "md:basis-1/3"
            }`}
          >

              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover opacity-100"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center text-center px-4">
                <div
                  className={`transition-all duration-300 ${
                    isHovered || isMobile ? "opacity-100 scale-100" : "opacity-0 scale-95"
                  }`}
                >
                  <h2 className="text-3xl font-bold mb-2">{project.title}</h2>
                  <p className="text-sm text-gray-300 max-w-xs mx-auto">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* About Us */}
      <section className="relative h-screen w-full mx-auto align-middle">
        <div className="relative z-10 bg-black h-full w-full text-center mx-auto m-auto">
          <div className="flex flex-col items-center justify-center h-full px-6">
            <h2 className="text-4xl font-bold mb-6">The Mission</h2>
            <p className="text-lg text-gray-300">
              Boundless is a student-led engineering organization at UCF dedicated to redefining mobility through innovative, hands-on projects. We design, build, and test ambitious systems — from flying vehicles to magnetic levitation and high-speed transport — preparing students for the future of aerospace and transport technology.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join */}
      <section className="py-20 px-6 bg-gray-900">
        <h2 className="text-4xl font-bold text-center mb-12">Why Join Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
          <div>
            <h3 className="text-2xl font-semibold mb-2">🚀 Real Engineering</h3>
            <p className="text-gray-300">Work on ambitious, industry-level systems in a team environment.</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">🛠️ Hands-On Learning</h3>
            <p className="text-gray-300">Build, test, and fly — it’s not just theory here.</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">🤝 Career Launchpad</h3>
            <p className="text-gray-300">Gain experience that makes your resume and portfolio stand out.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 text-center bg-black">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Push Boundaries?</h2>
        <p className="text-lg text-gray-300 mb-8">
          Join our team of creators, flyers, coders, and dreamers. Let’s engineer the future together.
        </p>
        <a
          href="/contact"
          className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 transition rounded-md font-semibold"
        >
          Join the Team
        </a>
      </section>
    </div>
  );
}
