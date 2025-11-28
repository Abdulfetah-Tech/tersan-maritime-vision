const projects = [
  {
    title: 'Offshore Wind Farm Vessel',
    category: 'Renewable Energy',
    imageUrl: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/65d41db5-29df-4b25-a086-88ae1b0cef52/offshore-vessel-5nt056m-1764336665614.webp',
    description: 'Advanced vessel designed for the construction and maintenance of offshore wind farms.'
  },
  {
    title: 'Arctic LNG Carrier',
    category: 'Energy Transport',
    imageUrl: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/65d41db5-29df-4b25-a086-88ae1b0cef52/tersan-shipyard-hero-k9b5k9d-1764336649808.webp',
    description: 'Ice-class LNG carrier for transporting liquefied natural gas from the Arctic.'
  },
  {
    title: 'Pelagic Trawler',
    category: 'Fishing Industry',
    imageUrl: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/65d41db5-29df-4b25-a086-88ae1b0cef52/ship-construction-1fej0sj-1764336657815.webp',
    description: 'State-of-the-art factory trawler for sustainable and efficient fishing operations.'
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Featured Projects</h2>
          <p className="text-lg text-gray-400 mt-4 max-w-3xl mx-auto">A glimpse into our portfolio of sophisticated and successful deliveries.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="bg-gray-900 rounded-lg overflow-hidden shadow-lg group">
              <div className="relative h-64 overflow-hidden">
                 <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"/>
                 <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                 <div className="absolute bottom-0 left-0 p-4">
                    <p className="text-sm text-gray-300">{project.category}</p>
                    <h3 className="text-lg font-bold text-white">{project.title}</h3>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}