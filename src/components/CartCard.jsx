import { useContext } from "react";
import "./CartCard.css";
import { CartContext } from '../context/CartContext';


export default function CartCard({product}){

  const [,,,,clearCart]= useContext(CartContext);


    return(
        <>
        
        <article className="cardCart">
        <img src={product.image} alt={product.title}/>
        <h4>{product.title}</h4>
        <p>$ {product.price}</p>
       
        </article>
        </>      
          )
}