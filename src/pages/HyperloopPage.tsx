import { motion } from "framer-motion";

export default function HyperloopProject() {
  return (
    <div className="bg-black text-white">
      {/* HERO */}
      
      <section className="relative h-screen w-full flex items-center justify-center text-center overflow-hidden">
  <div
    className="absolute inset-0 w-full h-full bg-cover bg-center"
    style={{ backgroundImage: "url('/hyperx-placeholder.jpg')" }}
  />
  <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />
  <div className="relative z-20 px-6">
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-5xl md:text-6xl font-extrabold"
    >
      HyperX
    </motion.h1>
    <p className="text-lg md:text-xl text-gray-300 mt-2">
      Hyperloop Pod – Subsonic Speed in a Sealed Tube
    </p>
  </div>
</section>

      {/* CONTENT SECTIONS */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">The Future</h2>
        <p className="text-gray-300 text-lg">
          Vortex is a conceptual student project bringing hyperloop travel closer to reality.
          With near-vacuum tubes and linear induction propulsion, it's built for speed and safety.
        </p>
      </section>

      <section className="py-20 px-6 bg-gray-900 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">System Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-xl font-semibold">🌬️ Propulsion</h3>
            <p className="text-gray-400">Linear electric motors with air compressors</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">🌌 Environment</h3>
            <p className="text-gray-400">Low-pressure tube for drag reduction</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">⏱️ Speed</h3>
            <p className="text-gray-400">Up to 1000 km/h theoretical limit</p>
          </div>
        </div>
      </section>
    </div>
  );
}
