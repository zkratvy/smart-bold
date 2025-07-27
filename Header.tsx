
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Servicios', href: '#services' },
    { name: 'Nosotros', href: '#about' },
    { name: 'Casos de Éxito', href: '#portfolio' },
    { name: 'Testimonios', href: '#testimonials' },
    { name: 'Contacto', href: '#contact' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800/50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <img 
                src="https://static.readdy.ai/image/f19394c09c921372d9eb3d560e72bb2b/bc31528a9aa0395825ef4bab343ae3a1.png"
                alt="Smart Bold Logo"
                className="h-16 w-auto"
              />
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white hover:text-pink-500 transition-colors duration-300 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <div className="w-8 h-8 flex items-center justify-center">
              <img 
                src="https://static.readdy.ai/image/f19394c09c921372d9eb3d560e72bb2b/cfcbb9478d4a4de6fed8a947d872de54.png"
                alt="Smart Bold Isotipo"
                className="w-6 h-6"
              />
            </div>
            <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-2 rounded-full font-semibold hover:from-pink-600 hover:to-purple-600 transition-all duration-300 whitespace-nowrap">
              Consulta Gratuita
            </button>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-pink-500 transition-colors duration-300"
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-xl`}></i>
              </div>
            </button>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-sm border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-white hover:text-pink-500 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <button className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-full font-semibold hover:from-pink-600 hover:to-purple-600 transition-all duration-300 whitespace-nowrap">
                  Consulta Gratuita
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
