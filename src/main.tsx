
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client' 
import App from './App.tsx'
import './index.css'
import { CartProvider } from './Context/CartContext';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <CartProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</CartProvider>
)