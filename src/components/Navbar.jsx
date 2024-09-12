import './Navbar.css';
import Cartwidget from './CartWidget';

export default function navbar() {
    return (
        <>
        <div className='barra'>
           <img src="./src/assets/logo-sega.jpg" alt="logo go sega" />
           <button>Ultimos lanzamientos</button>
           <button>Juegos gratuitos</button>    
           <button>Clasicos</button>
           <Cartwidget/>
        </div>
        </>
    )
}