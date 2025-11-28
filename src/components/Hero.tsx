export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://storage.googleapis.com/dala-prod-public-storage/generated-images/65d41db5-29df-4b25-a086-88ae1b0cef52/tersan-shipyard-hero-k9b5k9d-1764336649808.webp')" }}></div>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4">Engineering the Future of Maritime</h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">Pioneering advanced shipbuilding solutions with a commitment to quality, innovation, and sustainability.</p>
        <a href="#services" className="mt-8 inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-md hover:bg-blue-700 transition-all duration-300 ease-in-out transform hover:scale-105">
          Our Services
        </a>
      </div>
    </section>
  );
}