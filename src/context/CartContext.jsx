import { useState,createContext } from 'react';


export const CartContext = createContext(false)

export function CartProvider ({children}){

    const[cart,setCart]= useState([]);

    const[price,setPrice]=useState(0);

    const addItem = (item) => {
        setPrice(Number(item.price) + Number(price));
        setCart([...cart,item]);
    }

    const clearCart = () => {
        setCart([]);
    }

    return (
        <CartContext.Provider value={[cart,setCart,addItem,price,clearCart,setPrice]}>
            {children}
        </CartContext.Provider>
    )
    
}