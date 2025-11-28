export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">About Tersan Shipyard</h2>
          <p className="text-lg text-gray-400 mt-4 max-w-3xl mx-auto">A world-class shipyard delivering complex vessels for the global maritime industry.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="rounded-lg overflow-hidden">
            <img src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/65d41db5-29df-4b25-a086-88ae1b0cef52/ship-construction-1fej0sj-1764336657815.webp" alt="Ship construction" className="w-full h-full object-cover"/>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Our Legacy of Excellence</h3>
            <p className="text-gray-300 mb-4">
              Tersan Shipyard is a leading name in the global shipbuilding industry. With state-of-the-art facilities and a highly skilled workforce, we specialize in the construction of technologically advanced offshore, fishing, and special-purpose vessels.
            </p>
            <p className="text-gray-300">
              Our commitment to quality, safety, and environmental sustainability is at the core of everything we do. We leverage cutting-edge technology and innovative processes to deliver vessels that meet the highest international standards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}