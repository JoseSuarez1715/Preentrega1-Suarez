import { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default function ItemCount({ product, id }) {

    const [cart, , addItem,] = useContext(CartContext);

    const [cantidad, setCantidad] = useState(0);

    const [posicion, setPosicion] = useState(0);


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

    const handleClick = () => {
        product.id = id;
        product.cantidad = cantidad;
        setPosicion(cart.findIndex((item) => item.id === id));
        setCantidad(posicion > -1 ? cantidad + cart[posicion].cantidad : cantidad);
        addItem({...product,cantidad});
        console.log(cart)
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
