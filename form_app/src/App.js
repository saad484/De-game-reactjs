import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Form from './components/Form';
import Home from './components/prodcuts/Home';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import ListProducts from './components/prodcuts/ListProducts';
import Product from './components/prodcuts/Product';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav className="navbar navbar-expand navbar-light bg-light">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand"><img src='pictures/electroplanet.png' alt='' className='logo-image'/></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/listProducts" className="nav-link">ListProducts</Link>
                </li>
                <li className="nav-item">
                  <Link to="/product" className="nav-link">Product</Link>
                </li>
                <li className="nav-item">
                  <Link to="/form" className="nav-link">Login</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/listProducts' element={<ListProducts />} />
          <Route path='/product' element={<Product />} />
          <Route path='/form' element={<Form/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
