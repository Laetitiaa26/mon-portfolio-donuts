import React from 'react';
import Hero from '../components/Hero'; 
import { MainButton } from '../components/MainButton';
import { Trash2 } from 'lucide-react';
import { TitleSection } from '../components/TitleSection';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../Context/CartContext'; // Import de ton hook

export default function CartPage() {
  const navigate = useNavigate();
  const { cartItems, updateQty, removeItem, totalQty } = useCart();
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.qty), 0);

  return (
    <div className="min-h-screen bg-[#E0F7FA]">
      <Hero 
        image="/Header4.jpg" 
        logo="/Logo.svg"
        title=""
        height="h-[350px] md:h-[500px]"
      />

      <div className="py-8 md:py-12">
        <TitleSection title="Ton Panier" />
      </div>

      <p className="text-center mt-4 md:mt-8 text-[#4A2B20] italic font-medium px-6">
        "Prêt en 5 minutes ! Commandez en ligne et récupérez votre box sans attendre."
      </p>

      <div className="max-w-6xl mx-auto px-4 md:px-6 py-10 md:py-16">
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-8 items-start">
          
         
          <div className="w-full lg:col-span-2 flex flex-col bg-[#FFD1E8] p-6 md:p-10 rounded-[30px] md:rounded-[40px]">
            {cartItems.length > 0 ? (
              cartItems.map((item, index) => (
                <React.Fragment key={item.id}>
                  <div className="relative flex flex-col sm:flex-row items-center justify-between gap-6">
                    
                    
                    <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-white flex items-center justify-center shadow-sm shrink-0">
                      <img src={item.img} alt={item.name} className="w-20 h-20 md:w-24 md:h-24 object-contain" />
                    </div>

                    
                    <div className="flex flex-col items-center flex-1 w-full sm:w-auto">
                      <div className="text-center">
                        <h3 className="font-bold text-[#4A2B20] text-xl md:text-2xl">{item.name}</h3>
                        <p className="font-bold text-[#4A2B20] text-lg md:text-xl mb-4 sm:mb-8">{item.price.toFixed(2)} €</p>
                      </div>

                      
                      <div className="flex items-center gap-4 md:gap-6">
                        <button 
                          onClick={() => updateQty(item.id, -1)}
                          className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#4A2B20] text-white flex items-center justify-center font-bold text-lg hover:scale-110 transition-transform active:scale-90"
                        > - </button>
                        
                        <span className="font-bold text-[#4A2B20] text-lg md:text-xl w-6 text-center">{item.qty}</span>
                        
                        <button 
                          onClick={() => updateQty(item.id, 1)}
                          className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#4A2B20] text-white flex items-center justify-center font-bold text-lg hover:scale-110 transition-transform active:scale-90"
                        > + </button>
                      </div>
                    </div>

                    
                    <button 
                      onClick={() => removeItem(item.id)}
                      className="absolute top-0 right-0 sm:static text-[#5FB0FB] hover:text-red-400 hover:scale-110 transition-all"
                    >
                      <Trash2 size={24} />
                    </button>
                  </div>

                  
                  {index !== cartItems.length - 1 && (
                    <div className="w-1/2 h-[2px] md:h-[3px] bg-[#FFAAE6] mx-auto my-8 md:my-12 rounded-full"></div>
                  )}
                </React.Fragment>
              ))
            ) : (
              <div className="text-center py-10">
                <p className="text-[#4A2B20] font-medium mb-4">Ton panier est vide... 🍩</p>
                <MainButton 
                  onClick={() => navigate('/donuts')} 
                  bgColor="bg-[#5FB0FB]" 
                  textColor="text-white"
                >
                  Découvrir nos donuts
                </MainButton>
              </div>
            )}
          </div>

          
          <div className="w-full lg:col-span-1">
            <div className="bg-[#4A2B20] p-6 md:p-8 rounded-[30px] md:rounded-[40px] flex flex-col text-white">
              <h3 className="text-xl font-bold mb-6 text-center underline decoration-white underline-offset-8 text-[#FFAAE6]">
                Résumé
              </h3>
              
              <div className="w-full flex flex-col gap-4 md:gap-6 text-md font-medium">
                <div className="flex justify-between">
                  <span className="text-[#FFAAE6]">Articles :</span>
                  <span>{totalQty} {totalQty > 1 ? 'Donuts' : 'Donut'}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-[#FFAAE6]">Sous-total :</span>
                  <span>{subtotal.toFixed(2)} €</span>
                </div>

                <div className="flex justify-between text-sm italic">
                  <span className="text-[#FFAAE6]">Frais :</span>
                  <span>Offert (C&C)</span>
                </div>
                
                <div className="flex justify-between text-lg font-bold mt-2 pt-4 border-t border-white/20">
                  <span className="text-[#FFAAE6]">Total :</span>
                  <span className="text-2xl">{subtotal.toFixed(2)} €</span>
                </div>
              </div>

              <div className="mt-8 w-full flex justify-center">
                <MainButton 
                  onClick={() => navigate('/paiement')}
                  disabled={cartItems.length === 0}
                  borderColor="border-[#5FB0FB]" 
                  textColor="text-white" 
                  bgColor="bg-[#FFAAE6]"
                  className={`w-full md:w-auto px-12 ${cartItems.length === 0 ? 'opacity-50' : ''}`}
                >
                  Valider la commande
                </MainButton>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}