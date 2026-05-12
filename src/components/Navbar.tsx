import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Results', href: '#results' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-[#050505]/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer z-50">
          <motion.div 
            whileHover={{ rotate: 180 }}
            transition={{ duration: 0.4 }}
            className="w-8 h-8 rounded bg-brand flex items-center justify-center font-display font-bold text-white tracking-tighter"
          >
            NX
          </motion.div>
          <span className="font-display font-semibold text-xl tracking-tight">Nexus AI</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 glass-panel px-8 py-3 rounded-full">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-brand transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-sm font-medium hover:text-brand transition-colors"
          >
            Log In
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="glowing-button bg-white text-black px-5 py-2.5 rounded-full text-sm font-semibold flex items-center gap-2 group"
          >
            Start Project
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white z-50 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, clipPath: 'circle(0% at top right)' }}
          animate={{ 
            opacity: mobileMenuOpen ? 1 : 0, 
            clipPath: mobileMenuOpen ? 'circle(150% at top right)' : 'circle(0% at top right)' 
          }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 bg-[#0a0a0a] z-40 md:hidden flex flex-col items-center justify-center min-h-screen"
        >
          <div className="flex flex-col items-center gap-8 text-2xl font-display font-medium">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: mobileMenuOpen ? 0 : 20, opacity: mobileMenuOpen ? 1 : 0 }}
                transition={{ delay: 0.1 + i * 0.1 }}
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-brand transition-colors"
              >
                {link.name}
              </motion.a>
            ))}
            <motion.button
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: mobileMenuOpen ? 0 : 20, opacity: mobileMenuOpen ? 1 : 0 }}
              transition={{ delay: 0.4 }}
              className="mt-4 bg-brand text-white px-8 py-4 rounded-full text-lg w-full max-w-[200px]"
            >
              Get Started
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
