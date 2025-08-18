import { useEffect, useState } from 'react';
console.log('Header mounted');
import { Button } from '@/components/ui/button';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleBookDemo = () => {
    navigate('/contact');
  };

  useEffect(() => {
    const sentinel = document.getElementById('header-sentinel');
    if (!sentinel) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setScrolled(!entry.isIntersecting);
      },
      { rootMargin: '0px', threshold: 0 }
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 h-16 overflow-visible ${
      scrolled
        ? 'bg-white/40 backdrop-blur-2xl shadow-lg'
        : 'bg-transparent border-none shadow-none backdrop-blur-0'
    }`}>
      <div className="container mx-auto max-w-7xl px-6 py-3 h-full flex items-center">
        <div className="flex items-center justify-between w-full h-full">
          <Link to="/" className="flex items-center h-full">
            <img src="/logot.svg" alt="TryzenIQ Logo" className="h-36 w-auto -my-1 scale-125" />
          </Link>
          <div className="flex-1 flex justify-center">
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative text-base font-medium transition-colors duration-200 ${
                    location.pathname === link.path
                      ? 'text-gray-900' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-purple-600 rounded-full" />
                  )}
                </Link>
              ))}
            </nav>
          </div>
          <div className="md:hidden flex items-center">
            <Sheet>
              <SheetTrigger asChild>
                <button className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500">
                  <Menu className="w-7 h-7 text-gray-900" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="z-[200]">
                <nav className="flex flex-col gap-6 mt-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.path}
                      className={`text-lg font-medium ${location.pathname === link.path ? 'text-purple-600' : 'text-gray-900'}`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>
                <Button 
                  onClick={handleBookDemo}
                  className="mt-8 w-full bg-gradient-to-r from-purple-500 to-pink-400 hover:shadow-lg text-white font-bold py-3 px-6 rounded-lg"
                >
                  BOOK DEMO
                </Button>
              </SheetContent>
            </Sheet>
          </div>
          <Button 
            onClick={handleBookDemo}
            className="bg-gradient-to-r from-purple-500 to-pink-400 hover:shadow-lg text-white font-bold py-3 px-6 rounded-lg hidden sm:inline-block"
          >
            BOOK DEMO
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
