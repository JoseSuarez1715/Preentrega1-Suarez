import "./CartCard.css"

export default function CartCard({product}){
 
    return(
        <>
        
        <article className="cardCart">
        <img src={product.image} alt={product.title}/>
        <h4>{product.title}</h4>
        <p>$ {product.price}</p>
        <button>Borrar Item</button>
        </article>
        </>      
          )
}