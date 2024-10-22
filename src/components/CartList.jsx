import { useContext } from "react";

import { CartContext } from "../context/CartContext";
import CartCard from './CartCard';


export default function CartList() {

    const [cart] = useContext(CartContext);

    const [,,,price] = useContext(CartContext);

    // const [total,setTotal]=useState(0);

    const itemsCarro = cart;
    
    // useEffect (()=> {
    //     const totalUno = itemsCarro.map((item)=>{item[price] + cosa});
    //     setTotal(total+)},[cart]);

    console.log([itemsCarro]);
    

    return (
        <>  
        <h2>Productos en el carro</h2>

            <div>
                {itemsCarro.map((product) => (<CartCard key={product.id} product={product} />))}
            </div>

        <h3>Total: {price} </h3>
            </>

    )


}