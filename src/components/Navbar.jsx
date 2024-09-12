import './Navbar.css';
import Cartwidget from './CartWidget';

export default function navbar() {
    return (
        <>
        <div className='barra'>
           <img src="./src/assets/logo-sega.jpg" alt="" />
           <button>Ultimos lanzamientos</button>
           <button>Juego gratuitos</button>    
           <button>Clasicos</button>
           <Cartwidget/>
        </div>
        </>
    )
}