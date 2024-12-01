import InventoryList from './components/InventoryList';
import logo from './assets/logo.png';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="Store logo" />
                <h1>Store Inventory Manager</h1>
            </header>
            <main>
                <InventoryList />
            </main>
            <footer>
                <p>&copy; 2024 Santa's Grocer Village</p>
            </footer>
        </div>
    );
};

export default App;
