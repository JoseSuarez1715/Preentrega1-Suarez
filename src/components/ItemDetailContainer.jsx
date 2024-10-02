import './ItemDetailContainer.css';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProduct } from "../asyncMock";


export default function ItemDetailContainer() {

    const [product, setProduct]= useState({})
    const { id } = useParams();

    useEffect(() => {
        setProduct(getProduct(id))
    }, []);


    return (
        <>
            <article className='cardDetalle'>
                <h4>{product.title}</h4>
                <h5>Categoria: {product.category}</h5>
                <img src={product.image} alt={product.title} />
                <p>Precio: ${product.price}</p>
                <p>{product.description}</p>
            </article>
        </>
    )

}