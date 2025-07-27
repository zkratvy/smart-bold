
'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 relative overflow-hidden">
      <div className="absolute top-8 left-8 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
        <img 
          src="https://static.readdy.ai/image/f19394c09c921372d9eb3d560e72bb2b/cfcbb9478d4a4de6fed8a947d872de54.png"
          alt="Smart Bold Isotipo"
          className="w-5 h-5"
        />
      </div>
      
      <div className="absolute bottom-8 right-8 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
        <img 
          src="https://static.readdy.ai/image/f19394c09c921372d9eb3d560e72bb2b/cfcbb9478d4a4de6fed8a947d872de54.png"
          alt="Smart Bold Isotipo"
          className="w-6 h-6"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-6">
              <img 
                src="https://static.readdy.ai/image/f19394c09c921372d9eb3d560e72bb2b/bc31528a9aa0395825ef4bab343ae3a1.png"
                alt="Smart Bold Logo"
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-300 mb-4">
              Agencia moderna y audaz que impulsa PyMEs y emprendimientos con estrategias de marketing digital innovadoras y orientadas a resultados concretos.
            </p>
            <div className="bg-gradient-to-r from-pink-500 to-purple-500 p-3 rounded-lg mb-6">
              <p className="text-white text-sm font-semibold">
                Visibilizar a los que aún no son vistos. Crear marcas valientes que generen impacto.
              </p>
            </div>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors">
                <i className="ri-facebook-fill"></i>
              </div>
              <div className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-pink-700 transition-colors">
                <i className="ri-instagram-fill"></i>
              </div>
              <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-500 transition-colors">
                <i className="ri-twitter-fill"></i>
              </div>
              <div className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-800 transition-colors">
                <i className="ri-linkedin-fill"></i>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Nuestros Servicios</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#services" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Marketing Digital
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Gestión de Influencers
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Diseño y Branding
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Redes Sociales
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Publicidad Online
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Consultoría Estratégica
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Nuestra Empresa</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#about" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Nuestros Valores
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Casos de Éxito
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Testimonios
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Contacto
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Únete al Equipo
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <div className="w-5 h-5 flex items-center justify-center mr-3">
                  <i className="ri-map-pin-line"></i>
                </div>
                <span>Av. Innovación 123, Piso 8</span>
              </div>
              <div className="flex items-center text-gray-300">
                <div className="w-5 h-5 flex items-center justify-center mr-3">
                  <i className="ri-phone-line"></i>
                </div>
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-300">
                <div className="w-5 h-5 flex items-center justify-center mr-3">
                  <i className="ri-mail-line"></i>
                </div>
                <span>hola@smartbold.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <div className="w-5 h-5 flex items-center justify-center mr-3">
                  <i className="ri-time-line"></i>
                </div>
                <span>Lun - Vie: 9:00 - 18:00</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm mb-4 md:mb-0">
              2024 Smart Bold. Todos los derechos reservados. Creamos marcas imposibles de ignorar.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                Política de Privacidad
              </Link>
              <Link href="/terms" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                Términos de Uso
              </Link>
              <Link href="/cookies" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
