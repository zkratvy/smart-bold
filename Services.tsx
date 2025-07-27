
'use client';

export default function Services() {
  const services = [
    {
      icon: 'ri-global-line',
      title: 'Marketing Digital',
      description: 'Estrategias digitales audaces y orientadas a resultados concretos para aumentar tus ventas y posicionarte en el mercado',
      features: ['SEO y SEM', 'Email Marketing', 'Marketing de Contenidos', 'Analytics y Reporting']
    },
    {
      icon: 'ri-user-star-line',
      title: 'Gestión de Influencers',
      description: 'Conectamos tu marca con influencers que realmente generen impacto y conversiones medibles',
      features: ['Selección Estratégica', 'Negociación de Contratos', 'Gestión de Campañas', 'ROI Garantizado']
    },
    {
      icon: 'ri-palette-line',
      title: 'Diseño y Branding',
      description: 'Creamos identidades visuales imposibles de ignorar que conecten emocionalmente con tu audiencia',
      features: ['Logo y Identidad', 'Diseño Web Audaz', 'Material Gráfico Disruptivo', 'Packaging Innovador']
    },
    {
      icon: 'ri-share-line',
      title: 'Redes Sociales',
      description: 'Gestión integral con enfoque juvenil y moderno para construir una comunidad sólida y comprometida',
      features: ['Contenido Audaz', 'Community Management', 'Publicidad Dirigida', 'Análisis de Impacto']
    },
    {
      icon: 'ri-megaphone-line',
      title: 'Publicidad Online',
      description: 'Campañas publicitarias que rompen esquemas y generan resultados medibles en todas las plataformas',
      features: ['Google Ads', 'Facebook Ads', 'Instagram Ads', 'TikTok Ads']
    },
    {
      icon: 'ri-line-chart-line',
      title: 'Consultoría Estratégica',
      description: 'Asesoramiento directo y cercano para definir estrategias claras, modernas y creativas para tu crecimiento',
      features: ['Análisis de Mercado', 'Estrategia Digital', 'Optimización de Procesos', 'Formación Práctica']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-20 left-8 w-12 h-12 bg-pink-500/20 rounded-full flex items-center justify-center">
        <img 
          src="https://static.readdy.ai/image/f19394c09c921372d9eb3d560e72bb2b/cfcbb9478d4a4de6fed8a947d872de54.png"
          alt="Smart Bold Isotipo"
          className="w-6 h-6"
        />
      </div>
      
      <div className="absolute bottom-20 right-8 w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center">
        <img 
          src="https://static.readdy.ai/image/f19394c09c921372d9eb3d560e72bb2b/cfcbb9478d4a4de6fed8a947d872de54.png"
          alt="Smart Bold Isotipo"
          className="w-8 h-8"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Servicios que Generan Impacto
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos soluciones completas diseñadas específicamente para pequeñas empresas y PyMEs que buscan crecer con estrategias modernas, audaces y orientadas a resultados concretos
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl flex items-center justify-center mb-6">
                <i className={`${service.icon} text-white text-2xl`}></i>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <div className="w-5 h-5 flex items-center justify-center mr-3">
                      <i className="ri-check-line text-pink-500 text-lg"></i>
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="w-full mt-6 bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 rounded-full font-semibold hover:from-pink-600 hover:to-purple-600 transition-all duration-300 cursor-pointer whitespace-nowrap">
                Más Información
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
