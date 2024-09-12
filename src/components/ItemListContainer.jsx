import './ItemListContainer.css';

export default function ItemListContainer({ mensaje }) {
    return (
        <>
            <section className='bienvenido'>
                <p>{mensaje}</p>
            </section>
        </>
    )
}