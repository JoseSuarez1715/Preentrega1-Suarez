import { useState } from "react";

export default function ItemCount({stock}) {

    const [cantidad, setCantidad] = useState(0);

    const Aumentar = () => {
        if (cantidad < stock) {
            setCantidad(cantidad + 1);
        }

    }

    const Disminuir = () => {
        if (cantidad > 0) {
            setCantidad(cantidad - 1);
        }
    }

    return (
        <>
            <section className="cantidadItem">
                <button onClick={Aumentar}>+</button>
                <p>{cantidad}</p>
                <button onClick={Disminuir}>-</button>
                <button>Agregar al carro</button>
            </section>
        </>
    )

}
