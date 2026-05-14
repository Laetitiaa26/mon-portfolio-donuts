export const TitleSection = ({ title }: { title: string }) => {
  return (
    <div className="flex flex-col items-center mb-8 md:mb-10 px-4">
      <h2 className="text-2xl md:text-4xl font-medium text-[#624230] text-center">
        {title}
      </h2>
      <div className="w-32 md:w-56 h-[4px] md:h-[5px] bg-[#FFAAE6] mt-2 rounded-full" />
    </div>
  );
};