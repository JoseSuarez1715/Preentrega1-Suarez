import { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default function ItemCount({product}) {

    const [cart,,addItem,]= useContext(CartContext);

    const [cantidad, setCantidad] = useState(0);

    const Aumentar = () => {
        if (cantidad < product.stock) {
            setCantidad(cantidad + 1);
        }

    }

    const Disminuir = () => {
        if (cantidad > 0) {
            setCantidad(cantidad - 1);
        }
    }

    const handleClick = () =>{ 
       addItem(product);
       console.log(cart.length)

    }

    return (
        <>
            <section className="cantidadItem">
                <button onClick={Aumentar}>+</button>
                <p>{cantidad}</p>
                <button onClick={Disminuir}>-</button>
                <button onClick={handleClick}>Agregar al carro</button>
            </section>
        </>
    )

}
