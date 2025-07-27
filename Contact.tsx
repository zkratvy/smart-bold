
'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://readdy.ai/api/form/contact-smart-bold', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData).toString()
      });

      if (response.ok) {
        setSubmitMessage('¡Mensaje enviado con éxito! Te contactaremos pronto.');
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          service: '',
          message: ''
        });
      } else {
        setSubmitMessage('Error al enviar el mensaje. Por favor, intenta de nuevo.');
      }
    } catch (error) {
      setSubmitMessage('Error al enviar el mensaje. Por favor, intenta de nuevo.');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitMessage(''), 5000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-12 left-12 w-14 h-14 bg-pink-500/20 rounded-full flex items-center justify-center">
        <img 
          src="https://static.readdy.ai/image/f19394c09c921372d9eb3d560e72bb2b/cfcbb9478d4a4de6fed8a947d872de54.png"
          alt="Smart Bold Isotipo"
          className="w-7 h-7"
        />
      </div>
      
      <div className="absolute bottom-12 right-12 w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center">
        <img 
          src="https://static.readdy.ai/image/f19394c09c921372d9eb3d560e72bb2b/cfcbb9478d4a4de6fed8a947d872de54.png"
          alt="Smart Bold Isotipo"
          className="w-5 h-5"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            ¿Listo para Ser <span className="text-pink-500">Smart</span> y <span className="text-purple-500">Bold</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Contáctanos para una consulta gratuita y descubre cómo podemos ayudarte a crecer con inteligencia y audacia
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Información de Contacto</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                  <i className="ri-map-pin-line text-white text-xl"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Dirección</h4>
                  <p className="text-gray-600">Av. Innovación 123, Piso 8<br />Ciudad Digital, CD 12345</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                  <i className="ri-phone-line text-white text-xl"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Teléfono</h4>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                  <i className="ri-mail-line text-white text-xl"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                  <p className="text-gray-600">hola@smartbold.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                  <i className="ri-time-line text-white text-xl"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Horario</h4>
                  <p className="text-gray-600">Lunes a Viernes: 9:00 - 18:00<br />Sábados: 10:00 - 14:00</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="font-semibold text-gray-900 mb-4">Síguenos en Redes Sociales</h4>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors">
                  <i className="ri-facebook-fill text-white"></i>
                </div>
                <div className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-pink-700 transition-colors">
                  <i className="ri-instagram-fill text-white"></i>
                </div>
                <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-500 transition-colors">
                  <i className="ri-twitter-fill text-white"></i>
                </div>
                <div className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-800 transition-colors">
                  <i className="ri-linkedin-fill text-white"></i>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Solicita tu Consulta Gratuita</h3>
            
            <form id="contact-smart-bold" onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm"
                    placeholder="Tu nombre completo"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Empresa
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm"
                    placeholder="Nombre de tu empresa"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  Servicio de Interés
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm pr-8"
                >
                  <option value="">Selecciona un servicio</option>
                  <option value="marketing-digital">Marketing Digital</option>
                  <option value="gestion-influencers">Gestión de Influencers</option>
                  <option value="diseno-branding">Diseño y Branding</option>
                  <option value="redes-sociales">Redes Sociales</option>
                  <option value="publicidad-online">Publicidad Online</option>
                  <option value="consultoria">Consultoría Estratégica</option>
                  <option value="todos">Todos los servicios</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  maxLength={500}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm resize-none"
                  placeholder="Cuéntanos sobre tu proyecto y objetivos..."
                ></textarea>
                <div className="text-right text-sm text-gray-500 mt-1">
                  {formData.message.length}/500
                </div>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-4 rounded-lg text-lg font-semibold hover:from-pink-600 hover:to-purple-600 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
              </button>
            </form>
            
            {submitMessage && (
              <div className={`mt-4 p-4 rounded-lg ${submitMessage.includes('éxito') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {submitMessage}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
