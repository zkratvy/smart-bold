
'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=modern%20digital%20marketing%20agency%20office%20with%20creative%20young%20team%20working%20on%20laptops%20and%20tablets%2C%20bright%20professional%20workspace%20with%20large%20windows%2C%20contemporary%20interior%20design%20with%20pink%20and%20turquoise%20accent%20colors%2C%20clean%20minimalist%20aesthetic%2C%20warm%20lighting%2C%20young%20professionals%20collaborating%20on%20marketing%20campaigns%2C%20vibrant%20pink%20and%20turquoise%20details%2C%20high-tech%20environment%2C%20energetic%20atmosphere%2C%20creative%20workspace%20design%20with%20modern%20furniture%20and%20equipment&width=1920&height=1080&seq=hero-bg-smart-bold&orientation=landscape')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-gray-900/60"></div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Creamos marcas <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
              imposibles de ignorar
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl">
            Agencia moderna y audaz especializada en impulsar PyMEs y emprendimientos con estrategias de marketing digital innovadoras, orientadas a resultados concretos
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-pink-600 hover:to-purple-600 transition-all duration-300 shadow-lg cursor-pointer whitespace-nowrap">
              Consulta Gratuita
            </button>
            
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-black transition-all duration-300 cursor-pointer whitespace-nowrap">
              Descubre Nuestros Valores
            </button>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl">
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-500 mb-2">PyMEs</div>
              <div className="text-gray-200">Nuestro Cliente Ideal</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-500 mb-2">Resultados</div>
              <div className="text-gray-200">Medibles y Concretos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-500 mb-2">100%</div>
              <div className="text-gray-200">Audaz y Disruptivo</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-8 flex items-center justify-center">
          <i className="ri-arrow-down-line text-white text-2xl"></i>
        </div>
      </div>
      
      <div className="absolute top-32 right-8 w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
        <img 
          src="https://static.readdy.ai/image/f19394c09c921372d9eb3d560e72bb2b/cfcbb9478d4a4de6fed8a947d872de54.png"
          alt="Smart Bold Isotipo"
          className="w-8 h-8"
        />
      </div>
    </section>
  );
}
