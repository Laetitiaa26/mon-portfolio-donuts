import Hero from "../components/Hero";
import { TitleSection } from '../components/TitleSection';
import { ProductCard } from '../components/ProductCard';
import { MainButton } from "../components/MainButton";
import { useNavigate } from 'react-router-dom';
import { useCart } from '../Context/CartContext';
import { AssortimentBox } from "../components/AssortimentBox";

const Home = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  
  const handleAddToCart = (product: any) => {
    addToCart(product);
    alert(`${product.name} a été ajouté au panier ! 🍩`);
  };

  
  const donutMois = {
    id: 'choco-crunch-15',
    name: 'Choco-Crunch Éphémère',
    price: 3.90,
    img: '/DonutMois.png'
  };

  return (
    <>
      <div className="bg-[#DAF2F5] min-h-screen">
        <Hero 
          image="/Header.jpg" 
          logo="/Logo.svg"
          title='"Succombez à la rondeur du bonheur."' 
          height="h-[400px] md:h-[600px]" 
        />

        <section className="py-12 md:py-20 text-center px-6">
          <TitleSection title="Notre Secret" />
          <div className="space-y-4 md:space-y-6 mt-10 md:mt-20">
            <p className="text-lg md:text-2xl font-light italic text-[#8B5E3C]">
              "Préparés chaque matin avec amour."
            </p>
            <p className="text-lg md:text-2xl font-light italic text-[#8B5E3C]">
              "De la farine et du lait de nos régions."
            </p>
            <p className="text-lg md:text-2xl font-light italic text-[#8B5E3C]">
              "Encore chauds à votre porte."
            </p>
          </div>
        </section>

        <section className="py-12 md:py-20"> 
          <TitleSection title="Nos Donuts" />
          <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-6 md:gap-10 mt-10 md:mt-16 px-6">
            <ProductCard 
              image="/DonutB.png"
              name="Le Nuage Blanc"
              price="3,50 €"
              description="Un glaçage onctueux au chocolat blanc..."
              bgColor="bg-[#FFD9ED]"
              btnBorder="border-[#FFAAE6]"
              cartIcon="/shoppingB.png"
              onAddToCart={() => handleAddToCart({
                id: 'nuage-blanc', 
                name: 'Le Nuage Blanc', 
                price: 3.50, 
                img: '/DonutB.png' 
              })}
            />
            <ProductCard 
              image="/DonutNoix.png" 
              name="L'Irrésistible Caramel" 
              price="4,00 €" 
              description="Coulée de caramel beurre salé et éclats de noisettes torréfiées."
              bgColor="bg-[#FEC9E4]"
              btnBorder="border-[#FFAAE6]" 
              cartIcon="/shoppingB.png"
              onAddToCart={() => handleAddToCart({
                id: 'caramel-irresistible', 
                name: "L'Irrésistible Caramel", 
                price: 4.00, 
                img: '/DonutNoix.png' 
              })}
            />
            <ProductCard 
              image="/DonutR.png" 
              name="Le Pink Party" 
              price="4,30 €" 
              description="Un glaçage à la fraise des bois parsemé de vermicelles multicolores." 
              bgColor="bg-[#FFAAE6]"
              btnBorder="border-[#F97FD5]" 
              cartIcon="/shoppingB.png"
              onAddToCart={() => handleAddToCart({
                id: 'Pink-Party', 
                name: "Le Pink Party", 
                price: 4.30, 
                img: '/DonutR.png' 
              })}
            />
            <ProductCard 
              image="/DonutO.png" 
              name="L’Oréo Dream" 
              price="4,40 €" 
              description="Intense chocolat noir et brisures de biscuits cacao."
              bgColor="bg-[#5FB0FB]"
              btnBorder="border-[#309BFF]"
              cartIcon="/shoppingB.png"
              onAddToCart={() => handleAddToCart({
                id: 'Oreo-Dream', 
                name: "L’Oréo Dream", 
                price: 4.40, 
                img: '/DonutO.png' 
              })}
            />
            <ProductCard 
              image="/DonutRR.png" 
              name="Éclat de Framboise" 
              price="4,00 €" 
              description="Un glaçage acidulé à la framboise fraîche pour une explosion fruitée."
              bgColor="bg-[#92CAFF]"
              btnBorder="border-[#5FB0FB]"
              cartIcon="/shoppingB.png"
              onAddToCart={() => handleAddToCart({
                id: 'Eclat-Framboise', 
                name: "Éclat de Framboise", 
                price: 4.00, 
                img: '/DonutRR.png' 
              })}
            />
            <ProductCard 
              image="/DonutM.png" 
              name="L'Authentique Choco" 
              price="4,50 €" 
              description="Un nappage au chocolat au lait 40% de cacao. Simple et divin."
              bgColor="bg-[#A9D6FF]"
              btnBorder="border-[#5FB0FB]"
              cartIcon="/shoppingB.png"
              onAddToCart={() => handleAddToCart({
                id: 'Authentique-Choco', 
                name: "L'Authentique Choco", 
                price: 4.50, 
                img: '/DonutM.png' 
              })}
            />
          </div>
        </section>

        <div className="mt-10 md:mt-30 mb-10">
  <TitleSection title="Le Donut du mois" />
</div>

<section className="pb-20 px-6">
  <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
    
    <div className="max-w-md space-y-6 flex flex-col items-center text-center order-2 lg:order-1">
      <h2 className="text-2xl md:text-3xl font-black text-[#624230]">
        Choco-Crunch Éphémère
      </h2>
      <p className="text-lg md:text-xl text-[#8B5E3C] font-light leading-relaxed">
        Le parfait équilibre entre douceur et croquant. Profitez de 
        notre donut spécial "15 jours" !
      </p>
      <p className="text-2xl md:text-3xl font-medium text-[#624230]">3,90 €</p>
      
      <MainButton 
        onClick={() => handleAddToCart(donutMois)} 
        bgColor="bg-[#FFAAE6]"     
        borderColor="border-[#5FB0FB]" 
        textColor="text-white"      
        className="flex items-center justify-center min-w-[200px]" 
      >
        <img 
          src="/shoppingR.png" 
          alt="Panier" 
          className="w-6 h-6 mr-3 brightness-0 invert" 
        />
        Ajouter au panier
      </MainButton>
    </div>

    <div className="relative order-1 lg:order-2">
      <img 
        src="/DonutMois.png" 
        alt="Donut du mois" 
        className="w-[280px] h-[280px] md:w-[450px] md:h-[450px] object-cover rounded-full shadow-xl border-8 md:border-[15px] border-white"
      />
      <span className="static md:absolute -bottom-10 right-0 block text-center mt-4 md:mt-0 text-[#5FB0FB] font-medium text-lg md:text-xl">
        Disponible seulement 15 jours !
      </span>
    </div>

  </div> 
</section> 

        <AssortimentBox />
        
        <div className="flex justify-center pt-10 pb-20 px-6"></div>
      </div>
    </>
  );
};

export default Home;