/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ShoppingBag, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SHOPEE_STORE_URL } from '../constants';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-cream/80 backdrop-blur-md border-b border-brand-dark/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="#" className="font-serif text-2xl font-bold tracking-tight">
            CHAPEAU <span className="font-light italic text-brand-leather">Heritage</span>
          </a>
          <div className="hidden md:flex items-center gap-6">
            <a href="#colecoes" className="text-sm font-medium hover:text-brand-leather transition-colors">Coleções</a>
            <a href="#nossa-historia" className="text-sm font-medium hover:text-brand-leather transition-colors">História</a>
            <a href="#shopee" className="text-sm font-medium hover:text-brand-leather transition-colors underline underline-offset-4 decoration-brand-leather">Comprar na Shopee</a>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <a 
            href={SHOPEE_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 bg-brand-olive text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-brand-dark transition-colors"
          >
            <ShoppingBag size={16} />
            Loja Shopee
          </a>
          <button 
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-brand-cream border-t border-brand-dark/5 p-6 space-y-4"
          >
            <a href="#colecoes" className="block text-lg font-serif" onClick={() => setIsOpen(false)}>Coleções</a>
            <a href="#nossa-historia" className="block text-lg font-serif" onClick={() => setIsOpen(false)}>História</a>
            <a href="#shopee" className="block text-lg font-serif text-brand-leather" onClick={() => setIsOpen(false)}>Comprar na Shopee</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
