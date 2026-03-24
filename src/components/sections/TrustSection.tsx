import { motion } from 'framer-motion';
import mechanicImg from '@/assets/mechanic_trust.png';

export const TrustSection = () => {
  return (
    <section className="py-24 bg-surface-0 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tight leading-tight">
              5.010<span className="text-primary">+</span><br/>
              <span className="text-zinc-500">Avaliações.</span>
            </h2>
            <div className="space-y-6 text-xl text-zinc-400 font-light leading-relaxed">
              <p>
                A <strong className="text-white">RECAM Amortecedores</strong> é refência em Diadema quando o assunto é suspensão. Nosso foco é sua segurança aliada a uma economia real.
              </p>
              <p>
                Não trocamos peças à toa. Recuperamos o que é possível e substituímos o que é necessário. Tudo com transparência absoluta e engenharia de ponta.
              </p>
            </div>

            <div className="mt-12 bg-surface-1 p-8 rounded-3xl border border-white/5 border-l-2 border-l-primary inline-block">
              <p className="font-serif italic text-2xl text-zinc-200">
                "Produto e serviço de qualidade incrível, com preço justo e garantia. Resolvemos a suspensão aqui!"
              </p>
              <p className="mt-4 text-sm font-bold text-primary uppercase tracking-widest">— Queila Vasconcelos ⭐ 5.0</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden aspect-4/5 border border-white/10 shadow-2xl">
              <img
                src={mechanicImg}
                alt="Automecânica India - Confiança e Profissionalismo"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-linear-to-t from-surface-0 via-transparent to-transparent opacity-80" />
            </div>
            <div className="absolute -z-10 -inset-10 bg-linear-to-tr from-primary/20 to-transparent blur-3xl opacity-50 rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
