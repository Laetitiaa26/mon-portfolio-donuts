import { TitleSection } from './TitleSection';
import { MainButton } from "./MainButton";

// On définit ce que le composant peut recevoir (Props)
interface DonutDuMoisProps {
  onAddToCart?: () => void;
}

export function DonutDuMois({ onAddToCart }: DonutDuMoisProps) {
  return (
    <section className="py-12 md:py-20">
      <TitleSection title="Le Donut du mois" />
      <div className="mt-10 md:mt-15 mb-10 md:mb-20 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 px-6 md:px-10">
        
        
        <div className="relative order-first md:order-last">
          <img 
            src="/DonutMois.png" 
            alt="Donut du mois" 
            className="w-64 h-64 md:w-[450px] md:h-[450px] object-cover rounded-full shadow-xl border-8 md:border-[15px] border-white"
          />
          <span className="static md:absolute -bottom-10 right-0 block text-center mt-4 md:mt-0 text-[#5FB0FB] font-medium text-lg md:text-xl whitespace-nowrap">
            Disponible seulement 15 jours !
          </span>
        </div>

        
        <div className="max-w-md space-y-4 md:space-y-6 flex flex-col items-center text-center">
          <h2 className="text-2xl md:text-3xl font-black text-[#624230]">
            Choco-Crunch Éphémère
          </h2>
          <p className="text-lg md:text-xl text-[#8B5E3C] font-light leading-relaxed">
            Le parfait équilibre entre douceur et croquant. Profitez de 
            notre donut spécial "15 jours" avant qu'il ne laisse sa 
            place à la prochaine surprise !
          </p>
          <p className="text-2xl md:text-3xl font-medium text-[#624230]">3,90 €</p>
          
          <MainButton 
            bgColor="bg-[#FFAAE6]" 
            borderColor="border-[#5FB0FB]" 
            textColor="text-white" 
            className="flex items-center justify-center min-w-[200px] mt-2 md:mt-5" 
            onClick={onAddToCart}
          >
            <img 
              src="/shoppingR.png" 
              alt="Panier" 
              className="w-6 h-6 mr-3 brightness-0 invert" 
            />
            Ajouter au panier
          </MainButton>
        </div>
      </div>
    </section>
  );
}