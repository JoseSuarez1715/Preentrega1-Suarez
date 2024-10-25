// import './ItemListContainer.css';
// import { useEffect, useState } from "react";
// import { getProducts } from '../asyncMock.js';
// import ProductCard from './ProductCard';
// import { useParams } from "react-router-dom";
// import { useFilter } from "./useFilter.jsx";


// export default function ItemListContainer() {
//     const [products, setProducts] = useState([]);

//     useEffect(() => {
//         getProducts.then(data => setProducts(data));
//     }, []);

//     const {id} = useParams();

//     const itemsFiltrados = useFilter(products, 'category', id)

//     return (
//         <>
//             <section>
//                 {itemsFiltrados.map((product) => (<ProductCard key={product.id} product={product} />))}
//             </section>
//         </>
//     )
// }

import ProductCard from './ProductCard';
import './ItemListContainer.css';
import { useEffect,useState } from "react";
import { getProducts,filterProductsByCategory } from '../firebase/firebase';
import { useParams } from "react-router-dom";


export default function ItemListContainer() {
    const [products, setProducts] = useState([]);

    const { idcat } = useParams();

    useEffect(() => {
            idcat ? filterProductsByCategory(idcat).then((prods) => setProducts(prods)) : getProducts().then((prods) => setProducts(prods));      
    }, [,idcat]);


    return (
        <>
            <section>
                {products.map((product) => (<ProductCard key={product.id} product={product} />))}
            </section>
        </>
    )
}