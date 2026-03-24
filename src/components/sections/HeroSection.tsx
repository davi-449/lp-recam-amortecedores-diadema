import { motion } from 'framer-motion';
import { Phone, CheckCircle2 } from 'lucide-react';
import { Button } from '../ui/Button';
import { PulseRing } from '../ui/PulseRing';
import heroBg from '@/assets/hero_bg.png';

export const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})`, backgroundPosition: 'center 30%' }}
      >
        <div className="absolute inset-0 bg-surfce-0/20 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-0 bg-linear-to-b from-surface-0/95 via-surface-0/60 to-surface-0 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-linear-to-t from-surface-0 to-transparent pointer-events-none" />
      </div>

      <div className="container relative z-10 px-4 mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 bg-surface-1/50 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-white/5 shadow-lg">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-trust opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-accent-trust"></span>
            </span>
            <span className="text-sm font-semibold text-zinc-200 tracking-wide uppercase">⚡ Aberto Agora &bull; Casa Grande &bull; Diadema</span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight">
            Recuperação de <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-blue-400 to-cyan-300">Amortecedores</span> com Qualidade.
          </h1>

          <p className="text-xl text-zinc-300 mb-10 leading-relaxed font-light">
            Seu carro está instável ou puxando? Economize até 50% recuperando seus amortecedores com engenharia especializada.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <PulseRing>
              <Button glow className="h-16 px-10 text-lg shadow-[0_0_40px_rgba(59,130,246,0.3)]">
                <Phone className="w-6 h-6 mr-2" />
                Solicitar Orçamento
              </Button>
            </PulseRing>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-6 text-sm text-zinc-400 font-medium tracking-wide">
            <span className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-primary" /> Nota 5.0 no Google</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-primary" /> Garantia Comprovada</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-primary" /> Até 50% de Economia</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
