import { motion } from "framer-motion";

export default function DroneProject() {
  return (
    <div className="bg-black text-white">
      {/* HERO */}
      <section className="relative h-screen w-full flex items-center justify-center text-center overflow-hidden">
  <div
    className="absolute inset-0 w-full h-full bg-cover bg-center"
    style={{ backgroundImage: "url('/shuriken-placeholder.jpg')" }}
  />
  <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />
  <div className="relative z-20 px-6">
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-5xl md:text-6xl font-extrabold"
    >
      SHURIKEN
    </motion.h1>
    <p className="text-lg md:text-xl text-gray-300 mt-2">
      eVTOL Personal Drone – Low Altitude, High Performance
    </p>
  </div>
</section>


      {/* CONTENT SECTIONS */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">The Mission</h2>
        <p className="text-gray-300 text-lg">
          Shuriken is a fully student-designed electric vertical takeoff and landing drone
          aimed at pushing the boundaries of personal air mobility. With a carbon fiber frame
          and tilt-rotor configuration, it's built for short flights and rapid testing.
        </p>
      </section>

      <section className="py-20 px-6 bg-gray-900 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Technical Specs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-xl font-semibold">⚡ Power</h3>
            <p className="text-gray-400">12kW electric quad motor array</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">🪶 Weight</h3>
            <p className="text-gray-400">55 kg (without pilot)</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">🛫 Flight Time</h3>
            <p className="text-gray-400">7–10 min (urban test conditions)</p>
          </div>
        </div>
      </section>
    </div>
  );
}
