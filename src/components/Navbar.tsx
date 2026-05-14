import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; 
import PanierIcon from '../assets/Panier.svg';
import { useCart } from '../Context/CartContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { totalQty } = useCart();
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Accueil", path: "/Home" },
    { name: "Nos Donut's", path: "/donuts" },
    { name: "À propos", path: "/Apropos" },
    { name: "Où nous trouver ?", path: "/OuNousTrouver" },
    { name: "FAQ", path: "/FAQ" },
  ];

  return (
    <nav className="absolute top-0 left-0 w-full z-[100] bg-gradient-to-b from-white/60 to-transparent">
      <div className="flex items-center justify-between md:justify-end px-6 py-4 gap-10">
        
        
        <div className="md:hidden font-bold text-[#624230] text-xl">Cami Donuts</div>

       
        <ul className="hidden md:flex gap-8 font-medium text-[#624230]">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link to={link.path} className="hover:text-[#F65FC8] transition-colors">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        
        <div className="flex items-center gap-6">
          
          
          <div 
            className="relative cursor-pointer hover:scale-110 transition-transform p-1" 
            onClick={() => navigate('/panier')}
          >
            <img 
              src={PanierIcon}
              alt="Panier" 
              className="w-7 h-7" 
            />
            
           
            {totalQty > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#FFAAE6] text-white text-[10px] font-bold min-w-[20px] h-5 flex items-center justify-center rounded-full border-2 border-white shadow-sm px-1">
                {totalQty}
              </span>
            )}
          </div>
          
         
          <button className="md:hidden text-[#624230]" onClick={toggleMenu}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      
      <div className={`
        fixed inset-0 bg-white/95 z-[99] flex flex-col items-center justify-center gap-8 transition-transform duration-300 md:hidden
        ${isOpen ? "translate-x-0" : "translate-x-full"}
      `}>
        <button className="absolute top-5 right-6 text-[#624230]" onClick={toggleMenu}>
          <X size={32} />
        </button>

        <ul className="flex flex-col items-center gap-8 text-xl font-bold text-[#624230]">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link 
                to={link.path} 
                className="hover:text-[#F65FC8]"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}