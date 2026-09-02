import React from 'react';
import { cn } from '../lib/utils';

interface LogoProps {
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'badge' | 'full' | 'compact' | 'symbol';
  showTagline?: boolean;
}

/**
 * Logotipo Oficial da Mega Eletrônica Assistência Técnica & Comércio
 * Baseado fielmente na identidade visual oficial da marca (símbolo ME em circuito integrado).
 */
export const Logo: React.FC<LogoProps> = ({
  className,
  size = 'md',
  variant = 'full',
  showTagline = false,
}) => {
  // Símbolo Oficial ME em Circuito Integrado
  const renderCircuitME = (strokeColor = 'currentColor', dotColor = 'currentColor') => (
    <svg
      viewBox="0 0 200 130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      role="img"
      aria-label="Símbolo Oficial ME Circuito - Mega Eletrônica"
    >
      {/* 
        ESTRUTURA DO MONOGRAMA 'ME' EM CIRCUITO ELETRÔNICO:
        Traços com espessura uniforme, nós de solda circulares e curvas em 90° e 45°
      */}
      
      {/* === LETRA M: CONTORNO EXTERNO E CHEVRON === */}
      {/* Borda externa esquerda e topo do M até o centro e topo do E */}
      <path
        d="M 16 114 V 16 H 42 L 76 62 L 110 16 H 184 V 40 H 152"
        stroke={strokeColor}
        strokeWidth="7"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
      
      {/* Nó de término na barra superior do E */}
      <circle cx="147" cy="40" r="5.5" fill={dotColor} />

      {/* Traço interno vertical na perna esquerda do M */}
      <path
        d="M 28 26 V 94"
        stroke={strokeColor}
        strokeWidth="6"
        strokeLinecap="square"
      />
      <circle cx="28" cy="99" r="5.5" fill={dotColor} />

      {/* Traço de circuito interno que sobe e quebra em 45° no M */}
      <path
        d="M 40 106 V 56 L 68 94"
        stroke={strokeColor}
        strokeWidth="6"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
      <circle cx="40" cy="111" r="5.5" fill={dotColor} />

      {/* Chevron interno superior do M */}
      <path
        d="M 52 38 L 76 72 L 100 38"
        stroke={strokeColor}
        strokeWidth="6"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
      {/* Ponto no início do chevron interno esquerdo */}
      <circle cx="52" cy="38" r="5" fill={dotColor} />

      {/* Traço vertical central no vale do M descendo com nó */}
      <path
        d="M 76 78 V 110"
        stroke={strokeColor}
        strokeWidth="6"
        strokeLinecap="square"
      />
      <circle cx="76" cy="114" r="5.5" fill={dotColor} />

      {/* Traço na descida direita do M */}
      <path
        d="M 88 94 L 110 62 V 110"
        stroke={strokeColor}
        strokeWidth="6"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
      <circle cx="110" cy="114" r="5.5" fill={dotColor} />

      {/* Traço do meio na perna direita do M */}
      <path
        d="M 98 42 V 82"
        stroke={strokeColor}
        strokeWidth="6"
        strokeLinecap="square"
      />
      <circle cx="98" cy="86" r="5" fill={dotColor} />

      {/* === LETRA E: BARRAS E CIRCUITOS INTEGRADOS === */}
      {/* Barra do meio do E com extensão e nó */}
      <path
        d="M 124 54 H 168"
        stroke={strokeColor}
        strokeWidth="6.5"
        strokeLinecap="square"
      />
      <circle cx="173" cy="54" r="5.5" fill={dotColor} />

      {/* Trilha intermediária do E com curva */}
      <path
        d="M 124 74 H 146 V 88 H 178"
        stroke={strokeColor}
        strokeWidth="6"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
      <circle cx="183" cy="88" r="5.5" fill={dotColor} />

      {/* Barra inferior externa do E e conexão com a base do M */}
      <path
        d="M 16 114 H 56 M 96 114 H 184 V 94 H 152"
        stroke={strokeColor}
        strokeWidth="7"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />

      {/* Traço de circuito na barra inferior do E */}
      <path
        d="M 134 102 H 168"
        stroke={strokeColor}
        strokeWidth="5.5"
        strokeLinecap="square"
      />
      <circle cx="130" cy="102" r="5" fill={dotColor} />

      {/* Nós adicionais de circuito característicos da marca */}
      <circle cx="184" cy="20" r="5" fill={dotColor} />
    </svg>
  );

  // Variante BADGE: O emblema oficial exatamente como enviado pelo cliente (fundo azul petróleo, ME + MEGA + ELETRÔNICA)
  if (variant === 'badge') {
    const badgeSizes = {
      xs: 'w-10 h-10 p-1.5 rounded-lg',
      sm: 'w-14 h-14 p-2 rounded-xl',
      md: 'w-20 h-20 p-2.5 rounded-2xl',
      lg: 'w-28 h-28 p-3.5 rounded-3xl',
      xl: 'w-36 h-36 p-4 rounded-3xl',
    };

    return (
      <div
        className={cn(
          'relative flex flex-col items-center justify-between bg-[#0a6587] text-white select-none shadow-md overflow-hidden shrink-0 group transition-transform duration-200',
          badgeSizes[size],
          className
        )}
        title="Mega Eletrônica Assistência Técnica & Comércio"
      >
        {/* Símbolo ME */}
        <div className="w-[85%] flex-1 flex items-center justify-center pt-1">
          {renderCircuitME('#ffffff', '#ffffff')}
        </div>

        {/* Textos MEGA ELETRÔNICA */}
        <div className="w-full flex flex-col items-center justify-center pb-1 text-center leading-none">
          <span className="font-display font-black tracking-wider text-white text-[12px] sm:text-[14px]">
            MEGA
          </span>
          <span className="font-sans font-bold uppercase text-white/95 tracking-[0.24em] text-[5.5px] sm:text-[6.5px] mt-0.5">
            ELETRÔNICA
          </span>
        </div>
      </div>
    );
  }

  // Variante SYMBOL: Apenas o circuito ME
  if (variant === 'symbol') {
    const symbolSizes = {
      xs: 'w-6 h-5',
      sm: 'w-8 h-6',
      md: 'w-12 h-9',
      lg: 'w-16 h-12',
      xl: 'w-24 h-18',
    };

    return (
      <div className={cn('relative flex items-center justify-center shrink-0', symbolSizes[size], className)}>
        {renderCircuitME('currentColor', 'currentColor')}
      </div>
    );
  }

  // Variante COMPACT: Símbolo em box estilizado + texto horizontal
  if (variant === 'compact') {
    return (
      <div
        className={cn(
          'inline-flex items-center gap-2.5 select-none transition-transform duration-200 group',
          className
        )}
        title="Mega Eletrônica Assistência Técnica & Comércio"
      >
        <div className="w-9 h-9 p-1 rounded-xl bg-[#0a6587] text-white flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform shrink-0">
          {renderCircuitME('#ffffff', '#ffffff')}
        </div>
        <div className="flex flex-col leading-none">
          <span className="font-display font-black tracking-tight text-slate-900 dark:text-white text-lg">
            MEGA
          </span>
          <span className="font-sans font-bold uppercase text-[#0a6587] dark:text-[#38bdf8] text-[9px] tracking-[0.24em]">
            ELETRÔNICA
          </span>
        </div>
      </div>
    );
  }

  // Variante FULL (Padrão para Header, Footer, Hero):
  // Mostra o emblema oficial com a tipografia estilizada e elegante
  const fullSizeClasses = {
    xs: { badge: 'w-8 h-8 p-1 rounded-lg', title: 'text-base', sub: 'text-[8px]' },
    sm: { badge: 'w-9 h-9 p-1 rounded-lg', title: 'text-lg sm:text-xl', sub: 'text-[8.5px]' },
    md: { badge: 'w-11 h-11 p-1.5 rounded-xl', title: 'text-xl sm:text-2xl', sub: 'text-[9.5px]' },
    lg: { badge: 'w-14 h-14 p-2 rounded-2xl', title: 'text-2xl sm:text-3xl', sub: 'text-[11px]' },
    xl: { badge: 'w-20 h-20 p-2.5 rounded-2xl', title: 'text-3xl sm:text-4xl', sub: 'text-xs' },
  };

  const current = fullSizeClasses[size];

  return (
    <div
      className={cn(
        'inline-flex items-center gap-3 select-none transition-all duration-200 group',
        className
      )}
      title="Mega Eletrônica Assistência Técnica & Comércio"
    >
      {/* Emblema Oficial com cantos ligeiramente arredondados */}
      <div
        className={cn(
          'flex flex-col items-center justify-between bg-[#0a6587] text-white shadow-sm group-hover:shadow-md group-hover:scale-102 transition-all shrink-0',
          current.badge
        )}
      >
        <div className="w-full flex-1 flex items-center justify-center">
          {renderCircuitME('#ffffff', '#ffffff')}
        </div>
        <span className="text-[5px] sm:text-[6px] font-black tracking-widest text-white leading-none pb-0.5">
          ME
        </span>
      </div>

      {/* Tipografia Oficial da Marca */}
      <div className="flex flex-col leading-none">
        <div className="flex items-center gap-1.5">
          <span
            className={cn(
              'font-display font-black tracking-tight text-slate-950 dark:text-white group-hover:text-[#0a6587] dark:group-hover:text-[#38bdf8] transition-colors',
              current.title
            )}
          >
            MEGA
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#0a6587] dark:bg-[#38bdf8] -mt-1.5" />
        </div>

        <span
          className={cn(
            'font-sans font-bold uppercase text-[#0a6587] dark:text-[#38bdf8] tracking-[0.26em] mt-0.5',
            current.sub
          )}
        >
          ELETRÔNICA
        </span>

        {showTagline && (
          <span className="text-[9px] uppercase font-semibold text-slate-500 dark:text-slate-400 tracking-wider mt-1 hidden sm:block">
            Assistência Técnica &amp; Comércio
          </span>
        )}
      </div>
    </div>
  );
};
