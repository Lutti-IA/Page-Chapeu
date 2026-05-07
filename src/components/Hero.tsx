/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowRight, ShoppingBag } from 'lucide-react';
import { SHOPEE_STORE_URL } from '../constants';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-[1.2fr_1fr] gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="skew-10 inline-block mb-4">
            <span className="bg-brand-leather/10 text-brand-leather text-xs font-bold uppercase tracking-widest px-3 py-1 rounded">
              Desde 1994
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl leading-[0.9] mb-6">
            A Arte de <br />
            <span className="italic">Vestir-se</span> <br />
            com Classe.
          </h1>
          <p className="text-lg text-brand-dark/70 max-w-md mb-8 leading-relaxed">
            Descubra nossa curadoria exclusiva de chapéus artesanais, unindo tradição e design contemporâneo para elevar qualquer visual.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href={SHOPEE_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-dark text-white px-8 py-4 rounded-full flex items-center gap-3 hover:bg-brand-olive transition-all hover:scale-105 active:scale-95 group shadow-xl shadow-brand-dark/20"
            >
              Comprar Agora
              <ShoppingBag className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <a 
              href="#colecoes" 
              className="px-8 py-4 rounded-full border border-brand-dark/20 flex items-center gap-3 hover:bg-brand-dark/5 transition-colors"
            >
              Ver Coleções
              <ArrowRight size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl relative z-10 group">
            <img 
              src="https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?auto=format&fit=crop&q=80&w=800" 
              alt="Modelo usando chapéu luxuoso" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-brand-olive/10 rounded-full blur-3xl -z-10" />
          <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-brand-leather/10 rounded-full blur-3xl -z-10" />
          
          <div className="absolute -right-8 bottom-12 bg-white p-6 rounded-2xl shadow-xl z-20 hidden lg:block rotate-3 hover:rotate-0 transition-transform">
            <span className="block text-brand-leather font-serif text-2xl mb-1">98%</span>
            <span className="text-[10px] uppercase tracking-wider text-brand-dark/60 font-bold">Satisfação dos Clientes</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

