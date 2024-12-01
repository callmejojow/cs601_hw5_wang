import InventoryList from './components/InventoryList';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <header>
                <h1>Store Inventory</h1>
            </header>
            <main>
                <InventoryList />
            </main>
            <footer>
                <p>&copy; 2024 Grocery Store Inventory</p>
            </footer>
        </div>
    );
};

export default App;
