import { useState } from 'react';
import { toast } from 'sonner';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      toast.error('Please fill in all fields.');
      return;
    }
    // Simulate form submission
    toast.success('Thank you for your message! We will get back to you shortly.');
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Get in Touch</h2>
          <p className="text-lg text-gray-400 mt-4 max-w-3xl mx-auto">We are here to answer any questions you may have. Reach out to us and we will respond as soon as we can.</p>
        </div>
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} className="w-full bg-gray-700 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <input type="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-gray-700 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <textarea placeholder="Your Message" value={message} onChange={(e) => setMessage(e.target.value)} rows={5} className="w-full bg-gray-700 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-6"></textarea>
            <div className="text-center">
                <button type="submit" className="bg-blue-600 text-white font-semibold px-8 py-3 rounded-md hover:bg-blue-700 transition-all duration-300 ease-in-out transform hover:scale-105">
                    Send Message
                </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}