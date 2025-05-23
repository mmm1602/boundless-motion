import { motion } from "framer-motion";

export default function HoverboardProject() {
  return (
    <div className="bg-black text-white">
      {/* HERO */}
      <section className="relative h-screen w-full flex items-center justify-center text-center overflow-hidden">
  <div
    className="absolute inset-0 w-full h-full bg-cover bg-center"
    style={{ backgroundImage: "url('/hover-placeholder.jpg')" }}
  />
  <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />
  <div className="relative z-20 px-6">
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-5xl md:text-6xl font-extrabold"
    >
      MAGRIDER
    </motion.h1>
    <p className="text-lg md:text-xl text-gray-300 mt-2">
      Maglev Hoverboard – Urban Levitation in Motion
    </p>
  </div>
</section>

      {/* CONTENT SECTIONS */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">The Vision</h2>
        <p className="text-gray-300 text-lg">
          MagRider is a next-gen hoverboard using magnetic levitation and motion control. Designed
          for smooth and responsive urban travel, it redefines last-mile mobility.
        </p>
      </section>

      <section className="py-20 px-6 bg-gray-900 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Core Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-xl font-semibold">🧲 Levitation</h3>
            <p className="text-gray-400">Maglev rails with superconducting magnets</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">🧠 Control</h3>
            <p className="text-gray-400">Gyro-balanced lean-to-steer system</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">🚀 Speed</h3>
            <p className="text-gray-400">Top speed 25 km/h (regulated zones)</p>
          </div>
        </div>
      </section>
    </div>
  );
}
