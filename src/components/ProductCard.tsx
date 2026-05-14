import React from 'react';
import { IconButton } from './IconButton';

interface ProductProps {
  image: string;
  name: string;
  price: string;
  description: string;
  bgColor: string;     
  btnBorder: string;   
  cartIcon: string;   
  onAddToCart?: () => void;
}

export const ProductCard = ({ image, name, price, description, bgColor, btnBorder, cartIcon, onAddToCart, }: ProductProps) => {
  return (
    <div className={`flex flex-col items-center ${bgColor} rounded-[30px] shadow-lg w-full max-w-[320px] mx-auto overflow-hidden pb-8 transition-transform hover:scale-[1.02]`}>
      
      <div className="w-full flex flex-col items-center pt-8 pb-4 px-6">
        
        <div className="bg-white rounded-full w-32 h-32 md:w-40 md:h-40 flex items-center justify-center shadow-inner mb-4">
          <img src={image} alt={name} className="w-24 h-24 md:w-32 md:h-32 object-contain" />
        </div>
        <h3 className="text-[#624230] font-medium text-lg md:text-xl text-center px-2 leading-tight">
          {name}
        </h3>
      </div>

      <div className="w-full flex flex-col items-center p-6 pt-0">
        <p className="text-[#624230] font-bold text-lg mb-4">{price}</p>
        
       
        <p className="text-[#624230] font-normal leading-relaxed text-sm text-center mb-6 min-h-[60px] flex items-center px-2">
          {description}
        </p>

        <IconButton 
          iconSrc={cartIcon} 
          borderColor={btnBorder} 
          bgColor="bg-white"
          onClick={onAddToCart}
        />
      </div>
    </div>
  );
};