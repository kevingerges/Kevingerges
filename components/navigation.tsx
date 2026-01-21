"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Github, Linkedin, Mail, Menu, X, Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavigationProps {
  darkMode?: boolean;
  onToggleDarkMode?: () => void;
}

export function Navigation({ darkMode = false, onToggleDarkMode }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "https://docs.google.com/document/d/18iYTHH4uaWerQWBOeB6kDcC7VcZKDj9WGlVHOo2WK4g/edit?usp=sharing", label: "Resume", external: true },
    { href: "#experience", label: "Experience" },
    { href: "#hobbies", label: "Hobbies" },
    { href: "#connect", label: "Connect" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? darkMode
            ? "bg-neutral-950/80 backdrop-blur-xl border-b border-neutral-800"
            : "bg-white/80 backdrop-blur-xl border-b border-black/5 shadow-sm"
          : "bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="#home" className="flex items-center gap-2 group">
              <span className={`text-xl font-semibold tracking-tight ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
                Kevin Gerges
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors ${darkMode
                    ? 'text-neutral-400 hover:text-white'
                    : 'text-neutral-600 hover:text-neutral-900'
                    }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Social Icons, Dark Mode Toggle & Mobile Menu */}
            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center gap-2">
                {[
                  { icon: Github, href: "https://github.com/Kevingerges", label: "GitHub" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/kevingerges/", label: "LinkedIn" },
                  { icon: Mail, href: "mailto:kevingerges00@gmail.com", label: "Email" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${darkMode
                      ? 'bg-neutral-800 hover:bg-neutral-700 text-neutral-400 hover:text-white'
                      : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-600 hover:text-neutral-900'
                      }`}
                    aria-label={social.label}
                  >
                    <social.icon size={16} />
                  </a>
                ))}
              </div>

              {/* Dark Mode Toggle */}
              {onToggleDarkMode && (
                <button
                  onClick={onToggleDarkMode}
                  className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${darkMode
                    ? 'bg-neutral-800 hover:bg-neutral-700 text-yellow-400'
                    : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-700'
                    }`}
                  aria-label="Toggle dark mode"
                >
                  {darkMode ? <Sun size={16} /> : <Moon size={16} />}
                </button>
              )}

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`md:hidden w-10 h-10 rounded-full flex items-center justify-center transition-colors ${darkMode
                  ? 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                  }`}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[72px] z-40 md:hidden"
          >
            <div className={`mx-4 mt-2 rounded-2xl border shadow-lg overflow-hidden ${darkMode
              ? 'bg-neutral-900 border-neutral-800'
              : 'bg-white border-neutral-200'
              }`}>
              <div className="p-4 space-y-1">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block px-4 py-3 rounded-xl transition-colors font-medium ${darkMode
                        ? 'text-neutral-300 hover:text-white hover:bg-neutral-800'
                        : 'text-neutral-700 hover:text-neutral-900 hover:bg-neutral-50'
                        }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Social links and dark mode toggle in mobile menu */}
              <div className={`border-t p-4 ${darkMode ? 'border-neutral-800' : 'border-neutral-100'}`}>
                <div className="flex items-center justify-center gap-4">
                  {[
                    { icon: Github, href: "https://github.com/Kevingerges" },
                    { icon: Linkedin, href: "https://www.linkedin.com/in/kevingerges/" },
                    { icon: Mail, href: "mailto:kevingerges00@gmail.com" },
                  ].map((social, idx) => (
                    <a
                      key={idx}
                      href={social.href}
                      target={social.href.startsWith("http") ? "_blank" : undefined}
                      rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${darkMode
                        ? 'bg-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-700'
                        : 'bg-neutral-100 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-200'
                        }`}
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                  {/* Dark mode toggle in mobile */}
                  {onToggleDarkMode && (
                    <button
                      onClick={onToggleDarkMode}
                      className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${darkMode
                        ? 'bg-neutral-800 text-yellow-400 hover:bg-neutral-700'
                        : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                        }`}
                      aria-label="Toggle dark mode"
                    >
                      {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
