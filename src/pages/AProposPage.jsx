import React from 'react';
import Hero from '../components/Hero';

export default function AProposPage() {
  return (
    <div className="min-h-screen bg-[#FDF8F1]">
      
      
      <Hero 
        image="/Header2.jpg" 
        logo="/Logo.svg"
        title="L'Art du Donut, La Passion du Bonheur."
        subtitle="Découvrez l'histoire sucrée derrière chaque création Cami Donuts."
        height="h-[350px] md:h-[500px]" // Plus de hauteur sur desktop pour l'immersion
      />

      <div className="max-w-4xl mx-auto px-6 py-12 md:py-16">
        
        
        <section className="text-center mb-16 md:mb-20">
          <h2 className="text-[#4A2B20] text-2xl md:text-3xl font-bold mb-6 underline decoration-[#FFB7D5] underline-offset-8">
            Notre Histoire
          </h2>
          <div className="text-[#4A2B20] space-y-4 leading-relaxed text-base md:text-lg">
            <p className="italic">"Tout a commencé par une étincelle de sucre..."</p>
            <p>
              Cami Donuts n'est pas seulement une boutique, c'est le rêve d'une passionnée
              souhaitant transformer un simple donut en une œuvre d'art comestible.
            </p>
          </div>
        </section>

        
        <section className="mb-16 md:mb-20">
          <h2 className="text-[#4A2B20] text-2xl md:text-3xl font-bold text-center mb-10 md:mb-12 underline decoration-[#FFB7D5] underline-offset-8">
            Nos Engagements
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
            
            <div className="bg-[#4A2B20] text-white p-8 rounded-[40px] md:rounded-[60px] text-center flex flex-col items-center shadow-lg transition-transform hover:scale-105">
              <img 
                src="/Main.png" 
                alt="Icone Atelier" 
                className="w-16 h-16 md:w-20 md:h-20 object-contain mb-4" 
              />
              <p className="text-sm md:text-base leading-relaxed">
                Chaque matin, nos donuts sont pétris, cuits et glacés à la main dans notre atelier.
              </p>
            </div>

           
            <div className="bg-[#4A2B20] text-white p-8 rounded-[40px] md:rounded-[60px] text-center flex flex-col items-center shadow-lg transition-transform hover:scale-105">
              <img 
                src="/Feuille.png" 
                alt="Icone Ingrédients" 
                className="w-16 h-16 md:w-20 md:h-20 object-contain mb-4" 
              />
              <p className="text-sm md:text-base leading-relaxed">
                Nous sélectionnons les meilleurs ingrédients : farines locales, chocolat de qualité et fruits de saison.
              </p>
            </div>

           
            <div className="bg-[#4A2B20] text-white p-8 rounded-[40px] md:rounded-[60px] text-center flex flex-col items-center shadow-lg transition-transform hover:scale-105">
              <img 
                src="/Baguette.png" 
                alt="Icone Recette" 
                className="w-16 h-16 md:w-20 md:h-20 object-contain mb-4" 
              />
              <p className="text-sm md:text-base leading-relaxed">
                Parce que la gourmandise ne connaît pas de limites, nous créons chaque mois une recette inédite.
              </p>
            </div>
          </div>
        </section> 

        
        <section className="text-center italic bg-white/50 p-8 rounded-[30px] border border-[#FFB7D5]/30">
          <h2 className="text-[#4A2B20] text-xl md:text-2xl font-bold not-italic mb-6">
            Une note de la fondatrice
          </h2>
          <blockquote className="text-[#4A2B20] text-base md:text-lg leading-relaxed relative">
            <span className="text-4xl text-[#FFB7D5] absolute -top-4 -left-2 opacity-50">"</span>
            Pour moi, un donut est bien plus qu'une pâtisserie : c'est un moment de partage, un sourire partagé et une petite fête pour les sens.
            <span className="text-4xl text-[#FFB7D5] absolute -bottom-8 -right-2 opacity-50">"</span>
          </blockquote>
          <p className="mt-8 font-bold not-italic text-[#4A2B20]">
            Bienvenue dans mon univers sucré !
          </p>
        </section>

      </div>
    </div>
  );
}