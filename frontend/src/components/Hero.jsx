export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-20 px-6 text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
        Free Workshops by IIT Bombay
      </h1>
      <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-8">
        Learn open-source tools like Python, Scilab, OpenFOAM and more — completely free.
      </p>
      <a
        href="/workshops"
        className="inline-block bg-white text-blue-700 font-semibold px-8 py-3 rounded-xl hover:bg-blue-50 transition"
      >
        Browse Workshops →
      </a>
    </section>
  );
}
