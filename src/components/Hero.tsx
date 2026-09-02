import React from 'react';
import { motion } from 'motion/react';
import { Star, ShieldCheck, CheckCircle2, ArrowRight, Wrench, Clock, MapPin, Cpu } from 'lucide-react';
import { Button } from './ui/Button';
import { Logo } from './Logo';

export const Hero: React.FC = () => {
  const scrollToContact = () => {
    document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    document.querySelector('#servicos')?.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.215, 0.61, 0.355, 1], // easeOut cubic
      },
    },
  };

  return (
    <section
      id="inicio"
      className="relative min-h-[92vh] pt-28 pb-16 lg:pt-36 lg:pb-24 flex flex-col justify-between overflow-hidden"
    >
      {/* Background subtle radial gradient */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_80%_60%_at_50%_-15%,rgba(30,58,138,0.22),transparent_75%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Lado Esquerdo: Conteúdo (7 colunas no desktop) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Badge Local */}
            <motion.div variants={itemVariants} className="mb-4">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black tracking-wide uppercase bg-blue-100 text-blue-950 border border-blue-300 shadow-xs dark:bg-blue-950/70 dark:text-blue-200 dark:border-blue-800/70">
                <MapPin className="w-3.5 h-3.5 text-amber-800 dark:text-amber-400 shrink-0" />
                Assistência técnica em São Bernardo do Campo
              </span>
            </motion.div>

            {/* Headline Principal Obrigatória */}
            <motion.h1
              variants={itemVariants}
              className="text-slate-950 dark:text-white font-display font-bold tracking-tight text-[clamp(2.5rem,5.2vw,5.2rem)] leading-[1.06] mb-6 max-w-2xl"
            >
              Seu aparelho volta a funcionar.{' '}
              <span className="text-amber-700 dark:text-amber-400 block sm:inline">Sua tranquilidade também.</span>
            </motion.h1>

            {/* Subheadline do Hero */}
            <motion.p
              variants={itemVariants}
              className="text-slate-950 dark:text-slate-300 text-lg sm:text-xl leading-relaxed max-w-2xl mb-8 font-medium"
            >
              Há mais de 30 anos, a Mega Eletronica diagnostica e repara equipamentos com transparência,
              preço justo, qualidade e serviço garantido em São Bernardo do Campo.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-8"
            >
              <Button variant="gold" size="lg" onClick={scrollToContact} className="w-full sm:w-auto">
                <span>Entrar em contato</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={scrollToServices}
                className="w-full sm:w-auto"
              >
                Ver serviços
              </Button>
            </motion.div>

            {/* Prova Social Google */}
            <motion.a
              variants={itemVariants}
              href="https://www.google.com/search?q=Mega+Eletronica+Assist%C3%AAncia+T%C3%A9cnica+%26+Com%C3%A9rcio"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 p-2.5 rounded-lg border border-border/80 bg-card/60 hover:bg-card hover:border-gold/50 transition-all text-xs sm:text-sm text-muted-foreground hover:text-foreground"
            >
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 fill-current ${i === 4 ? 'opacity-40' : 'text-amber-400'}`}
                  />
                ))}
              </div>
              <span className="font-semibold text-foreground">4,1 no Google</span>
              <span className="text-border">·</span>
              <span className="underline-offset-4 group-hover:underline">94 avaliações públicas</span>
            </motion.a>
          </motion.div>

          {/* Lado Direito: Visual (5 colunas no desktop) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="lg:col-span-5 relative w-full flex justify-center"
          >
            <div className="relative w-full max-w-lg aspect-4/3 sm:aspect-5/4 rounded-2xl overflow-hidden border border-gold/40 shadow-2xl bg-slate-900 group">
              {/* Imagem de bancada técnica profissional */}
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80"
                alt="Bancada de reparo eletrônico e manutenção de placas da Mega Eletronica"
                width={1200}
                height={900}
                loading="eager"
                fetchPriority="high"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src =
                    'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80';
                }}
                className="w-full h-full object-cover object-center filter brightness-[0.85] contrast-[1.12] transition-transform duration-700 group-hover:scale-105"
              />

              {/* Sobreposição azul-marinho e vinheta de profundidade */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-navy-deep/40 to-transparent pointer-events-none" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none" />

              {/* Emblema Oficial da Marca (Topo Esquerdo) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20"
              >
                <div className="p-1 rounded-2xl bg-black/40 backdrop-blur-md border border-white/20 shadow-2xl">
                  <Logo variant="badge" size="sm" />
                </div>
              </motion.div>

              {/* Card Flutuante 1 (Topo Direito) */}
              <motion.div
                animate={{ y: [-3, 3, -3] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-white/95 dark:bg-card/95 backdrop-blur-md border border-slate-200/90 dark:border-border/80 p-3 sm:p-3.5 rounded-xl shadow-xl max-w-[210px]"
              >
                <div className="flex items-start gap-2.5">
                  <div className="p-2 rounded-lg bg-blue-50 text-blue-900 border border-blue-200/60 dark:bg-primary/25 dark:text-blue-300 dark:border-transparent shrink-0">
                    <ShieldCheck className="w-4 h-4 text-amber-700 dark:text-amber-400" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-950 dark:text-white leading-tight">
                      Serviço garantido
                    </div>
                    <div className="text-[11px] font-semibold text-slate-900 dark:text-slate-300 mt-0.5 leading-snug">
                      Garantia de 90 dias
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Card Flutuante 2 (Base Esquerda) */}
              <motion.div
                animate={{ y: [3, -3, 3] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-white/95 dark:bg-card/95 backdrop-blur-md border border-slate-200/90 dark:border-border/80 p-3 sm:p-3.5 rounded-xl shadow-xl max-w-[220px]"
              >
                <div className="flex items-start gap-2.5">
                  <div className="p-2 rounded-lg bg-blue-50 text-blue-900 border border-blue-200/60 dark:bg-primary/25 dark:text-blue-300 dark:border-transparent shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-amber-700 dark:text-amber-400" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-950 dark:text-white leading-tight">
                      Diagnóstico transparente
                    </div>
                    <div className="text-[11px] font-semibold text-slate-900 dark:text-slate-300 mt-0.5 leading-snug">
                      Aprovação antes de executar
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Linha de Confiança na Base do Hero */}
        <div className="mt-14 pt-8 border-t border-border/80 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-left">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-blue-50 text-blue-900 border border-blue-200/70 dark:bg-secondary dark:text-amber-400 dark:border-border/60">
              <Clock className="w-5 h-5 text-amber-700 dark:text-amber-400" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-950 dark:text-white">Mais de 30 anos</div>
              <div className="text-xs font-semibold text-slate-900 dark:text-slate-300">De experiência sólida</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-blue-50 text-blue-900 border border-blue-200/70 dark:bg-secondary dark:text-amber-400 dark:border-border/60">
              <MapPin className="w-5 h-5 text-amber-700 dark:text-amber-400" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-950 dark:text-white">Atendimento local</div>
              <div className="text-xs font-semibold text-slate-900 dark:text-slate-300">São Bernardo do Campo</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-blue-50 text-blue-900 border border-blue-200/70 dark:bg-secondary dark:text-amber-400 dark:border-border/60">
              <Cpu className="w-5 h-5 text-amber-700 dark:text-amber-400" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-950 dark:text-white">Peças e componentes</div>
              <div className="text-xs font-semibold text-slate-900 dark:text-slate-300">Amplo comércio de reposição</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-blue-50 text-blue-900 border border-blue-200/70 dark:bg-secondary dark:text-amber-400 dark:border-border/60">
              <Wrench className="w-5 h-5 text-amber-700 dark:text-amber-400" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-950 dark:text-white">Diagnóstico responsável</div>
              <div className="text-xs font-semibold text-slate-900 dark:text-slate-300">Transparência sem rodeios</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
