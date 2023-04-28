import { Routes, Route } from 'react-router-dom';
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Store from "./components/Store";
import Cart from "./components/Cart";
import { CartProvider } from "./lib/cart";
import ProductDetail from "./components/ProductDetail";

import "bootstrap/dist/css/bootstrap.min.css";



function App() {
  return (
    <CartProvider>
        <Header />
        <Container className="mb-4">
          <Routes>
            <Route path="/" element={<Store />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Container>
        <Footer />
      </CartProvider>
  )
}

export default App
