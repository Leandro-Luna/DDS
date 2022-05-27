import React from 'react'
import { Link } from 'react-router-dom'


const NavbarReg = () => {
  return (
    <div className='nav__container'>
        <Link to='/clienteReg' className='botonInmobiliaria'>Inmobiliaria Domus</Link>
        <div className='nav__container-btn'>
            <Link to='/NosotrosReg'>Nosotros</Link>
            <Link to='/contactoReg'>Contacto</Link>
            <Link to='/miCuenta'><button>Mi cuenta</button></Link>
            <Link to='/'><button className='registrar'>Cerrar sesión</button></Link>
        </div>
    </div>
  )
}

export default NavbarReg