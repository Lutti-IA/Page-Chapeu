/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';

const categories = [
  {
    title: "Clássicos & Fedoras",
    image: "https://images.unsplash.com/photo-1521316730702-829ad88e7ff7?auto=format&fit=crop&q=80&w=600",
    description: "Elegância atemporal para ocasiões especiais."
  },
  {
    title: "Panamá & Verão",
    image: "https://images.unsplash.com/photo-1533827432537-70133748f5c8?auto=format&fit=crop&q=80&w=600",
    description: "Leveza e proteção com estilo sob o sol."
  },
  {
    title: "Streetwear & Caps",
    image: "https://images.unsplash.com/photo-1588850567040-ed480ee9718f?auto=format&fit=crop&q=80&w=600",
    description: "O toque urbano para o seu dia a dia."
  }
];

export default function Categories() {
  return (
    <section id="colecoes" className="py-24 bg-white/50">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h2 className="text-4xl md:text-5xl mb-4">Nossas Coleções</h2>
        <p className="text-brand-dark/60 max-w-xl mx-auto">
          Explore nossa variedade de estilos, desde os clássicos feitos à mão até as tendências urbanas mais modernas.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {categories.map((cat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
            className="group cursor-pointer"
          >
            <div className="aspect-[3/4] rounded-3xl overflow-hidden mb-6 relative">
              <img 
                src={cat.image} 
                alt={cat.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-brand-dark/40 transition-colors" />
            </div>
            <h3 className="text-2xl mb-2">{cat.title}</h3>
            <p className="text-sm text-brand-dark/60">{cat.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
