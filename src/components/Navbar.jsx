import './Navbar.css';
import Cartwidget from './CartWidget';
import { Link } from 'react-router-dom';

export default function navbar() {
    return (
        <>
        <div className='barra'>
            <button><Link to={'/'}><img src="./src/assets/logo-sega.jpg" alt="logo go sega"/></Link></button>
           <button>Ultimos lanzamientos</button>
           <button>Juegos gratuitos</button>    
           <button>Clasicos</button>
           <Cartwidget/>
        </div>
        </>
    )
}