// import './CartWidget.css';
import { useContext} from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from "react-router-dom";

export default function CartWidget() {
    
const [cart,,]=useContext(CartContext);


return (
        <>
        <div>
            <button><Link to={`/cart`}>🛒{cart.length}</Link></button>           
        </div>
        </>
    )
}