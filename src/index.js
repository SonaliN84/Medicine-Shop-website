import ReactDOM from 'react-dom/client';
import AvailableMedicineProvider from "./Store/AvailableMedicineProvider";
import CartProvider from './Store/CartProvider';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <CartProvider>
    <AvailableMedicineProvider>
    <App />
    </AvailableMedicineProvider>
    </CartProvider>);
