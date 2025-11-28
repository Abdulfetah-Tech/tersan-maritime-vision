import About from '/src/components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Services from '../components/Services';

export default function HomePage() {
  return (
    <div className='bg-gray-900 text-white'>
      <Header />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
