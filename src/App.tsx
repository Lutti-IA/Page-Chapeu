/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import ShopeeCTA from './components/ShopeeCTA';
import Footer from './components/Footer';
import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* About Section */}
        <section id="nossa-historia" className="py-24 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <h2 className="text-4xl md:text-5xl mb-8">Tradição que Atravessa <span className="italic">Gerações</span>.</h2>
            <div className="space-y-6 text-brand-dark/70 leading-relaxed text-lg">
              <p>
                Fundada no coração do Brasil, a Chapeau Heritage nasceu da paixão por acessórios que contam histórias. Cada peça em nossa coleção é cuidadosamente selecionada ou produzida seguindo técnicas artesanais.
              </p>
              <p>
                Acreditamos que um chapéu é mais do que proteção; é uma extensão da personalidade, um símbolo de distinção que eleva a silhueta e confere confiança a quem o usa.
              </p>
            </div>
            <div className="mt-10 flex gap-12">
              <div>
                <p className="text-3xl font-serif text-brand-leather mb-1">30+</p>
                <p className="text-[10px] uppercase tracking-widest font-bold opacity-60">Anos de História</p>
              </div>
              <div>
                <p className="text-3xl font-serif text-brand-leather mb-1">15k+</p>
                <p className="text-[10px] uppercase tracking-widest font-bold opacity-60">Clientes Felizes</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <div className="relative aspect-square">
              <img 
                src="https://images.unsplash.com/photo-1490237014491-822aee911b99?auto=format&fit=crop&q=80&w=800" 
                alt="Processo artesanal de fabricação de chapéus" 
                className="w-full h-full object-cover rounded-[60px] shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-brand-olive rounded-full flex items-center justify-center text-white text-center p-6 shadow-xl hidden md:flex">
                <p className="font-serif text-lg leading-tight italic">Qualidade Premium Garantida</p>
              </div>
            </div>
          </motion.div>
        </section>

        <Categories />
        
        <ShopeeCTA />
      </main>

      <Footer />
    </div>
  );
}

