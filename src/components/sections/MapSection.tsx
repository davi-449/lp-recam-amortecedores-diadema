import { motion } from 'framer-motion';
import { MapPin, Clock, ArrowUpRight } from 'lucide-react';

export const MapSection = () => {
  return (
    <section className="py-24 bg-surface-0 relative border-t border-white/5">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Venha nos Visitar<span className="text-primary">.</span></h2>

            <div className="space-y-8 mt-12 text-zinc-300">
              <div className="flex items-start gap-4 group">
                <div className="bg-surface-1 p-4 rounded-2xl border border-white/5 group-hover:border-primary/30 transition-colors">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Localização</h4>
                  <p className="text-zinc-400 leading-relaxed font-light">R. Afonso Pena, 433<br/>Casa Grande, Diadema - SP</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="bg-surface-1 p-4 rounded-2xl border border-white/5 group-hover:border-accent-trust/30 transition-colors">
                  <Clock className="w-6 h-6 text-accent-trust" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Horário de Funcionamento</h4>
                  <div className="text-zinc-400 font-light space-y-1 mt-3">
                    <p className="flex justify-between gap-4"><span>Seg - Sex:</span> <span className="text-white font-medium">09:00 – 18:00</span></p>
                    <p className="flex justify-between gap-4"><span>Sábado:</span> <span className="text-white font-medium">09:00 – 14:00</span></p>
                    <p className="flex justify-between gap-4"><span>Domingo:</span> <span className="text-white font-medium">Fechado</span></p>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=RECAM+Amortecedores+Diadema"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-12 text-zinc-300 hover:text-white font-medium hover:bg-white/5 px-6 py-3 rounded-full transition-colors border border-transparent hover:border-white/10"
            >
              Abrir GPS Agora <ArrowUpRight className="w-4 h-4 text-primary" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-7 h-[500px] w-full bg-surface-1 rounded-3xl overflow-hidden shadow-2xl relative border border-white/5 isolate"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.5!2d-46.614!3d-23.655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sR.%20Afonso%20Pena%2C%20433%20-%20Casa%20Grande%2C%20Diadema%20-%20SP%2C%2009960-490!5e0!3m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) grayscale(20%) contrast(110%) opacity(85%)' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa da Automecânica India"
              className="absolute inset-0 z-0"
            ></iframe>
            <div className="absolute inset-0 pointer-events-none rounded-3xl ring-1 ring-inset ring-white/10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
