interface HeroProps {
  image: string;
  title: string;
  subtitle?: string;
  logo?: string;
  height?: string;
}

export default function Hero({ image, title, subtitle, logo, height = "h-[400px] md:h-[500px]" }: HeroProps) {
  return (
    <section 
      className={`relative w-full ${height} flex flex-col items-center justify-center overflow-hidden`}
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      
      <div className="absolute inset-0 bg-black/30"></div>

     
      {logo && (
        <div className="relative z-10 mb-4 md:mb-6 mt-10 md:mt-0">
          <img 
            src={logo} 
            alt="Logo Cami Donuts" 
            className="w-20 h-20 md:w-36 md:h-36 object-contain"
          />
        </div>
      )}

      
<h1 className="font-fredoka relative z-10 text-2xl md:text-5xl font-medium text-center px-4 md:px-6 text-white drop-shadow-md max-w-[95%] md:max-w-none whitespace-normal md:whitespace-nowrap">
  {title}
</h1>

      
      {subtitle && (
        <p className="font-sans relative z-10 text-base md:text-xl text-center px-6 mt-3 md:mt-4 text-white drop-shadow-sm max-w-[90%] md:max-w-none md:whitespace-nowrap">
          {subtitle}
        </p>
      )}
    </section>
  );
}