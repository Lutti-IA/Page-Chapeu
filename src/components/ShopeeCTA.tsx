/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ShoppingBag, Star, ShieldCheck, Truck } from 'lucide-react';
import { SHOPEE_STORE_URL } from '../constants';

export default function ShopeeCTA() {
  return (
    <section id="shopee" className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-brand-dark rounded-[48px] p-8 md:p-16 text-white relative overflow-hidden">
          {/* Decorative Background */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-olive/20 -skew-x-12 translate-x-1/4" />
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-6 text-brand-leather">
                <Star fill="currentColor" size={16} />
                <Star fill="currentColor" size={16} />
                <Star fill="currentColor" size={16} />
                <Star fill="currentColor" size={16} />
                <Star fill="currentColor" size={16} />
                <span className="text-white/80 text-sm font-medium ml-2">5.0 na Shopee</span>
              </div>
              <h2 className="text-4xl md:text-6xl mb-6">
                Visite Nossa <br />
                <span className="italic text-brand-leather">Loja Oficial</span> na Shopee
              </h2>
              <p className="text-lg text-white/70 mb-10 leading-relaxed max-w-lg">
                Garantimos a melhor experiência de compra com envio rápido para todo o Brasil, cupons exclusivos e toda a segurança da Shopee.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <Truck size={20} className="text-brand-leather" />
                  </div>
                  <span className="text-sm font-medium">Frete Grátis*</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <ShieldCheck size={20} className="text-brand-leather" />
                  </div>
                  <span className="text-sm font-medium">Compra Segura</span>
                </div>
              </div>

              <a 
                href={SHOPEE_STORE_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#EE4D2D] hover:bg-[#d73211] text-white px-10 py-5 rounded-full text-lg font-bold transition-all hover:scale-105 active:scale-95 shadow-xl shadow-[#EE4D2D]/20"
              >
                COMPRAR NA SHOPEE
                <ShoppingBag size={24} />
              </a>
              <p className="mt-4 text-xs text-white/40 italic">
                *Consulte os termos de frete grátis diretamente no aplicativo Shopee.
              </p>
            </div>

            <div className="hidden lg:block relative">
              <motion.div
                initial={{ rotate: 12, y: 50, opacity: 0 }}
                whileInView={{ rotate: -5, y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white p-4 rounded-3xl shadow-2xl skew-10"
              >
                <img 
                  src="https://images.unsplash.com/photo-1572307480813-ceb0e59d8325?auto=format&fit=crop&q=80&w=500" 
                  alt="Pacote pronto para envio" 
                  className="rounded-2xl"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <div className="absolute -bottom-6 -left-6 bg-brand-olive text-white p-6 rounded-2xl shadow-xl">
                <p className="text-xs uppercase tracking-widest font-bold mb-1 opacity-60">Próximo Lote</p>
                <p className="text-2xl font-serif">Enviamos em 24h</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
