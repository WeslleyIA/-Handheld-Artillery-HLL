/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { translations, Language } from './translations';
import { useSEO } from './hooks/useSEO';
import { Monitor, Zap, Target, Globe } from 'lucide-react';

const DOWNLOAD_LINK = "https://download.overwolf.com/install/Download?ExtensionId=kajdfanaihojmpcbbfilegggaadlneldhdogmmmj&utm_source=app&utm_medium=owaa&utm_campaign=AmovLv";

export default function App() {
  const [lang, setLang] = useState<Language>('en');

  useEffect(() => {
    // Detect browser language
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('pt')) setLang('pt');
    else if (browserLang.startsWith('de')) setLang('de');
    else if (browserLang.startsWith('es')) setLang('es');
    else setLang('en');
  }, []);

  const t = translations[lang];

  useSEO(t.title, t.description, t.keywords);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-red-500/30">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-wider uppercase">Handheld Artillery HLL</span>
        </div>
        
        <div className="flex items-center gap-2">
          <Globe className="w-4 h-4 text-gray-400" />
          <select 
            value={lang} 
            onChange={(e) => setLang(e.target.value as Language)}
            className="bg-transparent border border-gray-800 rounded px-2 py-1 text-sm focus:outline-none focus:border-red-500 cursor-pointer"
          >
            <option value="en" className="bg-[#0a0a0a]">English</option>
            <option value="pt" className="bg-[#0a0a0a]">Português</option>
            <option value="de" className="bg-[#0a0a0a]">Deutsch</option>
            <option value="es" className="bg-[#0a0a0a]">Español</option>
          </select>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="container mx-auto px-6 py-24 md:py-32 flex flex-col items-center text-center">
        <div className="mb-8">
          <img 
            src="/logo.png" 
            alt="Handheld Artillery HLL Logo" 
            className="w-32 h-32 md:w-40 md:h-40 object-contain rounded-3xl shadow-2xl shadow-red-500/20"
            onError={(e) => {
              e.currentTarget.src = "https://placehold.co/150x150/000000/FF0000?text=AH&font=Impact";
            }}
          />
        </div>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 max-w-4xl bg-gradient-to-br from-white to-gray-500 bg-clip-text text-transparent">
          {t.heroTitle}
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl">
          {t.heroSubtitle}
        </p>
        <a 
          href={DOWNLOAD_LINK}
          className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-red-600 font-pj rounded-xl hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600"
        >
          <span className="mr-2">{t.downloadBtn}</span>
          <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
        </a>
      </header>

      {/* Features Section */}
      <section className="bg-[#111] py-24 border-y border-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">{t.featuresTitle}</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-red-500/10 rounded-2xl flex items-center justify-center mb-6 border border-red-500/20">
                <Target className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-4">{t.feat1Title}</h3>
              <p className="text-gray-400 leading-relaxed">{t.feat1Desc}</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-red-500/10 rounded-2xl flex items-center justify-center mb-6 border border-red-500/20">
                <Monitor className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-4">{t.feat2Title}</h3>
              <p className="text-gray-400 leading-relaxed">{t.feat2Desc}</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-red-500/10 rounded-2xl flex items-center justify-center mb-6 border border-red-500/20">
                <Zap className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-4">{t.feat3Title}</h3>
              <p className="text-gray-400 leading-relaxed">{t.feat3Desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 text-center text-gray-600 text-sm">
        <p>{t.footerText}</p>
      </footer>
    </div>
  );
}
