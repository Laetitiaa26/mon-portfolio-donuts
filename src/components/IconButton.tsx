import React from 'react';

interface IconButtonProps {
  iconSrc: string;
  onClick?: () => void;
  bgColor?: string;
  borderColor?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const IconButton = ({ 
  iconSrc, 
  onClick, 
  bgColor = "bg-white", 
  borderColor = "border-white", 
  size = "md" 
}: IconButtonProps) => {
  
  
  const sizeClasses = {
    sm: "w-8 h-8 md:w-10 md:h-10",
    md: "w-12 h-12 md:w-14 md:h-14",
    lg: "w-16 h-16 md:w-20 md:h-20"
  };

  const iconSizes = {
    sm: "w-3.5 h-3.5 md:w-4 md:h-4",
    md: "w-5 h-5 md:w-6 md:h-6",
    lg: "w-7 h-7 md:w-8 md:h-8"
  };

  return (
    <button 
      onClick={onClick}
      className={`
        ${bgColor} 
        ${borderColor} 
        ${sizeClasses[size]} 
        border-[3px] md:border-4 
        rounded-full 
        flex items-center justify-center 
        shadow-md 
        hover:scale-110 active:scale-90 transition-all duration-200
        focus:outline-none focus:ring-2 focus:ring-[#FFAAE6]
      `}
    >
      <img 
        src={iconSrc} 
        alt="Icône" 
        className={`${iconSizes[size]} object-contain`} 
      />
    </button>
  );
};