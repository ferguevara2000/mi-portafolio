import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    // Simular envío (aquí integrarías tu backend o servicio como EmailJS)
    setTimeout(() => {
      setStatus('sent');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    }, 1000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contacto" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">Contacto</h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
          ¿Tienes un proyecto en mente? ¡Hablemos!
        </p>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Información de contacto</h3>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center text-2xl">
                  📧
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <a href="mailto:fguevara4731@hotmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                    fguevara4731@hotmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center text-2xl">
                  💼
                </div>
                <div>
                  <p className="font-semibold">LinkedIn</p>
                  <a href="https://www.linkedin.com/in/fernando-guevara-bayas-788981184/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                    in/fernando-guevara-bayas-788981184/
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center text-2xl">
                  💻
                </div>
                <div>
                  <p className="font-semibold">GitHub</p>
                  <a href="https://github.com/ferguevara2000" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                    github.com/ferguevara2000
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2 font-semibold">Nombre</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block mb-2 font-semibold">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block mb-2 font-semibold">Mensaje</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              ></textarea>
            </div>
            
            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-50"
            >
              {status === 'sending' ? 'Enviando...' : status === 'sent' ? '¡Enviado! ✓' : 'Enviar Mensaje'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}