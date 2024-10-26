// import './ItemDetailContainer.css';
// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { getProduct } from "../asyncMock";
// import ItemCount from './ItemCount';

// export default function ItemDetailContainer() {

//     const [product, setProduct]= useState({})
//     const { id } = useParams();

//     useEffect(() => {
//         setProduct(getProduct(id))
//     }, []);


//     return (
//         <>
//             <article className='cardDetalle'>
//                 <h4>{product.title}</h4>
//                 <h5>Categoria: {product.category}</h5>
//                 <img src={product.image} alt={product.title} />
//                 <p>Precio: ${product.price}</p>
//                 <p>{product.description}</p>
//                 <p>Stock: {product.stock} unidades</p>

//                 <ItemCount product={product}/>                
//             </article>
//         </>
//     )

// }

import './ItemDetailContainer.css';
import { getSingleProduct } from '../firebase/firebase';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemCount from './ItemCount';

export default function ProductsComponent(){
    //  const[myProds, setMyProds] = useState([]);
     const [product, setProduct] = useState(null);
     
     const { id } = useParams();

    useEffect(() => {
        getSingleProduct(id).then((response) => 
            
        setProduct(response));
        
    },[]);

    

     return (
        <>
            {product&&<article className='cardDetalle'>
                <h4>{product.title}</h4>
                <h5>Categoria: {product.category}</h5>
                <img src={product.image} alt={product.title} />
                <p>Precio: ${product.price}</p>
                <p>{product.description}</p>
                <p>Stock: {product.stock} unidades</p>

                <ItemCount product={product} id={id}/>                
            </article>}
        </>
    )

}