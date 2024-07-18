import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import HomeN from './Components/HomeN/HomeN';
import AboutSection from './Components/About/About';
import ProductList from './Components/Products/ProductList';
import Cart from './Components/Cart/Cart';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeN />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/contact" element={<Footer />} />
      </Routes>
      
    </Router>
  );
}

export default App;
