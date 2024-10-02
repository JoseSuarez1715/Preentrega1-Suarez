import './ItemDetailContainer.css';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProduct } from "../asyncMock";
import ProductCard from './ProductCard';

export default function ItemDetailContainer() {

    const [product, setProduct]= useState({})
    const { id } = useParams();

    useEffect(() => {
        setProduct(getProduct(id))
    }, []);


    return (
        <>
            <article>
                <h4>{product.title}</h4>
                <img src={product.image} alt={product.title} />
                <p>$ {product.price}</p>
                <p>Descripcion: {product.description}</p>
            </article>
        </>
    )

}