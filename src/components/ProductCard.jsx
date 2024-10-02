import "./ProductCard.css"
import { Link } from "react-router-dom";

export default function ProductCard ({product}) {
  return(
<>
<article className="cardGenerica">
<h4>{product.title}</h4>
<img src={product.image} alt={product.title} />
<p>$ {product.price}</p>
<button><Link to={`/item/${product.id}`}>Detalles</Link></button>
</article>
</>

  )

}