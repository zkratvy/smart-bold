'use client';

export default function Portfolio() {
  const projects = [
    {
      title: 'RestaurantePlus',
      category: 'Restaurante',
      description: 'Aumentamos las ventas online en un 250% mediante estrategias de redes sociales y delivery',
      image: 'https://readdy.ai/api/search-image?query=modern%20restaurant%20interior%20with%20elegant%20dining%20setup%2C%20professional%20food%20photography%2C%20warm%20lighting%2C%20contemporary%20restaurant%20design%2C%20sophisticated%20atmosphere%2C%20high-quality%20food%20presentation%2C%20luxury%20dining%20experience%2C%20clean%20minimalist%20aesthetic&width=400&height=300&seq=portfolio-restaurant&orientation=landscape',
      results: ['+250% Ventas Online', '15k Seguidores Nuevos', '85% Incremento en Pedidos']
    },
    {
      title: 'TechStartup',
      category: 'Tecnología',
      description: 'Lanzamiento exitoso de app móvil con campaña integral de marketing digital',
      image: 'https://readdy.ai/api/search-image?query=modern%20tech%20startup%20office%20with%20developers%20working%20on%20computers%2C%20innovative%20technology%20workspace%2C%20clean%20modern%20design%2C%20professional%20software%20development%20environment%2C%20contemporary%20office%20setting%2C%20creative%20tech%20atmosphere%2C%20bright%20workspace%20with%20modern%20equipment&width=400&height=300&seq=portfolio-tech&orientation=landscape',
      results: ['+10k Descargas', '500k Impresiones', '12% CTR Promedio']
    },
    {
      title: 'ModaBoutique',
      category: 'Moda',
      description: 'Transformación digital completa para boutique de moda con enfoque en Instagram',
      image: 'https://readdy.ai/api/search-image?query=elegant%20fashion%20boutique%20interior%20with%20stylish%20clothing%20displays%2C%20modern%20retail%20space%2C%20sophisticated%20fashion%20store%20design%2C%20luxury%20shopping%20environment%2C%20contemporary%20boutique%20aesthetic%2C%20high-end%20fashion%20presentation%2C%20clean%20minimalist%20retail%20design&width=400&height=300&seq=portfolio-fashion&orientation=landscape',
      results: ['+180% Engagement', '25k Seguidores', '90% Incremento Ventas']
    },
    {
      title: 'FitnessCenter',
      category: 'Fitness',
      description: 'Campaña de captación de miembros con influencers fitness y contenido motivacional',
      image: 'https://readdy.ai/api/search-image?query=modern%20fitness%20gym%20interior%20with%20professional%20equipment%2C%20bright%20and%20motivating%20workout%20space%2C%20contemporary%20fitness%20center%20design%2C%20energetic%20atmosphere%2C%20clean%20modern%20gym%20environment%2C%20professional%20fitness%20facility%2C%20inspiring%20workout%20setting&width=400&height=300&seq=portfolio-fitness&orientation=landscape',
      results: ['+300 Miembros', '50k Alcance', '20% Conversión']
    },
    {
      title: 'EcoProducts',
      category: 'Sostenibilidad',
      description: 'Posicionamiento de marca ecológica con storytelling y contenido educativo',
      image: 'https://readdy.ai/api/search-image?query=eco-friendly%20products%20display%20with%20natural%20sustainable%20materials%2C%20green%20environmental%20theme%2C%20organic%20product%20presentation%2C%20sustainable%20lifestyle%20concept%2C%20natural%20textures%20and%20materials%2C%20eco-conscious%20brand%20aesthetic%2C%20clean%20green%20design&width=400&height=300&seq=portfolio-eco&orientation=landscape',
      results: ['+400% Awareness', '8k Comunidad', '95% Sentiment Positivo']
    },
    {
      title: 'LocalCafe',
      category: 'Gastronomía',
      description: 'Estrategia local con geolocalización y partnerships con micro-influencers',
      image: 'https://readdy.ai/api/search-image?query=cozy%20local%20coffee%20shop%20interior%20with%20warm%20atmosphere%2C%20artisanal%20coffee%20preparation%2C%20comfortable%20seating%20area%2C%20rustic%20modern%20cafe%20design%2C%20welcoming%20coffee%20house%20environment%2C%20professional%20barista%20workspace%2C%20intimate%20cafe%20setting&width=400&height=300&seq=portfolio-cafe&orientation=landscape',
      results: ['+150% Footfall', '12k Seguidores', '40% Repeat Customers']
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Casos de Éxito
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre cómo hemos ayudado a empresas como la tuya a alcanzar sus objetivos y superar sus expectativas
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {project.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="space-y-2">
                  {project.results.map((result, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center mr-3">
                        <i className="ri-check-line text-white text-xs"></i>
                      </div>
                      <span className="text-gray-700 font-medium">{result}</span>
                    </div>
                  ))}
                </div>
                
                <button className="w-full mt-6 border-2 border-gray-200 text-gray-700 py-2 rounded-full font-semibold hover:border-cyan-500 hover:text-cyan-500 transition-all duration-300 cursor-pointer whitespace-nowrap">
                  Ver Caso Completo
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}