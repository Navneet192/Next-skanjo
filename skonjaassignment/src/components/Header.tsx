import { useState } from 'react';
import { Zap } from 'lucide-react';
import Button from './SimpleButton';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white/80 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Zap className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">SKANJO</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Analyze CV</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Features</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Pricing</a>
          </nav>
          <div className="hidden md:flex items-center space-x-4">
              <button className="text-gray-700 hover:text-indigo-600 transition-colors duration-200 font-medium">
                Sign In
              </button>
              <button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-2 rounded-lg transition-colors duration-200 font-medium">
                Get Started
              </button>
          </div>
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <div className="w-full h-0.5 bg-gray-600"></div>
              <div className="w-full h-0.5 bg-gray-600"></div>
              <div className="w-full h-0.5 bg-gray-600"></div>
            </div>
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Analyze CV</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Features</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Pricing</a>
              <div className="hidden md:flex items-center space-x-4">
              <button className="text-gray-700 hover:text-indigo-600 transition-colors duration-200 font-medium">
                Sign In
              </button>
              <button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-2 rounded-lg transition-colors duration-200 font-medium">
                Get Started
              </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
