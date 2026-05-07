/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-dark/5 pt-20 pb-10 border-t border-brand-dark/5">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-1">
          <a href="#" className="font-serif text-2xl font-bold tracking-tight mb-6 block">
            CHAPEAU <span className="font-light italic text-brand-leather">Heritage</span>
          </a>
          <p className="text-sm text-brand-dark/60 leading-relaxed">
            Preservando a tradição dos grandes mestres chapeleiros com um toque de modernidade.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Links Rápidos</h4>
          <ul className="space-y-4 text-sm text-brand-dark/60">
            <li><a href="#colecoes" className="hover:text-brand-leather transition-colors">Produtos</a></li>
            <li><a href="#nossa-historia" className="hover:text-brand-leather transition-colors">História</a></li>
            <li><a href="#shopee" className="hover:text-brand-leather transition-colors">Loja Shopee</a></li>
            <li><a href="#" className="hover:text-brand-leather transition-colors">Políticas</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Contato</h4>
          <ul className="space-y-4 text-sm text-brand-dark/60">
            <li className="flex items-center gap-3"><Mail size={16} /> contato@chapeauheritage.com</li>
            <li className="flex items-center gap-3"><Phone size={16} /> (11) 99999-9999</li>
            <li className="flex items-center gap-3"><MapPin size={16} /> São Paulo, SP</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Siga-nos</h4>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-brand-dark/10 flex items-center justify-center hover:bg-brand-dark hover:text-white transition-all">
              <Instagram size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-brand-dark/10 flex items-center justify-center hover:bg-brand-dark hover:text-white transition-all">
              <Facebook size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-brand-dark/5 text-center text-xs text-brand-dark/40 uppercase tracking-widest">
        &copy; {new Date().getFullYear()} Chapeau Heritage. Todos os direitos reservados.
      </div>
    </footer>
  );
}
