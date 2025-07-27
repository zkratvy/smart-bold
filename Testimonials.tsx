'use client';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'María González',
      company: 'Boutique Elena',
      role: 'CEO & Fundadora',
      content: 'Desde que trabajo con esta agencia, mis ventas online han crecido un 200%. Su estrategia de Instagram ha sido clave para conectar con mi audiencia.',
      rating: 5,
      avatar: 'https://readdy.ai/api/search-image?query=professional%20businesswoman%20portrait%2C%20confident%20female%20entrepreneur%2C%20modern%20business%20attire%2C%20professional%20headshot%2C%20sophisticated%20business%20executive%2C%20contemporary%20professional%20woman%2C%20clean%20background%20portrait&width=100&height=100&seq=testimonial-maria&orientation=squarish'
    },
    {
      name: 'Carlos Mendoza',
      company: 'RestaurantePlus',
      role: 'Gerente General',
      content: 'La gestión de redes sociales ha sido excepcional. Hemos triplicado nuestros pedidos online y la interacción con clientes ha mejorado significativamente.',
      rating: 5,
      avatar: 'https://readdy.ai/api/search-image?query=professional%20businessman%20portrait%2C%20confident%20male%20entrepreneur%2C%20modern%20business%20suit%2C%20professional%20headshot%2C%20sophisticated%20business%20executive%2C%20contemporary%20professional%20man%2C%20clean%20background%20portrait&width=100&height=100&seq=testimonial-carlos&orientation=squarish'
    },
    {
      name: 'Ana Rodríguez',
      company: 'FitLife Studio',
      role: 'Propietaria',
      content: 'El trabajo con influencers fitness ha sido increíble. Hemos conseguido 300 nuevos miembros en solo 3 meses gracias a su estrategia.',
      rating: 5,
      avatar: 'https://readdy.ai/api/search-image?query=professional%20businesswoman%20portrait%2C%20confident%20female%20fitness%20business%20owner%2C%20modern%20athletic%20wear%2C%20professional%20headshot%2C%20sporty%20business%20executive%2C%20contemporary%20professional%20woman%2C%20clean%20background%20portrait&width=100&height=100&seq=testimonial-ana&orientation=squarish'
    },
    {
      name: 'David López',
      company: 'TechSolutions',
      role: 'CEO',
      content: 'Su enfoque estratégico en marketing digital nos ayudó a posicionar nuestra startup. Los resultados superaron nuestras expectativas.',
      rating: 5,
      avatar: 'https://readdy.ai/api/search-image?query=professional%20tech%20entrepreneur%20portrait%2C%20confident%20male%20startup%20founder%2C%20modern%20casual%20business%20attire%2C%20professional%20headshot%2C%20innovative%20tech%20executive%2C%20contemporary%20professional%20man%2C%20clean%20background%20portrait&width=100&height=100&seq=testimonial-david&orientation=squarish'
    },
    {
      name: 'Laura Martín',
      company: 'EcoVida',
      role: 'Fundadora',
      content: 'Gracias a su trabajo, hemos logrado crear una comunidad sólida alrededor de nuestra marca ecológica. El engagement es excepcional.',
      rating: 5,
      avatar: 'https://readdy.ai/api/search-image?query=professional%20businesswoman%20portrait%2C%20confident%20female%20eco-business%20owner%2C%20modern%20sustainable%20fashion%2C%20professional%20headshot%2C%20environmental%20business%20executive%2C%20contemporary%20professional%20woman%2C%20clean%20background%20portrait&width=100&height=100&seq=testimonial-laura&orientation=squarish'
    },
    {
      name: 'Roberto Silva',
      company: 'Café Central',
      role: 'Propietario',
      content: 'La estrategia local ha sido perfecta para nuestro negocio. Hemos aumentado el tráfico de clientes en un 150% en nuestro barrio.',
      rating: 5,
      avatar: 'https://readdy.ai/api/search-image?query=professional%20cafe%20owner%20portrait%2C%20confident%20male%20restaurant%20entrepreneur%2C%20modern%20casual%20business%20attire%2C%20professional%20headshot%2C%20hospitality%20business%20executive%2C%20contemporary%20professional%20man%2C%20clean%20background%20portrait&width=100&height=100&seq=testimonial-roberto&orientation=squarish'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Lo que Dicen Nuestros Clientes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            La satisfacción de nuestros clientes es nuestra mayor motivación. Escucha sus experiencias trabajando con nosotros
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <div key={i} className="w-5 h-5 flex items-center justify-center">
                    <i className="ri-star-fill text-yellow-400"></i>
                  </div>
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 italic leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover object-top mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm font-medium text-cyan-600">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-lg cursor-pointer whitespace-nowrap">
            Ver Más Testimonios
          </button>
        </div>
      </div>
    </section>
  );
}