import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  MapPin,
  Navigation,
  Copy,
  Check,
  Clock,
  Car,
  Bus,
  Compass,
  ExternalLink,
  MessageSquare,
  ShieldCheck,
} from 'lucide-react';
import { Button } from './ui/Button';

export const LocationMap: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  const googleMapsUrl = 'https://maps.app.goo.gl/dAJJi6m7zKa5yFVo6';
  const fullAddress = 'Rua Ernesta Pelosini, 69 - Nova Petrópolis, São Bernardo do Campo - SP, 09771-220';
  const wazeUrl = 'https://waze.com/ul?q=Rua+Ernesta+Pelosini+69+Sao+Bernardo+do+Campo';

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(fullAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      // Fallback
      setCopied(false);
    }
  };

  return (
    <section
      id="localizacao"
      className="py-20 sm:py-28 relative bg-slate-100 dark:bg-[#070D18] border-t border-b border-slate-200 dark:border-blue-900/40 overflow-hidden transition-colors"
      aria-label="Localização e mapa interativo"
    >
      {/* Background glow effects */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/10 dark:bg-primary/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 dark:bg-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-100 text-blue-900 dark:bg-blue-950/80 dark:text-gold border border-blue-200 dark:border-gold/30 mb-4">
            <MapPin className="w-3.5 h-3.5 text-gold" />
            <span>Localização em Tempo Real</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-slate-950 dark:text-white tracking-tight leading-tight mb-4">
            Venha nos Visitar em São Bernardo do Campo
          </h2>

          <p className="text-slate-800 dark:text-slate-300 text-base sm:text-lg leading-relaxed font-medium">
            Localização estratégica no bairro Nova Petrópolis, com fácil acesso pelo centro de SBC, Via Anchieta e principais avenidas da região do Grande ABC.
          </p>
        </div>

        {/* Card Principal Integrado com Mapa e Painel Informativo */}
        <div className="rounded-3xl overflow-hidden border border-slate-300 dark:border-blue-900/60 bg-white dark:bg-gradient-to-b dark:from-[#0B1528] dark:to-[#060B14] shadow-2xl">
          {/* Top Bar de Status e Ações Rápidas */}
          <div className="p-4 sm:p-6 border-b border-slate-200 dark:border-blue-900/50 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-slate-50 dark:bg-blue-950/40">
            <div className="flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <div>
                <div className="text-xs sm:text-sm font-bold text-slate-950 dark:text-white flex items-center gap-2">
                  <span>Atendimento Presencial &amp; Bancada Ativa</span>
                  <span className="hidden sm:inline-block text-slate-400">·</span>
                  <span className="hidden sm:inline-block text-xs font-normal text-slate-600 dark:text-slate-300">
                    Traga seu aparelho para avaliação
                  </span>
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-400 flex items-center gap-1.5 mt-0.5">
                  <Clock className="w-3.5 h-3.5 text-gold" />
                  <span>Segunda a Sexta: 08h30 às 18h00 | Sábado: 08h30 às 12h30</span>
                </div>
              </div>
            </div>

            {/* Ações diretas */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              <button
                type="button"
                onClick={handleCopyAddress}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold border border-slate-300 dark:border-blue-800 bg-white dark:bg-blue-900/30 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-blue-800/50 hover:text-slate-950 dark:hover:text-white transition-colors cursor-pointer"
                title="Copiar endereço"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                    <span className="text-emerald-600 dark:text-emerald-400">Endereço copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-gold" />
                    <span>Copiar endereço</span>
                  </>
                )}
              </button>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold bg-gold text-slate-950 hover:bg-gold-light transition-colors shadow-sm"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Traçar rota no Maps</span>
                <ExternalLink className="w-3 h-3 ml-0.5 opacity-70" />
              </a>

              <a
                href={wazeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold border border-blue-400/40 bg-blue-600/10 text-blue-700 dark:text-blue-300 hover:bg-blue-600/20 transition-colors"
              >
                <Compass className="w-3.5 h-3.5 text-blue-500" />
                <span>Abrir no Waze</span>
              </a>
            </div>
          </div>

          {/* Grid: Informações da Loja + Mapa Interativo */}
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Coluna de Detalhes da Localização (5 colunas desktop) */}
            <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-blue-900/50">
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-800 dark:text-gold block mb-1">
                    Endereço Oficial
                  </span>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-950 dark:text-white leading-tight">
                    Rua Ernesta Pelosini, 69
                  </h3>
                  <p className="text-sm font-medium text-slate-800 dark:text-slate-300 mt-1">
                    Bairro Nova Petrópolis — São Bernardo do Campo — SP
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                    CEP: 09771-220
                  </p>
                </div>

                {/* Cards de Facilidades de Acesso */}
                <div className="space-y-3 pt-2">
                  <div className="p-3.5 rounded-xl border border-slate-200 dark:border-blue-900/40 bg-slate-50 dark:bg-blue-950/30 flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-gold/15 text-gold shrink-0 mt-0.5">
                      <Car className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-950 dark:text-white">
                        Estacionamento &amp; Desembarque
                      </div>
                      <div className="text-xs text-slate-700 dark:text-slate-300 mt-0.5">
                        Rua com vagas e facilidade para parar e descarregar aparelhos volumosos (TVs, caixas amplificadas e receivers).
                      </div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl border border-slate-200 dark:border-blue-900/40 bg-slate-50 dark:bg-blue-950/30 flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-blue-500/15 text-blue-700 dark:text-blue-400 shrink-0 mt-0.5">
                      <Navigation className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-950 dark:text-white">
                        Pontos de Referência
                      </div>
                      <div className="text-xs text-slate-700 dark:text-slate-300 mt-0.5">
                        Próximo à Av. Francisco Prestes Maia e Centro de SBC, com rápido acesso pelo Paço Municipal e Via Anchieta (KM 18).
                      </div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl border border-slate-200 dark:border-blue-900/40 bg-slate-50 dark:bg-blue-950/30 flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5">
                      <Bus className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-950 dark:text-white">
                        Transporte Coletivo
                      </div>
                      <div className="text-xs text-slate-700 dark:text-slate-300 mt-0.5">
                        Atendido por diversas linhas municipais de São Bernardo e linhas intermunicipais EMTU que cruzam o centro.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Box de Confirmação & Contato Rápido */}
              <div className="mt-6 pt-6 border-t border-slate-200 dark:border-blue-900/50">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <a
                    href="https://wa.me/5511948232700?text=Ol%C3%A1,%20gostaria%20de%20confirmar%20o%20hor%C3%A1rio%20para%20levar%20um%20aparelho%20na%20Mega%20Eletronica"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors shadow-md"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Avisar chegada no WhatsApp</span>
                  </a>

                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-slate-300 dark:border-blue-800 bg-slate-100 dark:bg-blue-950 text-slate-900 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white text-xs font-semibold transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 text-gold" />
                    <span>Ver no Maps</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Coluna do Mapa Interativo com Iframe (7 colunas desktop) */}
            <div className="lg:col-span-7 relative min-h-[380px] sm:min-h-[480px] lg:min-h-full bg-slate-200 dark:bg-slate-950 overflow-hidden">
              {/* Skeleton de Carregamento enquanto o iframe monta */}
              {!isMapLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-slate-100 dark:bg-[#070D18] z-10">
                  <div className="flex flex-col items-center gap-3 text-slate-500 dark:text-slate-400">
                    <div className="w-8 h-8 border-3 border-gold border-t-transparent rounded-full animate-spin" />
                    <span className="text-xs font-medium">Carregando mapa interativo...</span>
                  </div>
                </div>
              )}

              {/* Iframe oficial do Google Maps com o endereço e pin exato */}
              <iframe
                title="Mapa de localização Mega Eletronica Assistência Técnica"
                src="https://maps.google.com/maps?q=Mega+Eletronica+Assist%C3%AAncia+T%C3%A9cnica+%26+Com%C3%A9rcio+Rua+Ernesta+Pelosini+69+Sao+Bernardo+do+Campo&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '380px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                onLoad={() => setIsMapLoaded(true)}
                className="w-full h-full min-h-[380px] sm:min-h-[480px] lg:min-h-[550px]"
              />

              {/* Floating Overlay Badge de Dica no Mapa */}
              <div className="absolute bottom-4 right-4 z-20 pointer-events-none hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-950/85 backdrop-blur-sm border border-gold/40 text-xs text-white shadow-lg">
                <ShieldCheck className="w-4 h-4 text-gold shrink-0" />
                <span className="font-semibold">Local verificado no Google Maps</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default LocationMap;
