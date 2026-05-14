import Hero from '../components/Hero';
import InfoCard from '../components/InfoCard';
import { MainButton } from '../components/MainButton';
import { TitleSection } from '../components/TitleSection';
import { useNavigate } from 'react-router-dom';

export default function OuNousTrouver() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#E0F7FA]">
      <Hero 
        image="/Header3.jpg" 
        logo="/Logo.svg"
        title="Venez nous voir !"
        height="h-[350px] md:h-[500px]"
      />

      <div className="mt-10 px-4">
        <TitleSection title="Une envie de douceur ? On vous attend en boutique."/>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-10 md:py-16">
       
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          
          <div className="flex flex-col gap-6 order-2 lg:order-1">
            <InfoCard>
               <img src="/Lieu.png" alt="Pin" className="w-10 h-10 md:w-12 md:h-12 mb-4 md:mb-8" />
               <p className="text-sm font-bold mb-2">Notre Adresse :</p>
               <p className="text-sm">18 Allée des Lilas<br/>Givenchy les la bassée</p>
            </InfoCard>

            <InfoCard>
               <img src="/clock.png" alt="Horaires" className="w-12 h-12 md:w-16 md:h-16 mb-4 md:mb-8" />
               <p className="text-sm font-bold mb-2">Horaires :</p>
               <p className="text-sm">Mardi - Samedi : 10h00 - 19h00<br/>Dimanche : 10h00 - 12h00</p>
            </InfoCard>

            <InfoCard>
  <div className="flex flex-col items-center justify-center w-full gap-6">
    
    <div className="flex flex-col items-center">
      <img src="/Phone.png" alt="Téléphone" className="w-8 h-8 md:w-10 md:h-10 mb-2" />
      <p className="text-sm font-bold mb-1">Contact :</p>
      <p className="text-sm">01 23 45 67 89</p>
    </div>
    
   
    <div className="flex flex-col items-center">
      <img src="/mail.png" alt="Email" className="w-8 h-8 md:w-10 md:h-10 mb-2" />
      <p className="text-sm font-bold mb-1">Email :</p>
      <p className="text-sm">hello@camidonuts.fr</p>
    </div>
  </div>
</InfoCard>
          </div>

       
          <div className="flex flex-col gap-6 order-1 lg:order-2">
            <div className="h-[250px] md:h-[280px] rounded-[30px] md:rounded-[40px] overflow-hidden shadow-lg border-4 border-white">
              <img src="/Carte.png" alt="Map" className="w-full h-full object-cover" />
            </div>
            <div className="h-[300px] md:h-[585px] rounded-[30px] md:rounded-[40px] overflow-hidden shadow-lg border-4 border-white">
              <img src="/Magasin.png" alt="Notre Boutique" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        
        <div className="text-center mt-12 md:mt-16">
          <p className="text-[#FFAAE6] font-bold text-base md:text-lg mb-8 px-4">
            "Gagnez du temps : commandez en ligne et récupérez votre box en 5 minutes !"
          </p>
          <div className="flex justify-center pb-12 md:pb-20">
            <MainButton 
            onClick={() => navigate('/donuts')}
              borderColor="border-[#5FB0FB]" 
              textColor="text-white" 
              bgColor="bg-[#FFAAE6]" 
              className="w-full md:w-auto mx-6 md:mx-0"        
            >
              Commencer ma Box
            </MainButton>
          </div>
        </div>
      </div>
    </div>
  );
}