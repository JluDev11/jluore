import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Technologies from './pages/Technologies';
import Products from './pages/Products';

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/technologies" element={<Technologies />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </Router>
  );
}