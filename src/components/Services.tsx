import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Tv,
  Smartphone,
  Laptop,
  Waves,
  Speaker,
  Plug,
  Drill,
  Cpu,
  ArrowUpRight,
  MessageCircle,
  FileCheck,
  Truck,
  ShieldCheck,
  Info,
  CheckCircle,
  X,
} from 'lucide-react';
import { ServiceItem } from '../types';
import { Button } from './ui/Button';

export const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const services: ServiceItem[] = [
    {
      id: 'tv',
      number: '01',
      title: 'TVs e Smart TVs',
      description:
        'Análise de falhas de imagem, LEDs queimados, som sem vídeo, energia, barramentos e placas em televisores LED, LCD, OLED e 4K.',
      chips: ['Smart TV 4K', 'LED / OLED', 'Troca de Barramento'],
      icon: Tv,
      imageUrl:
        'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=800&q=80',
      commonDefects: [
        'Tem som mas a tela fica preta (LEDs queimados)',
        'Liga e desliga sozinho ou fica reiniciando no logo',
        'Sem sinal de energia / luz de standby apagada',
        'Linhas verticais ou horizontais na imagem',
      ],
      timeframe: 'Diagnóstico em até 48 horas úteis',
      warranty: '90 dias de garantia em peças e mão de obra',
    },
    {
      id: 'celulares',
      number: '02',
      title: 'Celulares e tablets',
      description:
        'Diagnóstico com microscópio técnico: troca de display, reparo em placas com curto, substituição de conector de carga e bateria.',
      chips: ['Display / Touch', 'Conector Carga', 'Microsolda'],
      icon: Smartphone,
      imageUrl:
        'https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?auto=format&fit=crop&w=800&q=80',
      commonDefects: [
        'Tela quebrada / touch falhando ou sem toque',
        'Aparelho não carrega ou conector com folga',
        'Bateria estufada ou descarregando rapidamente',
        'Aparelho não liga após queda ou contato com umidade',
      ],
      timeframe: 'Opção de reparo expresso sob consulta',
      warranty: '90 dias de garantia técnica',
    },
    {
      id: 'notebooks',
      number: '03',
      title: 'Notebooks e computadores',
      description:
        'Manutenção preventiva e corretiva: reparo de placa-mãe em nível de componentes, troca de pasta térmica de alta condutividade e upgrade de SSD.',
      chips: ['Placa-Mãe', 'Thermal Pad', 'Upgrade SSD'],
      icon: Laptop,
      imageUrl:
        'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80',
      commonDefects: [
        'Notebook liga mas não dá vídeo na tela',
        'Superaquecimento e desligamento repentino',
        'Lentidão extrema e erros de inicialização',
        'Teclado com teclas falhando ou carcaça danificada',
      ],
      timeframe: 'Diagnóstico de 24h a 48h úteis',
      warranty: '90 dias de garantia em todos os reparos',
    },
    {
      id: 'microondas',
      number: '04',
      title: 'Fornos micro-ondas',
      description:
        'Diagnóstico elétrico rigoroso de alta tensão: substituição de magnetron, capacitor de alta, diodo, fusível térmico e membrana do teclado.',
      chips: ['Magnetron', 'Membrana Touch', 'Alta Voltagem'],
      icon: Waves,
      imageUrl:
        'https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?auto=format&fit=crop&w=800&q=80',
      commonDefects: [
        'Liga normalmente mas não esquenta a comida',
        'Soltando faíscas ou estalos no interior da cavidade',
        'Teclado touch não aceita comandos ou números',
        'Prato giratório travado ou sem girar',
      ],
      timeframe: 'Avaliação técnica em 24h a 48h',
      warranty: 'Garantia total de 3 meses',
    },
    {
      id: 'som',
      number: '05',
      title: 'Som, DVD e home theater',
      description:
        'Restauração de saídas de áudio, receivers estéreo, amplificadores e leitores ópticos com alinhamento e calibração de sinal acústico.',
      chips: ['Saída de Áudio', 'Receivers', 'Óptica Laser'],
      icon: Speaker,
      imageUrl:
        'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80',
      commonDefects: [
        'Canal de áudio mudo ou com chiado / estalo constante',
        'Aparelho entra em modo PROTECT e desliga',
        'Gaveta de disco não abre ou não lê mídia',
        'Potenciômetros com falha de volume ou balanço',
      ],
      timeframe: 'Orçamento detalhado prévio',
      warranty: '90 dias garantidos por nota',
    },
    {
      id: 'eletrodomesticos',
      number: '06',
      title: 'Eletrodomésticos e portáteis',
      description:
        'Manutenção de Air Fryer (fritadeiras sem óleo), cafeteiras elétricas, purificadores de água, pranchas e secadores de cabelo.',
      chips: ['Air Fryer', 'Termostatos', 'Fusível Térmico'],
      icon: Plug,
      imageUrl:
        'https://images.unsplash.com/photo-1585659722983-3a675dabf23d?auto=format&fit=crop&w=800&q=80',
      commonDefects: [
        'Air Fryer liga o painel mas não esquenta o cesto',
        'Aparelho portátil não dá nenhum sinal na tomada',
        'Vazamento de água em cafeteiras ou purificadores',
        'Cabo de força rompido ou carcaça superaquecida',
      ],
      timeframe: 'Avaliação transparente na loja',
      warranty: 'Garantia legal de 90 dias',
    },
    {
      id: 'ferramentas',
      number: '07',
      title: 'Ferramentas elétricas',
      description:
        'Revisão técnica de furadeiras, parafusadeiras, esmerilhadeiras, serras e plainas elétricas com troca de escovas de carvão, rolamentos e induzidos.',
      chips: ['Escovas de Carvão', 'Induzidos', 'Rolamentos'],
      icon: Drill,
      imageUrl:
        'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=800&q=80',
      commonDefects: [
        'Faíscas excessivas ou cheiro de queimado no coletor',
        'Perda acentuada de força e torque sob carga',
        'Gatilho com falha ou controle de velocidade inoperante',
        'Travamento de mandril ou rolamentos desgastados',
      ],
      timeframe: 'Revisão e orçamento ágil',
      warranty: '3 meses de garantia de serviço',
    },
    {
      id: 'pecas',
      number: '08',
      title: 'Peças, controles e componentes',
      description:
        'Vasto balcão de peças com controles remotos originais e compatíveis para Smart TVs de todas as marcas, copos de liquidificador, semicondutores e capacitores.',
      chips: ['Controles TV', 'Copos Liquidificador', 'Componentes'],
      icon: Cpu,
      imageUrl:
        'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
      commonDefects: [
        'Controles para Samsung, LG, TCL, Philips, Philco e Sony',
        'Copos e lâminas reforçadas para diversas marcas',
        'Transistores, diodos, capacitores, CI e resistores',
        'Filtros de linha, fontes de alimentação e cabos especiais',
      ],
      timeframe: 'Pronta entrega no balcão da loja',
      warranty: 'Peças com procedência e garantia',
    },
  ];

  const handleServiceSelect = (serviceTitle: string) => {
    const contactSection = document.querySelector('#contato');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      const selectElem = document.getElementById('tipo-equipamento') as HTMLSelectElement | null;
      if (selectElem) {
        selectElem.value = serviceTitle;
        selectElem.dispatchEvent(new Event('change', { bubbles: true }));
      }
    }
  };

  const handleDefectiveTVContact = () => {
    const text = encodeURIComponent(
      'Olá, Mega Eletronica! Tenho uma TV com defeito e gostaria de solicitar uma avaliação para venda.'
    );
    window.open(`https://wa.me/5511948232700?text=${text}`, '_blank', 'noreferrer');
  };

  return (
    <section id="servicos" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-amber-400 block mb-3">
            Especialidades, Reparos &amp; Comércio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-950 dark:text-white tracking-tight leading-tight mb-4">
            Precisão técnica para o que faz parte do seu dia.
          </h2>
          <p className="text-slate-900 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            Do diagnóstico ao reparo, cada equipamento recebe uma avaliação minuciosa na nossa bancada
            técnica. Você entende o problema e o orçamento antes de tomar qualquer decisão.
          </p>
        </div>

        {/* 3 Selos Oficiais de Garantia da Empresa */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          <div className="flex items-start gap-4 p-5 rounded-xl border border-blue-200/80 dark:border-blue-900/60 bg-blue-50/70 dark:bg-blue-950/30">
            <div className="p-3 rounded-lg bg-blue-600 text-white shrink-0 shadow-xs">
              <FileCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-950 dark:text-white mb-1">
                Laudo para Seguradora &amp; ENEL
              </h4>
              <p className="text-xs text-slate-900 dark:text-slate-300 leading-relaxed font-medium">
                Emitimos laudos técnicos detalhados para ressarcimento de danos por queda de raio e
                oscilações na rede elétrica.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-5 rounded-xl border border-amber-200/80 dark:border-amber-900/50 bg-amber-50/70 dark:bg-amber-950/20">
            <div className="p-3 rounded-lg bg-amber-600 text-white shrink-0 shadow-xs">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-950 dark:text-white mb-1">
                Retiramos na sua Casa
              </h4>
              <p className="text-xs text-slate-900 dark:text-slate-300 leading-relaxed font-medium">
                Comodidade em São Bernardo do Campo: agendamos a coleta e entrega segura de televisores
                e aparelhos volumosos.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-5 rounded-xl border border-emerald-200/80 dark:border-emerald-900/50 bg-emerald-50/70 dark:bg-emerald-950/20">
            <div className="p-3 rounded-lg bg-emerald-600 text-white shrink-0 shadow-xs">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-950 dark:text-white mb-1">
                3 Meses de Garantia
              </h4>
              <p className="text-xs text-slate-900 dark:text-slate-300 leading-relaxed font-medium">
                Segurança absoluta para o seu investimento. Todos os reparos contam com garantia legal
                e procedência de componentes.
              </p>
            </div>
          </div>
        </div>

        {/* 8 Cards Grid com Imagens Demonstrativas de Bancada */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative flex flex-col justify-between rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-card overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-amber-500/60 hover:shadow-xl dark:hover:shadow-amber-500/5"
              >
                {/* Imagem Demonstrativa no topo do card */}
                <div className="relative h-40 w-full overflow-hidden bg-slate-900">
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    loading="lazy"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src =
                        'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80';
                    }}
                    className="w-full h-full object-cover filter brightness-[0.9] contrast-[1.05] group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                  {/* Número e Ícone sobrepostos */}
                  <div className="absolute top-3 left-3 px-2 py-0.5 rounded text-xs font-bold bg-black/60 backdrop-blur-xs text-amber-400 border border-white/10">
                    {service.number}
                  </div>

                  <div className="absolute bottom-3 right-3 p-2 rounded-lg bg-blue-900/90 backdrop-blur-xs text-amber-400 border border-white/20 shadow-md">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Title */}
                    <h3 className="text-lg font-display font-bold text-slate-950 dark:text-white mb-2 group-hover:text-blue-900 dark:group-hover:text-amber-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-900 dark:text-slate-300 leading-relaxed mb-4 font-normal">
                      {service.description}
                    </p>
                  </div>

                  <div>
                    {/* Chips */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {service.chips.map((chip) => (
                        <span
                          key={chip}
                          className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-950 border border-slate-300 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700"
                        >
                          {chip}
                        </span>
                      ))}
                    </div>

                    {/* Botões de Ação no Card */}
                    <div className="flex items-center justify-between pt-3 border-t border-slate-200 dark:border-slate-800">
                      <button
                        type="button"
                        onClick={() => setSelectedService(service)}
                        className="inline-flex items-center gap-1 text-xs font-bold text-amber-900 dark:text-amber-400 hover:underline cursor-pointer"
                        title="Ver defeitos comuns e detalhes"
                      >
                        <Info className="w-3.5 h-3.5" />
                        <span>Ver detalhes</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => handleServiceSelect(service.title)}
                        className="inline-flex items-center gap-1 text-xs font-black text-slate-950 dark:text-white hover:text-amber-700 dark:hover:text-amber-400 transition-colors cursor-pointer"
                      >
                        <span>Solicitar</span>
                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Modal de Detalhes Técnicos do Reparo */}
        <AnimatePresence>
          {selectedService && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                className="relative w-full max-w-lg rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-2xl overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 p-2 rounded-full text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                  aria-label="Fechar modal"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-lg bg-blue-100 dark:bg-blue-950 text-blue-900 dark:text-amber-400">
                    <selectedService.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-amber-800 dark:text-amber-400 uppercase tracking-wider">
                      Ficha Técnica do Reparo
                    </span>
                    <h3 className="text-xl font-bold text-slate-950 dark:text-white">
                      {selectedService.title}
                    </h3>
                  </div>
                </div>

                <p className="text-sm text-slate-900 dark:text-slate-300 leading-relaxed mb-5">
                  {selectedService.description}
                </p>

                <div className="mb-5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-950 dark:text-white mb-2.5">
                    Defeitos mais comuns diagnosticados:
                  </h4>
                  <ul className="space-y-2">
                    {selectedService.commonDefects?.map((defect, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-xs sm:text-sm text-slate-900 dark:text-slate-300"
                      >
                        <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span>{defect}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 mb-6 text-xs">
                  <div>
                    <span className="font-bold text-slate-950 dark:text-white block">Prazo Médio:</span>
                    <span className="text-slate-900 dark:text-slate-300 font-medium">{selectedService.timeframe}</span>
                  </div>
                  <div>
                    <span className="font-bold text-slate-950 dark:text-white block">Garantia:</span>
                    <span className="text-slate-900 dark:text-slate-300 font-medium">{selectedService.warranty}</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="gold"
                    className="w-full justify-center"
                    onClick={() => {
                      const title = selectedService.title;
                      setSelectedService(null);
                      handleServiceSelect(title);
                    }}
                  >
                    Pedir Orçamento Deste Aparelho
                  </Button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Faixa Especial de Conversão: Compra de Televisores com Defeito */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 rounded-2xl border border-amber-500/40 bg-gradient-to-br from-white via-slate-50 to-amber-50/20 dark:from-slate-900 dark:via-slate-900/90 dark:to-blue-950/40 p-8 sm:p-10 shadow-lg relative overflow-hidden"
        >
          {/* Decorative ambient glow */}
          <div className="absolute top-0 right-0 -mt-8 -mr-8 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase bg-amber-100 text-amber-900 border border-amber-300 dark:bg-amber-950/60 dark:text-amber-300 dark:border-amber-800/60 mb-3">
                <Tv className="w-3.5 h-3.5" />
                Avaliação de Aparelhos
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-950 dark:text-white mb-3">
                Tem uma TV com defeito e não pretende consertá-la?
              </h3>
              <p className="text-slate-900 dark:text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-medium">
                A Mega Eletronica também compra televisores com defeito para aproveitamento de peças.
                Envie a marca, modelo, tamanho em polegadas e fotos do aparelho pelo WhatsApp para
                avaliação imediata.
              </p>
            </div>

            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <Button
                variant="gold"
                size="lg"
                onClick={handleDefectiveTVContact}
                className="w-full sm:w-auto"
              >
                <MessageCircle className="w-4 h-4 mr-1" />
                Avaliar TV com Defeito
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
