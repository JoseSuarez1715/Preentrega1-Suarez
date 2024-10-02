import './Navbar.css';
import Cartwidget from './CartWidget';
import { Link } from 'react-router-dom';

export default function navbar() {
    return (
        <>
        <div className='barra'>
            <button><Link to={'/'}><img src="../src/assets/logo-sega.jpg" alt="logo go sega"/></Link></button>
           <button><Link to={'/category/ultimos-lanzamientos'}>Ultimos lanzamientos</Link></button>
           <button><Link to={'/category/juegos-gratuitos'}>Juegos gratuitos</Link></button>    
           <button><Link to={'/category/clasicos'}>Clasicos</Link></button>
           <Cartwidget/>
        </div>
        </>
    )
}