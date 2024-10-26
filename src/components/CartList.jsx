import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import CartCard from './CartCard';
import { sendOrder } from "../firebase/firebase";



export default function CartList() {

    const [cart, setCart, , price, , setPrice] = useContext(CartContext);

    const itemsCarro = cart;

    const[orderId,setOrderId] = useState(null);

    const bor = () => {
        setCart([]);
        setPrice(0);
    }

    const [nombre, setNombre] = useState('');

    const [telefono, setTelefono] = useState('');

    const [email, setEmail] = useState('');

    const [id, setItem] = useState('');

    const tel = (event) => {
        setTelefono(event.target.value)
    }

    const name = (event) => {
        setNombre(event.target.value)
    }

    const mail = (event) => {
        setEmail(event.target.value)

    }

    const carrt = cart.map((product) => ({
        id: product.id,
        title: product.title,
        priice: product.price
    }));



    const handleClick = () => {

        const newOrder = {
            buyer: {
                email: email,
                name: nombre,
                phone: telefono,
            },
            date: new Date(),
            items:
                [carrt],
            total: price
        };

      sendOrder(newOrder).then(id => setOrderId(id));
    }
    



return (
    <>
        <h2>Productos en el carro</h2>

        <div>
            {itemsCarro.map((product) => (<CartCard key={product.id} product={product} />))}
        </div>

        <h3>Total: {price} </h3>

        <button onClick={bor}>Borrar Carro</button>

        <input type="text" placeholder="nombre y apellido" onChange={name} value={nombre} />
        <input type="text" placeholder="telefono" onChange={tel} value={telefono} />
        <input type="text" placeholder="email" onChange={mail} value={email} />
        <input type="text" placeholder="repita su email" />

        <button onClick={handleClick}>Finalizar compra</button>

    </>

)


}