import { useState, useEffect } from "react";
import { Menu, X, Droplets, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  onBookClick: () => void;
}

export function Navbar({ onBookClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "How it Works", href: "#how-it-works" },
    { name: "Pricing", href: "#pricing" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-white/80 py-3 shadow-sm backdrop-blur-md" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-600 text-white shadow-lg shadow-cyan-200">
              <Droplets className="h-6 w-6" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">
              Fresh<span className="text-cyan-600">Spin</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 transition-colors hover:text-cyan-600"
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center gap-4 border-l pl-8">
              <a href="tel:+1234567890" className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                <Phone className="h-4 w-4 text-cyan-600" />
                <span>(555) 123-4567</span>
              </a>
              <Button 
                onClick={onBookClick}
                className="rounded-full bg-cyan-600 px-6 hover:bg-cyan-700 shadow-md hover:shadow-lg transition-all"
              >
                Book Pickup
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="rounded-lg p-2 text-slate-600 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t bg-white md:hidden"
          >
            <div className="container mx-auto flex flex-col gap-4 px-4 py-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-slate-700"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <hr className="my-2" />
              <div className="flex flex-col gap-4">
                <a href="tel:+1234567890" className="flex items-center gap-2 text-slate-700">
                  <Phone className="h-5 w-5 text-cyan-600" />
                  <span>(555) 123-4567</span>
                </a>
                <Button 
                  onClick={() => {
                    onBookClick();
                    setIsOpen(false);
                  }}
                  className="w-full rounded-xl bg-cyan-600"
                >
                  Book Pickup
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}