import React, { useState, useEffect } from 'react';
import { Menu, Sun, Moon, PhoneCall, MapPin, Facebook, Instagram } from 'lucide-react';
import { Logo } from './Logo';
import { Button } from './ui/Button';
import { Sheet } from './ui/Sheet';

interface HeaderProps {
  isDarkMode: boolean;
  onToggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({ isDarkMode, onToggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      setIsScrolled(scrollPos > 20);

      const winHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (winHeight > 0) {
        setScrollProgress((scrollPos / winHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Localização', href: '#localizacao' },
    { label: 'Contato', href: '#contato' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactCTA = () => {
    setIsMobileMenuOpen(false);
    const target = document.querySelector('#contato');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-[2px] bg-transparent">
        <div
          className="h-full bg-gold transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-background/85 backdrop-blur-md border-b border-border/80 shadow-soft py-2.5'
            : 'bg-background/40 backdrop-blur-xs border-b border-border/30 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#inicio"
              onClick={(e) => handleNavClick(e, '#inicio')}
              className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-md"
              aria-label="Mega Eletronica - Ir para o início"
            >
              <Logo size="sm" />
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-8" aria-label="Navegação principal">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm font-semibold text-slate-800 dark:text-muted-foreground hover:text-slate-950 dark:hover:text-foreground hover:border-b-2 hover:border-gold pb-0.5 transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-3">
              {/* Theme Toggle */}
              <button
                type="button"
                onClick={onToggleTheme}
                className="p-2.5 rounded-md border border-border text-muted-foreground hover:text-foreground hover:bg-secondary/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold cursor-pointer"
                aria-label={isDarkMode ? 'Mudar para modo claro' : 'Mudar para modo escuro'}
                title={isDarkMode ? 'Modo claro' : 'Modo escuro'}
              >
                {isDarkMode ? (
                  <Sun className="w-4 h-4 text-amber-400" />
                ) : (
                  <Moon className="w-4 h-4 text-primary" />
                )}
              </button>

              {/* Primary CTA */}
              <Button variant="gold" size="sm" onClick={handleContactCTA}>
                Entrar em contato
              </Button>
            </div>

            {/* Mobile Actions */}
            <div className="flex md:hidden items-center gap-2">
              <button
                type="button"
                onClick={onToggleTheme}
                className="p-2 rounded-md border border-border text-muted-foreground hover:text-foreground hover:bg-secondary/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold cursor-pointer"
                aria-label={isDarkMode ? 'Mudar para modo claro' : 'Mudar para modo escuro'}
              >
                {isDarkMode ? (
                  <Sun className="w-4 h-4 text-amber-400" />
                ) : (
                  <Moon className="w-4 h-4 text-primary" />
                )}
              </button>

              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 rounded-md border border-border text-foreground hover:bg-secondary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                aria-label="Abrir menu de navegação"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Sheet Menu Drawer */}
      <Sheet
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        title="Mega Eletronica"
      >
        <div className="flex flex-col h-full justify-between space-y-6">
          <div className="space-y-4">
            <div className="mb-4">
              <Logo size="sm" />
            </div>

            <nav className="flex flex-col space-y-2" aria-label="Navegação móvel">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-3 py-2.5 rounded-md text-base font-medium text-foreground hover:bg-secondary/80 hover:text-gold transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="pt-4">
              <Button variant="gold" className="w-full justify-center" onClick={handleContactCTA}>
                Entrar em contato
              </Button>
            </div>
          </div>

          {/* Endereço resumido e contato rápido no mobile drawer */}
          <div className="border-t border-border pt-4 text-xs text-muted-foreground space-y-3">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
              <span>Rua Ernesta Pelosini, 69 — Nova Petrópolis, São Bernardo do Campo — SP</span>
            </div>
            <div className="flex items-center gap-2">
              <PhoneCall className="w-4 h-4 text-gold shrink-0" />
              <a href="tel:+551149410430" className="hover:text-foreground">
                (11) 4941-0430
              </a>
              <span className="text-border">·</span>
              <a href="https://wa.me/5511948232700" target="_blank" rel="noreferrer" className="hover:text-foreground">
                (11) 94823-2700
              </a>
            </div>
            <div className="pt-1 flex flex-col gap-2">
              <a
                href="https://www.instagram.com/megaeletroniica/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-pink-600 dark:text-pink-400 hover:underline font-semibold"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>Instagram: @megaeletroniica</span>
              </a>
              <a
                href="https://www.facebook.com/people/Mega-Eletr%C3%B4nica/100054533376369/#"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline font-semibold"
              >
                <Facebook className="w-3.5 h-3.5" />
                <span>Facebook: Mega Eletrônica SBC</span>
              </a>
            </div>
          </div>
        </div>
      </Sheet>
    </>
  );
};
