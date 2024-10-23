import { useContext } from "react";

import { CartContext } from "../context/CartContext";
import CartCard from './CartCard';


export default function CartList() {

    const [cart] = useContext(CartContext);

    const [,,,price] = useContext(CartContext);

    const [,setCart,,,]= useContext(CartContext);

    const [,,,,,setPrice]= useContext(CartContext);

    const itemsCarro = cart;

    const bor = () => {
            setCart([]);
            setPrice(0);
    }

    console.log([itemsCarro]);
    
    return (
        <>  
        <h2>Productos en el carro</h2>

            <div>
                {itemsCarro.map((product) => (<CartCard key={product.id} product={product} />))}
            </div>

        <h3>Total: {price} </h3>

        <button onClick={bor}>Borrar Carro</button>
            </>

    )


}