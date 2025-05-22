export default function Contact() {
  return (
    <section className="max-w-xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold mb-4">Join Us</h2>
      <form className="space-y-4">
        <input type="text" placeholder="Your Name" className="w-full p-2 border border-gray-300 rounded" />
        <input type="email" placeholder="Email Address" className="w-full p-2 border border-gray-300 rounded" />
        <textarea placeholder="Why do you want to join?" className="w-full p-2 border border-gray-300 rounded h-32"></textarea>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Submit
        </button>
      </form>
    </section>
  );
}
