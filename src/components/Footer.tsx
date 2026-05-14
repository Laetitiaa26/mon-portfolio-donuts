
export const Footer = () => {
  return (
    <footer className="bg-[#624230] text-white py-12 md:py-16 px-6 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10 items-start">
        
        
        <div className="flex flex-col items-center space-y-4 text-center">
          <img 
            src="/Logo.svg" 
            alt="Cami Donuts Logo" 
            className="w-24 h-24 md:w-28 md:h-28 object-contain"
          />
           
          <p className="text-[#92CAFF] font-medium text-base md:text-lg max-w-[250px] md:max-w-none">
            L'art du donut artisanal, livré avec le sourire.
          </p>
        </div>

        
        <div className="flex flex-col items-center space-y-4 font-light text-base">
          
          <a href="/" className="hover:text-[#FFAAE6] transition-colors">Accueil</a>
          <a href="/donuts" className="hover:text-[#FFAAE6] transition-colors">Nos Donuts</a>
          <a href="/APropos" className="hover:text-[#FFAAE6] transition-colors">À propos</a>
          <a href="/OuNousTrouver" className="hover:text-[#FFAAE6] transition-colors">Contact</a>
        </div>

        
        <div className="flex flex-col items-center">
          <h4 className="font-medium text-xl mb-6 md:mb-12">Suivez-Nous sur :</h4>
          <div className="flex gap-6 md:gap-10">
           
            <a href="#" className="hover:scale-110 transition-transform">
              <img src="/facebook.svg" alt="Facebook" className="w-10 h-10 md:w-12 md:h-12" />
            </a>
           
            <a href="#" className="hover:scale-110 transition-transform">
              <img src="/Tiktok.svg" alt="TikTok" className="w-10 h-10 md:w-12 md:h-12" />
            </a>
            
            <a href="#" className="hover:scale-110 transition-transform">
              <img src="/insta.svg" alt="Instagram" className="w-10 h-10 md:w-12 md:h-12" />
            </a>
          </div>
        </div>
      </div>

      
      <div className="mt-12 md:mt-16 text-center border-t border-white/20 pt-8">
        <p className="text-[#FFAAE6] font-light text-xs md:text-sm px-4">
          © 2026 Cami Donuts. Tous droits réservés. <br className="md:hidden" /> Design réalisé avec gourmandise.
        </p>
      </div>
    </footer>
  );
};