import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='nav__container'>
        <Link to='/' className='botonInmobiliaria'>Inmobiliaria Domus</Link>
        <div className='nav__container-btn'>
            <Link to='/nosotros'>Nosotros</Link>
            <Link to='/contactoSni'>Contacto</Link>
            <Link to='/log-in'><button>Iniciar sesión</button></Link>
            <Link to='/registrarse'><button className='registrar'>Registrarse</button></Link>
        </div>
    </div>
  )
}

export default Navbar