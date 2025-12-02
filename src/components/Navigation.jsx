// ============================================
// src/components/Navigation.jsx (React)
// ============================================
import { useState, useEffect, useRef } from 'react';

export default function Navigation() {
  const [isDark, setIsDark] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const navRef = useRef(null);

  const navLinks = [
    { href: '#inicio', label: 'Home', id: 'home' },
    { href: '#sobre-mi', label: 'About', id: 'about' },
    { href: '#proyectos', label: 'Projects', id: 'projects' },
    { href: '#skills', label: 'Skills', id: 'skills' },
    { href: '#contacto', label: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    // Dark mode inicial
    const darkMode = localStorage.getItem('darkMode') === 'true';
    setIsDark(darkMode);
    if (darkMode) document.documentElement.classList.add('dark');

    // Detectar scroll
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    // Intersection Observer para sección activa
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    navLinks.forEach((link) => {
      const section = document.querySelector(link.href);
      if (section) observer.observe(section);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  // Actualizar indicador en desktop cuando cambia la sección activa o el tamaño
  useEffect(() => {
    const updateIndicator = () => {
      const activeLink = navRef.current?.querySelector(
        `a[href="#${activeSection}"]`
      );
      if (activeLink && navRef.current) {
        const navRect = navRef.current.getBoundingClientRect();
        const linkRect = activeLink.getBoundingClientRect();

        setIndicatorStyle({
          width: linkRect.width,
          transform: `translateX(${linkRect.left - navRect.left}px)`,
        });
      }
    };

    updateIndicator();
    window.addEventListener('resize', updateIndicator);
    return () => window.removeEventListener('resize', updateIndicator);
  }, [activeSection]);

  const toggleDarkMode = () => {
    const newMode = !isDark;
    setIsDark(newMode);
    localStorage.setItem('darkMode', newMode);
    document.documentElement.classList.toggle('dark');
  };

  const handleNavClick = (id) => {
    setActiveSection(id);
    setIsMobileOpen(false); // cerrar menú móvil al hacer click
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/95 backdrop-blur-xl shadow-xl' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Fila principal: logo + nav desktop + controles */}
        <div className="flex items-center justify-between gap- py-3">
          {/* Logo / Nombre */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-md opacity-75 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold shadow-lg transform group-hover:scale-110 transition-transform">
                FG
              </div>
            </div>
            <div className="hidden md:block">
              <div className="text-white font-semibold text-lg">
                Fernando Guevara
              </div>
              <div className="text-blue-400 text-sm font-mono">{'<dev/>'}</div>
            </div>
          </a>

          {/* NAV DESKTOP (md y arriba) */}
          <nav className="hidden md:flex flex-1 justify-center">
            <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-full px-2 py-1 shadow-2xl border border-gray-700/50">
              {/* Indicador */}
              <div ref={navRef} className="relative flex items-center gap-1">
                <span
                  className="absolute left-0 top-0 h-full rounded-full bg-gray-700/70 transition-all duration-200"
                  style={indicatorStyle}
                />
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={() => handleNavClick(link.id)}
                    className={`relative px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                      activeSection === link.id
                        ? 'text-white'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </nav>

          {/* Controles derecha: dark mode + menú móvil */}
          <div className="flex items-center gap-2">
            {/* Toggle dark mode */}
            <button
              onClick={toggleDarkMode}
              className="p-3 rounded-full bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 text-white hover:scale-110 transition-transform shadow-lg"
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </button>

            {/* Botón menú móvil */}
            <button
              className="md:hidden p-3 rounded-full bg-gray-800/50 border border-gray-700/50 text-white shadow-lg"
              onClick={() => setIsMobileOpen((prev) => !prev)}
              aria-label="Toggle navigation menu"
            >
              {isMobileOpen ? (
                // Icono cerrar
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Icono hamburguesa
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* NAV MÓVIL (solo cuando está abierto) */}
        {isMobileOpen && (
          <nav className="md:hidden pb-4">
            <div className="flex flex-wrap gap-2 justify-center">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors duration-200 ${
                    activeSection === link.id
                      ? 'bg-gray-200 text-gray-900 border-gray-400'
                      : 'bg-gray-900/80 text-gray-300 border-gray-700 hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
