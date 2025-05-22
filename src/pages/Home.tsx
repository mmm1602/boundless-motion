export default function Home() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center text-white overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/background-hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />

      <div className="relative z-20 px-6 max-w-4xl">
        <h1 className="text-6xl md:text-7xl font-extrabold mb-6 leading-tight">
          Boundless Motion
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Building the future of transportation — drones, maglev hoverboards, and hyperloop trains.
        </p>
        <a
          href="https://discord.gg/your-invite"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-8 py-4 text-lg rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Join Our Discord
        </a>
      </div>
    </section>
  );
}
