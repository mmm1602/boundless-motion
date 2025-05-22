export default function Gallery() {
  return (
    <section className="max-w-5xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold mb-6">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="bg-gray-200 h-48 flex items-center justify-center">Drone Project</div>
        <div className="bg-gray-200 h-48 flex items-center justify-center">Hoverboard Test</div>
        <div className="bg-gray-200 h-48 flex items-center justify-center">Hyperloop Model</div>
      </div>
    </section>
  );
}
