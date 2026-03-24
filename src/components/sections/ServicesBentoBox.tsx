import { motion } from 'framer-motion';
import { Wrench, ShieldCheck, Zap, BadgeDollarSign } from 'lucide-react';
import { MouseFollowCard } from '../ui/MouseFollowCard';

export const ServicesBentoBox = () => {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } }
  };

  return (
    <section className="py-24 bg-surface-0 relative z-10" id="servicos">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">Especialistas em <br/><span className="text-zinc-500">Amortecedores.</span></h2>
          <p className="text-xl text-zinc-400 max-w-2xl font-light">
            Tudo o que a suspensão do seu carro precisa com qualidade e uma economia que o seu bolso agradece.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]"
        >
          <motion.div variants={item} className="md:col-span-2 group">
            <MouseFollowCard className="bg-linear-to-br from-surface-1 to-blue-950/20 relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] pointer-events-none" />
              <div className="absolute bottom-6 left-8 right-8 h-px bg-linear-to-r from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="bg-primary/10 p-5 rounded-full w-max mb-auto border border-primary/20">
                <Wrench className="w-10 h-10 text-primary" />
              </div>
              <div className="pt-8">
                <h3 className="text-2xl font-bold text-white mb-2">Recuperação de Amortecedores</h3>
                <p className="text-zinc-400 leading-relaxed">Restauramos a pressão e a carga ideal dos seus amortecedores, garantindo a mesma performance e conforto de uma peça nova por uma fração do preço.</p>
              </div>
            </MouseFollowCard>
          </motion.div>

          <motion.div variants={item} className="group">
            <MouseFollowCard className="relative">
              <div className="absolute bottom-6 left-8 right-8 h-px bg-linear-to-r from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="bg-zinc-800 p-5 rounded-full w-max mb-auto">
                <BadgeDollarSign className="w-10 h-10 text-white" />
              </div>
              <div className="pt-8">
                <h3 className="text-xl font-bold text-white mb-2">Economia Real</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">Até 50% mais barato em relação à troca por amortecedores novos, sem abrir mão da segurança.</p>
              </div>
            </MouseFollowCard>
          </motion.div>

          <motion.div variants={item} className="group">
            <MouseFollowCard className="relative">
               <div className="absolute bottom-6 left-8 right-8 h-px bg-linear-to-r from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="bg-primary/10 p-5 rounded-full w-max mb-auto border border-primary/20">
                <Zap className="w-10 h-10 text-primary" />
              </div>
              <div className="pt-8">
                <h3 className="text-xl font-bold text-white mb-2">Serviço Rápido</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">Seu carro pronto em tempo recorde! Processo otimizado para você não ficar a pé.</p>
              </div>
            </MouseFollowCard>
          </motion.div>

          <motion.div variants={item} className="md:col-span-2 group">
            <MouseFollowCard className="relative">
              <div className="absolute bottom-6 left-8 right-8 h-px bg-linear-to-r from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="bg-zinc-800 p-5 rounded-full w-max mb-auto">
                <ShieldCheck className="w-10 h-10 text-white" />
              </div>
              <div className="pt-8">
                <h3 className="text-2xl font-bold text-white mb-2">Garantia Comprovada</h3>
                <p className="text-zinc-400 leading-relaxed">Confiamos na nossa engenharia de recuperação. Todo serviço de suspensão sai da nossa oficina em Diadema com garantia total e estabilidade veicular testada.</p>
              </div>
            </MouseFollowCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
