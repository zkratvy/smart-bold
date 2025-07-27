
'use client';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-pink-500">Smart Bold</span> no hace <br />
              "lo de siempre"
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Somos una agencia moderna, juvenil y audaz que impulsa a pequeñas empresas y PyMEs a crecer con estrategias de marketing digital innovadoras y orientadas a resultados concretos. Combinamos creatividad, análisis y cercanía para crear marcas imposibles de ignorar.
            </p>

            <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white p-6 rounded-2xl mb-8">
              <h3 className="text-xl font-bold mb-2">Nuestro Propósito</h3>
              <p className="text-lg">Visibilizar a los que aún no son vistos. Crear marcas valientes que generen impacto.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mr-4 mt-1">
                  <img 
                    src="https://static.readdy.ai/image/f19394c09c921372d9eb3d560e72bb2b/cfcbb9478d4a4de6fed8a947d872de54.png"
                    alt="Smart Bold Isotipo"
                    className="w-6 h-6"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Audacia</h3>
                  <p className="text-gray-600">Creamos diseños y campañas que rompen esquemas</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mr-4 mt-1">
                  <img 
                    src="https://static.readdy.ai/image/f19394c09c921372d9eb3d560e72bb2b/cfcbb9478d4a4de6fed8a947d872de54.png"
                    alt="Smart Bold Isotipo"
                    className="w-6 h-6"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Cercanía</h3>
                  <p className="text-gray-600">Comunicación directa, juvenil y horizontal</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mr-4 mt-1">
                  <img 
                    src="https://static.readdy.ai/image/f19394c09c921372d9eb3d560e72bb2b/cfcbb9478d4a4de6fed8a947d872de54.png"
                    alt="Smart Bold Isotipo"
                    className="w-6 h-6"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Disrupción</h3>
                  <p className="text-gray-600">Nada de lo que hacemos pasa desapercibido</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mr-4 mt-1">
                  <img 
                    src="https://static.readdy.ai/image/f19394c09c921372d9eb3d560e72bb2b/cfcbb9478d4a4de6fed8a947d872de54.png"
                    alt="Smart Bold Isotipo"
                    className="w-6 h-6"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Crecimiento</h3>
                  <p className="text-gray-600">Buscamos siempre el siguiente nivel, junto a nuestros clientes</p>
                </div>
              </div>
            </div>

            <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-pink-600 hover:to-purple-600 transition-all duration-300 shadow-lg cursor-pointer whitespace-nowrap">
              Conoce Nuestro Equipo
            </button>
          </div>

          <div className="relative">
            <img 
              src="https://readdy.ai/api/search-image?query=young%20creative%20marketing%20team%20working%20together%20in%20modern%20office%2C%20diverse%20group%20of%20millennial%20professionals%20collaborating%20on%20digital%20campaigns%2C%20contemporary%20workspace%20with%20pink%20and%20purple%20accent%20colors%2C%20bright%20and%20energetic%20work%20environment%2C%20teamwork%20and%20creativity%2C%20modern%20professional%20atmosphere%2C%20dynamic%20office%20interior%20design%20with%20natural%20lighting%20and%20vibrant%20colors&width=600&height=800&seq=about-team-smart-bold&orientation=portrait"
              alt="Equipo Smart Bold"
              className="rounded-2xl shadow-2xl w-full h-auto object-cover object-top"
            />

            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
              <div className="text-3xl font-bold text-pink-500 mb-1">100%</div>
              <div className="text-gray-700 font-medium">Marcas Imposibles de Ignorar</div>
            </div>

            <div className="absolute -top-6 -right-6 bg-white p-6 rounded-2xl shadow-xl">
              <div className="text-3xl font-bold text-purple-500 mb-1">PyMEs</div>
              <div className="text-gray-700 font-medium">Nuestro Cliente Ideal</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
