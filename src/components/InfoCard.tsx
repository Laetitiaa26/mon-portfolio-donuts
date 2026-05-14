import React from 'react';

interface InfoCardProps {
  children: React.ReactNode;
}

export default function InfoCard({ children }: InfoCardProps) {
  return (
    <div className="bg-[#4A2B20] text-white p-6 md:p-8 rounded-[35px] md:rounded-[60px] text-center flex flex-col items-center justify-center min-h-[220px] md:min-h-[280px] w-full shadow-lg">
      <div className="flex flex-col items-center justify-center w-full">
        {children}
      </div>
    </div>
  );
}