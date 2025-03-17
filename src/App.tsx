import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, ScrollRestoration, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import CategoryPage from './pages/CategoryPage';
import ProductDetails from './pages/ProductDetails';
import Cart from './components/cart/Cart';
import Cookies from "./pages/tems$policy/Cookies"
import Privacy from "./pages/tems$policy/Privacy"
import CancellationPolicy from "./pages/tems$policy/CancellationPolicy"
import Refund from "./pages/tems$policy/Refund"
import ShippingAddress from "./pages/AddresShiping"
import Shipping from "./pages/tems$policy/Shipping"
// import Policy from "./pages/Policy"
import Terms from "./pages/tems$policy/Terms"
import { Product } from './types'; // Import Product interface
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store';
import { addItemToCart } from './reduxslice/CartSlice';
import Orders from './pages/orders';
import ShoppingCart from './pages/BackCart';
// import {Phonepay} from './components/Phonepay/Phonepay';

function App() {
   const location = useLocation();
  
    // Pages where Navbar and Footer should not be displayed
    const hideNavbarFooter = ["/address", "/test"];
    const shouldHide = hideNavbarFooter.includes(location.pathname);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartItems = useSelector((state: RootState) => state.cart.items); // Get cart items from Redux store

  const toggleCart = () => {
    setIsCartOpen((prev) => !prev);
  };

  const dispatch = useDispatch();

  const handleAddToCart = (product: Product) => {
    dispatch(
      addItemToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      }),
      
    );
    toggleCart()
  };
  const ScrollToTop = () => {
    const location = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);
  
    return null;
  };

  return (
    
      <div className="min-h-screen flex flex-col">
         {!shouldHide && 
        <Navbar onCartClick={toggleCart} cartItemCount={cartItems.length} />}
        <ScrollToTop /> 
        <main className="flex-grow">
        
          <Routes>
            {/* royruhdfhdhf */}
            {/* <Route path="/" element={<Home addToCart={handleAddToCart} />} /> */}
            <Route path="/" element={<Home addToCart={handleAddToCart} onCartClick={toggleCart} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/category/:category" element={<CategoryPage />} />
            <Route path="/product/:id" element={<ProductDetails addToCart={handleAddToCart} />} />
            {/* <Route path="/refund" element={<Refund />} />
            <Route path="/terms" element={<Terms />} />*/}
            {/* <Route path="/policy" element={<Policy />} />  */}
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/refund" element={<Refund />} />
            <Route path="/cancellation_policy" element={<CancellationPolicy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/shipping" element={<Shipping />} />
            <Route path="/Privacy" element={<Privacy />} />
            <Route path="/address" element={<ShippingAddress  cartItems={cartItems} onClose={toggleCart}/>} />
            <Route path='/orders' element={<Orders />} />
            <Route path='/cart' element={<ShoppingCart cartItems={cartItems}/> } />
            {/* <Route path="/phonepay" element={<Phonepay/>} />  */}

          </Routes>
        </main>
        <Cart isOpen={isCartOpen} onClose={toggleCart} cartItems={cartItems} />
        {!shouldHide && <Footer />}
      </div>
    
  );
}

export default App;
