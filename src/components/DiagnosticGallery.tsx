import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Wrench,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ShieldAlert,
  Sparkles,
  Zap,
} from 'lucide-react';
import { Button } from './ui/Button';

interface TechnicalCase {
  id: string;
  category: string;
  title: string;
  symptom: string;
  diagnosis: string;
  solution: string;
  imageUrl: string;
  beforeImg?: string;
  badge: string;
}

export const DiagnosticGallery: React.FC = () => {
  const cases: TechnicalCase[] = [
    {
      id: 'case-tv',
      category: 'Smart TV 4K',
      title: 'Recuperação de Barramento LED & Alimentação',
      symptom: 'Aparelho liga, sai o áudio dos canais normalmente, porém a imagem fica completamente escura.',
      diagnosis: 'Teste elétrico na linha de backlight indicou queda de tensão devido a diodos LED em curto no barramento.',
      solution: 'Substituição completa do kit de barras de alumínio com dissipação reforçada e calibração da corrente no driver.',
      imageUrl: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=900&q=80',
      badge: 'Bancada de Displays',
    },
    {
      id: 'case-board',
      category: 'Microeletrônica SMD',
      title: 'Reparo de Placa-Mãe em Curto (Linha Primária)',
      symptom: 'Equipamento parou subitamente de ligar e desarma a fonte de energia instantaneamente.',
      diagnosis: 'Injeção de tensão com fonte assimétrica e análise de consumo identificou capacitor cerâmico em curto.',
      solution: 'Remoção com estação de retrabalho a ar quente, substituição por componente novo com tolerância superior.',
      imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80',
      badge: 'Microssolda SMD',
    },
    {
      id: 'case-notebook',
      category: 'Notebooks',
      title: 'Revisão Térmica & Manutenção Preventiva de Hardware',
      symptom: 'Ventoinha girando no máximo constantemente, aquecimento excessivo na base e travamentos.',
      diagnosis: 'Pasta térmica original ressecada e aletas do dissipador obstruídas por acúmulo de poeira.',
      solution: 'Desmontagem técnica completa, desobstrução das saídas de ar e aplicação de pasta térmica de alta condutividade.',
      imageUrl: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=900&q=80',
      badge: 'Hardware & Refrigeração',
    },
    {
      id: 'case-micro',
      category: 'Micro-ondas',
      title: 'Sistema de Alta Tensão & Emissão de Micro-ondas',
      symptom: 'Painel acende normalmente, conta o tempo no display, mas o prato não aquece os alimentos.',
      diagnosis: 'Magnetron com perda de emissão e fuga de isolação no capacitor de alta voltagem.',
      solution: 'Troca do conjunto de alta tensão, substituição da placa de mica de proteção e teste de estanqueidade.',
      imageUrl: 'https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?auto=format&fit=crop&w=900&q=80',
      badge: 'Alta Tensão Segura',
    },
  ];

  const [activeCase, setActiveCase] = useState<TechnicalCase>(cases[0]);

  const handleConsult = (caseTitle: string) => {
    const text = encodeURIComponent(
      `Olá, Mega Eletrônica! Vi o caso demonstrativo de "${caseTitle}" no site e gostaria de tirar uma dúvida sobre meu aparelho.`
    );
    window.open(`https://wa.me/5511948232700?text=${text}`, '_blank', 'noreferrer');
  };

  return (
    <section className="py-20 lg:py-28 relative border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-100 text-blue-900 border border-blue-200 dark:bg-blue-950/60 dark:text-blue-300 dark:border-blue-800/60 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
            Bancada Técnica &amp; Demonstração
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-950 dark:text-white tracking-tight leading-tight mb-4">
            Como diagnosticamos e resolvemos cada falha.
          </h2>
          <p className="text-slate-900 dark:text-slate-300 text-base sm:text-lg leading-relaxed font-medium">
            Nada de adivinhações. Usamos instrumentos de precisão (multímetros True RMS, osciloscópios,
            fontes de bancada e estações de solda profissional) para encontrar a raiz real do defeito.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2.5 mb-10 pb-2 border-b border-slate-200 dark:border-slate-800">
          {cases.map((c) => {
            const isSelected = activeCase.id === c.id;
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => setActiveCase(c)}
                className={`px-4 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer select-none ${
                  isSelected
                    ? 'bg-blue-900 text-white shadow-md'
                    : 'bg-slate-100 text-slate-950 hover:bg-slate-200 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
                }`}
              >
                {c.category}
              </button>
            );
          })}
        </div>

        {/* Active Case Interactive Showcase */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCase.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/60 p-6 sm:p-10 shadow-xl overflow-hidden"
          >
            {/* Imagem Demonstrativa da Bancada */}
            <div className="lg:col-span-6 relative aspect-16/10 rounded-xl overflow-hidden bg-slate-900 border border-slate-300 dark:border-slate-800 shadow-md group">
              <img
                src={activeCase.imageUrl}
                alt={activeCase.title}
                loading="lazy"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src =
                    'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80';
                }}
                className="w-full h-full object-cover filter brightness-[0.9] contrast-[1.1] group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

              <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold bg-blue-950/90 text-amber-400 border border-white/10 backdrop-blur-xs">
                {activeCase.badge}
              </div>

              <div className="absolute bottom-3 left-3 right-3 text-xs text-slate-200 font-medium bg-black/60 backdrop-blur-xs p-2.5 rounded-lg border border-white/10">
                Procedimento técnico padrão realizado na Mega Eletrônica
              </div>
            </div>

            {/* Explicação Técnica Estruturada */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-amber-400 block mb-1">
                  Estudo de Caso &middot; {activeCase.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-950 dark:text-white mb-4">
                  {activeCase.title}
                </h3>

                {/* 3 Etapas: Sintoma, Diagnóstico e Solução */}
                <div className="space-y-3.5 text-xs sm:text-sm">
                  <div className="p-3.5 rounded-lg bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                    <div className="flex items-center gap-2 font-bold text-amber-900 dark:text-amber-400 mb-1">
                      <AlertTriangle className="w-4 h-4 shrink-0" />
                      <span>Sintoma relatado pelo cliente:</span>
                    </div>
                    <p className="text-slate-900 dark:text-slate-300 leading-relaxed font-medium">
                      {activeCase.symptom}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-lg bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                    <div className="flex items-center gap-2 font-bold text-blue-950 dark:text-blue-400 mb-1">
                      <Wrench className="w-4 h-4 shrink-0" />
                      <span>Diagnóstico realizado na bancada:</span>
                    </div>
                    <p className="text-slate-900 dark:text-slate-300 leading-relaxed font-medium">
                      {activeCase.diagnosis}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-lg bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                    <div className="flex items-center gap-2 font-bold text-emerald-900 dark:text-emerald-400 mb-1">
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      <span>Solução técnica aplicada:</span>
                    </div>
                    <p className="text-slate-900 dark:text-slate-300 leading-relaxed font-medium">
                      {activeCase.solution}
                    </p>
                  </div>
                </div>
              </div>

              {/* Botão de Consulta */}
              <div className="pt-2">
                <Button
                  variant="gold"
                  onClick={() => handleConsult(activeCase.title)}
                  className="w-full sm:w-auto"
                >
                  <span>Consultar defeito semelhante no WhatsApp</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
