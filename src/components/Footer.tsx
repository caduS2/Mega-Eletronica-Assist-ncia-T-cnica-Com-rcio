import React from 'react';
import { MapPin, Phone, MessageSquare, Instagram, Facebook, ArrowUp } from 'lucide-react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Contato', href: '#contato' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-border bg-slate-50 dark:bg-card/80 pt-16 pb-12 text-slate-900 dark:text-muted-foreground relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-200 dark:border-border/60">
          {/* Brand Info (5 colunas desktop) */}
          <div className="lg:col-span-5 space-y-4">
            <a
              href="#inicio"
              onClick={scrollToTop}
              className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-md"
              aria-label="Mega Eletronica - Voltar ao início"
            >
              <Logo size="sm" />
            </a>
            <p className="text-sm font-medium text-slate-950 dark:text-foreground/80 leading-relaxed max-w-sm">
              Assistência técnica & comércio com mais de 30 anos de atuação em São Bernardo do Campo.
            </p>
            <div className="flex items-start gap-2.5 text-xs font-semibold text-slate-900 dark:text-muted-foreground pt-2">
              <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
              <span>
                Rua Ernesta Pelosini, 69 — Nova Petrópolis, São Bernardo do Campo — SP, CEP 09771-220
              </span>
            </div>
          </div>

          {/* Links Essenciais (3 colunas desktop) */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-950 dark:text-foreground block">
              Navegação
            </span>
            <ul className="space-y-2 text-sm font-medium">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-slate-900 dark:text-muted-foreground hover:text-gold transition-colors focus-visible:outline-none focus-visible:underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Canais Diretos (4 colunas desktop) */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-950 dark:text-foreground block">
              Canais Diretos
            </span>
            <ul className="space-y-2.5 text-sm font-medium">
              <li>
                <a
                  href="https://wa.me/5511948232700"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-slate-900 dark:text-muted-foreground hover:text-gold transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-500" />
                  <span>WhatsApp: (11) 94823-2700</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+551149410430"
                  className="inline-flex items-center gap-2 text-slate-900 dark:text-muted-foreground hover:text-gold transition-colors"
                >
                  <Phone className="w-4 h-4 text-primary" />
                  <span>Telefone: (11) 4941-0430</span>
                </a>
              </li>
              <li>
                <a
                  href="https://maps.app.goo.gl/dAJJi6m7zKa5yFVo6"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-slate-900 dark:text-muted-foreground hover:text-gold transition-colors"
                >
                  <MapPin className="w-4 h-4 text-gold" />
                  <span>Como chegar (Google Maps)</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/people/Mega-Eletr%C3%B4nica/100054533376369/#"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-slate-900 dark:text-muted-foreground hover:text-gold transition-colors"
                >
                  <Facebook className="w-4 h-4 text-blue-600" />
                  <span>Facebook oficial</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/megaeletroniica/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-slate-900 dark:text-muted-foreground hover:text-gold transition-colors"
                >
                  <Instagram className="w-4 h-4 text-pink-500" />
                  <span>Instagram (@megaeletroniica)</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright and Scroll To Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-800 dark:text-muted-foreground font-medium">
          <p className="text-center sm:text-left">
            © 2026 Mega Eletronica Assistência Técnica & Comércio. Todos os direitos reservados.
          </p>
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 p-2 rounded-md hover:text-foreground hover:bg-slate-200 dark:hover:bg-secondary transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            aria-label="Voltar ao topo da página"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
