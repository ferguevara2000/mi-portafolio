import { useState, useEffect } from 'react';

export default function Hero() {
  const [text, setText] = useState('');
  const fullText = 'Fullstack Developer';
  
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 animate-fade-in">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1">
            <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center text-4xl">
              👨‍💻
            </div>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Hola, soy <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Fernando Guevara</span>
        </h1>
        
        <p className="text-2xl md:text-3xl text-gray-600 dark:text-gray-400 mb-8 h-12">
          {text}<span className="animate-pulse">|</span>
        </p>
        
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          Creo experiencias web excepcionales combinando diseño elegante con código limpio y eficiente.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#proyectos"
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all"
          >
            Ver Proyectos
          </a>
          <a
            href="#contacto"
            className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 rounded-lg font-semibold hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-all"
          >
            Contáctame
          </a>
        </div>
        
        <div className="mt-16 flex justify-center gap-6">
          <a href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-blue-600 transition-colors">
            💻
          </a>
          <a href="https://linkedin.com/in/tuusuario" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-blue-600 transition-colors">
            💼
          </a>
          <a href="mailto:tu@email.com" className="text-3xl hover:text-blue-600 transition-colors">
            📧
          </a>
        </div>
      </div>
    </section>
  );
}