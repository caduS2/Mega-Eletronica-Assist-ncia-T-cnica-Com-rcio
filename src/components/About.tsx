import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import {
  ShieldCheck,
  CheckCircle2,
  Users,
  Clock,
  Cpu,
  MapPin,
  Star,
  ExternalLink,
  Award,
} from 'lucide-react';
import { ReviewItem } from '../types';
import { Button } from './ui/Button';
import { Logo } from './Logo';

// Componente para contagem animada das estatísticas
const CountUp: React.FC<{
  target: number;
  duration?: number;
  decimals?: number;
  decimalSeparator?: string;
  suffix?: string;
}> = ({ target, duration = 1.6, decimals = 0, decimalSeparator = ',', suffix = '' }) => {
  const [current, setCurrent] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const stepTime = 16; // 60 fps
    const totalSteps = (duration * 1000) / stepTime;
    const increment = target / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCurrent(target);
        clearInterval(timer);
      } else {
        setCurrent(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  const formatted =
    decimals > 0
      ? current.toFixed(decimals).replace('.', decimalSeparator)
      : Math.round(current).toString();

  return (
    <span ref={ref}>
      {formatted}
      {suffix}
    </span>
  );
};

export const About: React.FC = () => {
  const reviews: ReviewItem[] = [
    {
      id: '1',
      author: 'Neusa Maria Caldeira',
      comment:
        'Uso o serviço de manutenção deles há mais de 20 anos, sempre prestativos e transparentes. Super recomendo.',
      rating: 5,
      source: 'Avaliação pública no Google',
    },
    {
      id: '2',
      author: 'Luiza Barbosa',
      comment:
        'Levei meu micro-ondas para conserto na loja e tive uma experiência muito boa. O atendimento foi atencioso e profissional desde o início.',
      rating: 5,
      source: 'Avaliação pública no Google',
    },
    {
      id: '3',
      author: 'Eduardo do Carmo',
      comment:
        'Muito bom atendimento e preço. Tirou minhas dúvidas, fez o orçamento e a aprovação pelo WhatsApp e resolveu rápido. Resumindo: foi uma excelente experiência. Parabéns!',
      rating: 5,
      source: 'Avaliação pública no Google',
    },
    {
      id: '4',
      author: 'Ariadnes Fornaciari',
      comment:
        'Excelente atendimento! Muito atenciosos, rápido atendimento! Super recomendo.',
      rating: 5,
      source: 'Avaliação pública no Google',
    },
    {
      id: '5',
      author: 'Ellemir Oliveira Nogueira',
      comment: 'Possui uma grande variedade muito boa de componentes.',
      rating: 5,
      source: 'Avaliação pública no Google',
    },
  ];

  const differentials = [
    { text: 'Serviço garantido por 90 dias.', icon: ShieldCheck },
    { text: 'Diagnóstico técnico transparente.', icon: CheckCircle2 },
    { text: 'Atendimento técnico e transparente.', icon: Users },
    { text: 'Mais de 30 anos de experiência.', icon: Clock },
    { text: 'Comércio de peças e componentes.', icon: Cpu },
    { text: 'Atendimento local em São Bernardo do Campo.', icon: MapPin },
  ];

  const scrollToContact = () => {
    document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="sobre" className="py-20 lg:py-28 relative bg-slate-50/60 dark:bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* PARTE 1: Composição Dividida (Área Visual e Área Textual) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          {/* Área Visual (5 colunas desktop) */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-card p-3 sm:p-4 shadow-xl">
              {/* Fotografia Demonstrativa com bancada de testes e história */}
              <div className="relative rounded-xl overflow-hidden aspect-4/3 sm:aspect-5/4 bg-slate-950 flex items-center justify-center group">
                <img
                  src="https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=1000&q=80"
                  alt="Laboratório técnico e bancada de precisão da Mega Eletrônica"
                  loading="lazy"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src =
                      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80';
                  }}
                  className="w-full h-full object-cover filter brightness-[0.85] contrast-[1.1] group-hover:scale-105 transition-transform duration-700"
                />

                {/* Vinheta azul-marinho técnica */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none" />

                {/* Selo circular: "30+ anos de experiência" */}
                <div className="absolute top-4 right-4 z-20">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-amber-500/80 bg-slate-950/90 backdrop-blur-md flex flex-col items-center justify-center text-center p-1 shadow-lg shadow-amber-500/20">
                    <Award className="w-4 h-4 text-amber-400 mb-0.5" />
                    <span className="font-display font-black text-xs sm:text-sm text-amber-400 leading-none">
                      30+ ANOS
                    </span>
                    <span className="text-[8px] sm:text-[9px] text-slate-300 uppercase font-bold leading-tight mt-0.5">
                      de tradição
                    </span>
                  </div>
                </div>

                {/* Card Inferior com Logo Oficial e Endereço */}
                <div className="absolute bottom-4 inset-x-4 p-3.5 rounded-xl bg-slate-900/90 backdrop-blur-md border border-white/10 z-20">
                  <div className="flex items-center gap-3 mb-1.5">
                    <Logo size="xs" variant="badge" />
                    <div>
                      <div className="text-white font-bold text-xs sm:text-sm leading-tight">
                        Mega Eletrônica
                      </div>
                      <div className="text-[10px] text-slate-300">
                        Assistência Técnica &amp; Comércio
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-300 pt-1 border-t border-white/10">
                    <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>Rua Ernesta Pelosini, 69 — Nova Petrópolis, SBC</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Área Textual (7 colunas desktop) */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-amber-400 block mb-3">
              Tradição que continua evoluindo
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-950 dark:text-white tracking-tight leading-tight mb-6">
              Experiência de verdade. Atendimento que olha no olho.
            </h2>

            <p className="text-slate-900 dark:text-slate-200 text-base sm:text-lg leading-relaxed mb-4 font-normal">
              A Mega Eletronica é uma empresa com mais de 30 anos de funcionamento contínuo e mantém a
              dedicação de realizar reparos e consertos com excelência, preço justo e qualidade.
            </p>

            <p className="text-slate-900 dark:text-slate-300 text-base leading-relaxed mb-8 font-medium">
              Cada serviço começa com uma análise técnica na nossa bancada e uma conversa transparente.
              O cliente entende o problema, recebe o orçamento prévio detalhado e decide com segurança
              antes de qualquer execução.
            </p>

            {/* Diferenciais */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full mb-8">
              {differentials.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-card shadow-2xs"
                  >
                    <Icon className="w-4 h-4 text-amber-700 dark:text-amber-400 shrink-0" />
                    <span className="text-sm font-bold text-slate-950 dark:text-white">
                      {item.text}
                    </span>
                  </div>
                );
              })}
            </div>

            <Button variant="gold" size="lg" onClick={scrollToContact}>
              Entrar em contato
            </Button>
          </motion.div>
        </div>

        {/* PARTE 2: Faixa de Estatísticas com animação count-up e alto contraste */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-card p-8 sm:p-10 shadow-lg mb-24"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100 dark:divide-slate-800">
            {/* Stat 1: 30+ */}
            <div className="flex flex-col items-center text-center px-4 pt-4 sm:pt-0">
              <span className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-amber-700 dark:text-amber-400 mb-2">
                <CountUp target={30} suffix="+" />
              </span>
              <span className="text-sm sm:text-base font-bold text-slate-950 dark:text-white">
                Anos de funcionamento
              </span>
              <span className="text-xs font-semibold text-slate-900 dark:text-slate-300 mt-1">
                Tradição ininterrupta em SBC
              </span>
            </div>

            {/* Stat 2: 94 */}
            <div className="flex flex-col items-center text-center px-4 pt-4 sm:pt-0">
              <span className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-blue-900 dark:text-white mb-2">
                <CountUp target={94} />
              </span>
              <span className="text-sm sm:text-base font-bold text-slate-950 dark:text-white">
                Avaliações no Google
              </span>
              <span className="text-xs font-semibold text-slate-900 dark:text-slate-300 mt-1">
                Clientes reais da região
              </span>
            </div>

            {/* Stat 3: 4,1 */}
            <div className="flex flex-col items-center text-center px-4 pt-4 sm:pt-0">
              <span className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-amber-700 dark:text-amber-400 mb-2">
                <CountUp target={4.1} decimals={1} />
              </span>
              <span className="text-sm sm:text-base font-bold text-slate-950 dark:text-white">
                Nota pública no Google
              </span>
              <span className="text-xs font-semibold text-slate-900 dark:text-slate-300 mt-1">
                Classificação consolidada
              </span>
            </div>

            {/* Stat 4: 90 Dias de Garantia */}
            <div className="flex flex-col items-center text-center px-4 pt-4 sm:pt-0">
              <span className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-blue-900 dark:text-white mb-2 h-[48px] sm:h-[60px] flex items-center">
                90 Dias
              </span>
              <span className="text-sm sm:text-base font-bold text-slate-950 dark:text-white">
                Garantia em Serviços
              </span>
              <span className="text-xs font-semibold text-slate-900 dark:text-slate-300 mt-1">
                Segurança e procedência
              </span>
            </div>
          </div>
        </motion.div>

        {/* PARTE 3: Avaliações Reais */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-amber-400 block mb-3">
                Avaliações reais
              </span>
              <h3 className="text-3xl sm:text-4xl font-display font-bold text-slate-950 dark:text-white tracking-tight">
                Confiança conquistada em cada atendimento.
              </h3>
            </div>

            <a
              href="https://www.google.com/search?q=Mega+Eletronica+Assist%C3%AAncia+T%C3%A9cnica+%26+Com%C3%A9rcio"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold text-amber-800 dark:text-amber-400 hover:underline focus-visible:outline-none"
            >
              <span>Ver avaliações no Google</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Grid de 3 avaliações em destaque no desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.slice(0, 3).map((review) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col justify-between rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-card p-6 shadow-sm hover:border-amber-500/50 transition-colors"
              >
                <div>
                  {/* Rating Stars & Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current text-amber-400" />
                      ))}
                    </div>
                    <span className="text-[11px] font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-md border border-slate-200 dark:border-slate-700">
                      {review.source}
                    </span>
                  </div>

                  {/* Comment */}
                  <p className="text-sm sm:text-base text-slate-800 dark:text-slate-200 leading-relaxed italic mb-6">
                    "{review.comment}"
                  </p>
                </div>

                {/* Author */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <span className="text-sm font-bold text-slate-950 dark:text-white">
                    {review.author}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    Cliente verificado
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Duas avaliações complementares */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {reviews.slice(3, 5).map((review) => (
              <div
                key={review.id}
                className="flex flex-col justify-between rounded-xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-card/60 p-5 shadow-2xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current text-amber-400" />
                      ))}
                    </div>
                    <span className="text-[10px] font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-700">
                      {review.source}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed italic mb-4">
                    "{review.comment}"
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-950 dark:text-white">{review.author}</span>
                  <span className="text-slate-500 dark:text-slate-400">Google</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
