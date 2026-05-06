/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { 
  ArrowRight, 
  Target, 
  TrendingUp, 
  AlertCircle, 
  Zap, 
  MousePointer2, 
  BarChart3, 
  Settings2,
  CheckCircle2,
  Users,
  ShieldCheck
} from "lucide-react";

interface SlideProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const Slide = ({ children, className = "", id }: SlideProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section 
      id={id}
      ref={ref}
      className={`snap-section px-6 md:px-20 ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-5xl w-full"
      >
        {children}
      </motion.div>
    </section>
  );
};

export default function App() {
  const slides = [
    { id: "hero", label: "Abertura" },
    { id: "diagnostico", label: "Diagnóstico" },
    { id: "problema", label: "O Problema" },
    { id: "solucao", label: "Método Adnove" },
    { id: "como-funciona", label: "Fluxo" },
    { id: "escopo", label: "Entregáveis" },
    { id: "metodologia", label: "Ciclo" },
    { id: "diferencial", label: "Diferencial" },
    { id: "investimento", label: "Investimento" },
    { id: "final", label: "Escalar" },
  ];

  const WHATSAPP_NUMBER = "5519995659229";
  const WHATSAPP_MESSAGE = encodeURIComponent("Olá! Vi a proposta exclusiva da Adnove para a Central Outlet e quero agendar uma reunião para escalar meu faturamento ainda este mês.");
  const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

  return (
    <main className="snap-container bg-dark-bg text-white selection:bg-brand-purple/30">
      
      {/* Floating WhatsApp for quick access on mobile */}
      <a 
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-50 p-4 bg-brand-accent rounded-full shadow-2xl md:hidden hover:scale-110 active:scale-95 transition-transform"
        aria-label="Falar no WhatsApp"
      >
        <Zap fill="currentColor" size={24} className="text-dark-bg" />
      </a>

      {/* Side Navigation Indicators */}
      <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4">
        {slides.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            title={s.label}
            className="group flex items-center gap-3 justify-end"
          >
            <span className="text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity text-brand-purple">
              {s.label}
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-brand-purple group-hover:scale-150 transition-all" />
          </a>
        ))}
      </nav>

      {/* 1. HERO (ABERTURA) */}
      <Slide id="hero" className="bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-purple/10 via-transparent to-transparent">
        <div className="space-y-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-purple/30 bg-brand-purple/5 text-brand-purple text-[10px] md:text-xs font-semibold uppercase tracking-wider"
          >
            <ShieldCheck size={14} />
            Proposta Exclusiva e Confidencial
          </motion.div>
          <h1 className="text-4xl md:text-8xl font-display font-bold tracking-tight leading-tight">
            Proposta Estratégica de <span className="text-brand-purple">Crescimento Digital</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-400 font-light max-w-2xl">
            Preparado exclusivamente para <span className="text-white font-medium">Central Outlet Campinas</span>.
            Um sistema previsível para escalar seu faturamento no Streetwear.
          </p>
          <div className="pt-6">
            <a 
              href="#diagnostico"
              className="inline-flex items-center gap-3 bg-brand-accent hover:bg-emerald-600 text-dark-bg font-bold px-6 md:px-8 py-3 md:py-4 rounded-xl transition-all hover:scale-105 active:scale-95 group text-sm md:text-base"
            >
              Veja como podemos escalar seu faturamento
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
        
        {/* Progress Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
          <MousePointer2 size={24} />
        </div>
      </Slide>

      {/* 2. EMPATIA & DIAGNÓSTICO */}
      <Slide id="diagnostico" className="bg-dark-surface/30">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-6xl font-display font-bold">Diagnóstico do <span className="text-brand-blue">Cenário Atual</span></h2>
            <p className="text-base md:text-lg text-gray-400">
              O mercado de <span className="text-white font-medium">Moda Surf & Streetwear</span> exige mais do que apenas postar fotos. Identificamos os pilares que estão limitando sua tração hoje:
            </p>
            <div className="space-y-4">
              {[
                { icon: AlertCircle, text: "Dependência excessiva do algoritmo do Instagram" },
                { icon: BarChart3, text: "Baixa previsibilidade de vendas semanais" },
                { icon: TrendingUp, text: "Grande esforço operacional para pouco retorno líquido" }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * i }}
                  className="flex items-center gap-4 bg-white/5 p-4 rounded-lg border border-white/10"
                >
                  <item.icon className="text-brand-blue shrink-0" size={20} />
                  <span className="font-medium text-sm md:text-base">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="hidden md:block relative">
            <div className="absolute -inset-4 bg-brand-blue/20 blur-3xl rounded-full" />
            <div className="relative aspect-square rounded-3xl bg-dark-bg border border-white/10 p-8 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="w-12 h-1 bg-brand-blue rounded-full" />
                <p className="text-sm font-mono text-gray-500 uppercase tracking-widest">Análise de Canal</p>
              </div>
              <div className="space-y-4">
                <div className="h-4 bg-white/5 rounded-full w-full overflow-hidden">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: "85%" }} className="h-full bg-brand-blue" />
                </div>
                <div className="h-4 bg-white/5 rounded-full w-full overflow-hidden">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: "40%" }} className="h-full bg-brand-purple" />
                </div>
              </div>
              <p className="text-xs text-gray-500">Relatório Adnove v2.0 - B2B Focus</p>
            </div>
          </div>
        </div>
      </Slide>

      {/* 3. O PROBLEMA REAL */}
      <Slide id="problema" className="bg-dark-bg">
        <div className="text-center space-y-6 md:space-y-8 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-6xl font-display font-bold">O Problema <span className="text-red-500">Real</span></h2>
          <p className="text-lg md:text-2xl text-gray-300 font-light leading-relaxed">
            Não é falta de produto ou de público. É a falta de um <span className="text-white border-b-2 border-red-500">sistema previsível</span> de aquisição.
          </p>
          <div className="grid md:grid-cols-2 gap-4 md:gap-6 pt-6 md:pt-10">
            <div className="p-5 md:p-6 bg-white/5 rounded-2xl border border-white/10 text-left">
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 flex items-center gap-2">
                <Zap size={20} className="text-brand-purple" /> Conteúdo sem Estratégia
              </h3>
              <p className="text-gray-400 text-xs md:text-sm">Postar por postar queima seu tempo e não gera conversão direta. O conteúdo deve servir ao tráfego, não o contrário.</p>
            </div>
            <div className="p-5 md:p-6 bg-white/5 rounded-2xl border border-white/10 text-left">
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 flex items-center gap-2">
                <Target size={20} className="text-brand-purple" /> Quebra de Crenças
              </h3>
              <p className="text-gray-400 text-xs md:text-sm">O cliente não compra a roupa, ele compra a autoridade e a curadoria da Central Outlet. Se isso não está claro no anúncio, o ROI cai.</p>
            </div>
          </div>
        </div>
      </Slide>

      {/* 4. SOLUÇÃO (MÉTODO ADNOVE) */}
      <Slide id="solucao" className="bg-brand-purple">
        <div className="space-y-6 text-white">
          <h2 className="text-4xl md:text-8xl font-display font-bold leading-tight">
            MÉTODO ADNOVE:<br/>
            <span className="text-dark-bg">Slim Business</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 pt-4 md:pt-8">
            {[
              { title: "Menos Esforço", desc: "Processos enxutos que não dependem da sua presença 24/7." },
              { title: "Mais Estratégia", desc: "Decisões baseadas em dados de faturamento real, não em curtidas." },
              { title: "Foco em Vendas", desc: "Cada centavo investido tem um único objetivo: Conversão." }
            ].map((item, i) => (
              <div key={i} className="space-y-1 md:space-y-2 border-l-2 border-dark-bg/20 pl-4 md:pl-6">
                <h3 className="text-xl md:text-2xl font-bold text-dark-bg">{item.title}</h3>
                <p className="text-white/80 text-sm md:text-base">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Slide>

      {/* 5. COMO FUNCIONA */}
      <Slide id="como-funciona" className="bg-dark-surface">
        <div className="space-y-8 md:space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-6xl font-display font-bold mb-3 md:mb-4">Fluxo de <span className="text-brand-purple">Alta Performance</span></h2>
            <p className="text-gray-400 text-sm md:text-base">Transformamos sua marca em uma máquina de vendas em 5 passos:</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4">
            {[
              { step: "01", label: "Estratégia", icon: Target },
              { step: "02", label: "Criativos", icon: Zap },
              { step: "03", label: "Tráfego", icon: TrendingUp },
              { step: "04", label: "Leads", icon: Users },
              { step: "05", label: "Conversão", icon: CheckCircle2 }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="relative p-4 md:p-6 bg-white/5 rounded-2xl border border-white/10 flex flex-col items-center text-center group hover:bg-brand-purple/20 hover:border-brand-purple/50 transition-all"
              >
                <div className="text-[10px] md:text-xs font-mono text-brand-purple mb-2 md:mb-4 font-bold">{item.step}</div>
                <item.icon className="mb-2 md:mb-4 text-white group-hover:text-brand-purple transition-colors" size={24} />
                <span className="font-bold text-sm md:text-lg">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </Slide>

      {/* 6. ESCOPO (BENEFÍCIOS) */}
      <Slide id="escopo" className="bg-dark-bg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="relative order-2 md:order-1">
             <div className="aspect-square bg-brand-blue/10 rounded-full flex items-center justify-center p-8 md:p-12 border border-brand-blue/20">
                <div className="text-center space-y-2 md:space-y-4">
                  <h3 className="text-5xl md:text-7xl font-bold font-display text-brand-blue">100%</h3>
                  <p className="text-gray-400 uppercase tracking-widest text-[10px] md:text-sm font-bold">Foco em Resultados</p>
                </div>
             </div>
          </div>
          <div className="space-y-6 md:space-y-8 order-1 md:order-2">
            <h2 className="text-3xl md:text-5xl font-display font-bold">O que entregamos de <span className="text-brand-blue">Fato</span></h2>
            <ul className="space-y-4 md:space-y-6">
              {[
                "Gestão de Tráfego Pago (Meta & Google)",
                "Produção de Criativos de Alta Conversão",
                "Dashboards de Acompanhamento ROI",
                "Consultoria em Funil de Vendas",
                "Otimização Contínua de Campanhas"
              ].map((text, i) => (
                <li key={i} className="flex gap-3 md:gap-4 items-start">
                  <CheckCircle2 className="text-brand-accent shrink-0" size={20} md:size={24} />
                  <span className="text-base md:text-lg text-gray-300">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Slide>

      {/* 7. METODOLOGIA */}
      <Slide id="metodologia" className="bg-white text-dark-bg">
        <div className="space-y-8 md:space-y-12">
          <h2 className="text-3xl md:text-6xl font-display font-bold">Ciclo de <span className="text-brand-purple">Evolução</span></h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-left">
            {[
              { t: "Diagnóstico", d: "Entendemos seu público e estoque." },
              { t: "Planejamento", d: "Criamos o mapa de guerra." },
              { t: "Execução", d: "Lançamos as campanhas no ar." },
              { t: "Otimização", d: "Ajustamos para o ROI máximo." }
            ].map((item, i) => (
              <div key={i} className="space-y-2 md:space-y-4">
                <div className="text-3xl md:text-4xl font-display font-black text-brand-purple/20">0{i+1}</div>
                <h3 className="text-xl md:text-2xl font-bold">{item.t}</h3>
                <p className="text-gray-600 leading-relaxed text-xs md:text-base">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </Slide>

      {/* 8. DIFERENCIAL */}
      <Slide id="diferencial" className="bg-dark-surface">
        <div className="flex flex-col items-center text-center space-y-8 md:space-y-12">
          <h2 className="text-3xl md:text-6xl font-display font-bold">Por que a <span className="text-brand-purple">Adnove</span>?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 w-full">
            <div className="p-6 md:p-8 bg-dark-bg rounded-3xl border border-white/5 space-y-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-white/5 rounded-xl flex items-center justify-center mx-auto">
                <Target className="text-brand-purple" size={20} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold">Modelo Enxuto</h3>
              <p className="text-gray-400 text-xs md:text-sm">Não somos uma agência burocrática. Somos parceiros aceleradores.</p>
            </div>
            <div className="p-6 md:p-8 bg-dark-bg rounded-3xl border border-white/5 space-y-4 md:scale-105 border-brand-purple/30">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-purple/10 rounded-xl flex items-center justify-center mx-auto">
                <TrendingUp className="text-brand-purple" size={20} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white">Foco Total em ROI</h3>
              <p className="text-gray-400 text-xs md:text-sm">Seu lucro é a nossa métrica de vaidade. Ponto final.</p>
            </div>
             <div className="p-6 md:p-8 bg-dark-bg rounded-3xl border border-white/5 space-y-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-white/5 rounded-xl flex items-center justify-center mx-auto">
                <Settings2 className="text-brand-purple" size={20} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold">Estratégia Proprietária</h3>
              <p className="text-gray-400 text-xs md:text-sm">Metodologias testadas e validadas no nicho de moda retail.</p>
            </div>
          </div>
        </div>
      </Slide>

      {/* 9. INVESTIMENTO */}
      <Slide id="investimento" className="bg-dark-bg">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-[#0F172A] p-8 md:p-12 rounded-3xl border border-white/5 shadow-2xl space-y-10">
            
            {/* Header: Title & Price */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div className="space-y-2">
                <h2 className="text-3xl md:text-4xl font-display font-bold">Projeto Business Digital Leve</h2>
                <p className="text-brand-blue font-medium text-lg">Gestão Completa de Aquisição Adnove</p>
              </div>
              <div className="text-right">
                <p className="text-gray-400 text-sm font-medium mb-1">Investimento Mensal (Fee Agência)</p>
                <div className="flex items-end justify-end gap-1">
                  <span className="text-2xl text-gray-400 font-light mb-2">R$</span>
                  <span className="text-6xl md:text-7xl font-display font-bold tracking-tighter">1.497</span>
                  <span className="text-xl text-gray-400 mb-2 ml-1">/mês</span>
                </div>
                <p className="text-gray-500 text-xs md:text-sm mt-1">sem fidelidade · verba de mídia à parte</p>
              </div>
            </div>

            <div className="h-px bg-white/10 w-full" />

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
              {[
                "Planejamento Estratégico",
                "Criação de Artes Estáticas",
                "Roteiros (Reels/Stories)",
                "Gestão de Tráfego Focada em Leads",
                "Reuniões de Acompanhamento e Suporte"
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full border border-brand-accent/30 flex items-center justify-center shrink-0">
                    <CheckCircle2 size={14} className="text-brand-accent" />
                  </div>
                  <span className="text-gray-300 font-medium md:text-lg">{feature}</span>
                </div>
              ))}
            </div>

            {/* Final Quote Box */}
            <div className="mt-8 p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 relative">
              <p className="text-gray-300 italic text-center text-sm md:text-lg leading-relaxed font-light">
                "O custo de tentar atrair clientes sem um método comprovado, gastando energia e perdendo vendas para a concorrência, é infinitamente maior do que investir na estrutura certa."
              </p>
            </div>

          </div>
        </div>
      </Slide>

      {/* 10. CTA FINAL */}
      <Slide id="final" className="bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-purple/20 via-dark-bg to-dark-bg">
        <div className="text-center space-y-8 md:space-y-10 px-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="w-16 h-16 md:w-24 md:h-24 bg-brand-purple rounded-2xl md:rounded-3xl mx-auto flex items-center justify-center rotate-12 shadow-2xl shadow-brand-purple/20"
          >
            <Zap size={32} md:size={48} className="text-white" />
          </motion.div>
          <div className="space-y-3 md:space-y-4">
            <h2 className="text-3xl md:text-7xl font-display font-bold">Vamos dar o <span className="text-brand-purple">próximo passo</span>?</h2>
            <p className="text-base md:text-xl text-gray-400 max-w-xl mx-auto font-light leading-relaxed">
              A oportunidade de dominar o mercado de Streetwear em Campinas está aberta. Vamos escalar seu faturamento agora?
            </p>
          </div>
          <div className="pt-4 md:pt-6">
            <a 
              href={WHATSAPP_LINK} 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 md:gap-4 bg-brand-accent hover:bg-emerald-600 text-dark-bg font-black px-8 md:px-12 py-4 md:py-6 rounded-xl md:rounded-2xl text-lg md:text-xl transition-all hover:scale-110 shadow-2xl shadow-brand-accent/20 text-center"
            >
              Quero escalar meu faturamento
              <ArrowRight />
            </a>
          </div>
          <div className="pt-8 space-y-2">
            <p className="text-xs text-gray-600">WhatsApp: +55 (19) 99565-9229</p>
            <p className="text-[10px] text-gray-700">© 2024 Agência Adnove. Todos os direitos reservados.</p>
          </div>
        </div>
      </Slide>

    </main>
  );
}

