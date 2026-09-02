import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { DiagnosticGallery } from './components/DiagnosticGallery';
import { About } from './components/About';
import { LocationMap } from './components/LocationMap';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export const App: React.FC = () => {
  // Dark mode como padrão absoluto exigido pela identidade premium
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    return true; // Default dark
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-background text-foreground antialiased selection:bg-gold selection:text-slate-950 relative flex flex-col font-sans bg-noise">
      {/* Skip to Content for Accessibility */}
      <a
        href="#conteudo-principal"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-gold text-slate-950 font-bold rounded-md shadow-lg"
      >
        Pular para o conteúdo principal
      </a>

      {/* Header Fixo com Menu e Sheet Mobile */}
      <Header isDarkMode={isDarkMode} onToggleTheme={toggleTheme} />

      {/* Conteúdo Principal */}
      <main id="conteudo-principal" className="flex-grow">
        {/* Seção Início (Hero Assimétrico 7/5) */}
        <Hero />

        {/* Seção Serviços (8 Cards + Bloco TV) */}
        <Services />

        {/* Galeria Demonstrativa & Estudos de Caso de Bancada */}
        <DiagnosticGallery />

        {/* Seção Sobre (História + Estatísticas Count-up + Avaliações Reais) */}
        <About />

        {/* Seção Localização & Mapa Interativo em Tempo Real */}
        <LocationMap />

        {/* Seção Contato (Painel Azul Marinho + Form com WhatsApp Automático) */}
        <Contact />
      </main>

      {/* Rodapé Minimalista */}
      <Footer />

      {/* Botão Flutuante de WhatsApp */}
      <FloatingWhatsApp />
    </div>
  );
};

export default App;
