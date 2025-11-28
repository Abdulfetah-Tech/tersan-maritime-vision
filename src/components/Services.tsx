const services = [
  {
    title: 'New Builds',
    description: 'Construction of a wide range of vessels including LNG-powered, factory trawlers, and passenger ferries.',
    imageUrl: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/65d41db5-29df-4b25-a086-88ae1b0cef52/offshore-vessel-5nt056m-1764336665614.webp',
  },
  {
    title: 'Repair & Conversion',
    description: 'Comprehensive repair, maintenance, and conversion services for all types of vessels.',
    imageUrl: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/65d41db5-29df-4b25-a086-88ae1b0cef52/ship-repair-1al4nrc-1764336672955.webp',
  },
  {
    title: 'Offshore & Specialized Vessels',
    description: 'Expertise in building complex offshore support vessels and other specialized ships for unique operational needs.',
    imageUrl: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/65d41db5-29df-4b25-a086-88ae1b0cef52/tersan-shipyard-hero-k9b5k9d-1764336649808.webp',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Our Core Services</h2>
          <p className="text-lg text-gray-400 mt-4 max-w-3xl mx-auto">Delivering comprehensive solutions across the entire vessel lifecycle.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
              <img src={service.imageUrl} alt={service.title} className="w-full h-56 object-cover"/>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}