import { useEffect, useState } from "react";
import { getProducts } from '../asyncMock.js'
import ProductCard from './ProductCard'
import { useParams } from "react-router-dom";
import { useFilter } from "./useFilter.jsx";
import "./ProductList.css";

export default function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts.then(data => setProducts(data));
    }, []);

    const {id} = useParams();

    const itemsFiltrados = useFilter(products, 'category', id)

    return (
        <>
            <section>
                {itemsFiltrados.map((product) => (<ProductCard key={product.id} product={product} />))}
            </section>
        </>
    )
}