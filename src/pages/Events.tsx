export default function Events() {
  return (
    <section className="max-w-4xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold mb-6">Upcoming Events</h2>
      <ul className="space-y-6">
        <li className="bg-white p-4 shadow rounded">
          <h3 className="text-xl font-semibold">🚀 Hyperloop Workshop</h3>
          <p className="text-gray-600">June 10, 2025 — Learn to build and simulate magnetic levitation transport systems.</p>
        </li>
        <li className="bg-white p-4 shadow rounded">
          <h3 className="text-xl font-semibold">🛸 Drone Design Sprint</h3>
          <p className="text-gray-600">July 15, 2025 — Collaborate on a manned drone prototype with our aerospace team.</p>
        </li>
      </ul>
    </section>
  );
}
