import { MainButton } from "./MainButton";
import { TitleSection } from "./TitleSection";
import { Link } from "react-router-dom"; // On utilise Link à la place de useNavigate

export function AssortimentBox() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 my-12 md:my-20">
      <div className="bg-[#EFD0E0] rounded-[30px] md:rounded-[40px] p-6 md:p-12 border-2 border-[#BDE3FF] text-center shadow-sm">
        <TitleSection title="Créez votre propre assortiment !" />
        
        <div className="space-y-4 mb-6 md:mb-10 mt-6">
          <p className="text-xl md:text-2xl font-bold text-[#FF77D6] px-2">
            Pourquoi choisir quand on peut tout goûter ?
          </p>
          <p className="text-lg md:text-xl text-[#8B5E3C] max-w-2xl mx-auto leading-relaxed px-2">
            Composez votre box de <span className="font-bold text-[#624230]">4, 6 ou 12 donuts</span> selon vos envies.<br className="hidden md:block" />
            <span className="italic">Le cadeau parfait (à s'offrir à soi-même).</span>
          </p>
        </div>

        <div className="flex justify-center pb-6 md:pb-10 font-light">
         
          <Link to="/donuts" className="w-full md:w-auto relative z-50">
            <MainButton 
            borderColor="border-[#5FB0FB]" 
            onClick={() => {
            window.scrollTo({ top: 650, behavior: 'smooth' });
            }}
            textColor="text-white" 
            bgColor="bg-[#FFAAE6]" 
            className="w-full md:w-auto"
          >
            Découvrir nos saveurs
            </MainButton>
          </Link>
        </div>
      </div>
    </section>
  );
}