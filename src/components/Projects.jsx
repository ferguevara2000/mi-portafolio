import { useState } from 'react';

export default function Projects() {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'Plataforma completa de comercio electrónico con carrito de compras, pasarela de pagos y panel de administración.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: '🛒',
      github: 'https://github.com/tuusuario/proyecto1',
      demo: 'https://demo1.com'
    },
    {
      title: 'Dashboard Analítico',
      description: 'Dashboard interactivo con visualización de datos en tiempo real y reportes personalizables.',
      tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Chart.js'],
      image: '📊',
      github: 'https://github.com/tuusuario/proyecto2',
      demo: 'https://demo2.com'
    },
    {
      title: 'API RESTful',
      description: 'API escalable con autenticación JWT, documentación Swagger y sistema de caché.',
      tech: ['Express', 'MongoDB', 'Redis', 'Docker'],
      image: '🔌',
      github: 'https://github.com/tuusuario/proyecto3',
      demo: 'https://demo3.com'
    }
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="proyectos" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">Proyectos Destacados</h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
          Algunos de mis trabajos más recientes
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-6xl">
                {project.image}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 h-20">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2 border-2 border-gray-300 dark:border-gray-600 rounded-lg hover:border-blue-600 dark:hover:border-blue-400 transition-colors"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}