import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider"; // Assuming this path

// -------------------- Theme Toggle --------------------
const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
    >
      <Sun className="h-6 w-6 text-yellow-500 rotate-0 scale-100 transition-all duration-500 ease-in-out dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-6 w-6 text-gray-200 rotate-90 scale-0 transition-all duration-500 ease-in-out dark:rotate-0 dark:scale-100" />
    </Button>
  );
};


// -------------------- Header --------------------
const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Pricing", path: "/pricing" },
    { name: "Solutions", path: "/solutions" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const handleBookDemo = () => {
    setIsSheetOpen(false);
    navigate("/contact");
  };

  const handleLinkClick = () => {
    setIsSheetOpen(false);
  };

  useEffect(() => {
    const sentinel = document.getElementById("header-sentinel");
    if (!sentinel) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { rootMargin: "0px", threshold: 0 }
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 h-16 overflow-visible ${
        scrolled
          ? "bg-white/40 dark:bg-gray-950/40 backdrop-blur-2xl shadow-lg"
          : "bg-transparent border-none shadow-none backdrop-blur-0"
      }`}
    >
      <div className="container mx-auto max-w-7xl px-6 py-3 h-full flex items-center">
        <div className="flex items-center justify-between w-full h-full">
          {/* Logo */}
          <Link to="/" className="flex items-center h-full">
            <img
              src="/logot.svg"
              alt="TryzenIQ Logo"
              className="h-36 w-auto -my-1 scale-125 transition-all duration-300"            />
          </Link>

          {/* Desktop Nav */}
          <div className="flex-1 flex justify-center">
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative text-base font-medium transition-colors duration-200 ${
                    location.pathname === link.path
                      ? "text-gray-900 dark:text-gray-50"
                      : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
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

          {/* Desktop Actions */}
          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center gap-2">
              <ThemeToggle />
              <Button
                onClick={handleBookDemo}
                className="bg-gradient-to-r from-purple-500 to-pink-400 hover:shadow-lg text-white font-bold py-3 px-6 rounded-lg"
              >
                BOOK DEMO
              </Button>
            </div>

            {/* Mobile Actions */}
            <div className="md:hidden flex items-center gap-2">
              {/* Theme toggle on the LEFT of menu toggle */}
              <ThemeToggle />

              <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                <SheetTrigger asChild>
                  <button className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500">
                    <Menu className="w-7 h-7 text-gray-900 dark:text-gray-100" />
                  </button>
                </SheetTrigger>
                <SheetContent side="right" className="z-[200] w-[280px]">
                  <nav className="flex flex-col gap-6 mt-8">
                    {navLinks.map((link) => (
                      <Link
                        key={link.name}
                        to={link.path}
                        onClick={handleLinkClick}
                        className={`text-lg font-medium ${
                          location.pathname === link.path
                            ? "text-purple-600 dark:text-purple-400"
                            : "text-gray-900 dark:text-gray-100"
                        }`}
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
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
