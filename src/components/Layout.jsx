import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MapPin, Phone, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect for the navigation bar
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Αρχική', path: '/' },
    { name: 'Σχετικά', path: '/about' },
    { name: 'Υπηρεσίες', path: '/services' },
    { name: 'Προσέγγιση', path: '/approach' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-earth-50">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'py-2' : 'py-4'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className={`flex justify-between items-center px-6 py-3 rounded-full transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg border border-earth-100' : 'bg-transparent'}`}>
            
            <Link to="/" className="flex items-center gap-2 z-50">
              <img src="https://github.com/agelmet/PLIAKOU/blob/main/logooo.jpg?raw=true" alt="Maria Pliakou Logo" className="h-10 md:h-12 w-auto mix-blend-multiply" />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path}
                  className={`text-sm tracking-wide transition-colors duration-300 ${location.pathname === link.path ? 'text-brand-accent font-medium' : 'text-earth-500 hover:text-earth-900'}`}
                >
                  {link.name}
                </Link>
              ))}
              
              <div className="flex items-center gap-3 border-l border-earth-300 pl-6">
                <a href="https://www.facebook.com/maria.pliakou/" target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform">
                  <img src="https://raw.githubusercontent.com/agelmet/Image-hosting-/refs/heads/main/icons8-facebook-480.png" alt="Facebook" className="w-5 h-5 object-contain" />
                </a>
                <a href="https://www.instagram.com/mar_pliakou/" target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform">
                  <img src="https://raw.githubusercontent.com/agelmet/Image-hosting-/refs/heads/main/instagram-logo-instagram-icon-transparent-free-png.png.webp" alt="Instagram" className="w-5 h-5 object-contain" />
                </a>
              </div>

              <Link to="/contact" className="ml-2 px-6 py-2.5 bg-earth-900 text-earth-50 text-sm rounded-full hover:bg-brand-accent transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                Επικοινωνία
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button className="md:hidden text-earth-900 z-50" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-white/95 backdrop-blur-xl z-40 transition-transform duration-500 flex flex-col items-center justify-center gap-8 ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="text-2xl text-earth-900 font-serif"
            >
              {link.name}
            </Link>
          ))}
          <div className="flex gap-6 mt-4">
             <a href="https://www.facebook.com/maria.pliakou/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/agelmet/Image-hosting-/refs/heads/main/icons8-facebook-480.png" alt="Facebook" className="w-8 h-8" /></a>
             <a href="https://www.instagram.com/mar_pliakou/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/agelmet/Image-hosting-/refs/heads/main/instagram-logo-instagram-icon-transparent-free-png.png.webp" alt="Instagram" className="w-8 h-8" /></a>
          </div>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="mt-4 px-8 py-3 bg-earth-900 text-earth-50 rounded-full text-lg">
            Επικοινωνία
          </Link>
        </div>
      </nav>

      {/* Dynamic Page Content */}
      <main className="flex-grow pt-24">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-earth-900 text-earth-100 pt-20 pb-10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/5 rounded-full blur-[100px] transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-12 gap-12 mb-16">
            <div className="md:col-span-5">
              <h3 className="text-3xl font-serif mb-4 text-white">Μαρία Πλιάκου</h3>
              <p className="text-earth-300 font-light max-w-sm mb-8">
                Κλινική Ψυχολόγος - Ψυχοθεραπεύτρια CBT.<br/>
                Δομημένη Αλλαγή, Ορατά Αποτελέσματα.
              </p>
              <Link to="/contact" className="inline-block px-8 py-3 bg-brand-accent text-white rounded-full font-medium hover:bg-white hover:text-earth-900 transition-colors duration-300">
                ΚΛΕΙΣΤΕ ΡΑΝΤΕΒΟΥ
              </Link>
            </div>
            <div className="md:col-span-4">
              <h4 className="text-sm font-bold text-brand-accent mb-6 tracking-widest uppercase">Επικοινωνια</h4>
              <ul className="space-y-4 text-earth-300 font-light">
                <li className="flex items-start gap-3"><MapPin size={20} className="text-brand-accent shrink-0 mt-1" /><span>Μίσθου 2, Τ.Κ. 16121<br/>Περιοχή Κάραβελ (Μετρό Ευαγγελισμός)</span></li>
                <li className="flex items-center gap-3"><Phone size={20} className="text-brand-accent shrink-0" /><a href="tel:+306979665223" className="hover:text-brand-accent transition-colors">+30 697 9665 223</a></li>
              </ul>
            </div>
            <div className="md:col-span-3">
              <h4 className="text-sm font-bold text-brand-accent mb-6 tracking-widest uppercase">Διαδικτυακα</h4>
              <ul className="space-y-4 text-earth-300 font-light mb-8">
                <li className="flex items-center gap-3"><Mail size={20} className="text-brand-accent shrink-0" /><a href="mailto:info@mariapliakou.com" className="hover:text-brand-accent transition-colors">info@mariapliakou.com</a></li>
              </ul>
              <div className="flex gap-4">
                <a href="https://www.facebook.com/maria.pliakou/" target="_blank" rel="noreferrer" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"><img src="https://raw.githubusercontent.com/agelmet/Image-hosting-/refs/heads/main/icons8-facebook-480.png" alt="Facebook" className="w-5 h-5" /></a>
                <a href="https://www.instagram.com/mar_pliakou/" target="_blank" rel="noreferrer" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"><img src="https://raw.githubusercontent.com/agelmet/Image-hosting-/refs/heads/main/instagram-logo-instagram-icon-transparent-free-png.png.webp" alt="Instagram" className="w-5 h-5" /></a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center md:text-left text-earth-500 text-sm">
            © {new Date().getFullYear()} Μαρία Πλιάκου. Με επιφύλαξη παντός δικαιώματος.
          </div>
        </div>
      </footer>
    </div>
  );
}