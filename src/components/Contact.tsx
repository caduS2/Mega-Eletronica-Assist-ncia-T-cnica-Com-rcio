import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  MessageSquare,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Facebook,
  Instagram,
} from 'lucide-react';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { Textarea } from './ui/Textarea';
import { EvaluationFormData } from '../types';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<EvaluationFormData>({
    nome: '',
    telefone: '',
    equipamento: 'TV / Smart TV',
    marcaModelo: '',
    descricao: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof EvaluationFormData, string>>>({});
  const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null);

  const equipmentOptions = [
    'TV / Smart TV',
    'Celular / Tablet',
    'Notebook / Computador',
    'Forno Micro-ondas',
    'Som / DVD / Home Theater',
    'Eletrodoméstico / Eletroportátil',
    'Ferramenta Elétrica',
    'Peças e Componentes',
    'Outro equipamento',
  ];

  const validate = () => {
    const newErrors: Partial<Record<keyof EvaluationFormData, string>> = {};
    if (!formData.nome.trim()) newErrors.nome = 'Por favor, informe seu nome.';
    if (!formData.telefone.trim()) newErrors.telefone = 'Por favor, informe seu WhatsApp ou telefone.';
    if (!formData.equipamento.trim()) newErrors.equipamento = 'Selecione o tipo de equipamento.';
    if (!formData.marcaModelo.trim()) newErrors.marcaModelo = 'Informe a marca e modelo aproximados.';
    if (!formData.descricao.trim()) newErrors.descricao = 'Descreva resumidamente o defeito do aparelho.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const message = `Olá, Mega Eletronica! Gostaria de solicitar uma avaliação.

Nome: ${formData.nome.trim()}
Telefone: ${formData.telefone.trim()}
Equipamento: ${formData.equipamento.trim()}
Marca e modelo: ${formData.marcaModelo.trim()}
Problema: ${formData.descricao.trim()}`;

    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/5511948232700?text=${encoded}`;

    setFeedbackMessage(
      'Sua solicitação foi preparada! O atendimento continuará no WhatsApp oficial da Mega Eletronica.'
    );

    // Open WhatsApp
    window.open(whatsappUrl, '_blank', 'noreferrer');
  };

  return (
    <section id="contato" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Painel escuro em azul-marinho com profundidade e detalhes dourados */}
        <div className="relative rounded-3xl overflow-hidden border border-blue-900/60 bg-gradient-to-b from-[#0B1528] to-[#060B14] p-8 sm:p-12 lg:p-16 shadow-2xl">
          {/* Subtle Ambient Gold and Deep Blue Glow */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/25 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-10 w-72 h-72 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 relative z-10">
            {/* Coluna Esquerda: Informações e Cards Clicáveis (5 colunas desktop) */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-gold block mb-3">
                  Fale direto com a equipe
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight leading-tight mb-4">
                  Conte o que aconteceu. O diagnóstico começa aqui.
                </h2>
                <p className="text-slate-300 text-base leading-relaxed mb-8">
                  Envie os dados do aparelho e uma descrição do defeito. A mensagem será
                  encaminhada ao WhatsApp da Mega Eletronica para agilizar o atendimento.
                </p>

                {/* Cards Clicáveis */}
                <div className="space-y-4">
                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/5511948232700"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl border border-blue-800/40 bg-blue-950/40 hover:bg-blue-900/40 hover:border-gold/50 transition-all group"
                  >
                    <div className="p-3 rounded-lg bg-emerald-500/20 text-emerald-400 group-hover:scale-110 transition-transform shrink-0">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                        WhatsApp Oficial
                      </div>
                      <div className="text-lg font-bold text-white group-hover:text-gold transition-colors">
                        (11) 94823-2700
                      </div>
                    </div>
                  </a>

                  {/* Telefone Fixo */}
                  <a
                    href="tel:+551149410430"
                    className="flex items-center gap-4 p-4 rounded-xl border border-blue-800/40 bg-blue-950/40 hover:bg-blue-900/40 hover:border-gold/50 transition-all group"
                  >
                    <div className="p-3 rounded-lg bg-blue-500/20 text-blue-300 group-hover:scale-110 transition-transform shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                        Telefone Fixo
                      </div>
                      <div className="text-lg font-bold text-white group-hover:text-gold transition-colors">
                        (11) 4941-0430
                      </div>
                    </div>
                  </a>

                  {/* Facebook */}
                  <a
                    href="https://www.facebook.com/people/Mega-Eletr%C3%B4nica/100054533376369/#"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl border border-blue-800/40 bg-blue-950/40 hover:bg-blue-900/40 hover:border-gold/50 transition-all group"
                  >
                    <div className="p-3 rounded-lg bg-blue-600/20 text-blue-400 group-hover:scale-110 transition-transform shrink-0">
                      <Facebook className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                        Página no Facebook
                      </div>
                      <div className="text-sm font-bold text-white group-hover:text-gold transition-colors">
                        Mega Eletrônica SBC
                      </div>
                      <div className="text-xs text-slate-400 mt-0.5">
                        Novidades, reparos e fotos da loja
                      </div>
                    </div>
                  </a>

                  {/* Instagram Oficial */}
                  <a
                    href="https://www.instagram.com/megaeletroniica/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl border border-blue-800/40 bg-blue-950/40 hover:bg-blue-900/40 hover:border-gold/50 transition-all group"
                  >
                    <div className="p-3 rounded-lg bg-pink-500/20 text-pink-400 group-hover:scale-110 transition-transform shrink-0">
                      <Instagram className="w-5 h-5 text-pink-400" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                        Instagram Oficial
                      </div>
                      <div className="text-sm font-bold text-white group-hover:text-gold transition-colors">
                        @megaeletroniica
                      </div>
                      <div className="text-xs text-slate-400 mt-0.5">
                        Acompanhe nossos serviços e bancada
                      </div>
                    </div>
                  </a>

                  {/* Endereço & Maps */}
                  <a
                    href="https://maps.app.goo.gl/dAJJi6m7zKa5yFVo6"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-start gap-4 p-4 rounded-xl border border-blue-800/40 bg-blue-950/40 hover:bg-blue-900/40 hover:border-gold/50 transition-all group"
                  >
                    <div className="p-3 rounded-lg bg-amber-500/20 text-gold group-hover:scale-110 transition-transform shrink-0 mt-0.5">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                        Localização (Abrir no Maps)
                      </div>
                      <div className="text-sm font-bold text-white group-hover:text-gold transition-colors">
                        Rua Ernesta Pelosini, 69
                      </div>
                      <div className="text-xs text-slate-400 mt-0.5">
                        Nova Petrópolis — São Bernardo do Campo — SP
                      </div>
                      <div className="text-xs text-slate-400">CEP 09771-220</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Aviso obrigatório de horário */}
              <div className="mt-8 pt-6 border-t border-blue-900/60 flex items-start gap-3 text-xs text-slate-400">
                <Clock className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <p>
                  <strong className="text-slate-200">Aviso importante:</strong> Confirme o horário
                  de atendimento pelo WhatsApp antes da visita.
                </p>
              </div>
            </div>

            {/* Coluna Direita: Formulário de Solicitação de Avaliação (7 colunas desktop) */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-blue-800/50 bg-[#0E1A33]/90 backdrop-blur-md p-6 sm:p-8 shadow-xl">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-6 mb-6 border-b border-blue-900/50">
                  <div>
                    <h3 className="text-2xl font-display font-bold text-white">
                      Solicite uma avaliação
                    </h3>
                    <p className="text-xs text-slate-300 mt-0.5">
                      Preencha os dados do aparelho para orçamento
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-gold/20 text-gold border border-gold/40 self-start sm:self-auto">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Avaliação técnica prévia
                  </span>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  {/* Nome */}
                  <Input
                    id="contato-nome"
                    label="Seu Nome Completo *"
                    placeholder="Ex: Carlos Eduardo Silva"
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                    error={errors.nome}
                    className="bg-slate-900/80 text-white border-blue-900/70 placeholder:text-slate-500"
                  />

                  {/* Telefone / WhatsApp */}
                  <Input
                    id="contato-telefone"
                    type="tel"
                    label="Telefone / WhatsApp *"
                    placeholder="Ex: (11) 98765-4321"
                    value={formData.telefone}
                    onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                    error={errors.telefone}
                    className="bg-slate-900/80 text-white border-blue-900/70 placeholder:text-slate-500"
                  />

                  {/* Tipo de Equipamento */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="tipo-equipamento"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-300"
                    >
                      Tipo de Equipamento *
                    </label>
                    <select
                      id="tipo-equipamento"
                      value={formData.equipamento}
                      onChange={(e) => setFormData({ ...formData, equipamento: e.target.value })}
                      className="flex h-11 w-full rounded-md border border-blue-900/70 bg-slate-900/80 px-3.5 py-2 text-sm text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                    >
                      {equipmentOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-slate-900 text-white">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Marca e Modelo */}
                  <Input
                    id="contato-marca-modelo"
                    label="Marca e Modelo do Equipamento *"
                    placeholder="Ex: Samsung 50 polegadas / LG / Electrolux"
                    value={formData.marcaModelo}
                    onChange={(e) => setFormData({ ...formData, marcaModelo: e.target.value })}
                    error={errors.marcaModelo}
                    className="bg-slate-900/80 text-white border-blue-900/70 placeholder:text-slate-500"
                  />

                  {/* Descrição do Defeito */}
                  <Textarea
                    id="contato-descricao"
                    label="Descrição do Problema *"
                    placeholder="Ex: O televisor liga com som mas a tela fica escura / O aparelho não aquece / Não liga."
                    value={formData.descricao}
                    onChange={(e) => setFormData({ ...formData, descricao: e.target.value })}
                    error={errors.descricao}
                    className="bg-slate-900/80 text-white border-blue-900/70 placeholder:text-slate-500 min-h-[90px]"
                  />

                  {/* Botão de Envio */}
                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="gold"
                      size="lg"
                      className="w-full justify-center text-slate-950 font-bold tracking-wide"
                    >
                      <span>Entrar em contato</span>
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>

                  {/* Acessibilidade: Feedback live */}
                  <div aria-live="polite" className="pt-2">
                    {feedbackMessage && (
                      <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-start gap-2.5 p-3 rounded-lg bg-emerald-950/60 border border-emerald-500/40 text-emerald-200 text-xs leading-relaxed"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feedbackMessage}</span>
                      </motion.div>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
