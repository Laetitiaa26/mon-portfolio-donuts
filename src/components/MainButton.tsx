import React from 'react';

interface MainButtonProps {
  children: React.ReactNode;
  onClick?: () => void | Promise<void>;
  disabled?: boolean;    
  borderColor?: string;  
  textColor?: string;    
  bgColor?: string;     
  className?: string;
}

export const MainButton = ({ 
  children, 
  onClick,
  disabled = false,      
  borderColor = "border-[#FFAAE6]", 
  textColor = "text-[#624230]",
  bgColor = "bg-white",
  className = "" 
}: MainButtonProps) => {
  return (
    <button 
      type="button"
      onClick={onClick}
      disabled={disabled} 
      className={`
        ${bgColor} 
        ${borderColor} 
        ${textColor}
        border-[3px] md:border-4 
        px-6 py-2.5 md:px-10 md:py-3 
        rounded-full 
        font-semibold
        text-base md:text-lg
        shadow-sm
        transition-all 
        duration-200
        flex items-center justify-center
        text-center
        /* Gestion du style quand le bouton est désactivé */
        ${disabled 
          ? "opacity-50 cursor-not-allowed shadow-none" 
          : "hover:shadow-md hover:scale-105 active:scale-95 cursor-pointer"
        }
        ${className}
      `}
    >
      {children}
    </button>
  );
};