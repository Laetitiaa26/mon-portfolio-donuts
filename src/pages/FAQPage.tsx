import React, { useState } from 'react';
import Hero from '../components/Hero';
import { MainButton } from '../components/MainButton';
import { useNavigate } from 'react-router-dom';


function FAQItem({ question, answer }: { question: string, answer: string }) {
  
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4 w-full">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full bg-[#4A2B20] text-white py-4 px-6 md:px-8 rounded-full flex justify-between items-center transition-all hover:bg-[#5d3629] ${isOpen ? 'rounded-b-none' : ''}`}
      >
        <span className="font-medium text-left text-sm md:text-base pr-4">{question}</span>
        <span className="text-xl md:text-2xl shrink-0">{isOpen ? '−' : '+'}</span>
      </button>
      
      {isOpen && (
        <div className="px-6 md:px-8 py-4 text-[#4A2B20] bg-white/60 rounded-b-[25px] md:rounded-b-[30px] shadow-sm text-sm md:text-base leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
}

export default function FAQPage() {
  const faqs = [
    { question: "Peut-on commander des donuts personnalisés ?", answer: "Oui ! Nous adorons créer des designs uniques pour vos événements. Contactez-nous 48h à l'avance." },
    { question: "Proposez-vous des options sans gluten ou vegan ?", answer: "Nous proposons une sélection de donuts vegan chaque week-end. Pour le sans gluten, nous y travaillons !" },
    { question: "Comment conserver mes donuts ?", answer: "L'idéal est de les déguster le jour même. Sinon, gardez-les dans leur boîte à température ambiante." },
    { question: "Quels sont vos délais de préparation ?", answer: "Pour les commandes classiques, elles sont prêtes en 5 minutes en boutique !" },
    { question: "Livrez-vous à domicile ?", answer: "Nous livrons via nos partenaires dans un rayon de 10km autour de la boutique." },
    { question: "Proposez-vous des donuts pour des événements ?", answer: "Absolument ! Que ce soit pour un anniversaire, un mariage ou un événement d'entreprise, nous réalisons des box sur mesure et des tours de donuts." },
    { question: "Les donuts sont-ils faits le jour même ?", answer: "Oui, c'est notre engagement principal ! Chaque matin, nos donuts sont pétris, cuits et glacés à la main dans notre atelier." },
    { question: "Quels sont les modes de paiement acceptés ?", answer: "Nous acceptons les espèces, la CB (Visa, MasterCard, Amex) ainsi qu'Apple Pay et Google Pay." },
  ];
const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#E0F7FA]">
      <Hero 
        image="/oeil.jpg" 
        logo="/Logo.svg"
        title="Une question ? Nous avons les réponses !"
        height="h-[350px] md:h-[500px]" 
      />

      <div className="max-w-3xl mx-auto px-6 py-12 md:py-16">
        <h2 className="text-[#4A2B20] text-xl md:text-2xl font-bold text-center mb-8 md:mb-12">
          Questions Fréquentes
        </h2>

        
        <div className="flex flex-col items-center">
          {faqs.map((item, index) => (
            <FAQItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>

        
        <div className="text-center mt-12 md:mt-20">
          <p className="text-[#4A2B20] mb-6 md:mb-8 font-medium italic text-sm md:text-base">
            "Encore une question ? Contactez-nous directement !"
          </p>
          
          <div className="flex justify-center pb-12 md:pb-20">
            <MainButton 
            onClick={() => navigate('/OuNousTrouver')}
              borderColor="border-[#5FB0FB]" 
              textColor="text-white" 
              bgColor="bg-[#FFAAE6]"   
              className="w-full md:w-auto mx-4 md:mx-0"      
            >
              Écrivez-nous !
            </MainButton>
          </div>
        </div>
      </div>
    </div>
  );
}