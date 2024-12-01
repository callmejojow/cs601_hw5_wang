import { Routes, Route } from 'react-router-dom';
import InventoryList from './components/InventoryList';
import ProductDetail from './components/ProductDetail';
import logo from './assets/logo.png';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="Store logo" />
                <h1>Store Inventory</h1>
            </header>
            <main className="App-main">
                <Routes>
                    <Route path="/" element={<InventoryList />} />
                    <Route path="/product/:sku" element={<ProductDetail />} />
                </Routes>
            </main>
            <footer className="App-footer">
                <p>&copy; 2024 Grocery Store Inventory</p>
            </footer>
        </div>
    );
};

export default App;
