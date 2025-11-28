export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800">
      <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center flex-col sm:flex-row">
          <p className="text-sm text-gray-400">&copy; {currentYear} Tersan Shipyard. All Rights Reserved.</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}