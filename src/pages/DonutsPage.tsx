import { ProductCard } from '../components/ProductCard';
import { TitleSection } from '../components/TitleSection';
import PanierIcon from '../assets/Panier.svg';
import Hero from '../components/Hero';
import { DonutDuMois } from "../components/DonutDuMois";
import { useCart } from '../Context/CartContext';

const allDonuts = [
  { 
    id: 'nuage-blanc', 
    name: "Le Nuage Blanc", 
    priceNum: 3.50, 
    priceDisplay: "3,50 €", 
    description: "Un glaçage onctueux au chocolat blanc et éclats de noix de coco. La douceur pure.", 
    image: "/DonutB.png", bgColor: "bg-[#FFD9ED]", btnBorder: "border-[#FFAAE6]", cartIcon: PanierIcon
  },
  { 
    id: 'caramel-irresistible',
    name: "L'Irrésistible Caramel", 
    priceNum: 3.80,
    priceDisplay: "3,80 €", 
    description: "Coulée de caramel beurre salé et éclats de noisettes torréfiées. Le parfait équilibre croquant.", 
    image: "/DonutNoix.png", bgColor: "bg-[#FEC9E4]", btnBorder: "border-[#FFAAE6]", cartIcon: PanierIcon 
  },
  { 
    id: 'pink-party',
    name: "Le Pink Party", 
    priceNum: 3.50,
    priceDisplay: "3,50 €", 
    description: "Un glaçage à la fraise des bois parsemé de vermicelles multicolores. Un classique indémodable.", 
    image: "/DonutR.png", bgColor: "bg-[#FFAAE6]", btnBorder: "border-[#F97FD5]", cartIcon: PanierIcon 
  },
  { 
    id: 'oreo-dream',
    name: "L’Oréo Dream", 
    priceNum: 3.90,
    priceDisplay: "3,90 €", 
    description: "Intense chocolat noir et brisures de biscuits cacao. Pour les amoureux de sensations fortes.", 
    image: "/DonutO.png", bgColor: "bg-[#5FB0FB]", btnBorder: "border-[#309BFF]", cartIcon: PanierIcon
  }, 
  { 
    id: 'eclat-framboise',
    name: "Éclat de Framboise", 
    priceNum: 3.70,
    priceDisplay: "3,70 €", 
    description: "Un glaçage acidulé à la framboise fraîche pour une explosion de saveurs fruitées.", 
    image: "/DonutRR.png", bgColor: "bg-[#92CAFF]", btnBorder: "border-[#5FB0FB]", cartIcon: PanierIcon 
  },
  { 
    id: 'auth-choco',
    name: "L'Authentique Choco", 
    priceNum: 3.70,
    priceDisplay: "3,70 €", 
    description: "Un nappage au chocolat au lait 40% de cacao. Simple, efficace, divin.", 
    image: "/DonutM.png", bgColor: "bg-[#A9D6FF]", btnBorder: "border-[#5FB0FB]", cartIcon: PanierIcon 
  },
  { 
    id: 'original-sucre',
    name: "L'Original Sucre", 
    priceNum: 3.70,
    priceDisplay: "3,70 €", 
    description: "Le plaisir simple d'un beignet artisanal ultra-moelleux, saupoudré d'un voile de sucre fin.", 
    image: "/DonutS.png", bgColor: "bg-[#FFD9ED]", btnBorder: "border-[#FFAAE6]", cartIcon: PanierIcon 
  },
  { 
    id: 'blue-velvet',
    name: "Le Blue Velvet", 
    priceNum: 3.70,
    priceDisplay: "3,70 €", 
    description: "Un glaçage éclatant à la myrtille sauvage parsemé de petites pépites craquantes pour une touche acidulée.", 
    image: "/DonutV.png", bgColor: "bg-[#FEC9E4]", btnBorder: "border-[#FFAAE6]", cartIcon: PanierIcon   
  },
  { 
    id: 'ruban-framboise',
    name: "Le Ruban Framboise", 
    priceNum: 3.70,
    priceDisplay: "3,70 €", 
    description: "Un nappage à la framboise douce décoré de fines zébrures de chocolat blanc pour un fini élégant.", 
    image: "/DonutRB.png", bgColor: "bg-[#FFAAE6]", btnBorder: "border-[#F97FD5]", cartIcon: PanierIcon
  },
];

const donutDuMoisData = {
  id: 'donut-du-mois',
  name: "Le Spécial du Mois", 
  price: 4.50,               
  img: "/DonutMois.png",
};

export default function DonutsPage() {
  const { addToCart } = useCart();

  
  const handleAddToCart = (item: any) => {
    addToCart(item);
    alert(`${item.name} a été ajouté au panier ! 🍩`);
  };

  return (
    <div className="min-h-screen bg-[#DAF2F5]">
      <Hero 
        image="/Header1.jpg" 
        logo="/Logo.svg"
        title="Le paradis du donut artisanal" 
        height="h-[350px] md:h-[500px]" 
      />

      <DonutDuMois 
        onAddToCart={() => handleAddToCart({
          id: donutDuMoisData.id,
          name: donutDuMoisData.name,
          price: donutDuMoisData.price,
          img: donutDuMoisData.img
        })}
      />

      <div className="py-8 md:py-12">
        <TitleSection title="Notre Collection Complète" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            {allDonuts.map((donut) => (
              <ProductCard 
                key={donut.id}
                image={donut.image}
                name={donut.name}
                price={donut.priceDisplay}
                description={donut.description}
                bgColor={donut.bgColor}
                btnBorder={donut.btnBorder}
                cartIcon={donut.cartIcon}
                onAddToCart={() => handleAddToCart({
                  id: donut.id,
                  name: donut.name,
                  price: donut.priceNum,
                  img: donut.image
                })}
              />
            ))}
          </div>
        </div>
      </div>

      <section className="pb-12 pt-4 px-6 text-center space-y-4">
        <p className="text-[#4A2B20] font-medium text-base md:text-lg italic">
          "Toutes nos commandes sont préparées à la demande."
        </p>
        <p className="text-[#4A2B20] font-medium text-base md:text-lg italic">
          "Cuits et décorés le jour même de votre livraison."
        </p>
        <p className="text-[#4A2B20] font-medium text-base md:text-lg italic">
          "Sans colorants artificiels, uniquement du bon !"
        </p>
      </section>
    </div>
  );
}
