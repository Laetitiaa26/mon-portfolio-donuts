// @ts-nocheck
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Footer } from "./components/Footer";
import DonutsPage from "./pages/DonutsPage";
import AProposPage from "./pages/AProposPage";
import { Routes, Route } from 'react-router-dom';
import  OuNousTrouver  from "./pages/OuNousTrouver";
import FAQPage from "./pages/FAQPage";
import CartPage from "./pages/CartPage";

function App() {
return (
    <>
      <Navbar />
<main className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/home" element={<Home />} />
          <Route path="/donuts" element={<DonutsPage />} />
          <Route path="/APropos" element={<AProposPage />} />
          <Route path="/OuNousTrouver" element={<OuNousTrouver />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/panier" element={<CartPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
