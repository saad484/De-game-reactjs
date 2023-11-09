import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Produits from './components/Produits';

// Define the Home and NouveauProduit components
function Home() {
  return <h1>Home</h1>;
}

function NouveauProduit() {
  return <h1>Nouveau Produit</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul className='nav nav-pills'>
          <li><Link to="/" className='btn btn-outline-info ms-1'>Home</Link></li>
          <li><Link to="/produits" className='btn btn-outline-info ms-1'>Product</Link></li>
          <li><Link to="/nouveauProduit" className='btn btn-outline-info ms-1'>Lists of products</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produits" element={<Produits />} />
        <Route path="/nouveauProduit" element={<NouveauProduit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
